#!/usr/bin/env node
// 云枢 OpenAPI 请求校验器 - 以 Knife4j 导出为契约，离线校验端点与请求体
// 默认契约 OpenWebAPI/04_…json（表单自己用的 22 端点）；换契约用 --spec <任意 OpenAPI 3.0 json>
// 用法：
//   node scripts/validate-webapi.mjs --list                     列出全部端点
//   node scripts/validate-webapi.mjs <端点> --schema            打印该端点请求体结构摘要
//   node scripts/validate-webapi.mjs <端点> --body <文件|->      校验请求体（- 读 stdin，'{...}' 内联 JSON 也可以）
//   任意命令可加 --spec <json路径> 换契约文件
// 端点可写短形式（/bizobject/submit、/workflow/start），按路径尾段匹配，兼容 /api/api/v2 与 /api/openapi/v3 两套前缀
// 退出码：0 通过（警告不影响），1 有错误，2 用法/文件问题
// 全部输出走 stdout：npm run 在部分 Windows/PowerShell 环境会吞子进程 stderr，排查时看不到报错
// 注意：导出未声明 additionalProperties，未知字段只警告不报错——但警告要当回事，
// 服务端存在 depatmentId（v2）这类“拼写即正确”的字段，改正拼写反而会被这里标出来（见 webapi.md）

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

// --spec 参数先行摘除（在 argv 其它处理前）
const argv = process.argv.slice(2);
let docPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'OpenWebAPI', '04_OpenWebAPI_OpenAPI.json');
const si = argv.indexOf('--spec');
if (si >= 0) {
  const v = argv[si + 1];
  if (!v) { console.log('--spec 需要契约文件路径'); process.exit(2); }
  docPath = resolve(process.cwd(), v);
  argv.splice(si, 2);
}
// 显示用短前缀（两套语料各一个）
const PREFIXES = ['/api/api/v2', '/api/openapi/v3'];
const short = p => { const pre = PREFIXES.find(x => p.startsWith(x)); return pre ? p.slice(pre.length) || '/' : p; };

// ---------- 载入契约 ----------
let doc;
try {
  doc = JSON.parse(readFileSync(docPath, 'utf8'));
} catch (e) {
  console.log(`无法读取契约文件 ${docPath}: ${e.message}`);
  process.exit(2);
}
const SCHEMAS = doc.components.schemas;

function deref(schema, seen = new Set()) {
  if (!schema) return schema;
  if (schema.$ref) {
    const name = schema.$ref.split('/').pop();
    if (seen.has(name)) return { type: 'object', _circular: name }; // 循环引用：只当对象处理
    seen.add(name);
    return deref(SCHEMAS[name], seen);
  }
  if (schema.allOf) {
    // allOf 合并：properties 取并集，required 取并集
    const merged = { type: 'object', properties: {}, required: [] };
    for (const part of schema.allOf) {
      const d = deref(part, seen);
      if (!d) continue;
      Object.assign(merged.properties, d.properties || {});
      merged.required.push(...(d.required || []));
    }
    if (!merged.required.length) delete merged.required;
    if (schema.properties) Object.assign(merged.properties, schema.properties);
    return merged;
  }
  return schema;
}

// ---------- 端点定位 ----------
function findEndpoint(input) {
  const paths = Object.keys(doc.paths);
  const norm = input.startsWith('/') ? input : '/' + input;
  let p = paths.find(x => x === norm);
  if (!p) {
    // 短形式：按尾段唯一匹配（兼容 v2/v3 两套前缀）
    const cands = paths.filter(x => x.endsWith(norm));
    if (cands.length === 1) p = cands[0];
    else if (cands.length > 1) return { error: `短端点 "${input}" 匹配到多个：\n  ` + cands.map(short).join('\n  '), hits: [] };
  }
  if (p) {
    const item = doc.paths[p];
    const m = item.post ? 'post' : Object.keys(item)[0]; // 订阅两个端点是 GET
    return { path: p, op: item[m], method: m.toUpperCase() };
  }
  // 段级编辑距离模糊匹配，给出候选（防手滑打错路径）
  const key = norm.split('/').filter(Boolean);
  const hits = paths.filter(pp => {
    const segs = pp.split('/').filter(Boolean).slice(-key.length);
    return segs.length === key.length && segs.every((s, i) => lev(s, key[i]) <= 2);
  });
  return { error: `端点 "${input}" 不存在`, hits: hits.slice(0, 5) };
}

// ---------- 校验核心（OpenAPI 3.0 子集：$ref/allOf/oneOf/anyOf/type/required/items/enum/nullable） ----------
function validate(schema, value, where, errors, warnings, depth = 0) {
  if (depth > 12) { warnings.push(`${where}: 层级过深，已停止校验`); return; }
  const s = deref(schema);
  if (!s) return;
  if (s.oneOf || s.anyOf) {
    const opts = s.oneOf || s.anyOf;
    const results = opts.map(opt => {
      const e = [], w = [];
      validate(opt, value, where, e, w, depth + 1);
      return { e, w, label: deref(opt)._circular || deref(opt).title || '选项' };
    });
    const ok = results.find(r => !r.e.length);
    if (ok) { warnings.push(...ok.w); return; }
    const best = results.sort((a, b) => a.e.length - b.e.length)[0];
    errors.push(`${where}: 不匹配任何可选结构（最接近的 "${best.label}" 也失败：${best.e[0] ? best.e[0].split(': ').slice(1).join(': ') : '?'}）`);
    return;
  }
  if (value === null) {
    if (s.nullable) return;
    if (s.type) errors.push(`${where}: 不能为 null`);
    return;
  }
  // 类型检查
  switch (s.type) {
    case 'object':
      if (typeof value !== 'object' || Array.isArray(value)) { errors.push(`${where}: 应为对象，实际是 ${typeName(value)}`); return; }
      {
        const props = s.properties || {};
        for (const req of (s.required || [])) {
          if (!(req in value)) errors.push(`${where}.${req}: 缺少必填字段`);
        }
        // 无 properties 定义的对象是自由对象（如 bizObject.data：字段由业务模型决定，契约不枚举），不报未知字段
        const freeform = !Object.keys(props).length && !(s.required || []).length;
        for (const [k, v] of Object.entries(value)) {
          if (props[k]) validate(props[k], v, `${where}.${k}`, errors, warnings, depth + 1);
          else if (!s.additionalProperties && !freeform) warnings.push(`${where}.${k}: 契约中没有这个字段（确认不是拼写"纠正"？服务端存在 depatmentId 这类拼写即正确的字段）`);
        }
      }
      return;
    case 'array':
      if (!Array.isArray(value)) { errors.push(`${where}: 应为数组，实际是 ${typeName(value)}`); return; }
      value.forEach((item, i) => validate(s.items, item, `${where}[${i}]`, errors, warnings, depth + 1));
      return;
    case 'string':
      if (typeof value !== 'string') { errors.push(`${where}: 应为字符串，实际是 ${typeName(value)}`); return; }
      break;
    case 'integer':
      if (!Number.isInteger(value)) { errors.push(`${where}: 应为整数，实际是 ${typeName(value)} ${value}`); return; }
      break;
    case 'number':
      if (typeof value !== 'number') { errors.push(`${where}: 应为数字，实际是 ${typeName(value)}`); return; }
      break;
    case 'boolean':
      if (typeof value !== 'boolean') { errors.push(`${where}: 应为布尔，实际是 ${typeName(value)}`); return; }
      break;
  }
  if (s.enum && !s.enum.some(x => String(x) === String(value))) {
    // 已知导出笔误：status 枚举是 "UPDATE}"/"{NEW"。宽松匹配（去花括号）放行真实值，但降级为警告提醒实测确认
    const loose = s.enum.find(x => String(x).replace(/[{}]/g, '') === String(value));
    if (loose === undefined) {
      errors.push(`${where}: 值 ${JSON.stringify(value)} 不在枚举 ${s.enum.map(x => JSON.stringify(x)).join('/')} 内`);
    } else {
      warnings.push(`${where}: 值 ${JSON.stringify(value)} 宽松匹配了枚举项 "${loose}"——契约该枚举是导出笔误，按真实值用（见 webapi.md）`);
    }
  }
}

function typeName(v) {
  if (v === null) return 'null';
  return Array.isArray(v) ? '数组' : typeof v;
}

// 短字符串编辑距离（端点候选建议用）
function lev(a, b) {
  const m = a.length, n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// ---------- 结构摘要（--schema 模式） ----------
function summarize(schema, where, depth, out, seen) {
  if (depth > 2) { out.push(`${'  '.repeat(depth)}…（更深层用 --body 校验）`); return; }
  const key = (schema.$ref || '') + '|' + where;
  if (seen.has(key)) { out.push(`${'  '.repeat(depth)}（同上，循环引用）`); return; }
  if (schema.$ref) seen.add(key);
  const s = deref(schema);
  if (!s) return;
  if (s.type === 'object') {
    const req = new Set(s.required || []);
    for (const [k, v] of Object.entries(s.properties || {})) {
      const ds = deref(v);
      const t = ds.type === 'array' ? `${deref(ds.items).type || 'any'}[]` : (ds.type || 'any');
      const marks = [req.has(k) ? '必填' : null, ds.enum ? `枚举:${ds.enum.join('/')}` : null].filter(Boolean).join(' ');
      out.push(`${'  '.repeat(depth)}${k}: ${t}${marks ? ' [' + marks + ']' : ''}${ds.description ? '  // ' + String(ds.description).split('\n')[0].slice(0, 40) : ''}`);
      if (ds.type === 'object') summarize(ds, k, depth + 1, out, seen);
      else if (ds.type === 'array' && deref(ds.items).type === 'object') summarize(deref(ds.items), k + '[]', depth + 1, out, seen);
    }
  } else {
    out.push(`${'  '.repeat(depth)}(${s.type || 'any'})`);
  }
}

// ---------- 主流程 ----------
if (!argv.length || argv.includes('--help')) {
  console.log(`用法：
  node scripts/validate-webapi.mjs --list                    列出全部端点
  node scripts/validate-webapi.mjs <端点> --schema           打印请求体结构摘要
  node scripts/validate-webapi.mjs <端点> --body <文件|->    校验请求体
  任意命令加 --spec <json>   换契约（默认 OpenWebAPI/04_…）

端点可写短形式（如 /bizobject/submit、/workflow/start），按尾段匹配两套前缀`);
  process.exit(2);
}

if (argv[0] === '--list') {
  for (const [p, item] of Object.entries(doc.paths)) {
    const m = item.post ? 'POST' : Object.keys(item)[0].toUpperCase();
    const op = item.post || item[Object.keys(item)[0]];
    console.log(`${m} ${short(p)}  ${op.summary || ''}`);
  }
  process.exit(0);
}

const ep = findEndpoint(argv[0]);
if (ep.error) {
  console.log(ep.error);
  if (ep.hits.length) console.log('候选：\n  ' + ep.hits.map(short).join('\n  '));
  process.exit(2);
}

const reqSchema = ep.op.requestBody && ep.op.requestBody.content['application/json'] && ep.op.requestBody.content['application/json'].schema;

if (!reqSchema) {
  console.log(`${ep.method} ${short(ep.path)}  ${ep.op.summary || ''}：该端点无请求体，无需校验。`);
  process.exit(0);
}

if (argv.includes('--schema')) {
  console.log(`${ep.method} ${short(ep.path)}  ${ep.op.summary || ''}  请求体结构：`);
  const out = [];
  summarize(reqSchema, '$', 0, out, new Set());
  console.log(out.join('\n'));
  process.exit(0);
}

const bi = argv.indexOf('--body');
if (bi < 0) { console.log('需要 --body <文件|-> 或 --schema'); process.exit(2); }
const bodyArg = argv[bi + 1];
if (!bodyArg) { console.log('--body 需要文件路径或 -'); process.exit(2); }
let raw;
try {
  if (bodyArg === '-') raw = readFileSync(0, 'utf8');
  else if (bodyArg[0] === '{' || bodyArg[0] === '[') raw = bodyArg; // 内联 JSON
  else raw = readFileSync(bodyArg, 'utf8');
} catch (e) {
  console.log(`读取请求体失败: ${e.message}`);
  process.exit(2);
}
let body;
try {
  body = JSON.parse(raw);
} catch (e) {
  console.log(`请求体不是合法 JSON: ${e.message}`);
  process.exit(1);
}

const errors = [], warnings = [];
validate(reqSchema, body, '$', errors, warnings);

console.log(`端点：${ep.method} ${short(ep.path)}  ${ep.op.summary || ''}`);
for (const w of warnings) console.log(`警告  ${w}`);
for (const e of errors) console.log(`错误  ${e}`);
if (errors.length) { console.log(`\n未通过：${errors.length} 个错误（警告 ${warnings.length} 个）`); process.exit(1); }
console.log(`\n通过${warnings.length ? `（${warnings.length} 个警告，请逐条确认）` : ''}`);
