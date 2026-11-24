# 控件目录

命名用件库前缀 `pv-`。每节给可直接粘贴的骨架与式样：`<件根>` 换成你的根选择器，`pv-` 可整体换成该表单自己的前缀。§5 的长文本输入与 §4 的 chips 多选是较晚补入的形态，实测值见 `preview-probe.md` 的对照表。

每节固定四栏：**骨架 / 变体 / 状态与数据 / 槽位与要点**。`<件根>` 换成你的根选择器，`<浮层宿主>` 是 Bottom Sheet 蒙层的 id 选择器；`<…>` 都是调用方填的槽位，本文档不出现业务取值。

---

## §1 按钮（单点 / 切换）

```html
<button type="button" class="pv-btn"><动作名></button>
<button type="button" class="pv-btn pv-btn-primary"><主操作></button>
<button type="button" class="pv-btn" id="pv-btn-toggle" aria-pressed="false"><开关名></button>
```

```css
<件根> .pv-btn {
  height: var(--pv-ctl-h); padding: 0 var(--pv-gap);
  font: inherit; font-size: 14px; cursor: pointer;
  color: var(--pv-text); background: var(--pv-bg-container);
  border: 1px solid var(--pv-border); border-radius: var(--pv-radius);
  transition: color var(--pv-fast) var(--pv-ease), border-color var(--pv-fast) var(--pv-ease), background-color var(--pv-fast) var(--pv-ease);
}
<件根> .pv-btn:hover:not(:disabled) { color: var(--pv-primary-hover); border-color: var(--pv-primary-hover); }
<件根> .pv-btn:active:not(:disabled) { color: var(--pv-primary-active); border-color: var(--pv-primary-active); }
<件根> .pv-btn-primary { color: #fff; background: var(--pv-primary); border-color: var(--pv-primary); }
<件根> .pv-btn-primary:hover:not(:disabled) { background: var(--pv-primary-hover); border-color: var(--pv-primary-hover); }
<件根> .pv-btn-primary:active:not(:disabled) { background: var(--pv-primary-active); border-color: var(--pv-primary-active); }
<件根> .pv-btn.is-active { color: var(--pv-primary); background: var(--pv-primary-bg); border-color: var(--pv-primary); }
<件根> .pv-btn:disabled { color: var(--pv-text-dis); background: var(--pv-bg-layout); border-color: var(--pv-border); cursor: not-allowed; }
```

- **变体**：描边（默认）/ `pv-btn-primary` 实心 / `is-active` ghost 三档。`is-active` 只给**切换按钮**，别拿来当「当前步骤高亮」。
- **单点 vs 切换的分工**：单点不改自身式样（点了就干活）；切换翻 `is-active` 并同步 `aria-pressed`，两个都要写。
- **禁用走 `disabled` 属性**，不走状态类——属性同时管样式和挡住点击，状态类只挡样式。
- **一屏一个实心**：多个按钮栏（页面 + 浮层动作栏）各自最多一个实心档，浮层打开时把页面主按钮 `disabled`。
- 槽位：文案、谁是主操作。`type="button"` 必须写，漏了会触发表单提交。
- 死路：`disabled` 用 `opacity`（浅底上糊字）；给切换按钮升实心（抢主操作）。

## §2 Bottom Sheet

> 2026-11-24 旧 iPhone 真机复测通过：动作栏在面板顶右可见，底部 60px 留白正常，无灰色露带。此前同页 Edge / 新 iPhone 不复现的“整栏按钮消失”，按下方兼容性标准处理。

```html
<div id="<件根>">
  ...页面内容...
  <div id="<浮层宿主>" class="pv-sheet">
    <div class="pv-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="pv-sheet-title">
      <div class="pv-sheet-actions">
        <button type="button" class="pv-btn">取消</button>
        <button type="button" class="pv-btn pv-btn-primary">保存</button>
      </div>
      <div class="pv-sheet-head"><span id="pv-sheet-title"><标题></span></div>
      <div class="pv-sheet-body"><!-- §6 字段容器 × N --></div>
    </div>
  </div>
</div>
```

```css
/* 蒙层打开时会被移到 body，token 必须同时挂在件根与浮层宿主 */
<件根>, <浮层宿主> { /* tokens.md 的 token 块 */ }
<浮层宿主> {
  position: fixed; left: 0; top: 0; right: 0; bottom: 0;
  background: var(--pv-mask); z-index: 1000;
  display: flex; align-items: flex-end; justify-content: center;
  visibility: hidden; opacity: 0;
  transition: opacity var(--pv-mid) var(--pv-ease);
}
<浮层宿主>.is-open { visibility: visible; opacity: 1; }
<浮层宿主> .pv-sheet-panel {
  width: 100%; max-width: 640px; max-height: 86vh; overflow-y: auto;
  background: var(--pv-bg-container);
  border-radius: var(--pv-radius-lg) var(--pv-radius-lg) var(--pv-radius-none) var(--pv-radius-none);
  box-shadow: var(--pv-shadow-popup);
  /* 横向内边距下放各横栏；底部 60px 是纯留白，给 iPhone 小白条 */
  padding: 0 0 60px;
  transform: translateY(100%);
  transition: transform var(--pv-slow) var(--pv-ease);
}
<浮层宿主>.is-open .pv-sheet-panel { transform: translateY(0); }
/* 动作栏是 panel 首行，照 antd Drawer 头部：sticky、右对齐、通栏分隔线 */
<浮层宿主> .pv-sheet-actions {
  position: sticky; top: 0;
  display: flex; justify-content: flex-end; gap: var(--pv-gap-sm);
  padding: var(--pv-gap-sm) var(--pv-gap-lg);
  border-bottom: 1px solid var(--pv-border-split);
  background: var(--pv-bg-container);
  font-weight: 400;
}
<浮层宿主> .pv-sheet-actions .pv-btn { min-width: 64px; }
<浮层宿主> .pv-sheet-head { font-size: 16px; line-height: 24px; font-weight: 600; padding: var(--pv-gap) var(--pv-gap-lg) var(--pv-gap-sm); }
<浮层宿主> .pv-sheet-body { padding: 0 var(--pv-gap-lg); }
```

- **状态**：只有 `is-open`，开合全走它；蒙层用 `visibility` 不用 `display`，`transform` 过渡才有得跑。
- **动作栏标准**：取消 / 保存放在面板顶右，`pv-sheet-actions` 是 `pv-sheet-panel` 的第一个子元素；标题降到第二行。按钮靠右成组、`min-width: 64px`，不做满宽两键。
- **底部标准**：面板 `padding: 0 0 60px`，底部不再放 `foot`。60px 是纯留白，不是按钮容器，也不是 `env(safe-area-inset-bottom)` 的叠加值。
- **打开 / 关闭挂载**：打开时把 `<浮层宿主>` 临时 `appendChild` 到 `document.body`；关闭后若原父节点仍 `isConnected` 就挂回，否则留在 body，下次打开自愈。精确代码见 `cloudpivot-form-dev` → `references/code-patterns.md`「移动端浮层」。
- **CSS 宿主**：token 同时挂 `<件根>` 与 `<浮层宿主>`；蒙层和面板规则只认 `<浮层宿主>`，不能写成 `<件根> .pv-sheet`，否则移到 body 后整组失效。
- **平台底栏**：移动端打开时仍要内联 `display:none` 压掉 `.form-actions.form-foot`，关闭还原。它解决“平台底栏遮挡”，body 挂载解决“滚动容器裁剪”，两件事都要做。
- z-index 全库只有浮层这一档（1000），控件内部不许再加。
- 槽位：标题、动作栏两个动作名、body 里的字段组成。

**此路不通**

- 只在原容器里抬 `z-index`：旧 iOS WebKit 会把 `.form-body` 滚动容器里的 `fixed` 后代裁到容器盒，整栏动作按钮会消失；必须把蒙层挂到 body。
- 只压掉平台底栏：能解决底部按钮被盖住，不能解决旧 iPhone 的祖先滚动裁剪。
- 只改 JS 挂载、不改 CSS 宿主：蒙层移出件根后选择器和 token 一起失效，会表现成蒙层全透明。

## §3 单选

```html
<!-- 形态 A：chips（三项以上） -->
<div class="pv-chips" role="radiogroup" aria-label="<字段名>">
  <span class="pv-chip" role="radio" aria-checked="false" data-val="<取值>"><取值></span>
</div>
<!-- 形态 B：Segmented（两项） -->
<div class="pv-seg" role="radiogroup" aria-label="<字段名>">
  <span class="pv-chip" role="radio" aria-checked="false" data-val="<取值>"><取值></span>
</div>
```

```css
<件根> .pv-chips { display: flex; flex-wrap: wrap; gap: var(--pv-gap-sm); }
<件根> .pv-chip {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: var(--pv-chip-h); padding: 0 12px;
  font-size: 14px; line-height: 22px; cursor: pointer; user-select: none;
  color: var(--pv-text); background: var(--pv-bg-container);
  border: 1px solid var(--pv-border); border-radius: var(--pv-radius-sm);
  transition: color var(--pv-fast) var(--pv-ease), border-color var(--pv-fast) var(--pv-ease), background-color var(--pv-fast) var(--pv-ease);
}
<件根> .pv-chip:hover { color: var(--pv-primary-hover); border-color: var(--pv-primary-hover); }
<件根> .pv-chip.is-sel { color: var(--pv-primary); background: var(--pv-primary-bg); border-color: var(--pv-primary); }
/* 是/否 用 v6 Segmented：轨道 bg-layout、选中项白底 + tertiary 阴影、内边直角 */
<件根> .pv-seg {
  display: flex; overflow: hidden; padding: var(--pv-gap-xs);
  background: var(--pv-bg-layout); border-radius: var(--pv-radius);
}
<件根> .pv-seg .pv-chip {
  flex: 1; min-height: calc(var(--pv-chip-h) - var(--pv-gap-xs) * 2);
  padding: 0 var(--pv-gap-sm);
  color: var(--pv-text-2); background: transparent; border-color: transparent;
  border-radius: var(--pv-radius-none);
}
<件根> .pv-seg .pv-chip:hover { color: var(--pv-text); border-color: transparent; }
<件根> .pv-seg .pv-chip.is-sel {
  color: var(--pv-primary); background: var(--pv-bg-container);
  border-color: transparent; box-shadow: var(--pv-shadow-tertiary);
}
```

- **变体就是形态**：两项用 `pv-seg`，三项以上用 `pv-chips`。同一个 `pv-chip` 两种形态，别写第二套选项类。
- **状态**：`is-sel`（组内互斥，JS 保证只一个）+ `aria-checked` 同步 + `data-val` 存值。
- Segmented 轨道**不加描边**：选中靠白底 + 阴影，加框就变成另一个组件。
- 选项可由 JS 按平台数据整组重建（把静态兜底换成接口实际值）——重建时要连 `aria-checked` 一起生成，别只拼 class。
- 出错时组控件自身不变色，只有错误位转 error（§6）。
- 槽位：取值集与顺序、`aria-label`、兜底选项是否保留。

## §4 多选

```html
<!-- 形态 A：chips（与单选同 class，只是可多项选中） -->
<div class="pv-chips" role="group" aria-label="<字段名>">
  <span class="pv-chip" role="checkbox" aria-checked="false" data-val="<取值>"><取值></span>
</div>

<!-- 形态 B：日历格（整片选中） -->
<div class="pv-grid"></div>          <!-- §7 的格子，多选态加 is-chk -->
<div class="pv-note">已选 <N> 项</div>
```

- **没有新式样**：chips 多选与单选共用 `pv-chip.is-sel`（实测同为 `bg=rgb(230,244,255)` / `color=rgb(22,119,255)` / 1px 主色描边），差别全在语义与 JS。
- **状态**：`role="checkbox"` + `aria-checked` 逐项同步；`is-sel` 可多项。格子形态叠加 `is-chk`（右上角主色圆点）并在 `is-sel` 之上，见 §7。
- `role` 从 `radiogroup` 换成 `group`、项从 `radio` 换成 `checkbox`：读屏才知道可以多选。
- **计数行由调用方给**：多选必须当场能看见「选了几个」，用 `pv-note`（12px `--pv-text-3`，`min-height: 20px` 防跳动）。
- 全选/清空用 §1 的**切换按钮**，不要往组里塞「全选」选项（会和数据里的真取值撞名）。
- 槽位：取值集、计数文案、是否受「今天/过去」约束（格子形态）。

## §5 文本输入（短 / 长）

```html
<input type="text" class="pv-input" placeholder="<提示>" aria-invalid="false" aria-describedby="pv-err-<字段>">
<textarea class="pv-area" rows="3" placeholder="<提示>" aria-invalid="false" aria-describedby="pv-err-<字段>"></textarea>
```

```css
<件根> .pv-input {
  width: 100%; height: var(--pv-ctl-h);
  /* 11px 是 v6 自己认下的 4px 网格例外（input 横向内边距），照抄不迁移 */
  padding: 4px 11px; font: inherit; font-size: 14px;
  color: var(--pv-text); background: var(--pv-bg-container);
  border: 1px solid var(--pv-border); border-radius: var(--pv-radius); outline: none;
  transition: border-color var(--pv-fast) var(--pv-ease), box-shadow var(--pv-fast) var(--pv-ease);
}
/* 长文本与短文本同族：只把 height 换成 min-height，允许可控纵向拉伸 */
<件根> .pv-area {
  width: 100%;
  min-height: calc(22px * 3 + var(--pv-gap-xs) * 2);   /* 三行 + 上下内边距，实测 h=74.0 */
  padding: 4px 11px; font: inherit; font-size: 14px; line-height: 22px;
  color: var(--pv-text); background: var(--pv-bg-container);
  border: 1px solid var(--pv-border); border-radius: var(--pv-radius); outline: none;
  resize: vertical;
  transition: border-color var(--pv-fast) var(--pv-ease), box-shadow var(--pv-fast) var(--pv-ease);
}
<件根> .pv-input::placeholder,
<件根> .pv-area::placeholder { color: var(--pv-text-dis); }
<件根> .pv-input:hover,
<件根> .pv-area:hover { border-color: var(--pv-primary-hover); }
<件根> .pv-input:focus,
<件根> .pv-area:focus { border-color: var(--pv-primary); box-shadow: var(--pv-outline); }
<件根> .is-err .pv-input,
<件根> .is-err .pv-area { border-color: var(--pv-error); }
<件根> .is-err .pv-input:focus,
<件根> .is-err .pv-area:focus { border-color: var(--pv-error); box-shadow: var(--pv-outline-err); }
```

- 单值控件才有 error 描边与 error 光晕（组控件没有，见 §3）。
- `rows` 与 `min-height` 给同一个行数；`resize: vertical` 只许纵向，横向一拉就撞件根边界。
- placeholder 只写「选填什么」的例子，不重复 label。
- 长文本 `min-height` 走 `line-height` 倍数算，别写死像素——改字号时高度会跟着走。

## §6 字段容器与校验

```html
<div class="pv-fld" id="pv-fld-<字段>">
  <div class="pv-fld-label"><字段名> <span class="pv-req">*</span></div>
  <!-- 控件位：§3 单选 / §4 多选 / §5 输入，三选一 -->
  <div class="pv-err" id="pv-err-<字段>"></div>
</div>
```

```css
<件根> .pv-fld { margin: var(--pv-gap) 0; }
<件根> .pv-fld-label { font-size: 14px; line-height: 22px; margin-bottom: var(--pv-gap-xs); }
<件根> .pv-req { color: var(--pv-error); }
<件根> .pv-req-opt:empty { display: none; }
<件根> .pv-err { display: none; margin-top: var(--pv-gap-xs); font-size: 12px; line-height: 20px; color: var(--pv-error); }
<件根> .pv-err.is-show { display: block; }
```

- **这是控件之间的唯一组合位**：label + 控件位 + 错误位。字段级状态只挂这里——`is-err`、`is-hidden`，不钻进控件内部。
- **校验四步**：字段加 `is-err` → 错误位加 `is-show` 并写文案 → `aria-invalid="true"` →（输入类）`aria-describedby` 指向错误位 id。清错四步全还原，漏一个就留着红。
- 必填/选填共用骨架：必填写 `*`，选填用 `.pv-req-opt:empty` 空占位、JS 按需塞 `*`。
- 联动显隐：`is-hidden` + `aria-hidden` 一起翻，只翻一个则读屏仍能选到隐藏字段。
- 错误文案 12px，比 label 小一档——提示是附属信息，别和字段名同字号。

## §7 状态色消费者：徽标与日历格

这两个不是输入控件，是**读同一张状态映射表的展示件**（映射表写法在 `tokens.md`）。

```html
<span class="pv-tag" data-status="<取值>"><取值></span>

<div class="pv-weekhead"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
<div class="pv-grid"></div>          <!-- 由 JS 生成 pv-cell -->
```

```css
<件根> [data-status="<取值>"] { --st-bg: <预设 -1>; --st-fg: <同色 -7>; }   /* 映射表：每档一行 */
<件根> .pv-tag {
  display: inline-flex; align-items: center; padding: 0 7px;
  font-size: 12px; line-height: 20px;
  border: 1px solid var(--pv-border-split); border-radius: var(--pv-radius-sm);
  background: var(--st-bg, var(--pv-bg-layout));
  color: var(--st-fg, var(--pv-text-2));
}
<件根> .pv-weekhead, <件根> .pv-grid {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--pv-gap-xs);
}
<件根> .pv-weekhead { font-size: 12px; color: var(--pv-text-3); text-align: center; margin-bottom: var(--pv-gap-xs); }
<件根> .pv-cell {
  position: relative; height: var(--pv-cell-h);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; cursor: pointer; user-select: none; outline: none;
  border: 1px solid var(--pv-border-split); border-radius: var(--pv-radius);
  background-color: var(--st-bg, var(--pv-bg-container));
  color: var(--st-fg, var(--pv-text));
  transition: border-color var(--pv-fast) var(--pv-ease), box-shadow var(--pv-fast) var(--pv-ease), color var(--pv-fast) var(--pv-ease);
}
/* hover/focus 只加描边与光晕、不改底色——否则浅状态色会被吃掉 */
<件根> .pv-cell:hover:not(.is-past):not(.is-sel) { border-color: var(--pv-primary-hover); }
<件根> .pv-cell:focus-visible:not(.is-past) { border-color: var(--pv-primary); box-shadow: var(--pv-outline); }
<件根> .pv-cell.is-head { visibility: hidden; }
/* 今天只标数字与点、不画边框；边框让给选中，两态不抢同一种线索 */
<件根> .pv-cell.is-today { color: var(--pv-primary); }
<件根> .pv-cell.is-today::before {
  content: ''; position: absolute; bottom: var(--pv-gap-xs); left: 50%; margin-left: -3px;
  width: 6px; height: 6px; background: var(--pv-primary); border-radius: var(--pv-radius-full);
}
<件根> .pv-cell.is-sel { background-color: var(--pv-primary-bg); border-color: var(--pv-primary); color: var(--pv-text); box-shadow: inset 0 0 0 1px var(--pv-primary); }
<件根> .pv-cell.is-chk::after {
  content: '✓'; position: absolute; top: var(--pv-gap-xs); right: var(--pv-gap-xs);
  width: 14px; height: 14px; line-height: 14px;
  font-size: 10px; font-weight: 600; text-align: center;
  color: #fff; background: var(--pv-primary); border-radius: var(--pv-radius-full);
}
<件根> .pv-cell.is-past { background-color: var(--pv-bg-mid); border-color: var(--pv-border-split); color: var(--pv-text-dis); cursor: not-allowed; }
```

- 徽标**必须有 1px `--pv-border-split` 描边**：白卡片上无描边的浅底 tag 会糊成一片。
- `data-status` 挂在**消费者自己身上**（徽标就是徽标、格就是格），别内层再嵌一个色点——两个消费者一旦分家，底色和字色就不同步了。
- 格子：`is-sel` 补 `inset 0 0 0 1px`，因为 44px 格子里浅主色底 + 1px 描边分不出选中（实测加 inset 才拉开）。
- JS 契约：一次拼好整月字符串再赋 `innerHTML`（逐格 `appendChild` 在移动端明显卡）；月初补白格 `is-head`（`visibility:hidden` 仍占格，1 号不必落周一）；点击只翻状态类。
- 加一档状态 = 映射表加一行，徽标与格子同时生效。

## §8 件根与 token 容器

```html
<a-row><a-col>
  <div id="pv-root">
    <!-- §7 徽标行 / §7 网格 / §1 按钮栏 / §2 浮层 / §6 字段 -->
  </div>
</a-col></a-row>
```

```css
<件根> { /* 完整 token 块见 tokens.md，整段粘这里 */ }
<件根> *, <件根> *::before, <件根> *::after { box-sizing: border-box; }
<件根> .is-hidden { display: none !important; }
```

- 件根用 `id`：云枢渲染时会剥掉 `<a-col>` 第一个子元素的 `class`。
- token 与 `.is-hidden` 只在这定义一次；控件全继承。件根本身即一张 v6 卡片（`border-split` 描边 + `radius-lg` + `--pv-gap` 内边距）。
- 所有选择器必须落在件根内，且只命中自定义元素——不碰 `a-*` 控件（它们的式样只走 `data-style`）。

---

## 组合规则

1. 一个界面一个件根、一份 token；控件在其下继承。
2. 页面 = 展示件（§7）+ 按钮栏（§1）；改数据 = 浮层（§2）套字段（§6），每个字段里放一个控件（§3/§4/§5）。
3. 同一取值集只服务一张映射表：徽标、格子、选项的 `data-*` 原文必须同源（同一枚举、同一字面）。
4. 跨控件不引用 id；显隐、报错、选中全走状态类。
5. 浮层打开时页面主按钮 `disabled`，保证同屏一个实心。

## 移植到新表单

1. HTML：摘控件骨架，件根用 `id`。
2. CSS：件根贴 token 块 + 状态映射表按业务枚举填行 + 所用控件的式样段。
3. JS：只翻状态类与 `data-*`；渲染拼字符串一次赋值；浮层压平台操作条。
4. 探针验（`preview-probe.md`）：控件 × 变体 × 状态 每条一个实测值。
5. 三件套同批复贴平台三扇窗。
6. 换前缀时三处一起换：骨架的 class、式样段的选择器、JS 里 `querySelector` 的字符串——漏一处状态类就翻不动。
