# 式样验收：harness 与计算样式探针

## 为什么不能靠看截图

三类问题肉眼在截图上判断都会猜错：浅状态色之间只差 2%；选中态与今天态在 44px 小格里几乎分不出；窄屏会不会横向撑开取决于实际字体与内边距。`getComputedStyle` 是唯一能给出「对上 / 没对上」的判据。

## harness 长什么样

**一个界面一个 harness**，纯静态、无依赖、只用来验式样。它不是交付物——永远不要把 harness 里的东西贴进云枢（等于往表单里塞假数据）。四条要求：

1. `<link>` 指向**被验的那份样式文件本身**（表单二开里的 CSS 输出），不是抄一份进 harness——否则验的是过期样式。
2. 骨架按 `controls.md` 对应节摆出来，**不引平台运行时**（不需要 `h3form`、不需要 `a-*` 控件）。假数据要把映射表里**每一档取值**和每个控件的每个变体、状态都排在一屏：缺档就永远验不到那一档。目录里有、这个界面还没落地的控件，把它的 CSS 片段抄进 harness 的 `<style>` 并标「待落地」——探针命中即算这件验过。
3. 状态开关用查询参数：`?case=<态>` 直接落到某个交互状态（`.pv-case` 给同样可点的链接），态的名字由界面自定，通常至少 `single` / `batch` / `disabled` / `error` / `open`；`?w=<px>` 压舞台宽度。
4. 探针输出打进 `<pre>` 节点（无头 `--dump-dom` 抓正文就能取，不需要截图），并且探针段自己限宽（`white-space:pre-wrap; overflow-wrap:anywhere; max-width:100%`）——不然探针文本自己把文档撑宽，会量出假的横向溢出。

## 探针清单

状态取值不写死在脚本里，从徽标行的 `[data-status]` 读——加一档状态只加一行 HTML，探针自动多两条：

```js
var statuses = [];  // 从 <件根> [data-status] 去重收集
// 每档两条：一个状态色消费者 + 一个徽标，用来证「两个消费者读同一张映射表」
['格·' + sv, '<件根> [data-status="' + sv + '"]:not(.is-past):not(.is-sel):not(.is-head)'],
['图例·' + sv, '<件根> [data-status="' + sv + '"]'];
```

覆盖面按 **控件 × 变体 × 状态** 逐条对应 `SKILL.md` 目录表，不是「挑几条看看」：

| 控件 | 必须有的探针 |
|---|---|
| 按钮 | 描边 / 实心 / `is-active` 切换两态 / `disabled` |
| Bottom Sheet | 关（`visibility`+`opacity`、宿主回原父节点）、开（`is-open`、宿主在 body、`transform`、`box-shadow`）、动作栏（首行 / sticky / 右对齐 / 分隔线）、底留白 60px |
| 单选 | chips 未选、chips 已选、Segmented 轨道、Segmented 选中项 |
| 多选 | 已选项（与单选同值的证据）、格子 `is-chk` |
| 输入 | 短文本默认、长文本默认（核 `min-height`）、两者出错态、placeholder 色 |
| 字段与校验 | 错误位显隐两态、`is-err` 下单值控件的描边、组控件**不变色** |
| 状态色消费者 | 映射表每一档（格 + 徽标各一条）、`is-past` / `is-today` / `is-head` |

## 无头跑法（Windows，已验证）

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless=new --disable-gpu --no-sandbox --dump-dom --virtual-time-budget=2000 \
  'file:///<harness 绝对路径的百分号编码>?case=batch&debug=1&w=320' \
  | awk '/<pre id="pv-debug">/{gsub(/<pre id="pv-debug">/,"");f=1} f{print} f&&/<\/pre>/{exit}' \
  | sed 's/  */ /g'
```

布局量同理：`'…&debug=2&w=320'`，把上面的 `pv-debug` 换成 `pv-layout`。

五个坑，都实际踩过：

- **URL 必须是 `file:///` + 绝对路径 + 百分号编码**：路径含中文不编码直接白屏；相对路径下 `--dump-dom` 不报错但拿不到内容。
- **提取要用 `<pre id="…">` 锚点，不能光匹配 `pv-debug`**：harness 的 `<style>` 里也写着 `#pv-debug`，宽松匹配会从文档头部一路打到底。`--dump-dom` 连 `<script>` 正文一起打，脚本里的字面量 `(未命中)` 也会被整篇 grep 误报。
- **别用 `grep` 取探针值**：探针段是多行文本，`grep` 单行输出会把 `bg=…` 截断，看起来像没测到。取段后用 `sed 's/  */ /g'` 压空格。
- **`pad=` 打的是 shorthand 第一个值（上下）**：按钮 `padding: 0 16px`、chip `0 12px` 都会显示成 `pad=0px`。横向内边距要回 CSS 看，别据此判「没内边距」。
- **`--window-size` 无效**：给了 360/420 实测 `clientWidth` 仍是 500 上下。窄屏一律用 `?w=`，否则会把 harness 自己的宽度上限当成「手机上被裁了」的错误结论。`--screenshot` 用相对路径 exit 0 且不写文件，要写就给绝对 Windows 路径。

## 判据怎么写

每条写成「探针名 → 期望 → 实测」。期望用**相对判据**（不依赖具体取值，换表单照样成立）；绝对值只对下面这张基准表核对——它是本 skill 的 token 块与式样段照抄后应量到的结果，量不出这个值就说明 token 或选择器写歪了：

| 探针 | 基准值（token 块照抄后应量到） |
|---|---|
| 切换按钮 未激活 | `bg=rgb(255,255,255)` `color=rgba(0,0,0,.88)` `border=1px rgb(217,217,217)` `h=44.0` |
| 切换按钮 已激活 | `bg=rgb(230,244,255)` `color=rgb(22,119,255)` `border=1px rgb(22,119,255)` |
| chip 已选 / 多选已选 | 两者逐字段相同：`230,244,255` / `22,119,255` / 1px 主色 / `radius=4px` / `h=36.0` |
| Segmented 轨道 | `bg=rgb(245,245,245)`、`border=0px`；选中项白底 + `shadow-tertiary` + `radius=0px` |
| 短文本 | `bg=rgb(255,255,255)` `border=1px rgb(217,217,217)` `h=44.0` |
| 长文本 | 同上但 `h=74.0`（= 3×22 + 2×4，正是 `min-height` 公式） |
| 长文本 出错 | `border=1px rgb(255,77,79)`，底色不变 |
| 错误位 | `color=rgb(255,77,79)`、`display ≠ none` |
| 选中格 | `bg=rgb(230,244,255)` `border=1px rgb(22,119,255)` `shadow=… 1px inset` `h=44.0` |
| Bottom Sheet 动作栏 | `position=sticky` `top=0` `justify-content=flex-end` `border-bottom=1px`；是 panel 首个子元素；按钮 `h=44.0` |
| Bottom Sheet 底留白 | panel `padding-bottom=60px`；底部没有 `pv-sheet-foot` |

其余按规矩核：

- 映射表**各档 `bg` 两两不等**，且都不等于三个灰档；同档的格与徽标 `bg`/`color` 完全相同。
- 今天态：数字主色、底仍是状态色、**没有**新增描边。
- 同屏只有一条 `bg = --pv-primary` 的实心按钮。
- 组控件在 `is-err` 下 `border` 不变；只有单值控件转 error。
- `debug=2` 在 `?w=320`：`scrollWidth <= clientWidth`（无横向溢出），格宽 ≥ 36px。
- Bottom Sheet 打开时 `<浮层宿主>.parentNode === document.body`，关闭后回原父节点；原父节点失联时留 body 不报错。
- 动作栏滚动时 `top` 保持 `0`；面板底部 `padding-bottom` 为 `60px`。

### 关于 `(未命中)`

- 探针名带状态类前缀（如 `:not(.is-active)`）的，只在对应 `case` 下有目标——**跑遍所有 case** 才算覆盖，单看一次结果里的未命中是正常现象。
- `格·<取值>` 未命中说明该档在假数据里只落到了不可交互的日子：换 case 或改假数据让它出现在可选日，**不许**当成验过。
- 其它未命中通常是表单骨架改了、harness 没跟着同步，或探针选择器还指着旧的挂载元素（例如 `data-status` 挪了宿主）。改到命中再来一遍。

## harness 验不了的部分

它只验 CSS 与 DOM 挂载。平台会不会剥属性、三件套有没有同批复贴、真机上的字号与滚动、旧 iPhone WebKit 是否仍裁剪 `fixed` 后代——这几样只能线上或真机看。复贴后把异常（哪个控件、哪个状态、什么现象、设备与 iOS 版本）记下来，再决定要不要写回本 skill。
