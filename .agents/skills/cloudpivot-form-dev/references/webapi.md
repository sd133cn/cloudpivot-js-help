# OpenWebAPI：表单自己调用的平台接口

这组接口是**云枢表单自己使用**的——表单二开 JS 用 `axios` + `config.apiHost` 调它们，是控件 API 够不着时的取数通道：拉其他单据列表、发起与审批流程、查组织人员。页面内交互仍走 `code-patterns.md` 的控件 API。

**不是第三方对接接口**：本文件只管表单页面内调用；外部系统对接云枢是平台另一套开放接口（token 鉴权、每请求显式传 `userId`），不在本仓库范围，不要拿这 22 端点去对接外部系统。

语料出处：平台 6.15.13 的 Knife4j 导出，原文在仓库根 `OpenWebAPI/`——`04_OpenWebAPI_OpenAPI.json`（结构化 schema，适合 grep）、`04_OpenWebAPI.md`（**每个端点带请求/响应示例**，拿不准请求体长什么样就按端点名定位读示例）。本文件是蒸馏，字段级细节以原文为准。

## 通用契约

- 全部 **POST + `Content-Type: application/json`**，参数走 body。
- URL：导出里是双前缀 `/api/api/v2/...`（Knife4j 把应用 context-path `/api` 和控制器映射 `/api/v2` 拼在一起所致）。表单页面里从 axios 调时以 `config.apiHost` 起头拼短路径，前缀以实测为准——先打 `/organization/user/current`（无参数）确认路径和会话身份，再写业务请求。
- 统一响应包装，**先判 errcode 再取 data**：

  ```json
  { "data": { }, "errcode": 0, "errmsg": "提示消息", "traceId": "" }
  ```

  `errcode === 0` 成功；失败用 `errmsg` 给用户，报障时带上 `traceId`。
- 鉴权：导出只声明了 `Authorization` 请求头（apiKey/header）。从表单页面调用时**自带页面会话**（axios + `config.apiHost` 即可，和「HTTP 请求」范式一样不用管 token）；多数查询隐式按会话解析出的"当前用户"限定范围（如待办只返回本人任务）。这套接口只配表单页面会话用，不对外部系统提供对接口径。
- **本地校验**：给这些端点拼请求体后，先过 `npm run validate-api -- <端点> --body '{...}'`（短端点名可用，`--list` 列端点、`--schema` 看结构）。必填/类型/枚举违规=错误；未知字段=警告（含把 `depatmentId` "改正拼写"的情况）；动态业务数据 `data` 不误报。控制台乱码先 `chcp 65001`。

## 核心对象 BizObjectModel（表单数据类接口共用）

| 字段 | 说明 |
|---|---|
| `schemaCode` | 数据模型编码（`MDL…`，即 custom.html 里关联表单的 data-schema-code） |
| `sheetCode` / `formCode` | 表单编码 |
| `id` | 业务对象 id（objectId） |
| `name` / `sequenceNo` | 标题 / 单据号 |
| `status` | 数据状态。原文 enum 为 `["UPDATE}","{NEW"]`——导出的笔误，按 `NEW`/`UPDATE` 用，实测确认 |
| `ownerId` / `workflowInstanceId` | 拥有者 / 关联流程实例 |
| `data` | **业务数据本体**：数据项编码为 key 的键值对 |

`data` 与表单 `onLoad` 的 `data` 对象**同一种格式**（数据项编码→控件值）。因此 **AGENTS.md 约束 12 原样适用于 WebAPI 写子表**：行状态自己设（`Added`/`Modified`/`Deleted`/`Unchange`），别把别处读回行的 `id`/`parentId`/`rowStatus`/`version` 原样带回去。

选人/部门值格式 `SelectionValue`：`{ id, name, type, imgUrl, fullDepartment, … }`。`type` 语义已由官方接入文档确认：**1 部门、2 角色、3 人员**（`unitType` 是否同义仍是推测）。

## 数据项值格式（`data` 对象 / `bizObject.data` 通用，源自官方接入文档）

| 类型 | 值格式 |
|---|---|
| 日期 | 入参按显示格式字符串；出参 `yyyy-MM-dd HH:mm:ss` |
| 数值 | 数字（平台侧 BigDecimal） |
| 单选/下拉 | `value` = `编码_key` 冗余后缀，出入参一致 |
| 复选/多选 | 多个值**分号分隔**的字符串 |
| 附件/图片/手写签名 | `[{fileSize, fileExtension, name, refId, mimeType}]`——上传接口返回原样回传即可，后端不校验内容 |
| 地址 | **JSON 字符串**（不是对象） |
| 人员/部门 | 最简 `[{id, type, name}]`（`type` 见上） |
| 子表 | 行数组，每行 `rowStatus`——官方文档写 `Unchanged`，表单侧控件 API 是 `Unchange`，两套拼写首用实测 |
| 关联表单 | 单选=id 字符串（出参带显示值对象）；多选=id 分号分隔 |

常用引擎 `errcode`：`40005` 权限不足、`302036` 乐观锁（"表单已被X修改"）、`304001/304002` 业务对象、`401033` 流程未发布、`999999` 未知错误。

## 端点速查（共 22 个，全部 POST）

| 组 | 用途 | 路径 | 关键请求字段 → data |
|---|---|---|---|
| 表单 | 加载表单数据 | `/bizobject/load` | `schemaCode`+`sheetCode`+`objectId`（带 `workItemId`+`workflowInstanceId` 则按待办打开）→ `bizObject`、`bizSchema`、`activityCode/Name` |
| 表单 | **表单新增** | `/bizobject/submit` | `bizObject:{schemaCode,sheetCode,data}` → `{objectId,formCode,schemaCode}` |
| 表单 | 保存编辑 | `/bizobject/save` | `bizObject`(含`id`)+可选 `workItemId`/`approval`/`workflowCode` → 回显请求体 |
| 表单 | 删除 | `/bizobject/delete` | `{objectId, schemaCode}` → `true` |
| 表单 | 查列表 | `/bizobject/list` | `schemaCode`、`filters[]`、`orderByFields[]`、`page`/`size`/`showTotal` → `bizObjectPage{content[],totalElements,totalPages}` |
| 表单 | 发起流程 | `/workflow/start` | `workflowCode`+`bizObject`+`actionCode:'submit'` → `{workflowInstanceId,objectId,result}` |
| 表单 | 流程审批 | `/workItem/submit` | `workItemId`+`actionCode:'agree'|'disAgree'`+`approval:{content,result}` → `{result,objectId}` |
| 表单 | 执行业务规则 | `/businessRule/invoke` | `{appCode,schemaCode,businessRuleCode,data}` → 规则返回 |
| 流程 | 可发起流程 | `/workflow/list` | `{isMobile}` → `workflowTreeList[]`（`type:'Folder'|'BizModel'`，取 code） |
| 流程 | 待办 / 已办 | `/workItem/list`、`/workItem/finished/list` | `appCode`/`workflowName`/`wd`/`page`/`size` → `workItemPage.content[]`（`id`=任务id、`instanceId`、`activityName`、`sequenceNo`、`originatorName`） |
| 流程 | 待阅 / 已阅 | `/workItem/circulated/list`、`/workItem/circulated/finished/list` | 同上结构 |
| 流程 | 我的流程 | `/workflow/instance/list` | `appCode`/`workflowCode`/`instanceState`/时间区间 → `workflowInstancePage.content[]` |
| 组织 | 搜人搜部门 | `/organization/search` | `name`（关键字）→ `users[]`、`departments[]`、`usersTotal` |
| 组织 | 用户详情 | `/organization/user` | `{id}` → 用户详情（含 username/mobile/departments[]） |
| 组织 | 当前用户 | `/organization/user/current` | 无参数 |
| 组织 | 子组织树 | `/organization/tree` | `deptIds`（逗号分隔，空=查第一级）→ 部门树 |
| 组织 | 部门详情 | `/organization/department` | `{departmentId}` |
| 应用 | 应用列表 | `/app/list` | `{isMobile,filterNoWorkflow}` → 应用列表 |
| 应用 | 应用目录 | `/app/function/list` | `{appCode}` → 目录/菜单树 |
| 视图 | 列表头 | `/query/header/list` | `{schemaCode,currentAppCode}` → 视图列定义（配合 `/bizobject/list` 选列） |

（路径均省略前缀，见「通用契约」URL 条。）

## 高频细节

**查列表 `/bizobject/list` 的条件**：`filters: [{ propertyCode, propertyValue, op }]`，`op` ∈ `Eq / Like / Gt / Gte / Between / In / IsNull / IsNotNull`；多值用**分号**隔开（`propertyValue:"1;2;3"`）。服务端条件字段有多套（`filters` / `filtersNewCondition` / `queryCondition`），蒸馏版推荐先试 `filters`，不通就照 `04_OpenWebAPI.md`「查询表单数据列表接口」的请求示例改。

**审批 `approval` 对象**：`result` 枚举 `1同意 / 2不同意 / 3转办`；`actionType` 枚举 `1审批 2协办 3加签 4转办 5作废 6结束流程`（2、3 不需要 result）；协办/加签的人放 `relUsers:[{id,type}]`（格式同选人控件）。

**指定下节点参与人**（发起/审批带 `participantInfos`）：`[{ activityCode, participantType:'SINGLE_PARTICIPANT'|'MULTI_PARTICIPANT', participants:[{id,name}] }]`——只在流程有人工指定节点时传。

## 坑（均出自原文核对）

- **`depatmentId` 是服务端真实字段名**（拼写错误，出现在表单新增/发起流程请求里）——写代码照抄这个 typo，改成 `departmentId` 会静默丢参。
- `bizObject` 可选字段一大串，只传必要项即可：新增传 `schemaCode/sheetCode/data`，保存加 `id`。
- 用户/部门响应里混着钉钉同步等大块头字段（`dingUserJson`、`userUnion`…），只取需要的 key，别整体落库或透传前端。
- 保存接口的 `data` 是回显请求体（`响应结果«保存编辑表单-请求»`），不是新对象——别从它取服务端算出的值，需要就再 `load` 一次。
- `replayToken`（重放验证码）在新增/保存/发起里都是可选项，一般不传。
- 本导出**没有**：附件上传、子表单独读写端点——需要时找平台方要更高版本的 OpenWebAPI 文档，别猜路径。
- 本语料也**不是**第三方对接文档（外部系统对接是平台另一套开放接口，鉴权模型不同），别按本文件的端点和鉴权去写外部集成。
