/**
 * src/custom.css 的开发用头部与「原始样式」分隔行由 extract.mjs 写入，只服务本地开发。
 * extract.mjs 取净内容、build-import.mjs 写导入产物都走这一个函数，两边口径必须一致。
 */
export function stripGeneratedCssHeader(css) {
  return css
    .replace(/^\/\*\*[\s\S]*?云枢表单 CSS 样式[\s\S]*?\*\/\s*/, '')
    .replace(/^\/\* =+ 原始样式 =+ \*\/\s*/, '')
    .trim();
}
