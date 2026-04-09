import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const CONTROL_TAG_MAP = {
  'a-text': 'TextControl',
  'a-textarea': 'TextareaControl',
  'a-date': 'DateControl',
  'a-number': 'NumberControl',
  'a-radio': 'RadioControl',
  'a-checkbox': 'CheckboxControl',
  'a-dropdown': 'DropdownControl',
  'a-dropdown-multi': 'DropdownMultiControl',
  'a-logic': 'LogicControl',
  'a-attachment': 'AttachmentControl',
  'a-image': 'AttachmentControl',
  'a-signature': 'SignatureControl',
  'a-location': 'LocationControl',
  'a-user-selector': 'StaffControl',
  'a-user-multi-selector': 'StaffControl',
  'a-departmentselector': 'DeptControl',
  'a-departmentmultiselector': 'DeptControl',
  'a-staffDeptMixed': 'StaffDeptMixedControl',
  'a-sheet': 'SheetControl',
  'a-create-by': 'CreateByControl',
  'a-created-time': 'CreatedTimeControl',
  'a-sequence-no': 'SequenceNoControl',
  'a-relevance-form': 'RelevanceFormControl',
};

/**
 * 提取控件信息（用于生成类型）
 */
function extractControls(html) {
  const topLevelControls = [];
  const sheetControls = {};

  const sheetRegex = /<a-sheet\s+[^>]*key="([^"]+)"[^>]*>([\s\S]*?)<\/a-sheet>/gi;
  let sheetMatch;

  while ((sheetMatch = sheetRegex.exec(html)) !== null) {
    const sheetKey = sheetMatch[1];
    const sheetContent = sheetMatch[2];
    sheetControls[sheetKey] = [];

    const fullSheetTag = sheetMatch[0];
    const dataNameMatch = /data-name="([^"]*)"/.exec(fullSheetTag);
    const sheetDataName = dataNameMatch ? dataNameMatch[1] : '';
    topLevelControls.push({ key: sheetKey, tagName: 'a-sheet', typeClass: 'SheetControl', dataName: sheetDataName });

    const tagRegex = /<([a-z-]+)\s+[^>]*key="([^"]+)"[^>]*data-name="([^"]*)"[^>]*>/gi;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(sheetContent)) !== null) {
      const tagName = tagMatch[1].toLowerCase();
      const key = tagMatch[2];
      const dataName = tagMatch[3];
      const typeClass = CONTROL_TAG_MAP[tagName];
      if (typeClass) {
        sheetControls[sheetKey].push({ key, tagName, typeClass, dataName });
      }
    }
  }

  const htmlWithoutSheets = html.replace(/<a-sheet\s+[^>]*>[\s\S]*?<\/a-sheet>/gi, '');

  const tagRegex = /<([a-z-]+)\s+[^>]*key="([^"]+)"[^>]*data-name="([^"]*)"[^>]*>/gi;
  let tagMatch;
  while ((tagMatch = tagRegex.exec(htmlWithoutSheets)) !== null) {
    const tagName = tagMatch[1].toLowerCase();
    const key = tagMatch[2];
    const dataName = tagMatch[3];
    const typeClass = CONTROL_TAG_MAP[tagName];
    if (typeClass) {
      topLevelControls.push({ key, tagName, typeClass, dataName });
    }
  }

  return { topLevelControls, sheetControls };
}

/**
 * 提取 CSS 内容（<style> 标签内部）
 */
function extractCss(html) {
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/i;
  const match = styleRegex.exec(html);
  return match ? match[1].trim() : '';
}

/**
 * 提取 HTML 内容（从 <!--html配置--> 到 </section>，包含边界）
 */
function extractHtml(html) {
  const startMarker = '<!--html配置-->';
  const startIndex = html.indexOf(startMarker);
  
  if (startIndex === -1) {
    console.warn('未找到 <!--html配置--> 标记');
    return '';
  }
  
  const afterStart = html.substring(startIndex);
  const scriptIndex = afterStart.indexOf('<script id="customScript"');
  
  if (scriptIndex === -1) {
    const lastSectionEnd = afterStart.lastIndexOf('</section>');
    if (lastSectionEnd === -1) {
      return afterStart.trim();
    }
    return afterStart.substring(0, lastSectionEnd + '</section>'.length).trim();
  }
  
  const beforeScript = afterStart.substring(0, scriptIndex);
  const lastSectionEnd = beforeScript.lastIndexOf('</section>');
  
  if (lastSectionEnd === -1) {
    return beforeScript.trim();
  }
  
  return beforeScript.substring(0, lastSectionEnd + '</section>'.length).trim();
}

/**
 * 提取 JS 内容（<script id="customScript"> 标签内部）
 */
function extractJs(html) {
  const scriptRegex = /<script\s+id="customScript"[^>]*>([\s\S]*?)<\/script>/i;
  const match = scriptRegex.exec(html);
  
  if (match && match[1]) {
    let code = match[1].trim();
    // 移除 IIFE 包装 (function(form){ ... })
    const iifeMatch = /\(function\s*\(\s*form\s*\)\s*\{([\s\S]*)\}\s*\)/i.exec(code);
    if (iifeMatch) {
      code = iifeMatch[1].trim();
    }
    return code;
  }
  
  return '';
}

/**
 * 生成 custom-types.d.ts
 */
function generateCustomTypes(topLevelControls, sheetControls) {
  const sheetKeys = Object.keys(sheetControls);

  const controlEntries = topLevelControls.map(c => {
    const comment = c.dataName ? `  /** ${c.dataName} */\n  ` : '  ';
    if (sheetKeys.includes(c.key)) {
      return `${comment}${c.key}: SheetControl<${c.key}Data>;`;
    }
    return `${comment}${c.key}: ${c.typeClass};`;
  }).join('\n');

  let sheetTypes = '';
  for (const [sheetKey, controls] of Object.entries(sheetControls)) {
    const sheetEntries = controls.map(c => {
      const comment = c.dataName ? `  /** ${c.dataName} */\n  ` : '  ';
      return `${comment}${c.key}: ${c.typeClass};`;
    }).join('\n');
    const dataEntries = controls.map(c => {
      const comment = c.dataName ? `  /** ${c.dataName} */\n  ` : '  ';
      return `${comment}${c.key}: ${c.typeClass} extends { value: infer V } ? V : any;`;
    }).join('\n');
    sheetTypes += `\ninterface ${sheetKey}Columns {\n${sheetEntries}\n}\n`;
    sheetTypes += `\ntype ${sheetKey}Data = {\n${dataEntries}\n};\n`;
  }

  return `// Auto-generated by extract.mjs - DO NOT EDIT MANUALLY
// Generated at: ${new Date().toISOString()}

interface FormControls {
${controlEntries}
}
${sheetTypes}
`;
}

/**
 * 生成 custom.html
 */
function generateCustomHtml(htmlContent, topLevelControls, sheetControls) {
  const typeNames = {
    'TextControl': '短文本',
    'TextareaControl': '长文本',
    'DateControl': '日期',
    'NumberControl': '数值',
    'RadioControl': '单选框',
    'CheckboxControl': '复选框',
    'DropdownControl': '下拉单选',
    'DropdownMultiControl': '下拉多选',
    'LogicControl': '逻辑',
    'AttachmentControl': '附件',
    'SignatureControl': '手写签名',
    'LocationControl': '地址',
    'StaffControl': '人员选择',
    'DeptControl': '部门选择',
    'StaffDeptMixedControl': '混合选人',
    'SheetControl': '子表',
    'TitleControl': '标题',
  };

  let controlList = '';
  for (const c of topLevelControls) {
    if (c.key.startsWith('creater') || c.key === 'createdTime' || c.key === 'sequenceNo' || c.key === 'title1') continue;
    const typeName = typeNames[c.typeClass] || c.typeClass;
    const name = c.dataName ? `${c.dataName}/${typeName}` : typeName;
    controlList += `  - ${c.key} (${name})\n`;
  }

  for (const [sheetKey, controls] of Object.entries(sheetControls)) {
    const sheetName = topLevelControls.find(c => c.key === sheetKey)?.dataName || sheetKey;
    controlList += `\n  子表 "${sheetName}" 的列:\n`;
    for (const c of controls) {
      const typeName = typeNames[c.typeClass] || c.typeClass;
      const name = c.dataName ? `${c.dataName}/${typeName}` : typeName;
      controlList += `  - ${c.key} (${name})\n`;
    }
  }

  return `<!--
  云枢表单 HTML 模板
  
  关联文件: custom.css, custom.ts
  类型定义: custom-types.d.ts
  
  可用控件:
${controlList}
  使用说明:
  - 复制此文件内容到云枢平台的 HTML 编辑窗口
  - <a-row> 是一行，一行里面最多 4 个 <a-col>，代表 4 列
  - <a-col> 下的第一个子节点不能用 class（会被云枢平台抹除），请使用 id
  - 从第二个子节点开始可以使用 class
  
  限制说明:
  - HTML/CSS 窗口不支持引入外部样式表
  - 不支持静态 ES 模块语法（import/export 静态声明）
  - 支持引入 CDN JS 库（如 jQuery 等，可直接使用全局变量）
  - 如需引入外部 CSS，请在 JS 中动态创建:
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.example.com/style.css';
    document.head.appendChild(link);
  - 如需使用 ES 模块，请在 JS 中动态引入:
    import('https://cdn.skypack.dev/lodash').then(_ => { ... });
  
  自定义控件示例:
    <a-row>
        <a-col>
            <div id="my-custom-area">
                <button class="my-btn">自定义按钮</button>
            </div>
        </a-col>
    </a-row>
-->

${htmlContent}
`;
}

/**
 * 生成 custom.css
 */
function generateCustomCss(cssContent) {
  return `/**
 * 云枢表单 CSS 样式
 * 
 * 关联文件: custom.html, custom.ts
 * 
 * 使用说明:
 * - 复制此文件内容到云枢平台的 CSS 编辑窗口
 * - 选择器应与 custom.html 中的元素匹配
 */

/* ========== 原始样式 ========== */
${cssContent || '/* 暂无样式 */'}
`;
}

/**
 * 生成 custom.ts
 */
function generateCustomTs(jsContent, topLevelControls, sheetControls) {
  const typeNames = {
    'TextControl': '短文本',
    'TextareaControl': '长文本',
    'DateControl': '日期',
    'NumberControl': '数值',
    'RadioControl': '单选框',
    'CheckboxControl': '复选框',
    'DropdownControl': '下拉单选',
    'DropdownMultiControl': '下拉多选',
    'LogicControl': '逻辑',
    'AttachmentControl': '附件/图片',
    'SignatureControl': '手写签名',
    'LocationControl': '位置/地址',
    'StaffControl': '人员选择',
    'DeptControl': '部门选择',
    'StaffDeptMixedControl': '混合选人',
    'SheetControl': '子表',
    'CreateByControl': '创建人',
    'CreatedTimeControl': '创建时间',
    'SequenceNoControl': '单据号',
    'TitleControl': '标题',
    'RelevanceFormControl': '关联表单',
  };

  const controlComments = topLevelControls
    .filter(c => !c.key.startsWith('creater') && c.key !== 'createdTime' && c.key !== 'sequenceNo' && c.key !== 'title1')
    .map(c => {
      const typeName = typeNames[c.typeClass] || c.typeClass;
      const name = c.dataName ? ` (${c.dataName}/${typeName})` : ` (${typeName})`;
      return ` * - ${c.key}${name}`;
    }).join('\n');

  let sheetComments = '';
  for (const [sheetKey, controls] of Object.entries(sheetControls)) {
    const sheetName = topLevelControls.find(c => c.key === sheetKey)?.dataName || sheetKey;
    sheetComments += `\n * 子表 "${sheetName}" 的列:\n`;
    sheetComments += controls.map(c => {
      const typeName = typeNames[c.typeClass] || c.typeClass;
      const name = c.dataName ? ` (${c.dataName}/${typeName})` : ` (${typeName})`;
      return ` * - ${c.key}${name}`;
    }).join('\n');
  }

// 检查是否只有模板代码
let existingCode = '';
const defaultCode = `form.on('onLoad', function(data, dataPermission) {
  // 数据加载后，渲染之前
  // this 指向 Window & FormInstance & FormControls
  // data 和 dataPermission 的键为控件编码
  // 示例: data.ShortText1775207152511 = 'txt';
}, 'cover');

form.on('onRendered', function(data) {
  // 渲染完成后，可以访问控件
  // this 指向 FormInstance & FormControls
  // data 为表单数据
  // 示例: this.ShortText1775207152511.value = 'hello';
});

form.on('onValidate', function(action, data) {
  // 内置校验通过后
  // return false 阻止提交
});

form.on('onPreAction', function(action, data) {
  // 按钮事件执行前
  // return false 阻止按钮操作
});

form.on('onCustomAction', function(action, data) {
  // 自定义按钮事件
  // if (action.code === 'btn1') { ... }
});

form.on('onActionDone', function(action, data, httpRes) {
  // 按钮事件执行后
});`;

if (jsContent) {
  const hasRealCode = jsContent.replace(/\/\*[\s\S]*?\*\//g, '')
                               .replace(/\/\/.*$/gm, '')
                               .replace(/form\s*\.\s*on\s*\(\s*['"]\w+['"]\s*,\s*function\s*\([^)]*\)\s*\{[^}]*\}\s*(,\s*['"]\w+['"])?\s*\)\s*;?/gi, '')
                               .replace(/[{}();\s]/g, '').trim().length > 5;
  
  if (hasRealCode) {
    existingCode = `
// ========== 已有的代码 ==========
${jsContent}
// ========== 已有代码结束 ==========
`;
  }
}

return `/// <reference path="../types/index.d.ts" />
/// <reference path="custom-types.d.ts" />

/**
 * 云枢表单自定义代码
 * 
 * 关联文件: custom.html, custom.css
 * 
 * 使用说明:
 * - 使用 tsc 编译此文件，或手动转换为 JS
 * - 复制编译后的 JS 代码到云枢平台的 JS 编辑窗口
 * 
 * 可用控件:
${controlComments}${sheetComments}
*/

// ========== 以下代码复制到云枢 JS 窗口 ==========
// ========== 生命周期事件 ==========
${existingCode || defaultCode}
`;
}

function main() {
  const templatePath = join(rootDir, 'template.html');

  if (!existsSync(templatePath)) {
    console.error('错误: 找不到 template.html，请确保它位于项目根目录');
    process.exit(1);
  }

  const html = readFileSync(templatePath, 'utf-8');

  // 提取控件信息
  const { topLevelControls, sheetControls } = extractControls(html);
  console.log(`发现 ${topLevelControls.length} 个顶层控件:`);
  topLevelControls.forEach(c => console.log(`  - ${c.key} (${c.dataName || c.typeClass})`));

  for (const [sheetKey, controls] of Object.entries(sheetControls)) {
    console.log(`\n子表 "${sheetKey}" 包含 ${controls.length} 个列:`);
    controls.forEach(c => console.log(`  - ${c.key} (${c.dataName || c.typeClass})`));
  }

  // 创建 src 目录
  const srcDir = join(rootDir, 'src');
  if (!existsSync(srcDir)) {
    mkdirSync(srcDir, { recursive: true });
  }

  // 1. 生成 custom-types.d.ts
  const customTypes = generateCustomTypes(topLevelControls, sheetControls);
  writeFileSync(join(srcDir, 'custom-types.d.ts'), customTypes, 'utf-8');
  console.log('\n✓ 已生成 src/custom-types.d.ts');

  // 2. 提取并生成 custom.html
  const htmlContent = extractHtml(html);
  if (htmlContent) {
    const customHtml = generateCustomHtml(htmlContent, topLevelControls, sheetControls);
    writeFileSync(join(srcDir, 'custom.html'), customHtml, 'utf-8');
    console.log('✓ 已生成 src/custom.html');
  } else {
    console.warn('⚠ 未提取到 HTML 内容');
  }

  // 3. 提取并生成 custom.css
  const cssContent = extractCss(html);
  const customCss = generateCustomCss(cssContent);
  writeFileSync(join(srcDir, 'custom.css'), customCss, 'utf-8');
  console.log('✓ 已生成 src/custom.css');

  // 4. 提取并生成 custom.ts
  const jsContent = extractJs(html);
  const customTsPath = join(srcDir, 'custom.ts');
  
  // 总是重新生成 custom.ts（因为不再嵌入 HTML 注释）
  const customTs = generateCustomTs(jsContent, topLevelControls, sheetControls);
  writeFileSync(customTsPath, customTs, 'utf-8');
  console.log('✓ 已生成 src/custom.ts');

  console.log('\n========================================');
  console.log('提取完成！');
  console.log('========================================');
  console.log('生成的文件:');
  console.log('  src/custom.html    - HTML 片段');
  console.log('  src/custom.css     - CSS 样式');
  console.log('  src/custom.ts      - TypeScript 代码');
  console.log('  src/custom-types.d.ts - 类型定义');
  console.log('');
  console.log('使用方式:');
  console.log('  1. 编辑 src/ 下的文件');
  console.log('  2. 复制内容到云枢平台对应的编辑窗口');
  console.log('========================================');
}

main();