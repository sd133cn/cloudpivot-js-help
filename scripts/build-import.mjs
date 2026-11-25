import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stripGeneratedCssHeader } from './css-header.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const HTML_START = '<!--html配置-->';
const SCRIPT_OPEN = '<script id="customScript"';
const SECTION_END = '</section>';
const JS_MARKER = '// ========== 以下代码复制到云枢 JS 窗口 ==========';

function readRequired(relativePath) {
  const path = join(rootDir, relativePath);
  if (!existsSync(path)) {
    console.error(`错误: 找不到 ${relativePath}`);
    if (relativePath.startsWith('src')) {
      console.error('请先运行 npm run extract 生成 src/ 下的开发文件');
    }
    process.exit(1);
  }
  return readFileSync(path, 'utf-8');
}

/**
 * 取 <!--html配置--> 到 customScript 之前最后一个 </section> 的整段（含边界）
 * 与 extract.mjs 的 extractHtml 保持同一边界，src/custom.html 里的开发注释不会被带进产物
 */
function htmlRegion(html) {
  const startIndex = html.indexOf(HTML_START);
  if (startIndex === -1) return '';

  const afterStart = html.substring(startIndex);
  const scriptIndex = afterStart.indexOf(SCRIPT_OPEN);
  const searchArea = scriptIndex === -1 ? afterStart : afterStart.substring(0, scriptIndex);
  const lastSectionEnd = searchArea.lastIndexOf(SECTION_END);

  if (lastSectionEnd === -1) return searchArea.trim();
  return searchArea.substring(0, lastSectionEnd + SECTION_END.length).trim();
}

/** 表单编码优先取导出脚本写入的标记，其次取 --code=xxx */
function resolveFormCode(templateHtml) {
  const marked = /<!--cloudpivot-form-code:([^>]+?)-->/.exec(templateHtml);
  if (marked) return marked[1].trim();

  const arg = process.argv.slice(2).find((a) => a.startsWith('--code='));
  if (arg) return arg.slice('--code='.length);

  return 'unknown';
}

/** 去掉运行时 <script class="templateScript">：导入解析器会丢弃它们，留着会截断 JS 区块 */
function stripTemplateScripts(html) {
  return html.replace(/[ \t]*<script[^>]*class="templateScript"[^>]*><\/script>[ \t]*\r?\n?/g, '');
}

function main() {
  const templateHtml = readRequired('template.html');
  const customHtml = readRequired('src/custom.html');
  const customCss = readRequired('src/custom.css');
  const customJs = readRequired('src/custom.js');

  const html = htmlRegion(customHtml);
  if (!html) {
    console.error('错误: src/custom.html 里没找到 <!--html配置--> 区块');
    process.exit(1);
  }
  if (!html.includes('id="template"')) {
    console.error('错误: src/custom.html 的 HTML 区块缺少 section id="template"');
    process.exit(1);
  }

  const markerIndex = customJs.indexOf(JS_MARKER);
  const js = (markerIndex === -1 ? customJs : customJs.substring(markerIndex + JS_MARKER.length)).trim();
  // 产物只带平台原有的 CSS 注释块，开发用头部不进 dist
  const css = stripGeneratedCssHeader(customCss);

  const formCode = resolveFormCode(templateHtml);

  let out = templateHtml;

  out = out.replace(/(<style[^>]*>)[\s\S]*?(<\/style>)/i, (_, open, close) => `${open}\n${css}\n${close}`);

  const startIndex = out.indexOf(HTML_START);
  const scriptIndex = out.indexOf(SCRIPT_OPEN, startIndex);
  const searchArea = scriptIndex === -1 ? out.substring(startIndex) : out.substring(startIndex, scriptIndex);
  const lastSectionEnd = searchArea.lastIndexOf(SECTION_END);
  if (startIndex === -1 || lastSectionEnd === -1) {
    console.error('错误: template.html 里没找到 <!--html配置--> 与 </section> 区块');
    process.exit(1);
  }
  const regionEnd = startIndex + lastSectionEnd + SECTION_END.length;
  out = out.substring(0, startIndex) + html + out.substring(regionEnd);

  out = out.replace(
    /(<script[^>]*\bid="customScript"[^>]*>)[\s\S]*?(<\/script>)/i,
    (_, open, close) => `${open}\n${js}\n${close}`
  );

  out = stripTemplateScripts(out);

  const distDir = join(rootDir, 'dist');
  if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

  const fileName = `template-${formCode}-import.html`;
  const outputPath = join(distDir, fileName);
  writeFileSync(outputPath, out, 'utf-8');

  console.log(`表单编码: ${formCode}`);
  console.log(`HTML: ${html.length} 字符`);
  console.log(`CSS : ${css.length} 字符`);
  console.log(`JS  : ${js.length} 字符`);
  console.log(`运行时 templateScript 标签: 已移除`);
  console.log(`\n✓ 已生成 dist/${fileName}`);
  console.log('  在云枢表单设计页「在线开发」里用该文件导入，导入后需手动点击「保存」。');
}

main();
