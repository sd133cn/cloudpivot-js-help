# 式样 token（Ant Design v6 默认浅色主题）

来源：`design.md`（v6 默认浅色主题 token 集）+ `@ant-design/colors@8.0.1` `es/presets.js`（预设色阶，已逐档核对）。

本页是可粘贴的通用版：把 `<件根>` 换成你的根选择器即可，其余照抄。整段 token 只挂件根一处。

## token 块（整段粘到件根）

一个界面一个件根，token 只挂件根，件内元素全用 `var()`——换主题只改一处，且不会污染别的表单。

```css
<件根> {
  /* 品牌与语义色 */
  --pv-primary: #1677ff;
  --pv-primary-hover: #4096ff;
  --pv-primary-active: #0958d9;
  --pv-primary-bg: #e6f4ff;
  --pv-error: #ff4d4f;
  /* 文字与遮罩走 rgba 阶梯，不透明度灰——浮层上叠色时才不破坏底色 */
  --pv-text: rgba(0, 0, 0, .88);
  --pv-text-2: rgba(0, 0, 0, .65);
  --pv-text-3: rgba(0, 0, 0, .45);
  --pv-text-dis: rgba(0, 0, 0, .25);
  --pv-mask: rgba(0, 0, 0, .45);
  /* 三层背景与描边 */
  --pv-bg-layout: #f5f5f5;
  --pv-bg-mid: #fafafa;          /* design.md 的 surface-container */
  --pv-bg-container: #fff;
  --pv-border: #d9d9d9;
  --pv-border-split: #f0f0f0;
  /* 圆角分档：控件 6 / 容器 8 / tag·chip 4 / segmented 内边 0 / 圆点 9999 */
  --pv-radius: 6px;
  --pv-radius-lg: 8px;
  --pv-radius-sm: 4px;
  --pv-radius-none: 0px;
  --pv-radius-full: 9999px;
  /* 4px 网格 */
  --pv-gap-xs: 4px;
  --pv-gap-sm: 8px;
  --pv-gap: 16px;
  --pv-gap-lg: 24px;
  /* 动效只有三档，曲线用 motionEaseInOut */
  --pv-fast: .1s;
  --pv-mid: .2s;
  --pv-slow: .3s;
  --pv-ease: cubic-bezier(.645, .045, .355, 1);
  /* 扁平优先：阴影只给真正浮起来的层 */
  --pv-shadow-popup: 0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 9px 28px 8px rgba(0, 0, 0, .05);
  --pv-shadow-tertiary: 0 1px 2px 0 rgba(0, 0, 0, .05), 0 1px 6px -1px rgba(0, 0, 0, .03), 0 2px 4px 0 rgba(0, 0, 0, .03);
  /* 光晕值 design.md 未列（只给全局 token），按主色/错误色 15% 透明度推 */
  --pv-outline: 0 0 0 2px rgba(22, 119, 255, .15);
  --pv-outline-err: 0 0 0 2px rgba(255, 77, 79, .15);
  /* 移动端触控下限（v6 桌面 control-height 32px，件要在手机 webview 里点） */
  --pv-ctl-h: 44px;
  --pv-cell-h: 44px;
  --pv-chip-h: 36px;
  position: relative;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: var(--pv-text);
  background: var(--pv-bg-container);
  border: 1px solid var(--pv-border-split);
  border-radius: var(--pv-radius-lg);
  padding: var(--pv-gap);
  margin: 8px 0;
}
<件根> *,
<件根> *::before,
<件根> *::after { box-sizing: border-box; }
<件根> .is-hidden { display: none !important; }
```

`--pv-cell-h` / `--pv-chip-h` 只在用到日历格（`controls.md` §7）或选项 chip（§3/§4）时才需要，用不到的档删掉即可；`--pv-primary-*`、文字阶梯、描边、圆角、间距、动效、阴影、光晕是全部控件共用的，别裁。

## 状态映射表（调用方填的唯一一处）

底 = 预设色 **-1** 档，字 = 同色系 **-7** 档。键写业务原文，一行一档；消费者只写 `var(--st-bg, 兜底)` / `var(--st-fg, 兜底)`，不许各自复制色值。

```css
/* 槽位：每档状态一行，键是数据里的原文，值从下面对照表选 */
<件根> [data-status="<取值 A>"] { --st-bg: <预设 -1>; --st-fg: <同色 -7>; }
<件根> [data-status="<取值 B>"] { --st-bg: <预设 -1>; --st-fg: <同色 -7>; }
/* 「还没填」不是业务状态，是缺省观感，固定这样写并把条目放最后 */
<件根> [data-status="<未填>"]   { --st-bg: #fff;      --st-fg: rgba(0, 0, 0, .45); }
```

预设色 `-1 / -7` 对照（`@ant-design/colors@8.0.1` presets，已核对）：

| 色档 | -1（底） | -7（字） | 通常给 |
|---|---|---|---|
| green | `#f6ffed` | `#389e0d` | 顺利/正常 |
| cyan | `#e6fffb` | `#08979c` | 冷色并列档 |
| blue | `#e6f4ff` | `#0958d9` | 信息（-1/-7 与 `--pv-primary-bg`/`--pv-primary-active` 同值） |
| geekblue | `#f0f5ff` | `#1d39c4` | 蓝但要比 blue 更深 |
| purple | `#f9f0ff` | `#531dab` | 稀有/特殊 |
| gold | `#fffbe6` | `#d48806` | 待处理 |
| yellow | `#feffe6` | `#d4b106` | 与 gold 需要区分时 |
| orange | `#fff7e6` | `#d46b08` | 提醒 |
| volcano | `#fff2e8` | `#d4380d` | 接近告警但未到 error |
| red | `#fff1f0` | `#cf1322` | 异常（比 `--pv-error` 浅，只作底色） |
| lime | `#fcffe6` | `#7cb305` | 黄绿并列档 |
| magenta | `#fff0f6` | `#c41d7f` | 粉/强调 |

档位选取规矩：

- **中性档不用预设色**：`grey` 预设不是「浅底 + 深字」的阶梯，别拿它当状态色；灰阶直接用 v6 中性 token。
- **同屏档位要互相分得开**：优先跨色相；同色相相邻档（gold 与 yellow）在 44px 小格上分辨力差，能用远色相就别用邻色相。
- **灰阶三档各管一件事，别调近色**：`#f5f5f5`（`--pv-bg-layout`）= 有含义的空态；`#fafafa`（`--pv-bg-mid`）= 不可交互；`#fff` + `.45` 字 = 待填。`#fafafa` 与 `#fff` 只差 2%，靠分工区分，不靠眼睛。
- **数据里的原文必须与映射表逐字一致**（含大小写、空格、全半角）：属性选择器精确匹配，差一个字就落回兜底色。

## 尺寸例外（照搬 v6 会点不准的地方）

| v6 桌面值 | 件里的值 | 为什么 |
|---|---|---|
| `control-height` 32px | `--pv-ctl-h` 44px（按钮/输入） | 移动端 webview，44px 是触控下限 |
| Segmented 项 24px | `--pv-chip-h` 36px，项内 `36 - 4×2` | 同上；轨道仍留 4px 内衬 |
| — | `--pv-cell-h` 44px 日历格 | 320px 宽下 7 列每格 37px，高度不能再降 |

配色、圆角、层级、动效、字号一律照 v6，**只有高度**放宽。

v6 自己认下的 4px 网格例外，照抄别迁移：input 横向内边距 `11px`、Tag 横向内边距 `7px`、Modal 内边距 `20px 24px`。

## 用色与用重的规矩

- **一屏只允许一个实心主按钮**；模式开关用 primary ghost（浅主色底 + 主色字/描边），别升实心。
- **hover/focus 只加描边与光晕，不改底色**——浅状态色底一改就被吃掉。
- **字重只用 400 / 600**。字段标签 400；浮层标题 16px/600。加到 700 或给标签加粗都是走偏。
- **阴影只给真正浮起来的层**：popup 档给浮层，tertiary 档给 Segmented 选中项。卡片、格子、chip 一律靠描边分层。
- **组控件（chips / Segmented）出错只标红提示文字**，控件自身不变色；只有单值控件（input）转 error 描边 + error 光晕。
- **同一种线索只留给一个状态**：今天=主色数字 + 底部 6px 点（不画边框），选中=浅主色底 + 主色描边 + `inset 0 0 0 1px`。两个状态抢同一条线索，等于都没表达。
