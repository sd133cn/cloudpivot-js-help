# OpenAPI V3 端点速查（40 端点，平台 6.15.13 导出蒸馏）

鉴权见同目录 `auth.md`。本文件是蒸馏，**字段级细节以原文为准**：原文随本 skill 打包在 `references/raw/`——`03_OpenAPI.md` 按「## 中文标题」定位（本文件括号内的 md 行号即该文件行号，逐字拷贝、行号可信；端点节格式固定：标题/接口地址/请求示例/请求参数表/响应示例）；schema 与枚举 grep `references/raw/03_OpenAPI_OpenAPI.json`（UTF-8 明文，中文可直接 rg，如 `rg 发起流程请求`）。若项目根另有 `OpenAPI/` 目录且同版本，二者同源。

## 通用契约

- 除 `subscription/list` 与 `subscription/model/list` 两个 GET 外，**全部 POST + JSON body**；无 header/query/path 参数（导出 JSON 里 0 个）。
- **请求体平铺，没有包装层**：v3 的 `/bo/create` 等直接在顶层给 `data`/`schemaCode`/`userId`。OpenWebAPI(04) 的 `{bizObject:{schemaCode,data}}` 嵌套是 **04 的形状，抄过来是经典翻车**（服务端读不到 data）。每个端点照自己的字段表拼，别从别的口径搬形状。
- 统一响应包装 `{ data, errcode, errmsg, traceId }`，`errcode===0` 成功；失败报障给平台方时带 `errmsg` + `traceId`。未带 token 的 401 是另一种包装（见 auth.md 实测），代码里 `errcode` 判断前先确认响应真有这个键。
- **`userId` 是请求体字段（操作人身份）**：30 个请求 schema 带它。流程类操作端点全部**必填**；bo 增删改查里可选（不传时归属/权限按哪个用户算，原文未说明——首用时显式传，别赌默认）。仅 `activity/list_reject_available`、`start_end_activity/get`、`workflow_predict` 三端点没有 userId 字段。
- `data` 业务数据：原文口径「数据格式与对应的业务模型一致」——选人 `[{id,type,name}]`、多选分号分隔、子表行数组带 `rowStatus` 等，官方协议有逐类出入参对照表（见下方「数据项值格式」节）。
- **组织类字段可免反查直传外部 ID**：官方协议（`raw/00_接入协议.md:93-122`）称支持用 `{"corpId":"…","sourceId":"…"}` 对象替换相关组织元数据 id——`departmentId` 换 `deptBizId`、`userId` 直接给对象；`sourceId` 对应平台 `h_org_user.userId` / `h_org_department`/`h_org_role`/`h_org_role_group` 的 `sourceId`。**但 03 导出的字段表里没有 deptBizId、userId 仍标 string**——schema 未回显此优化，首用实测；不通就回退「先 `/organization/user/get` 反查内部 id」。
- **HTTP 状态码分流**：业务响应恒 200（错误看 `errcode`，协议:138）；但鉴权失败在 Spring Security 层直接 401、包装体也不同（见 auth.md 实测）——判 `errcode` 前先判 HTTP 状态码。

## 数据项值格式（`data` 本体通用，官方协议逐类定义于 `raw/00_接入协议.md:195-218`，含完整入参/出参示例）

官方出入参对照表（协议:195-218）逐类给到入参/出参两种格式，本表是浓缩；争议时读原文表格行。出参普遍比入参**多带冗余**：单选/下拉出参多 `<编码>_key` 字段（存选项 key）；关联表单出参是对象（入参是 id）；人员出参带 `departmentId`(主部门)/`fullDepartment`(全路径)/`departments[]`。

| 类型 | 值格式 |
|---|---|
| 日期 | 入参按显示格式字符串；出参 `yyyy-MM-dd HH:mm:ss` |
| 数值 | 数字（平台侧 BigDecimal） |
| 单选/下拉 | `value` = `编码_key` 冗余后缀，出入参一致 |
| 复选/多选 | 多个值**分号分隔**的字符串 |
| 附件/图片/手写签名 | `[{fileSize, fileExtension, name, refId, mimeType}]`——上传接口返回什么就原样回传什么，**后端不校验内容**（协议:206）；上传接口本身协议只提及未给地址、03 导出也没有——先要有别的途径把文件传进平台 |
| 地址 | **JSON 字符串**（不是对象） |
| 人员/部门 | 最简 `[{id, type, name}]`，`type`：**1 部门、2 角色、3 人员** |
| 子表 | 行数组，每行 `rowStatus`——官方接入文档写 `Unchanged`，表单侧控件 API 是 `Unchange`，两套拼写首用实测。**回写别处读回的行（`/bo/get`、其他单据）前先逐行 `delete` 掉 `id`/`parentId`/`rowStatus`/`version`**——带着源单据的状态和 id 赋值不生效或写坏范围；新增行标 `Added`、改动行标 `Modified`、删行标 `Deleted` |
| 关联表单 | 单选=id 字符串（出参带显示值对象）；多选=id 分号分隔 |

**propertyType 有两套数字编码，别互相串用**：

- **数据项类型（官方协议 enum，`raw/00_接入协议.md:218`；03 导出 filters 字段表声明的可用值与它一致：`0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,50,51,60,61`）**：短文本 `0`、长文本 `1`、数值 `2`、日期 `3`、逻辑 `4`、混合选人 `5`、附件 `6`、审批意见 `7`、子表 `8`、关联单选 `9`、地址 `10`、关联多选 `11`、单选 `12`、复选 `13`、下拉 `14`、下拉多选 `15`、人员 `50/51`、部门 `60/61`。
- **表单页内 `/api/v2` 侧 6.14.103 实测可用编码**：文本 `'1'`、日期 `'3'`、数值 `'4'`、多选 `'6'`、人员 `'50'`、部门 `'60'`（见 cloudpivot-form-dev 侧参考）。

人员/部门/日期两套里数值巧合相同（50/60/3），文本/数值/多选完全不同。**v3 filters 写条件首用先按 03 声明的数据项类型 enum 试**（文本列先 `'0'`），0 条又怀疑类型时换表单侧编码对照——两套都错才是值格式问题。

## filters 选人/日期条件（表单侧同接口 6.14.103 实测，v3 filters 同键同反序列化）

**选人列的条件必须带 `propertyType` 并按数据项格式给值**——服务端按 `propertyType` 把 `propertyValue` 反序列化，值给错整个请求被拒：

```js
// 人员条件：Eq + SelectionValue 数组串（三属性 id/type/name），propertyValue 是 JSON 字符串不是数组
{ propertyCode: 'Member', propertyType: '50', op: 'Eq', queryFilterType: 'Eq',
  propertyValue: JSON.stringify([{ id: '2c928ca1…', type: 3, name: 's1' }]) }
// 日期条件：Between + 分号分隔的 'yyyy-MM-dd HH:mm:ss' 区间
{ propertyCode: 'Date1794298694422', propertyType: '3', op: 'Between', queryFilterType: 'Between',
  propertyValue: '2026-11-01 00:00:00;2026-11-30 23:59:59' }
```

- 选人列传纯 id 串 + `propertyType:'50'` → fastjson 拒绝：`JSONException: field null expect '[', but float`（响应体是错误文本而非包装）。
- 选人列不带 `propertyType` → 退化为字符串比较：人员列库存的是整段 JSON 文本，Eq 纯 id 永远 0 条。
- `op` 与 `queryFilterType` 两个键都带（新旧服务端版本读的键不同）。
- 返回 0 条先分清"条件没中"还是"数据权限过滤"（token 应用 + userId 权限双重限定）。

## 组织机构（`03_OpenAPI.md:3183`）

外部来源 ID（钉钉 userid/部门 id 等，文档只说"来源Id"，返回里有 `dingDeptManagerId` 等钉钉字段作旁证）↔ 云枢内部 id 的映射查询。

| 用途 | 路径 | 请求 | 响应 data |
|---|---|---|---|
| 外部ID换用户 | `organization/user/get` (3483) | `sourceId`+`corpId`（表里标非必填，实际都得给） | 用户对象：`id`(云枢内部ID)、`username`、`mobile`、`departmentId`、`departments[]`、`sourceId` 回带 |
| 外部ID换部门 | `organization/department/get` (3186) | 同上 | 部门对象：`id`、`code`、`managerId`、`queryCode`、`children[]`(可嵌套)、`parent`；`unitType` 1部门/2角色/3用户 |

## 表单 Bo（`03_OpenAPI.md:3624`）

| 用途 | 路径 | 必填 → 响应 data |
|---|---|---|
| 查列表 | `bo/list` (5588) | 实践必填 `schemaCode` → `bizObjectPage{content[], totalElements, totalPages, sumLine, sumMap}` |
| 单条详情 | `bo/get` (4016) | `objectId`+`schemaCode`（可选 `perms`:edit/check、`sheetCode`）→ 完整运行时视图：`bizObject`+`bizSchema`+`bizSheet`+`formPermission`+`logInfoList`(审批日志)+`workflowInstanceId`+`activityCode/Name`+`properties` |
| 新增 | `bo/create` (3784) | `data`+`schemaCode`（可选 `departmentId` 空取主部门、`userId`）→ `{bizObjectId, schemaCode}` |
| 更新 | `bo/update` (6020) | 同 create → `{bizObjectId}`。**请求表无独立 id 字段**——目标记录 id 含在 `data` 内（文档未明说，由形状推断，首用实测） |
| 批量新增 | `bo/batchCreate` (3627) | `dataList`+`schemaCode` → `{bizObjectIds[], schemaCode}`；单批上限/部分失败语义文档未写 |
| 删除 / 批量删除 | `bo/delete` (3866) / `bo/batchDelete` (3709) | `bizObjectId`+`schemaCode` / `bizObjectIds[]`+`schemaCode` → boolean |
| 是否存在 | `bo/exists` (3941) | **`objectId`**（不是 bizObjectId）+`schemaCode` → boolean |
| 执行业务规则 | `bo/invokeBizRule` (5508) | `bizRuleCode`+`schemaCode`+`data`（全标可选）→ `returnObject`（形状由规则决定）。无 appCode 字段 |

**`/bo/list` 细节**：
- 条件 `filters: [{propertyCode, propertyType, propertyValue, op, queryFilterType}]`。`op` 枚举比表单侧多：`Between,Eq,Gt,Gte,In,IsNotNull,IsNull,Like,Lt,Lte,NotBetween,NotEq,NotIn,NotLike`；`queryFilterType` 同 op 另加 `NotOf,Of`。`propertyValue` 多值**分号分隔**。选人/日期等条件必须带 `propertyType` 且值按数据项格式给——服务端同一套反序列化，坑与解法见下方「filters 选人/日期条件」节。
- 排序传 `orders:[{dir:ASC|DESC, propertyCode}]` 后 `orderByFields`/`orderType` 作废。
- 列裁剪 `options:{customDisplayColumns:[字段编码], queryDisplayType:DEFAULT|OVERRIDE|APPEND}`。
- 子表分页：`childPageEnable:true`+`childSchemaCode`+`bizObjectId`(主表数据id)。
- **content[] 行结构（2026-11-19 生产环境实测）**：业务值都在 `data` 里，`data` 里的**业务人员/部门字段返回完整 SelectionValue 数组**（`[{id,type,name,imgUrl,fullDepartment,…}]`，选人/选部门列都这样）；行顶层 `ownerId` 是 string id。导出 schema 里 content 人员字段标 string 的写法别照信，以实测形状为准。

## 流程（`03_OpenAPI.md:225`）

操作链上的衔接键：`/workflow/start` 给 `workflowInstanceId` → `/workflow/workitem/list` 给 `content[].id`(=workItemId) → 各 workitem 操作端点吃 `workItemId`。

### 发起与实例查询

| 用途 | 路径 | 必填 → 响应 data |
|---|---|---|
| 发起流程 | `workflow/start` (1396) | `userId`+`workflowCode`+`data`（可选 `departmentId`、`finishStart`——false 只出草稿实例不提交发起节点）→ `{workflowInstanceId}`。**`data` 就是表单数据本身，发起动作随流程实例一并建单**——先 `/bo/create` 再 start 会建出两张单。「对已存在单据发起」文档没有明说字段：`/bo/update` 的 id-in-data 形状提示可试 `data.id`，首用实测 |
| 实例详情 | `workflow/get` (635) | `userId`+(`workflowInstanceId` 或 `objectId` 二选一，objectId 可用表单数据id反查)→ `status`、`originator`、`participants[]`(当前节点+待办人)、`headerAction{}` |
| 实例列表(运维) / 我的流程 | `workflow/instances/list` (841) / `workflow/list` (1031) | `userId`（常用 `page/size/workflowCode/sequenceNo/startTime/endTime(yyyy-MM-dd)`、`instanceState:DRAFT,PROCESSING,COMPLETED,CANCELED,EXCEPTION`、`endStatus:APPROVAL,ABORT_END,OPERATION`）→ `workflowPage.content[]`：`instanceId`、`bizObjectId`、`state`(响应含 APPROVED/TOPPING_OFF，比请求枚举多)、`participant/participantName` |
| 取消(作废) / 删除 / 强制结束 | `workflow/cancel` (413) / `workflow/delete` (488) / `workflow/finish` (562) | cancel: `userId`+`workItemId`+`workflowInstanceId`；delete: `userId`+`workflowInstanceId`（**连 BO 数据一起删**）；finish: `userId`（`workflowInstanceId` 文档标可选，可疑）。→ boolean |

### 任务查询与操作

所有操作端点 `userId` 必填、响应 boolean；涉及"给别人"的字段一律 **`participantors: string[]`（用户id数组，平台拼写如此——写成 participants 会静默丢参）**。

| 用途 | 路径 | 必填 |
|---|---|---|
| 待办/已办/待阅/已阅列表 | `workflow/workitem/list` (2652) | `userId`；`workItemsType` 0/1/2/3 区分四类（**文档没给映射**，按标题顺序推测 0待办/1已办/2待阅/3已阅，首用实测）；常用 `page/size/workflowCode/originator/activityName/startTime/endTime`。行内关键字段 `id`(workItemId)、`instanceId`、`activityCode/Name`、`state`、`participant`（行内无 sequenceNo，文档如此） |
| 任务详情 | `workflow/workitem/get` (2512) | `userId`+`workItemId` → `state`(NOTSTARTED/INPROGRESS/FINISHED/CANCELLED/DRAFT/REVOKE)、`approval`(AGREE/REJECT/FORWARD/…)、`participant`、`usedtime`(拼写如此) |
| 节点许可动作 | `workflow/action/list_available` (228) | `userId`+`workItemId` → 布尔开关 `adjustParticipant/assist/circulate/finishInstance/forward/reject/rejectToFixded/rejectToStart/retrieve`+`rejectToActivityCode`——做审批按钮显隐/操作前预检 |
| 提交(审批) | `workflow/workitem/submit` (3025) | `userId`+`workItemId`；可选 `agree`(true同意/false不同意)、`comment`、`data`(回写表单数据)。**没有 participantInfos 字段**——选人提交在本端点传不了 |
| 驳回 | `workflow/workitem/reject` (2867) | `userId`+`workItemId`+`rejectToActivityCode`（目标节点编码，来自下行或 list_available）；可选 `comment`、`data`、`submitToReject` |
| 可驳回节点列表 | `workflow/activity/list_reject_available` (324) | `activityCode`+`workflowInstanceId` → `activities[].activityCode/Name` |
| 转办/加签/协办/传阅 | `workflow/workitem/forward` (2435) / `adjust` (2204) / `assist` (2281) / `circulate` (2358) | `userId`+`workItemId`+`participantors[]`；可选 `comment`——四者同构 |
| 撤回已办 | `workflow/workitem/retrieve` (2948) | `userId`+`workItemId`+`activityCode`+`workflowInstanceId` 四个全必填 |
| 通用任务操作 | `workflow/workitem_action` (3104) | `userId`+`workItemId`+`workItemAction`(**与流程按钮编码一致**，无枚举可查——去流程模板里读按钮 code)；可选 `participantors`、`comment` |

### 预测与选人辅助

| 用途 | 路径 | 要点 |
|---|---|---|
| 下一节点参与人 | `workflow/next_activity_participants/get` (1220) | `userId`+`activityCode`+`workflowCode`+`bizObject{id,schemaCode,data}` → `participantChoose`(是否需选人)、`participantInfos[]`(`participantType:SINGLE/MULTI_PARTICIPANT`、`participants[].unitType` 1部门/2角色/3用户)。响应里的 `participantInfos` 不是任何操作端点的入参（见上表 submit 行） |
| 流程预测 | `workflow/workflow_predict` (2098) | `workflowInstanceId` → `participanInfoVOList[]`（拼写少 t） |
| 开始/结束节点配置 | `workflow/start_end_activity/get` (1482) | `workflowInstanceId` 或 `workflowCode`+`workflowVersion`；响应是完整 Activity 配置（约600行 schema，读流程定义结构用） |

## 应用（`03_OpenAPI.md:26`）

| 用途 | 路径 | 要点 |
|---|---|---|
| 有权限的应用列表 | `app/list` (93) | 可选 `clientType:PC|APP`(默认PC)、`userId` → `data.appPackageModels[]`：`code`(应用编码)、`name`、**`appKey`/`appSecret`(原文注"用于获取token")**、`agentId`(钉钉微应用) |
| 应用元数据导出 | `app/export/lifecycle` (29) | `name`/`version` 可选；**原文响应参数「暂无」、示例为空**——返回结构未定义，别依赖 |

## 订阅（`03_OpenAPI.md:6100`）

表单数据事件推给外部系统。两个 list 是**仅有的 GET**。

| 用途 | 路径 | 要点 |
|---|---|---|
| 订阅表单事件 | `subscription/bizobject/register` (6103) POST | `callback`(必填)+`eventType`(0所有/1新增/2更新/3删除)；可选 `appCode`/`schemaCode`/`options` → boolean |
| 订阅实体类 | `subscription/model/register` (6393) POST | `callback`+`eventTarget`(取自 model/list)+`eventType`；可选 `options` |
| 可订阅实体清单 | `subscription/model/list` (6333) GET | 无参 → `subscribeModelSet: string[]` |
| 订阅列表 | `subscription/list` (6255) GET | 无参 → `eventModelList[]`：`id`、`callback`、`clientId`、`eventTarget(Type)`、`eventType`、`options`（无 status 字段） |
| 删除订阅 | `subscription/delete` (6183) POST | `id` |

**options 鉴权对象**（6145/6434 行原文照抄）：`{"url":"<地址>/api/oauth/token","client_id":"…","client_secret":"…","grant_type":"client_credentials"}`——client_id/secret 来自 `base_security_client` 表，secret 去掉 `{noop}`。**语义边界**：文档只说这是"OpenAPI鉴权参数"，没写清平台回调 callback 时拿它做什么（取 token 后带在回调请求里让第三方校验？），首用先看回调实际收到的请求再定。

## 坑与可疑拼写（均出自导出核对）

- `participantors`（不是 participants）、`rejectToFixded`、`participanInfoVOList`、`usedtime`、`appSecret` 说明里的 "sercret"——**照抄平台拼写**，改成"正确"拼写会静默丢参。
- `bo/exists` 与 `bo/get` 用 `objectId`，`bo/delete` 用 `bizObjectId`——同一件事两个字段名。
- `/bo/get` 里 `bizObject.status` 枚举渲染损坏为 `UPDATE},{NEW`（Knife4j 导出笔误，按 NEW/UPDATE 用，与表单侧一致）。
- `workflow/finish` 的 `workflowInstanceId` 标可选但没它无法定位实例——传。
- `workflow/delete` 连表单数据一起删，不是只删流程。
- 本导出**没有**：附件上传端点、token 获取端点本体、任何运行时内部接口（如 `/api/runtime/...`）——别猜路径，这些只配表单页面会话用，不对外部系统开放。附件值格式（`[{fileSize,fileExtension,name,refId,mimeType}]` 原样回传）见「数据项值格式」节，但**先要有别的途径把文件传进平台**。
- **Windows 手测编码坑**：`curl` 响应经 PowerShell 管道变量会按 OEM 代码页重编码，中文值损坏、JSON 解析报 "unexpected character"——用 `curl -o 文件` 直接落盘，或 node fetch 发请求。
- 常用引擎 `errcode`（跨端点通用）：`40005` 权限不足、`302036` 乐观锁（"表单已被X修改"）、`304001/304002` 业务对象、`401033` 流程未发布、`999999` 未知错误。**全量引擎统一错误码表（1300+ 行，含 100002 参数为空/100003 参数错误/100010 重复订阅等）**在 `raw/00_接入协议.md`「异常与返回码」节——拿到没见过的 errcode 先 grep 数字，errmsg 即语义。
- 权限模型文档没讲：token 对应应用能看哪些数据、`userId` 传了别人数据权限怎么算——实测前先按「应用授权 + 该用户在平台的权限」双限制理解，拉到 0 条先分清"条件没中"还是"权限过滤"。
