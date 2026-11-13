---
name: cloudpivot-form-dev
description: 云枢（CloudPivot）低代码表单二开写法：写或改 src/custom.ts 业务逻辑、在 src/custom.html 增改控件与容器/子表/标签页、挂生命周期事件（onLoad/onRendered/onValidate/onPreAction/onCustomAction）、做校验与按钮；在表单里调用 OpenWebAPI 平台接口（拉其他单据列表、发起与审批流程、查组织人员）。
---

本 skill 只装**按需查的写法**。约束的唯一出处是仓库根 `AGENTS.md`「关键约束」，此处不重复。

语料基线：平台 **6.15.13**（`表单开发API/` 与 `OpenWebAPI/` 均导出于该版本）。平台升级后，先核对原文再信参考。

## 执行顺序

1. 先读 `src/custom.html`，取本次涉及的控件 key、类型和层级（容器/子表内的控件取值路径不同）。
2. 用下面的决策表确定该用哪个生命周期事件或 API 模式。
3. 只打开当前这一步需要的参考：
   - 加控件、改 HTML 结构 → `references/controls-html.md`
   - 写 JS 逻辑 → `references/code-patterns.md`
   - 表单里跨单据/跨流程取数（拉其他单据列表、发起或审批流程、查组织人员）→ `references/webapi.md`
   - 参考未覆盖、或拿不准 API 的属性与语义 → 按下方「API 原文路由」查原文
4. 落笔后逐条对照 `AGENTS.md`「关键约束」自查，有一条不过就改掉再交付。

## 决策表

| 要做的事 | 用什么 |
|---|---|
| 初始化表单数据 | `onLoad` 直接改 `data` 对象（渲染前） |
| 初始化后设置控件值 | `onRendered` + `this.key.value` |
| 修改数据权限 | `onLoad` 改 `dataPermission.key` 的 `e`/`v`/`r` |
| 提交前校验 | `onValidate` 返回 `false` 阻止 |
| 阻止按钮操作 | `onPreAction` 返回 `false` |
| 表单自定义按钮 | HTML `<action text code>` + `onCustomAction` |
| 子表自定义按钮 | HTML `<a-sheet-action code text>` + `sheet.sheetActionDown(...)` |
| 操作后处理 | `onActionDone` 检查 `httpRes` |
| 子表增删行 | `appendRow` / `appendRows` / `insertRow(s)` / `removeRow(s)` / `removeAllRow` |
| 子表读写单元格 | `getCell(row, colOrKey)` / `rows[i].value` |
| **直接改子表数据对象**（`value = rows`、`onLoad` 里改 `data.sheetKey`） | **必须自己设 `rowStatus`**：`Added`/`Modified`/`Deleted`/`Unchange`（走控件 API 才由平台维护）→ `references/code-patterns.md`「子表行状态 rowStatus」 |
| 只改子表里少数几行 | 别整表重建：取回行、改字段、该行 `rowStatus='Modified'`（删除标 `'Deleted'`、新增标 `'Added'`），其余不动 |
| 用 API 或别处读回的子表数据整表替换 | **先逐行 `delete` 掉 `id`/`parentId`/`rowStatus`/`version` 再赋**——带着源单据的状态赋值不生效 |
| 取子表勾选行 | `getCheckedRows()` |
| 监听控件变化 | `valueChange.subscribe` / `propertyChange.subscribe` |
| 监听子表行列变化 | `rowChange` / `getRowValueChange(i)` / `getColumnValueChange(key)` |
| 发 HTTP 请求 | 全局 `axios`，URL 前缀 `config.apiHost` |
| 提示 / 确认框 | `this.$message.success|error|loading` / `this.$confirm({...})` |
| 代码里触发提交、暂存 | `this.doAction('submit'|'save')` / `this.submit()` |
| 隐藏按钮 | 系统按钮在 `onLoad` 设 `visible=false`；自定义按钮在 `onRendered` 设 `actionController.visible=false` |
| 表单里调云枢平台接口（拉其他单据列表、发起/审批流程、查组织） | `axios` + `config.apiHost`（`code-patterns.md`「HTTP 请求」范式）调 OpenWebAPI → `references/webapi.md`。带页面会话，不用管 token；请求体可先过 `npm run validate-api` |

## API 原文路由

原文都在仓库根，是从平台导出的，API 的唯一出处——不要抄进 references：

| 查什么 | 读哪个 |
|---|---|
| 生命周期事件的完整参数与时序 | `表单开发API/2.表单生命周期API.md` |
| 控件属性、方法、事件名 | `表单开发API/3.表单控件API.md` |
| 下拉/单选等选项配置 | `表单开发API/4.表单控件选项API.md` |
| `h3form` 全局变量（config、userInfo 等） | `表单开发API/表单在线开发全局上下文变量（h3form）标准化属性及释义.md` |
| 子表扩展 API | `表单开发API/表单HTML二开-子表API扩展.md` |
| 子表自定义按钮挂载 | `表单开发API/使用说明-子表新增自定义按钮及事件挂载.md` |
| 冷门用法、报错语义 | `表单开发API/1.表单开发Q&A.md` |
| OpenWebAPI 端点完整字段、枚举、schema | `OpenWebAPI/04_OpenWebAPI_OpenAPI.json`（grep 端点名或 schema 名） |
| OpenWebAPI 端点的请求/响应示例 | `OpenWebAPI/04_OpenWebAPI.md`（按「## 端点名」定位「请求示例」） |
