# OpenWebAPI：表单自己调用的平台接口

这组接口是**云枢表单自己使用**的——表单二开 JS 用页面全局 `axios` 调它们（相对路径，见「通用契约」URL 条），是控件 API 够不着时的取数通道：拉其他单据列表、发起与审批流程、查组织人员。页面内交互仍走 `code-patterns.md` 的控件 API。

**不是第三方对接接口**：本文件只管表单页面内调用；外部系统对接云枢走 skill `cloudpivot-openapi`（`/api/openapi/v3`，token 鉴权、每请求显式传 `userId`，原文 `OpenAPI/`），不要拿这 22 端点去对接外部系统。

语料出处：平台 6.15.13 的 Knife4j 导出，原文在仓库根 `OpenWebAPI/`——`04_OpenWebAPI_OpenAPI.json`（结构化 schema，适合 grep）、`04_OpenWebAPI.md`（**每个端点带请求/响应示例**，拿不准请求体长什么样就按端点名定位读示例）。本文件是蒸馏，字段级细节以原文为准。

## 通用契约

- 全部 **POST + `Content-Type: application/json`**，参数走 body。
- URL：**表单页面内 axios 直接用相对路径 `'/api/v2/...'`**（6.14.103 实测跑通，不用拼 `config.apiHost`，更不是导出里的双前缀 `/api/api/v2/...`——那是 Knife4j 把 context-path 拼上去的显示产物）。
- 响应包装**有两种形态，取数要兼容**：导出 schema 声明统一包装 `{ "data": {...}, "errcode": 0, "errmsg": "…", "traceId": "" }`（`errcode === 0` 成功，失败用 `errmsg` 给用户、报障带 `traceId`）；但 6.14.103 页面会话实测 `/bizobject/load`、`/bizobject/list` **无包装**，`bizObject`/`bizObjectPage` 直接挂 `res.data` 下。写 `pg = r.bizObjectPage || (r.data && r.data.bizObjectPage)`，errcode 仅在 `r.errcode !== undefined` 时才检查。
- 鉴权：导出只声明了 `Authorization` 请求头（apiKey/header）。从表单页面调用时**自带页面会话**（axios + `config.apiHost` 即可，和「HTTP 请求」范式一样不用管 token）；多数查询隐式按会话解析出的"当前用户"限定范围（如待办只返回本人任务）。这套接口只配表单页面会话用，不对外部系统提供对接口径。
- **拼请求体拿不准就对照原文**：`OpenWebAPI/04_OpenWebAPI.md` 按端点名读「请求示例」；语雀《Open API（面向客户端接入）》的「业务对象数据入参出参说明」表是数据项入参格式的官方口径（本文件「数据项值格式」节即其蒸馏）。

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

官方入参示例（人员单选，三属性 `id`/`type`/`name`，官方示例不要求更多字段）：

```json
"StaffSingle1703816607318": [
  { "id": "2c928ca1891f2b7101891fa0478c00c2", "type": 3, "name": "s1" }
]
```

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

**查列表 `/bizobject/list` 的条件**（6.14.103 实测跑通，`page` 从 0 起）：`filters: [{ propertyCode, propertyValue, op }]`，`op` ∈ `Eq / Like / Gt / Gte / Between / In / IsNull / IsNotNull`；多值用**分号**隔开（`propertyValue:"1;2;3"`）。

**人员/部门等选人列的条件必须带 `propertyType` 并按数据项入参格式给值**——服务端按 `propertyType`（类型数字编码见「数据项值格式」节：人员单选=50、部门单选=60、日期=3…）把 `propertyValue` 反序列化，值给错整个请求被拒：

```js
// 人员条件：Eq + SelectionValue 数组串（官方示例三属性 id/type/name），propertyValue 是 JSON 字符串不是数组
{ propertyCode: 'Member', propertyType: '50', op: 'Eq', queryFilterType: 'Eq',
  propertyValue: JSON.stringify([{ id: '2c928ca1…', type: 3, name: 's1' }]) }
// 日期条件：Between + 分号分隔的 'yyyy-MM-dd HH:mm:ss' 区间
{ propertyCode: 'Date1794298694422', propertyType: '3', op: 'Between', queryFilterType: 'Between',
  propertyValue: '2026-11-01 00:00:00;2026-11-30 23:59:59' }
```

- 选人列传纯 id 串 + `propertyType:'50'` → 被 fastjson 反序列化拒绝：`JSONException: field null expect '[', but float, pos 3, line 1, column 4 <id>`（响应体是这段错误文本，axios 当字符串返回——`Object.keys(res.data)` 出来是 `"0".."N"` 下标即是此症状）。
- 选人列不带 `propertyType` → 退化为字符串比较：人员列库存的整段 `[{"id":…,"type":3,"name":…}]` JSON 文本，Eq 纯 id 永远 0 条。
- `queryFilterType` 枚举同 `op`；新旧服务端版本读的键不同，两个都带。
- 诚实边界：实测只覆盖「人员 Eq+数组串、日期 Between」两种条件；`name` 属性按官方示例必须给，但服务端匹配是否只看 `id` 未验证；`Like`/`In` 等其他 op 对选人列的行为未实测。查询走页面会话的数据权限，别人创建的单据能否拉到取决于权限配置，遇到 0 条先分清"条件没中"还是"权限过滤"。

服务端条件字段有多套（`filters` / `filtersNewCondition` / `queryCondition`），蒸馏版推荐先试 `filters`，不通就照 `04_OpenWebAPI.md`「查询表单数据列表接口」的请求示例改。

**审批 `approval` 对象**：`result` 枚举 `1同意 / 2不同意 / 3转办`；`actionType` 枚举 `1审批 2协办 3加签 4转办 5作废 6结束流程`（2、3 不需要 result）；协办/加签的人放 `relUsers:[{id,type}]`（格式同选人控件）。

**指定下节点参与人**（发起/审批带 `participantInfos`）：`[{ activityCode, participantType:'SINGLE_PARTICIPANT'|'MULTI_PARTICIPANT', participants:[{id,name}] }]`——只在流程有人工指定节点时传。

## 拿某列「去重后的选项」——非 22 端点，平台运行时接口

场景：二开自造选择器（chips、底部列表）要和平台某个下拉**同一口径**的取值列表，且不想把整表拉回前端再过滤。

`POST /api/runtime/query/listSkipQueryList` —— 名字里的 **Skip 就是服务端 DISTINCT**：返回条数只等于该列不同取值的个数，**不随该表行数增长**，去重/排序/数据权限都在服务端。6.14.103 实测：1683 行的岗位数据库，`totalElements=7`。

```js
var body = { queryCode: '', schemaCode: 'MDL202403105669_02',
  options: { customDisplayColumns: ['CX'] },   // 只回这一列
  orderByFields: ['CX'], orderType: 1,
  page: 0, size: 1000, filters: [], condition: '' };
axios.post('/api/runtime/query/listSkipQueryList', body).then(function (res) {
  var pg = res.data || {};                      // 层数照「通用契约」响应条：业务层在 res.data
  var rows = pg.content || [], list = [];
  for (var i = 0; i < rows.length; i++) {
    var v = rows[i].data && rows[i].data['CX']; // 每行只有 {data:{列编码:值}}，没有 id/owner 那些
    if (v) { list.push(v); }                    // 服务端已去重，前端不再 indexOf 一遍
  }
});
```

- `size` 是**单页上限**不是总量上限：`totalElements` 大于 `size` 时仍有下一页（`page` 从 0 起）。去重后的取值数一般远小于此，但别默认一次拿全——拿不准就先看 `totalElements` 和 `content.length` 是否相等。
- 请求体是「查询表单数据列表接口」`QueryListModel` 的子集（原文 `OpenWebAPI/04_OpenWebAPI.md` 该节，`filters`/`orderByFields`/`page`/`options.customDisplayColumns` 同一套字段），所以**加过滤条件照「高频细节」的 `filters` 写法**。6.14.103 实测 filters 在本端点**生效**，拿到的就是「满足条件的去重值」：文本列 `CX` 上 `Like '线'` → 5 条、`Eq '1线'` → 1 条、不存在的值 → 0 条（同批基准 7 条）。`propertyType` 照「数据项值格式」给（文本 `'1'`、人员 `'50'`、日期 `'3'`），`op` 与 `queryFilterType` 两个键都带；返回 0 条先分清是条件没中还是数据权限过滤。
- 路径**不在 Knife4j 导出里**（`/api/runtime/...` 是平台前端自己在用的运行时接口），别去 `04_OpenWebAPI_OpenAPI.json` 找它；鉴权与相对路径规则和其他接口一致，页面会话自带。

此路不通的两条（6.14.103 实测证伪，别再试）：

1. **`/bizobject/list` 的 `groupByFields` 不去重**——传与不传都全表逐行返回（实测 `total=1683`），它不是 distinct；`columns`/`customDisplayColumns` 只减列不减行。
2. **别想着「藏一个数据项来源下拉、代码读它的 `items`」**——控件层 `items` 给的是 `data-options` 里那段配置 JSON **本身**，不是算好的选项；实测未点开下拉时整棵 Vue 组件树都搜不到取值，点开后才出现在 `dropdown._data.options`。即选项是**懒加载**，隐藏控件永远拿不到。

## 坑（均出自原文核对）

- **`depatmentId` 是服务端真实字段名**（拼写错误，出现在表单新增/发起流程请求里）——写代码照抄这个 typo，改成 `departmentId` 会静默丢参。
- `bizObject` 可选字段一大串，只传必要项即可：新增传 `schemaCode/sheetCode/data`，保存加 `id`。
- 用户/部门响应里混着钉钉同步等大块头字段（`dingUserJson`、`userUnion`…），只取需要的 key，别整体落库或透传前端。
- 保存接口的 `data` 是回显请求体（`响应结果«保存编辑表单-请求»`），不是新对象——别从它取服务端算出的值，需要就再 `load` 一次。
- `replayToken`（重放验证码）在新增/保存/发起里都是可选项，一般不传。
- 本导出**没有**：附件上传、子表单独读写端点——需要时找平台方要更高版本的 OpenWebAPI 文档，别猜路径。
- 本语料也**不是**第三方对接文档（外部系统对接是平台另一套开放接口，鉴权模型不同），别按本文件的端点和鉴权去写外部集成——外部集成走 skill `cloudpivot-openapi`（请求体形状与这里不同，照抄会翻车）。
