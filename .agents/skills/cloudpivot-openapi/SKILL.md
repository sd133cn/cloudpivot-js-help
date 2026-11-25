---
name: cloudpivot-openapi
description: 云枢第三方客户端 OpenAPI（/api/openapi/v3）对接写法：外部系统 token 鉴权、表单数据增删改查与批量、发起/审批/驳回/转办/加签/传阅/撤回流程、待办列表、组织人员按外部 ID 反查、事件订阅回调。用于写外部系统（ERP/门户/脚本/中间件）连云枢的代码，或排查 401/该客户端不合法/errcode 非 0。不负责表单页面内二开（页面内走 OpenWebAPI /api/v2 表单会话口径）。本 skill 自带 API 原文（references/raw/），可独立复制到其他项目。
---

# 云枢第三方 OpenAPI 对接

外部系统连云枢走 **OpenAPI V3**（`/api/openapi/v3/...`）：OAuth2 token 鉴权、操作人 `userId` 每请求显式传。与表单页内的 OpenWebAPI(`/api/v2`) 是两套口径，**端点、请求体形状、鉴权都不同，不要互相照搬**——最常见翻车是把 04 的 `{bizObject:{...}}` 包装形状抄进 v3 请求体（v3 是平铺，见 endpoints.md「通用契约」）。

语料基线：官方《Open API（面向客户端接入）》v2.0 协议 + 平台 **6.15.13** 导出，原文随本 skill 打包在 `references/raw/`（`00_接入协议.md` 协议层，`03_*` 端点 schema；若项目 `docs/openapi/` 恰好也有同版本原文，与 raw 同源、行号一致）。平台升级后先核对原文再信参考。

## 执行顺序

1. 先拿 token（见 references/auth.md）——所有 v3 端点无 token 一律 401。
2. 用下面的决策表确定端点，读 `references/endpoints.md` 的速查表拿必填字段。
3. 拼请求体拿不准 → 打开原文 `references/raw/03_OpenAPI.md` 按「## 中文标题」定位「请求示例」。
4. 写 `data` 业务数据前先读表单的模型结构（数据项编码为 key）；子表/选人/附件等逐类出入参格式查 endpoints.md「数据项值格式」（源头是协议原文表）。

## 决策表

| 要做的事 | 用什么 |
|---|---|
| 外部系统换 token | `POST /api/oauth/token`（client_credentials）→ auth.md |
| 查表单数据列表（条件分页） | `POST /bo/list`——filters 选人/日期条件的 propertyType 坑见 endpoints.md 对应节 |
| 新增/更新/删除一条表单数据 | `/bo/create` `/bo/update` `/bo/delete`（批量：`/bo/batchCreate` `/bo/batchDelete`） |
| 拉一条数据完整运行时视图（含权限/日志/模型） | `/bo/get`（列表行是精简版，人员字段为字符串；要 SelectionValue 对象用 get） |
| 发起流程 | `/workflow/start`（`userId` 必填；**`data` 就是表单数据本身，发起时随流程实例一并建单——先 `/bo/create` 再 start 会建出两张单**；`finishStart:false` 只出草稿实例） |
| 审批/驳回/转办/加签/协办/传阅 | `/workflow/workitem/submit|reject|forward|adjust|assist|circulate`（人一律 `participantors:string[]`——**平台拼写如此，不是 participants**） |
| 撤回自己已办的任务 | `/workflow/workitem/retrieve`（activityCode+workflowInstanceId 也必填） |
| 自定义按钮触发的动作 | `/workflow/workitem_action`，`workItemAction`=流程按钮编码 |
| 查待办/已办/待阅/已阅 | `/workflow/workitem/list`，`workItemsType` 0/1/2/3（文档未给映射，按标题顺序推测 0待办/1已办/2待阅/3已阅，首用实测） |
| 外部 ID（钉钉 userid 等）换云枢用户/部门 | `/organization/user/get` `/organization/department/get`（sourceId+corpId）；另有协议宣称的组织字段直传 `{"corpId","sourceId"}` 对象（03 schema 未回显，首用实测）→ endpoints.md 通用契约 |
| 表单事件推给自己的系统 | `/subscription/bizobject/register`（回调鉴权 options 见 endpoints.md 订阅节） |

## API 原文路由

| 查什么 | 读哪个 |
|---|---|
| **接入协议**：OAuth 流程、client 申请入口、组织字段 {corpId,sourceId} 直传、数据项出入参对照表、引擎统一错误码全表 | `references/raw/00_接入协议.md`（语雀官方导出，v2.0 2024-04-28） |
| 端点完整字段表 + 请求/响应示例 | `references/raw/03_OpenAPI.md`（按「## 中文标题」定位） |
| schema 定义、枚举、grep 字段名 | `references/raw/03_OpenAPI_OpenAPI.json`（UTF-8；PS5.1 读要 `[IO.File]::ReadAllText(path,[Text.Encoding]::UTF8)`） |
| 数据项值格式（选人/多选/子表 rowStatus）、filters 条件写法 | `references/endpoints.md`「数据项值格式」「filters 选人/日期条件」两节 |
