// ==UserScript==
// @name         云枢表单模板导出 / 导入（本地 template.html）
// @namespace    cloudpivot-js-help
// @version      0.4
// @description  在云枢表单设计页导出含自定义 HTML/CSS/JS 的 template-<表单编码>-YYMMDD_HHmmss.html，并把 npm run build-import 产出的导入文件写回表单草稿
// @match        *://*/admin/*
// @run-at       document-idle
// @noframes
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 框架自带的两个 section 由模板字面量提供，不属于自定义 HTML 区域
  const FRAMEWORK_SECTION_IDS = new Set(['toolbar', 'template']);

  // 在线编辑器 getCodes 依据这三行注释拆 HTML/CSS/JS
  const IMPORT_MARKERS = ['<!--css配置-->', '<!--html配置-->', '<!--自定义事件配置-->'];

  // /admin/#/apps/model/{appCode}/{schemaCode}/form-design/{sheetCode}
  const FORM_DESIGN_HASH = /^#\/apps\/model\/[^/]+\/[^/]+\/form-design\/([^/]+)/;

  function formCode() {
    const m = FORM_DESIGN_HASH.exec(location.hash);
    return m ? m[1] : 'unknown';
  }

  function stamp() {
    const p = (n) => String(n).padStart(2, '0');
    const d = new Date();
    return `${p(d.getFullYear() % 100)}${p(d.getMonth() + 1)}${p(d.getDate())}` +
      `_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
  }

  function findFormDesignVm() {
    const appEl = document.querySelector('#app');
    const root = appEl && appEl.__vue__;
    if (!root) return null;
    const queue = [[root, 0]];
    while (queue.length) {
      const [vm, depth] = queue.shift();
      if (depth > 20) continue;
      if (typeof vm.newTemplateExport === 'function' && vm.formData) return vm;
      (vm.$children || []).forEach((child) => queue.push([child, depth + 1]));
    }
    return null;
  }

  function serializeElement(el) {
    const attrs = (el.attrs || []).map((a) => `${a.name}="${a.value}"`).join(' ');
    const inner = el.innerHTML == null ? '' : el.innerHTML;
    return `<${el.tagName}${attrs ? ' ' + attrs + ' ' : ''}>${inner}</${el.tagName}>`;
  }

  // elements 每项为 {tagName, innerHTML, id, attrs}，与平台 draftHtmlJson 同构
  function readCustomBlocks(vm) {
    let els = vm.elements;
    if (!els) {
      const raw = vm.formData.draftHtmlJson || vm.formData.publishedHtmlJson;
      els = raw ? JSON.parse(raw) : [];
    }
    const blocks = { css: null, js: null, html: '' };
    const htmlParts = [];
    (Array.isArray(els) ? els : []).forEach((el) => {
      const tag = (el.tagName || '').toLowerCase();
      if (tag === 'style') {
        blocks.css = el.innerHTML || '';
      } else if (tag === 'script' && el.id === 'customScript') {
        blocks.js = el.innerHTML || '';
      } else if (tag === 'section' && FRAMEWORK_SECTION_IDS.has(el.id)) {
        // 框架占位，跳过
      } else {
        htmlParts.push(serializeElement(el));
      }
    });
    blocks.html = htmlParts.join('\n');
    return blocks;
  }

  // 平台导出只填 {template}/{scripts}，CSS 与 JS 是硬编码默认值，这里回填表单里的真实内容
  function mergeBlocks(html, blocks, code) {
    let out = html;
    // 表单编码写进模板，供 npm run build-import 命名导入产物
    out = out.replace(/(<body[^>]*>)/i, (open) => `${open}\n<!--cloudpivot-form-code:${code}-->`);
    if (blocks.css != null) {
      out = out.replace(/(<style[^>]*>)[\s\S]*?(<\/style>)/i, (_, open, close) => open + blocks.css + close);
    }
    if (blocks.js != null) {
      out = out.replace(/(<script[^>]*\bid="customScript"[^>]*>)[\s\S]*?(<\/script>)/i, (_, open, close) => open + blocks.js + close);
    }
    if (blocks.html) {
      out = out.replace(/<!--html配置-->/, (m) => `${m}\n${blocks.html}`);
    }
    return out;
  }

  // 用平台自己的控件序列化器产出完整模板（含自定义 HTML/CSS/JS）
  async function buildMergedTemplate(vm) {
    const res = await fetch('/admin/template.html', { credentials: 'same-origin' });
    if (!res.ok) throw new Error('拉取 /admin/template.html 失败：HTTP ' + res.status);
    const shell = await res.text();
    return mergeBlocks(vm.newTemplateExport().buildTemplateHTML(shell), readCustomBlocks(vm), formCode());
  }

  function downloadFile(name, text) {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/html;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function exportTemplate(span) {
    const vm = findFormDesignVm();
    if (!vm) {
      alert('未找到表单设计组件，请停留在表单设计页后再点。');
      return;
    }
    span.style.opacity = '0.5';
    try {
      downloadFile(`template-${formCode()}-${stamp()}.html`, await buildMergedTemplate(vm));
    } catch (err) {
      alert('导出失败：' + err.message);
    } finally {
      span.style.opacity = '';
    }
  }

  function exportAnchor(box) {
    try {
      const withIcon = box.querySelector('span:has(i.h-icon-all-cloud-download1)');
      if (withIcon) return withIcon;
    } catch (e) {
      // 不支持 :has() 的浏览器退回首个子节点
    }
    return box.firstElementChild;
  }

  function isFormDesignRoute() {
    return location.pathname.startsWith('/admin/') && FORM_DESIGN_HASH.test(location.hash);
  }

  // 平台 parseHTML 只在「在线开发」视图里生效，导入前先把视图切过去
  async function ensureEditorView(vm) {
    if (!vm.isEditorView) {
      await vm.setView({ target: { value: 'editor' } });
    }
    await vm.$nextTick();
    const editor = vm.$refs.editor;
    if (editor) await settleEditorCodes(editor);
    return editor;
  }

  // 进入在线开发时，平台会用当前表单内容异步重生成编辑器代码；等它稳定，否则会把导入内容覆盖掉
  async function settleEditorCodes(editor) {
    let last = null;
    for (let i = 0; i < 30; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const current = editor.codes.html;
      if (current && current === last) return;
      last = current;
    }
  }

  function restoreCodes(editor, snapshot) {
    Object.keys(snapshot).forEach((key) => { editor.codes[key] = snapshot[key]; });
  }

  // 只数带 key 的控件标签：容器/子表列/按钮组都算控件，与「设计区顶层控件数」不是一回事
  function countControlKeys(html) {
    const keys = new Set();
    (html.match(/\bkey="([^"]+)"/gi) || []).forEach((attr) => {
      keys.add(attr.replace(/\bkey="([^"]+)"/i, '$1'));
    });
    return keys.size;
  }

  function fileFormCode(text) {
    const m = /<!--cloudpivot-form-code:([^>]+?)-->/.exec(text);
    return m ? m[1].trim() : '';
  }

  function dialogRow(text, css) {
    const row = document.createElement('div');
    row.textContent = text;
    row.style.cssText = css;
    return row;
  }

  /**
   * 导入确认框：编码对不上时用红色警告块显示，确认按钮默认不聚焦
   * 动态内容一律走 textContent，避免文件内容注入页面
   */
  function showImportDialog({ pageCode, fileCode, stats, warnings }) {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.style.cssText =
        'position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100000;' +
        'display:flex;align-items:center;justify-content:center;';

      const box = document.createElement('div');
      box.style.cssText =
        'background:#fff;border-radius:6px;width:520px;max-width:90vw;' +
        'box-shadow:0 10px 32px rgba(0,0,0,.35);font-size:14px;color:#333;overflow:hidden;';

      const head = dialogRow('导入模板', 'padding:14px 18px;font-size:16px;font-weight:600;border-bottom:1px solid #eee;');
      box.appendChild(head);

      warnings.forEach((msg) => {
        box.appendChild(dialogRow(
          '⚠ ' + msg,
          'margin:12px 18px;padding:10px 12px;background:#fff1f0;border:1px solid #ffa39e;' +
          'border-radius:4px;color:#cf1322;line-height:1.6;'
        ));
      });

      const body = document.createElement('div');
      body.style.cssText = 'padding:4px 18px 14px;';
      body.appendChild(dialogRow(`当前表单编码: ${pageCode}`, 'line-height:1.9;'));
      body.appendChild(dialogRow(`文件表单编码: ${fileCode || '（文件里没有编码标记）'}`, 'line-height:1.9;'));
      stats.forEach((line) => body.appendChild(dialogRow(line, 'line-height:1.9;')));
      body.appendChild(dialogRow(
        '导入只更新「在线开发」里的草稿，需自行点击「保存」才会持久化。',
        'margin-top:8px;color:#888;line-height:1.9;'
      ));
      box.appendChild(body);

      const footer = document.createElement('div');
      footer.style.cssText = 'padding:12px 18px;border-top:1px solid #eee;text-align:right;';
      const cancel = document.createElement('button');
      cancel.textContent = '取消';
      cancel.style.cssText = 'margin-left:12px;padding:6px 18px;cursor:pointer;';
      const ok = document.createElement('button');
      ok.textContent = '确认导入';
      ok.style.cssText =
        `margin-left:12px;padding:6px 18px;cursor:pointer;color:#fff;border:none;` +
        `background:${warnings.length ? '#d9d9d9' : '#1890ff'};border-radius:4px;`;
      footer.appendChild(cancel);
      footer.appendChild(ok);
      box.appendChild(footer);
      overlay.appendChild(box);

      const close = (value) => {
        document.removeEventListener('keydown', onKey);
        overlay.remove();
        resolve(value);
      };
      const onKey = (ev) => {
        if (ev.key === 'Escape') close(false);
      };
      cancel.addEventListener('click', () => close(false));
      ok.addEventListener('click', () => close(true));
      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay) close(false);
      });
      document.addEventListener('keydown', onKey);
      cancel.focus();

      document.body.appendChild(overlay);
    });
  }

  async function importTemplate(file, span) {
    const vm = findFormDesignVm();
    if (!vm) {
      alert('未找到表单设计组件，请停留在表单设计页后再点。');
      return;
    }
    span.style.opacity = '0.5';
    let editor = null;
    let snapshot = null;
    try {
      const text = await file.text();
      const missing = IMPORT_MARKERS.filter((m) => !text.includes(m));
      if (missing.length) {
        throw new Error(`文件里缺少 ${missing.join('、')}，请选 npm run build-import 产出的导入文件。`);
      }

      editor = await ensureEditorView(vm);
      if (!editor || typeof editor.getCodes !== 'function' || typeof editor.parse !== 'function') {
        throw new Error('未取到在线开发编辑器（getCodes/parse 不可用），平台版本可能已变更。');
      }

      snapshot = JSON.parse(JSON.stringify(editor.codes));
      const beforeCount = Object.keys(vm.controls || {}).length;

      editor.getCodes(text);
      if (!editor.codes.html.includes('id="template"')) {
        restoreCodes(editor, snapshot);
        throw new Error('文件解析后没有 section id="template"，请确认选的是本表单的导入文件。');
      }

      const pageCode = formCode();
      const fileCode = fileFormCode(text);
      const warnings = [];
      if (pageCode === 'unknown') {
        warnings.push('当前页面路由里取不到表单编码，无法核对文件是否属于本表单。');
      } else if (!fileCode) {
        warnings.push('文件里没有表单编码标记，无法核对文件是否属于本表单。');
      } else if (fileCode !== pageCode) {
        warnings.push(`表单编码不一致：文件 ${fileCode} ≠ 当前页面 ${pageCode}，导入会覆盖当前表单的草稿。`);
      }

      const confirmed = await showImportDialog({
        pageCode,
        fileCode,
        warnings,
        // 左右两侧同一口径：snapshot 是导入前编辑器里的当前表单内容
        stats: [
          `平台控件（带key）：${countControlKeys(snapshot.html)} 个 → 平台控件（带key）：${countControlKeys(editor.codes.html)} 个`,
          `HTML: ${snapshot.html.length} 字符 → HTML: ${editor.codes.html.length} 字符`,
          `CSS : ${snapshot.css.length} 字符 → CSS : ${editor.codes.css.length} 字符`,
          `JS  : ${snapshot.javascript.length} 字符 → JS  : ${editor.codes.javascript.length} 字符`
        ]
      });
      if (!confirmed) {
        restoreCodes(editor, snapshot);
        return;
      }

      // 先单独解析一次拿失败原因：vm.parseHTML 内部吞掉解析异常，不会抛出
      await editor.parse();
      await vm.parseHTML();

      const afterCount = Object.keys(vm.controls || {}).length;
      alert(`导入完成：设计区顶层控件 ${beforeCount} → ${afterCount} 个。\n切回「web端设计」核对后点击「保存」。`);
    } catch (err) {
      if (editor && snapshot) restoreCodes(editor, snapshot);
      alert('导入失败：' + (err && err.message ? err.message : err));
    } finally {
      span.style.opacity = '';
    }
  }

  function ensureButtons() {
    if (!isFormDesignRoute()) return;
    const box = document.querySelector('.options-box');
    if (!box || box.querySelector('[data-cp-local-export]')) return;

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.html,.htm';
    fileInput.style.display = 'none';

    const importSpan = document.createElement('span');
    importSpan.setAttribute('data-cp-local-import', '');
    importSpan.title = '导入 dist/template-<表单编码>-import.html（更新 HTML/CSS/JS 草稿，保存仍需手动点击）';
    importSpan.style.cssText = 'margin-right:12px;cursor:pointer;';
    importSpan.innerHTML = '<i class="iconfont aufontAll h-icon-all-cloud-upload1"></i> 导入模板';
    importSpan.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (ev) => {
      const file = ev.target.files && ev.target.files[0];
      ev.target.value = '';
      if (file) importTemplate(file, importSpan);
    });

    const exportSpan = document.createElement('span');
    exportSpan.setAttribute('data-cp-local-export', '');
    exportSpan.title = '导出 template-<表单编码>-YYMMDD_HHmmss.html（含自定义 HTML/CSS/JS，供本地 npm run extract）';
    exportSpan.style.cssText = 'margin-right:12px;cursor:pointer;';
    exportSpan.innerHTML = '<i class="iconfont aufontAll h-icon-all-cloud-download1"></i> 本地模板';
    exportSpan.addEventListener('click', () => exportTemplate(exportSpan));

    const anchor = exportAnchor(box);
    box.insertBefore(exportSpan, anchor);
    box.insertBefore(importSpan, exportSpan);
    box.appendChild(fileInput);
  }

  ensureButtons();
  window.addEventListener('hashchange', ensureButtons);
  new MutationObserver(ensureButtons).observe(document.documentElement, { childList: true, subtree: true });
})();
