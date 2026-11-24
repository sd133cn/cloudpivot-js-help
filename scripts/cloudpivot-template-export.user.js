// ==UserScript==
// @name         云枢表单模板导出（本地 template.html）
// @namespace    cloudpivot-js-help
// @version      0.1
// @description  在云枢表单设计页导出含自定义 HTML/CSS/JS 的 template.html，供 cloudpivot-js-help 的 npm run extract 使用
// @match        *://*/admin/*
// @run-at       document-idle
// @noframes
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 框架自带的两个 section 由模板字面量提供，不属于自定义 HTML 区域
  const FRAMEWORK_SECTION_IDS = new Set(['toolbar', 'template']);

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
  function mergeBlocks(html, blocks) {
    let out = html;
    if (blocks.css != null) {
      out = out.replace(/(<style[^>]*>)[\s\S]*?(<\/style>)/i, (_, open, close) => open + blocks.css + close);
    }
    if (blocks.js != null) {
      out = out.replace(/(<script[^>]*\bid="customScript"[^>]*>)[\s\S]*?(<\/script>)/i, (_, open, close) => open + blocks.js + close);
    }
    if (blocks.html) {
      out = out.replace(/(<!--html配置-->)/, '$1\n' + blocks.html);
    }
    return out;
  }

  async function exportTemplate(span) {
    const vm = findFormDesignVm();
    if (!vm) {
      alert('未找到表单设计组件，请停留在表单设计页后再点。');
      return;
    }
    span.style.opacity = '0.5';
    try {
      const res = await fetch('/admin/template.html', { credentials: 'same-origin' });
      if (!res.ok) throw new Error('拉取 /admin/template.html 失败：HTTP ' + res.status);
      const shell = await res.text();
      const html = vm.newTemplateExport().buildTemplateHTML(shell);
      const merged = mergeBlocks(html, readCustomBlocks(vm));
      const url = URL.createObjectURL(new Blob([merged], { type: 'text/html;charset=utf-8' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'template.html';
      a.click();
      URL.revokeObjectURL(url);
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

  // /admin/#/apps/model/{appCode}/{schemaCode}/form-design/{schemaCode}
  const FORM_DESIGN_HASH = /^#\/apps\/model\/[^/]+\/[^/]+\/form-design\/[^/]+/;

  function isFormDesignRoute() {
    return location.pathname.startsWith('/admin/') && FORM_DESIGN_HASH.test(location.hash);
  }

  function makeButton() {
    if (!isFormDesignRoute()) return;
    const box = document.querySelector('.options-box');
    if (!box || box.querySelector('[data-cp-local-export]')) return;
    const span = document.createElement('span');
    span.setAttribute('data-cp-local-export', '');
    span.title = '导出 template.html（含自定义 HTML/CSS/JS，供本地 npm run extract）';
    span.style.cssText = 'margin-right:12px;cursor:pointer;';
    span.innerHTML = '<i class="iconfont aufontAll h-icon-all-cloud-download1"></i> 本地模板';
    span.addEventListener('click', () => exportTemplate(span));
    box.insertBefore(span, exportAnchor(box));
  }

  makeButton();
  window.addEventListener('hashchange', makeButton);
  new MutationObserver(makeButton).observe(document.documentElement, { childList: true, subtree: true });
})();
