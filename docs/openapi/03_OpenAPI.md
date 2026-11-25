# 云枢OpenAPI_V3接口文档


**简介**:云枢OpenAPI_V3接口文档


**HOST**:https://demo.cloudpivot.cn:443


**联系人**:


**Version**:3.0 [6.15.13]


**接口路径**:/v3/api-docs?group=03_OpenAPI


[TOC]






# OpenAPIV3::应用


## 应用生命周期管理导出全部应用元数据


**接口地址**:`/api/openapi/v3/app/export/lifecycle`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>应用生命周期管理使用</p>



**请求示例**:


```javascript
{
  "name": "",
  "version": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|生命周期导出参数模型|生命周期导出参数模型|body|true|生命周期导出参数模型|生命周期导出参数模型|
|&emsp;&emsp;name|名称||false|string||
|&emsp;&emsp;version|版本||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取指定用户有权限的应用列表接口


**接口地址**:`/api/openapi/v3/app/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>统一应用平台使用</p>



**请求示例**:


```javascript
{
  "clientType": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取应用列表请求模型|获取应用列表请求模型|body|true|获取应用列表请求模型|获取应用列表请求模型|
|&emsp;&emsp;clientType|设备类型:PC/APP;不传时默认为PC||false|string||
|&emsp;&emsp;userId|用户Id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«ListAppsResponse»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|ListAppsResponse|ListAppsResponse|
|&emsp;&emsp;appPackageModels|应用列表|array|AppPackageModel|
|&emsp;&emsp;&emsp;&emsp;agentId|钉钉微应用标示|string||
|&emsp;&emsp;&emsp;&emsp;appDescription|应用描述|string||
|&emsp;&emsp;&emsp;&emsp;appGroupName|应用分组名称|string||
|&emsp;&emsp;&emsp;&emsp;appKey|应用Key用于获取token|string||
|&emsp;&emsp;&emsp;&emsp;appNameSpace|应用命名空间|string||
|&emsp;&emsp;&emsp;&emsp;appSecret|应用sercret用于获取token|string||
|&emsp;&emsp;&emsp;&emsp;builtInApp|是否内置应用|boolean||
|&emsp;&emsp;&emsp;&emsp;code|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;enabled|应用是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;favorites|是否收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;fromAppMarket|是否来自应用市场|boolean||
|&emsp;&emsp;&emsp;&emsp;groupId|应用分组编码|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;logoUrl|应用图标地址|string||
|&emsp;&emsp;&emsp;&emsp;logoUrlId|应用图标|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|应用名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;parentApp|应用派生来源|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|应用排序号|integer||
|&emsp;&emsp;&emsp;&emsp;source|应用的来源标识|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"appPackageModels": [
			{
				"agentId": "",
				"appDescription": "",
				"appGroupName": "",
				"appKey": "",
				"appNameSpace": "",
				"appSecret": "",
				"builtInApp": false,
				"code": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"enabled": false,
				"favorites": false,
				"fromAppMarket": false,
				"groupId": "",
				"id": "",
				"logoUrl": "",
				"logoUrlId": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"name_i18n": "",
				"parentApp": "",
				"remarks": "",
				"sortKey": 0,
				"source": ""
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenAPIV3::流程


## 通过任务Id获取节点许可的动作


**接口地址**:`/api/openapi/v3/workflow/action/list_available`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|通过任务Id获取节点许可的动作请求|通过任务Id获取节点许可的动作请求|body|true|通过任务Id获取节点许可的动作请求|通过任务Id获取节点许可的动作请求|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«通过任务Id获取节点许可的动作返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|通过任务Id获取节点许可的动作返回|通过任务Id获取节点许可的动作返回|
|&emsp;&emsp;adjustParticipant|是否允许加签|boolean||
|&emsp;&emsp;assist|是否允许协助|boolean||
|&emsp;&emsp;batchOperate|是否允许批量处理|boolean||
|&emsp;&emsp;circulate|是否允许传阅|boolean||
|&emsp;&emsp;finishInstance|是否直接结束流程|boolean||
|&emsp;&emsp;forward|是否允许转发|boolean||
|&emsp;&emsp;reject|是否允许驳回|boolean||
|&emsp;&emsp;rejectToActivityCode|驳回到指定节点|string||
|&emsp;&emsp;rejectToFixded|是否允许驳回到指定活动|boolean||
|&emsp;&emsp;rejectToStart|是否允许驳回到起始节点|boolean||
|&emsp;&emsp;retrieve|是否允许取回|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"adjustParticipant": false,
		"assist": false,
		"batchOperate": false,
		"circulate": false,
		"finishInstance": false,
		"forward": false,
		"reject": false,
		"rejectToActivityCode": "",
		"rejectToFixded": false,
		"rejectToStart": false,
		"retrieve": false
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 流程节点可驳回的节点列表


**接口地址**:`/api/openapi/v3/workflow/activity/list_reject_available`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "activityCode": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取流程节点可驳回的节点列表请求|获取流程节点可驳回的节点列表请求|body|true|获取流程节点可驳回的节点列表请求|获取流程节点可驳回的节点列表请求|
|&emsp;&emsp;activityCode|节点编码||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取流程节点可驳回的节点列表返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取流程节点可驳回的节点列表返回|获取流程节点可驳回的节点列表返回|
|&emsp;&emsp;activities|可驳回的节点列表|array|流程节点状态视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|流程节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|流程节点名称|string||
|&emsp;&emsp;&emsp;&emsp;activityType|流程节点类型,可用值:CIRCULATE,CONNECTION,END,PARTICIPANT,START,SUB_INSTANCE,SYSTEM_ACTIVITY|string||
|&emsp;&emsp;&emsp;&emsp;checkbox|是否可多选|boolean||
|&emsp;&emsp;&emsp;&emsp;status|流程节点状态：0 已办节点, 1 进行中节点, 2 异常节点,可用值:0,1,2|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"activities": [
			{
				"activityCode": "",
				"activityName": "",
				"activityType": "",
				"checkbox": false,
				"status": ""
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 取消流程


**接口地址**:`/api/openapi/v3/workflow/cancel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "userId": "",
  "workItemId": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|作废流程请求|作废流程请求|body|true|作废流程请求|作废流程请求|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 删除流程


**接口地址**:`/api/openapi/v3/workflow/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>流程相关所有数据都会被删除，包括BO数据</p>



**请求示例**:


```javascript
{
  "userId": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|删除流程实例请求|删除流程实例请求|body|true|删除流程实例请求|删除流程实例请求|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 结束流程


**接口地址**:`/api/openapi/v3/workflow/finish`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "userId": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|结束流程请求|结束流程请求|body|true|结束流程请求|结束流程请求|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 根据流程实例id或bizobjectId查询流程实例


**接口地址**:`/api/openapi/v3/workflow/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "objectId": "",
  "userId": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取流程实例基本信息请求|获取流程实例基本信息请求|body|true|获取流程实例基本信息请求|获取流程实例基本信息请求|
|&emsp;&emsp;objectId|业务数据ID||false|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例id，与objectId二选一||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取流程实例基本信息返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取流程实例基本信息返回|获取流程实例基本信息返回|
|&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;cancelTime|已作废：作废时间|string(date-time)||
|&emsp;&emsp;dataType|数据类型,可用值:NORMAL,SIMULATIVE|string||
|&emsp;&emsp;departmentId|发起人所在的部门id|string||
|&emsp;&emsp;departmentName|发起人所在的部门名称|string||
|&emsp;&emsp;endStatus|流程结束状态|string||
|&emsp;&emsp;finishTime|已完成：完成时间|string(date-time)||
|&emsp;&emsp;headerAction|头部操作区权限|流程实例的头部操作权限|流程实例的头部操作权限|
|&emsp;&emsp;&emsp;&emsp;showAdjust|是否展示调整按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;showCancel|是否展示作废按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;showEditOwner|是否展示拥有者修改按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;showEditable|是否展示编辑按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;showRemove|是否展示删除按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;showUserLog|是否展示用户操作日志按钮|boolean||
|&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;originator|发起人|string||
|&emsp;&emsp;originatorName|发起人姓名|string||
|&emsp;&emsp;participants|当前活动节点信息|array|流程实例的活动节点信息|
|&emsp;&emsp;&emsp;&emsp;activityCode|活动节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|活动节点名字|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;participantRelations|流程实例参与者及委托关系|array|流程实例的参与者信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isTrust|参与者是否被委托|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantVO|流程实例参与者|流程实例参与者|流程实例参与者|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|参与者头像url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|参与者姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceAction|任务来源操作: preAddSign前置加签、consult征询意见，以及其他自定义操作|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustorVO|委托人|流程实例参与者|流程实例参与者|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|参与者头像url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|参与者姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceAction|任务来源操作: preAddSign前置加签、consult征询意见，以及其他自定义操作|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workitemId|任务ID|string||
|&emsp;&emsp;&emsp;&emsp;participants|流程实例参与者|array|流程实例参与者|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|参与者头像url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|参与者姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceAction|任务来源操作: preAddSign前置加签、consult征询意见，以及其他自定义操作|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;workItemSource|任务来源：1系统转办 ,可用值:0,1,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;runMode|运行模式,可用值:AUTO,MANUAL|string||
|&emsp;&emsp;schemaCode|业务模型编码|string||
|&emsp;&emsp;startTime|开始时间|string(date-time)||
|&emsp;&emsp;status|流程实例状态|string||
|&emsp;&emsp;urgencyLevel|紧急状态|integer(int32)||
|&emsp;&emsp;usedTime|进行中：已用时(单位秒)|integer(int64)||
|&emsp;&emsp;version|模型实例数据版本号|number(bigdecimal)||
|&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;workflowName|流程模板名称|string||
|&emsp;&emsp;workflowVersion|流程版本|integer(int32)||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"appCode": "",
		"cancelTime": "",
		"dataType": "",
		"departmentId": "",
		"departmentName": "",
		"endStatus": "",
		"finishTime": "",
		"headerAction": {
			"showAdjust": false,
			"showCancel": false,
			"showEditOwner": false,
			"showEditable": false,
			"showRemove": false,
			"showUserLog": false
		},
		"name_i18n": "",
		"originator": "",
		"originatorName": "",
		"participants": [
			{
				"activityCode": "",
				"activityName": "",
				"name_i18n": "",
				"participantRelations": [
					{
						"isTrust": false,
						"participantVO": {
							"id": "",
							"imgUrl": "",
							"name": "",
							"sourceAction": "",
							"sourceId": "",
							"sourceName": "",
							"workItemType": ""
						},
						"trustorVO": {
							"id": "",
							"imgUrl": "",
							"name": "",
							"sourceAction": "",
							"sourceId": "",
							"sourceName": "",
							"workItemType": ""
						},
						"workitemId": ""
					}
				],
				"participants": [
					{
						"id": "",
						"imgUrl": "",
						"name": "",
						"sourceAction": "",
						"sourceId": "",
						"sourceName": "",
						"workItemType": ""
					}
				],
				"workItemSource": ""
			}
		],
		"runMode": "",
		"schemaCode": "",
		"startTime": "",
		"status": "",
		"urgencyLevel": 0,
		"usedTime": 0,
		"version": 0,
		"workflowCode": "",
		"workflowName": "",
		"workflowVersion": 0
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询流程实例列表


**接口地址**:`/api/openapi/v3/workflow/instances/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询流程实例列表,流程运维使用</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "endStatus": "",
  "endTime": "",
  "instanceState": "",
  "page": 0,
  "sequenceNo": "",
  "size": 0,
  "startTime": "",
  "userId": "",
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询流程实例列表请求|查询流程实例列表请求|body|true|查询流程实例列表请求|查询流程实例列表请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;endStatus|结束状态：APPROVAL(正常流转结束) ABORT_END(审批结束) OPERATION(运维结束)||false|string||
|&emsp;&emsp;endTime|结束时间 格式yyyy-MM-dd||false|string||
|&emsp;&emsp;instanceState|流程实例状态: 不传查全部 DRAFT(草稿) PROCESSING(进行中) COMPLETED(已完成) CANCELED(已作废) EXCEPTION(异常) ||false|string||
|&emsp;&emsp;page|分页-第几页||false|integer(int32)||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|分页-每页多少行||false|integer(int32)||
|&emsp;&emsp;startTime|开始时间 格式yyyy-MM-dd||false|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询流程实例列表请求返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询流程实例列表请求返回|查询流程实例列表请求返回|
|&emsp;&emsp;workflowPage|我的流程信息分页数据|Page«流程实例信息»|Page«流程实例信息»|
|&emsp;&emsp;&emsp;&emsp;content||array|流程实例信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizObjectId|业务ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|数据类型,NORMAL:正常;SIMULATIVE:模拟,可用值:NORMAL,SIMULATIVE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|发起人所在的部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|发起人所在的部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId|流程实例ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator|发起人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName|发起人姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|父级节点 子流程专用|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant|当前处理人ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName|当前处理人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|流程实例状态,DRAFT:草稿、PROCESSING:进行中、COMPLETED:已完成、CANCELED:已作废、EXCEPTION:异常,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustType|委托类型,APPROVAL:委托审批;START:委托发起,可用值:APPROVAL,START|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustee|被委托人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trusteeName|被委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode|流程模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName|流程模板名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本号|integer||
|&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;first||boolean||
|&emsp;&emsp;&emsp;&emsp;last||boolean||
|&emsp;&emsp;&emsp;&emsp;number||integer||
|&emsp;&emsp;&emsp;&emsp;numberOfElements||integer||
|&emsp;&emsp;&emsp;&emsp;pageable||Pageable|Pageable|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;offset||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageNumber||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageSize||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paged||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unpaged||boolean||
|&emsp;&emsp;&emsp;&emsp;size||integer||
|&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;totalElements||integer||
|&emsp;&emsp;&emsp;&emsp;totalPages||integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"workflowPage": {
			"content": [
				{
					"bizObjectId": "",
					"dataType": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"instanceId": "",
					"instanceName": "",
					"originator": "",
					"originatorName": "",
					"parentId": "",
					"participant": "",
					"participantName": "",
					"sequenceNo": "",
					"startTime": "",
					"state": "",
					"trustType": "",
					"trustee": "",
					"trusteeName": "",
					"workflowCode": "",
					"workflowName": "",
					"workflowVersion": 0
				}
			],
			"empty": true,
			"first": true,
			"last": true,
			"number": 0,
			"numberOfElements": 0,
			"pageable": {
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 0,
				"paged": true,
				"sort": {
					"empty": true,
					"sorted": true,
					"unsorted": true
				},
				"unpaged": true
			},
			"size": 0,
			"sort": {
				"empty": true,
				"sorted": true,
				"unsorted": true
			},
			"totalElements": 0,
			"totalPages": 0
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询我的流程列表


**接口地址**:`/api/openapi/v3/workflow/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "appCode": "",
  "endStatus": "",
  "endTime": "",
  "instanceState": "",
  "page": 0,
  "sequenceNo": "",
  "size": 0,
  "startTime": "",
  "userId": "",
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询我的流程请求|查询我的流程请求|body|true|查询我的流程请求|查询我的流程请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;endStatus|结束状态：APPROVAL(正常流转结束) ABORT_END(审批结束) OPERATION(运维结束)||false|string||
|&emsp;&emsp;endTime|结束时间 格式yyyy-MM-dd||false|string||
|&emsp;&emsp;instanceState|流程实例状态: 不传查全部 DRAFT(草稿) PROCESSING(进行中) COMPLETED(已完成) CANCELED(已作废) EXCEPTION(异常) ||false|string||
|&emsp;&emsp;page|分页-第几页||false|integer(int32)||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|分页-每页多少行||false|integer(int32)||
|&emsp;&emsp;startTime|开始时间 格式yyyy-MM-dd||false|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取我的流程返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取我的流程返回|获取我的流程返回|
|&emsp;&emsp;workflowPage|我的流程信息分页数据|Page«流程实例信息»|Page«流程实例信息»|
|&emsp;&emsp;&emsp;&emsp;content||array|流程实例信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizObjectId|业务ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|数据类型,NORMAL:正常;SIMULATIVE:模拟,可用值:NORMAL,SIMULATIVE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|发起人所在的部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|发起人所在的部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId|流程实例ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator|发起人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName|发起人姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|父级节点 子流程专用|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant|当前处理人ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName|当前处理人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|流程实例状态,DRAFT:草稿、PROCESSING:进行中、COMPLETED:已完成、CANCELED:已作废、EXCEPTION:异常,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustType|委托类型,APPROVAL:委托审批;START:委托发起,可用值:APPROVAL,START|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustee|被委托人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trusteeName|被委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode|流程模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName|流程模板名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本号|integer||
|&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;first||boolean||
|&emsp;&emsp;&emsp;&emsp;last||boolean||
|&emsp;&emsp;&emsp;&emsp;number||integer||
|&emsp;&emsp;&emsp;&emsp;numberOfElements||integer||
|&emsp;&emsp;&emsp;&emsp;pageable||Pageable|Pageable|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;offset||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageNumber||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageSize||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paged||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unpaged||boolean||
|&emsp;&emsp;&emsp;&emsp;size||integer||
|&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;totalElements||integer||
|&emsp;&emsp;&emsp;&emsp;totalPages||integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"workflowPage": {
			"content": [
				{
					"bizObjectId": "",
					"dataType": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"instanceId": "",
					"instanceName": "",
					"originator": "",
					"originatorName": "",
					"parentId": "",
					"participant": "",
					"participantName": "",
					"sequenceNo": "",
					"startTime": "",
					"state": "",
					"trustType": "",
					"trustee": "",
					"trusteeName": "",
					"workflowCode": "",
					"workflowName": "",
					"workflowVersion": 0
				}
			],
			"empty": true,
			"first": true,
			"last": true,
			"number": 0,
			"numberOfElements": 0,
			"pageable": {
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 0,
				"paged": true,
				"sort": {
					"empty": true,
					"sorted": true,
					"unsorted": true
				},
				"unpaged": true
			},
			"size": 0,
			"sort": {
				"empty": true,
				"sorted": true,
				"unsorted": true
			},
			"totalElements": 0,
			"totalPages": 0
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 获取下一节点参与人信息


**接口地址**:`/api/openapi/v3/workflow/next_activity_participants/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "activityCode": "",
  "bizObject": {
    "childPageInfo": {},
    "createdDeptId": "",
    "createdTime": "",
    "creater": "",
    "data": {},
    "extendInfo": {
      "creatorId": "",
      "sourceBizObjectId": "",
      "sourceBizObjectName": "",
      "sourceSchemaCode": "",
      "sourceSchemaName": "",
      "urgencyLevel": ""
    },
    "id": "",
    "loadedFromDb": false,
    "modifiedTime": "",
    "modifier": "",
    "name": "",
    "owner": "",
    "ownerDeptId": "",
    "ownerDeptQueryCode": "",
    "participants": "",
    "schemaCode": "",
    "sequenceNo": "",
    "sequenceStatus": "",
    "sheetCode": "",
    "status": "",
    "workflowInstanceId": ""
  },
  "departmentId": "",
  "userId": "",
  "workflowCode": "",
  "workflowInstanceId": "",
  "workflowVersion": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取下节点参与人信息|获取下节点参与人信息|body|true|获取下节点参与人信息|获取下节点参与人信息|
|&emsp;&emsp;activityCode|当前节点编码||true|string||
|&emsp;&emsp;bizObject|表单数据信息||true|BizObjectModel|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo|||false|object||
|&emsp;&emsp;&emsp;&emsp;createdDeptId|创建人部门||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;creater|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息||false|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urgencyLevel|可用值:0,1,2,3||false|string||
|&emsp;&emsp;&emsp;&emsp;id|业务对象ID||false|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|修改时间||false|string||
|&emsp;&emsp;&emsp;&emsp;modifier|修改人||false|string||
|&emsp;&emsp;&emsp;&emsp;name|名称||false|string||
|&emsp;&emsp;&emsp;&emsp;owner|所有人||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptId|所有人部门||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|部门查询编码||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|单据状态||false|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例ID||false|string||
|&emsp;&emsp;departmentId|用户选择部门id||false|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowCode|流程编码||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例Id||false|string||
|&emsp;&emsp;workflowVersion|流程版本||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取下节点参与人信息返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取下节点参与人信息返回|获取下节点参与人信息返回|
|&emsp;&emsp;nextNodeParticipant|选择下一个节点参与者方式,可用值:ORGANIZATION,PARTICIPANT|string||
|&emsp;&emsp;participantChoose|是否支持选择下节点审批人|boolean||
|&emsp;&emsp;participantInfos|下节点参与人信息|array|选择下审批节点参与人视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名|string||
|&emsp;&emsp;&emsp;&emsp;participantList|手动指定的参与者|array|string|
|&emsp;&emsp;&emsp;&emsp;participantType|参与者类型,可用值:MULTI_PARTICIPANT,SINGLE_PARTICIPANT|string||
|&emsp;&emsp;&emsp;&emsp;participants|参与者列表|array|用户基本信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|用户ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|用户头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织对象类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"nextNodeParticipant": "",
		"participantChoose": false,
		"participantInfos": [
			{
				"activityCode": "",
				"activityName": "",
				"participantList": [],
				"participantType": "",
				"participants": [
					{
						"departmentId": "",
						"departmentName": "",
						"id": "",
						"imgUrl": "",
						"name": "",
						"unitType": "1: 部门， 2：角色，3：用户 ",
						"username": ""
					}
				]
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 发起流程


**接口地址**:`/api/openapi/v3/workflow/start`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "data": {},
  "departmentId": "",
  "finishStart": false,
  "userId": "",
  "workflowCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|发起流程请求|发起流程请求|body|true|发起流程请求|发起流程请求|
|&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||true|object||
|&emsp;&emsp;departmentId|部门ID：为空取用户主部门||false|string||
|&emsp;&emsp;finishStart|是否提交发起节点||false|boolean||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workflowCode|流程编码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«发起流程返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|发起流程返回|发起流程返回|
|&emsp;&emsp;userId|用户id|string||
|&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;workflowInstanceId|流程实例id|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"userId": "",
		"workflowCode": "",
		"workflowInstanceId": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 获取开始和结束节点


**接口地址**:`/api/openapi/v3/workflow/start_end_activity/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据流程实例Id或者流程编码和流程版本，获取流程的开始和结束节点</p>



**请求示例**:


```javascript
{
  "workflowCode": "",
  "workflowInstanceId": "",
  "workflowVersion": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取开始和结束节点请求|workflowInstanceId不为空则根据workflowInstanceId查询；workflowInstanceId为空则根据流程编码和流程版本查询|body|true|获取开始和结束节点请求|获取开始和结束节点请求|
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowInstanceId|流程实例id，为空时根据流程编码和流程版本查询||false|string||
|&emsp;&emsp;workflowVersion|流程版本||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取开始和结束节点请求返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取开始和结束节点请求返回|获取开始和结束节点请求返回|
|&emsp;&emsp;endActivity|结束节点|Activity|Activity|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;activityType|节点类型,可用值:CIRCULATE,CONNECTION,END,PARTICIPANT,START,SUB_INSTANCE,SYSTEM_ACTIVITY|string||
|&emsp;&emsp;&emsp;&emsp;afterActivate|活动激活后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;asyncEndJob|任务异步结束|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;beforeActivate|活动激活前|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;cancelActivity|活动取消|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;endActivity|活动完成后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;height|节点高度|integer||
|&emsp;&emsp;&emsp;&emsp;jobRejected|任务驳回后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;jobSubmitted|任务提交后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语言|string||
|&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;preCondition|节点前置规则|ActivityPreCondition|ActivityPreCondition|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rule|前置规则|PreConditionRule|PreConditionRule|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|前置类型,可用值:ALL,ANY|string||
|&emsp;&emsp;&emsp;&emsp;width|节点宽度|integer||
|&emsp;&emsp;&emsp;&emsp;x|节点x点|integer||
|&emsp;&emsp;&emsp;&emsp;y|节点y点|integer||
|&emsp;&emsp;startActivity|开始节点|Activity|Activity|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;activityType|节点类型,可用值:CIRCULATE,CONNECTION,END,PARTICIPANT,START,SUB_INSTANCE,SYSTEM_ACTIVITY|string||
|&emsp;&emsp;&emsp;&emsp;afterActivate|活动激活后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;asyncEndJob|任务异步结束|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;beforeActivate|活动激活前|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;cancelActivity|活动取消|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;endActivity|活动完成后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;height|节点高度|integer||
|&emsp;&emsp;&emsp;&emsp;jobRejected|任务驳回后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;jobSubmitted|任务提交后|ActivityEventHandler|ActivityEventHandler|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActionType|bizActions元素类型，业务方法:BIZ_METHOD、业务规则:BIZ_RULE,可用值:BIZ_METHOD,BIZ_RULE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizActions|要调用的业务动作|array|string|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancelParllelActivity|是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataDisposals|设置数据|array|DataDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disposalType|操作方式,可用值:SET|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;property|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value|值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|赋值类型，常量、动态,可用值:CONST,DYNAMIC|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailContent|消息内容(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailPopupType|邮件接收方弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailReceiver|消息接收人(邮件)|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;emailTitle|邮件消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageDetails|消息列表集成|array|MessageDetail|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|消息内容|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;messageType|消息编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|消息标题|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|消息接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectCancelParllelActivity|驳回是否取消并行活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsDisposal|短信消息配置|SmsDisposal|SmsDisposal|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paramMapping|参数对应|array|Summary|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDataItem|是否是数据项，0：表示code是用户输入的数据，1：表示code是表单字段，2：表示code是视图查询列表的id|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;param|短信内容动态参数|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;popupType|短信接收人弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiver|短信接收人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smsCode|短信模板编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|钉钉/微信消息标题|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语言|string||
|&emsp;&emsp;&emsp;&emsp;popupType|弹出框打开类型,可用值:EXPRESSION,FUNCTION|string||
|&emsp;&emsp;&emsp;&emsp;preCondition|节点前置规则|ActivityPreCondition|ActivityPreCondition|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rule|前置规则|PreConditionRule|PreConditionRule|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|前置类型,可用值:ALL,ANY|string||
|&emsp;&emsp;&emsp;&emsp;width|节点宽度|integer||
|&emsp;&emsp;&emsp;&emsp;x|节点x点|integer||
|&emsp;&emsp;&emsp;&emsp;y|节点y点|integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"endActivity": {
			"activityCode": "",
			"activityName": "",
			"activityType": "",
			"afterActivate": {
				"bizActionType": "",
				"bizActions": [],
				"cancelParllelActivity": false,
				"content": "",
				"dataDisposals": [
					{
						"disposalType": "",
						"property": "",
						"value": "",
						"valueType": ""
					}
				],
				"emailContent": "",
				"emailPopupType": "",
				"emailReceiver": "",
				"emailTitle": "",
				"messageDetails": [
					{
						"content": "",
						"messageType": "",
						"popupType": "",
						"receiver": "",
						"title": ""
					}
				],
				"popupType": "",
				"receiver": "",
				"rejectCancelParllelActivity": false,
				"smsDisposal": {
					"paramMapping": [
						{
							"code": "",
							"isDataItem": 0,
							"param": ""
						}
					],
					"popupType": "",
					"receiver": "",
					"smsCode": ""
				},
				"title": ""
			},
			"asyncEndJob": {},
			"beforeActivate": {},
			"cancelActivity": {},
			"endActivity": {},
			"height": 0,
			"jobRejected": {},
			"jobSubmitted": {},
			"name_i18n": "",
			"popupType": "",
			"preCondition": {
				"rule": {},
				"type": ""
			},
			"width": 0,
			"x": 0,
			"y": 0
		},
		"startActivity": {}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 流程预测


**接口地址**:`/api/openapi/v3/workflow/workflow_predict`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "activityCode": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|workflowPredictRequest|WorkflowPredictRequest|body|true|WorkflowPredictRequest|WorkflowPredictRequest|
|&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«WorkflowPredictResponse»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|WorkflowPredictResponse|WorkflowPredictResponse|
|&emsp;&emsp;participanInfoVOList||array|选择下审批节点参与人视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名|string||
|&emsp;&emsp;&emsp;&emsp;participantList|手动指定的参与者|array|string|
|&emsp;&emsp;&emsp;&emsp;participantType|参与者类型,可用值:MULTI_PARTICIPANT,SINGLE_PARTICIPANT|string||
|&emsp;&emsp;&emsp;&emsp;participants|参与者列表|array|用户基本信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|用户ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|用户头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织对象类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"participanInfoVOList": [
			{
				"activityCode": "",
				"activityName": "",
				"participantList": [],
				"participantType": "",
				"participants": [
					{
						"departmentId": "",
						"departmentName": "",
						"id": "",
						"imgUrl": "",
						"name": "",
						"unitType": "1: 部门， 2：角色，3：用户 ",
						"username": ""
					}
				]
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 加签待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/adjust`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "participantors": [],
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|加签任务请求|加签任务请求|body|true|加签任务请求|加签任务请求|
|&emsp;&emsp;comment|传阅意见||false|string||
|&emsp;&emsp;participantors|参与者id||true|array|string|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|待办任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 协办待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/assist`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "participantors": [],
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|协办任务请求|协办任务请求|body|true|协办任务请求|协办任务请求|
|&emsp;&emsp;comment|协办意见||false|string||
|&emsp;&emsp;participantors|参与者id||true|array|string|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|待办任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 传阅待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/circulate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "participantors": [],
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|传阅任务请求|传阅任务请求|body|true|传阅任务请求|传阅任务请求|
|&emsp;&emsp;comment|传阅意见||false|string||
|&emsp;&emsp;participantors|参与者id||true|array|string|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|待办任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 转办待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/forward`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "participantors": [],
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|转办任务请求|转办任务请求|body|true|转办任务请求|转办任务请求|
|&emsp;&emsp;comment|传阅意见||false|string||
|&emsp;&emsp;participantors|参与者id||true|array|string|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|待办任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 根据任务id查询任务


**接口地址**:`/api/openapi/v3/workflow/workitem/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|根据任务id查询任务请求|根据任务id查询任务请求|body|true|根据任务id查询任务请求|根据任务id查询任务请求|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«根据任务id查询任务返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|根据任务id查询任务返回|根据任务id查询任务返回|
|&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;allowedTime|限时时间|string(date-time)||
|&emsp;&emsp;approval|任务审批结果: AGREE:同意;REJECT:驳回;FORWARD:转办;CANCELLED:被取消;UNDO:未处理,可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;departmentId|发起人部门id|string||
|&emsp;&emsp;departmentName|发起人部门名称|string||
|&emsp;&emsp;finishTime|结束时间|string(date-time)||
|&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;instanceId|流程实例id|string||
|&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;isTrust|是否被委托,如果是true，则参与者是被委托人|boolean||
|&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;modifiedTime|最近更新时间|string(date-time)||
|&emsp;&emsp;originator|流程实例发起人|string||
|&emsp;&emsp;originatorName|流程实例发起人名称|string||
|&emsp;&emsp;participant|参与者|string||
|&emsp;&emsp;participantName|任务参与人姓名|string||
|&emsp;&emsp;receiveTime|接收时间|string(date-time)||
|&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;sourceId|源ID|string||
|&emsp;&emsp;sourceName|源Name|string||
|&emsp;&emsp;startTime|开始时间|string(date-time)||
|&emsp;&emsp;state|任务状态: NOTSTARTED:未启动;INPROGRESS:进行中;FINISHED:已完成;CANCELLED:被取消;DRAFT:草稿;REVOKE:被撤回,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;trustor|委托人id|string||
|&emsp;&emsp;trustorName|委托人名称|string||
|&emsp;&emsp;usedtime|任务耗时|integer(int64)||
|&emsp;&emsp;workItemTimeoutStatus|任务超时状态,可用值:NORMAL,ORANGE,RED,TIMEOUT,WARNING1,WARNING2,WARNING3|string||
|&emsp;&emsp;workItemType|任务类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;workflowVersion|流程模板版本|integer(int32)||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"activityCode": "",
		"activityName": "",
		"allowedTime": "",
		"approval": "",
		"createdBy": "",
		"createdTime": "",
		"deleted": false,
		"departmentId": "",
		"departmentName": "",
		"finishTime": "",
		"id": "",
		"instanceId": "",
		"instanceName": "",
		"isTrust": false,
		"modifiedBy": "",
		"modifiedTime": "",
		"originator": "",
		"originatorName": "",
		"participant": "",
		"participantName": "",
		"receiveTime": "",
		"remarks": "",
		"sourceId": "",
		"sourceName": "",
		"startTime": "",
		"state": "",
		"trustor": "",
		"trustorName": "",
		"usedtime": 0,
		"workItemTimeoutStatus": "",
		"workItemType": "",
		"workflowCode": "",
		"workflowVersion": 0
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 获取待办、已办、待阅、已阅任务列表


**接口地址**:`/api/openapi/v3/workflow/workitem/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "activityName": "",
  "appCode": "",
  "endTime": "",
  "originator": "",
  "page": 0,
  "sequenceNo": "",
  "size": 0,
  "startTime": "",
  "userId": "",
  "workItemsType": "",
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取已办、待办、已阅、待阅任务列表请求|获取已办、待办、已阅、待阅任务列表请求|body|true|获取已办、待办、已阅、待阅任务列表请求|获取已办、待办、已阅、待阅任务列表请求|
|&emsp;&emsp;activityName|流程节点名称||false|string||
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;endTime|结束-任务处理时间||false|string||
|&emsp;&emsp;originator|发起人名称||false|string||
|&emsp;&emsp;page|分页-第几页||false|integer(int32)||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|分页-每页多少行||false|integer(int32)||
|&emsp;&emsp;startTime|开始-任务处理时间||false|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemsType|任务类别,可用值:0,1,2,3||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取我的任务列表返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取我的任务列表返回|获取我的任务列表返回|
|&emsp;&emsp;workitemPage|我的任务列表分页数据|Page«代办任务数据对象»|Page«代办任务数据对象»|
|&emsp;&emsp;&emsp;&emsp;content||array|代办任务数据对象|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime|限时时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approval|任务审批结果: AGREE:同意;REJECT:驳回;FORWARD:转办;CANCELLED:被取消;UNDO:未处理,可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|发起人部门id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|发起人部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId|流程实例id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isTrust|是否被委托,如果是true，则参与者是被委托人|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator|流程实例发起人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName|流程实例发起人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant|参与者|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName|任务参与人姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime|接收时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|源ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|源Name|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|任务状态: NOTSTARTED:未启动;INPROGRESS:进行中;FINISHED:已完成;CANCELLED:被取消;DRAFT:草稿;REVOKE:被撤回,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustor|委托人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustorName|委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedtime|任务耗时|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemTimeoutStatus|任务超时状态,可用值:NORMAL,ORANGE,RED,TIMEOUT,WARNING1,WARNING2,WARNING3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|任务类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本|integer||
|&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;first||boolean||
|&emsp;&emsp;&emsp;&emsp;last||boolean||
|&emsp;&emsp;&emsp;&emsp;number||integer||
|&emsp;&emsp;&emsp;&emsp;numberOfElements||integer||
|&emsp;&emsp;&emsp;&emsp;pageable||Pageable|Pageable|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;offset||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageNumber||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageSize||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paged||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unpaged||boolean||
|&emsp;&emsp;&emsp;&emsp;size||integer||
|&emsp;&emsp;&emsp;&emsp;sort||Sort|Sort|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;empty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sorted||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unsorted||boolean||
|&emsp;&emsp;&emsp;&emsp;totalElements||integer||
|&emsp;&emsp;&emsp;&emsp;totalPages||integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"workitemPage": {
			"content": [
				{
					"activityCode": "",
					"activityName": "",
					"allowedTime": "",
					"approval": "",
					"createdBy": "",
					"createdTime": "",
					"deleted": false,
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"id": "",
					"instanceId": "",
					"instanceName": "",
					"isTrust": false,
					"modifiedBy": "",
					"modifiedTime": "",
					"originator": "",
					"originatorName": "",
					"participant": "",
					"participantName": "",
					"receiveTime": "",
					"remarks": "",
					"sourceId": "",
					"sourceName": "",
					"startTime": "",
					"state": "",
					"trustor": "",
					"trustorName": "",
					"usedtime": 0,
					"workItemTimeoutStatus": "",
					"workItemType": "",
					"workflowCode": "",
					"workflowVersion": 0
				}
			],
			"empty": true,
			"first": true,
			"last": true,
			"number": 0,
			"numberOfElements": 0,
			"pageable": {
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 0,
				"paged": true,
				"sort": {
					"empty": true,
					"sorted": true,
					"unsorted": true
				},
				"unpaged": true
			},
			"size": 0,
			"sort": {
				"empty": true,
				"sorted": true,
				"unsorted": true
			},
			"totalElements": 0,
			"totalPages": 0
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 驳回待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/reject`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "data": {},
  "rejectToActivityCode": "",
  "submitToReject": false,
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|驳回任务请求|驳回任务请求|body|true|驳回任务请求|驳回任务请求|
|&emsp;&emsp;comment|审批意见||false|string||
|&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;rejectToActivityCode|驳回到指定的节点||true|string||
|&emsp;&emsp;submitToReject|重新提交是否回到驳回的节点||false|boolean||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 撤回已办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/retrieve`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "activityCode": "",
  "userId": "",
  "workItemId": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|撤回任务请求|撤回任务请求|body|true|撤回任务请求|撤回任务请求|
|&emsp;&emsp;activityCode|节点编码||true|string||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 提交待办任务


**接口地址**:`/api/openapi/v3/workflow/workitem/submit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "agree": false,
  "comment": "",
  "data": {},
  "userId": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|审批流程请求|审批流程请求|body|true|审批流程请求|审批流程请求|
|&emsp;&emsp;agree|审批意见：同意true 不同意false||false|boolean||
|&emsp;&emsp;comment|审批意见||false|string||
|&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemId|批量处理任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 任务操作


**接口地址**:`/api/openapi/v3/workflow/workitem_action`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "comment": "",
  "participantors": [],
  "userId": "",
  "workItemAction": "",
  "workItemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|任务操作请求vo|任务操作请求vo|body|true|任务操作请求vo|任务操作请求vo|
|&emsp;&emsp;comment|操作说明||false|string||
|&emsp;&emsp;participantors|参与者id||false|array|string|
|&emsp;&emsp;userId|用户id||true|string||
|&emsp;&emsp;workItemAction|任务操作，与按钮编码一致||true|string||
|&emsp;&emsp;workItemId|任务id||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenAPIV3::组织机构


## 根据sourceId及corpId获取部门信息


**接口地址**:`/api/openapi/v3/organization/department/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "corpId": "",
  "sourceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|openApi获取部门信息|OpenApi获取部门信息|body|true|OpenApi获取部门信息|OpenApi获取部门信息|
|&emsp;&emsp;corpId|组织机构Id||false|string||
|&emsp;&emsp;sourceId|来源Id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«OpenApi返回的部门信息»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|OpenApi返回的部门信息|OpenApi返回的部门信息|
|&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;employees|员工数量|integer(int32)||
|&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;extend4|扩展字段4|integer(int32)||
|&emsp;&emsp;extend5|扩展字段5|integer(int32)||
|&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，false：否 |boolean||
|&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;modifiedTime|最近更新时间|string(date-time)||
|&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;sortKey|排序号|integer(int64)||
|&emsp;&emsp;sourceId|来源id|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"calendarId": "",
		"children": [
			{
				"calendarId": "",
				"children": [
					{
						"calendarId": "",
						"children": [
							{}
						],
						"code": "",
						"corpId": "",
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"deptType": {
							"name": ""
						},
						"dingDeptManagerId": "",
						"displayOption": false,
						"employees": 0,
						"enabled": false,
						"extend1": "",
						"extend2": "",
						"extend3": "",
						"extend4": 0,
						"extend5": 0,
						"hasPermission": false,
						"id": "",
						"isCorpRootNode": false,
						"isShow": false,
						"leaf": false,
						"managerId": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"name": "",
						"parent": {},
						"parentDepartmentName": "",
						"parentId": "",
						"queryCode": "",
						"relatedOrgType": "",
						"relatedSyncType": "",
						"remarks": "",
						"sortKey": 0,
						"sourceId": "",
						"unitType": "1: 部门， 2：角色，3：用户 "
					}
				],
				"code": "",
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"deptType": {
					"name": ""
				},
				"dingDeptManagerId": "",
				"displayOption": false,
				"employees": 0,
				"enabled": false,
				"extend1": "",
				"extend2": "",
				"extend3": "",
				"extend4": 0,
				"extend5": 0,
				"hasPermission": false,
				"id": "",
				"isCorpRootNode": false,
				"isShow": false,
				"leaf": false,
				"managerId": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"parent": {},
				"parentDepartmentName": "",
				"parentId": "",
				"queryCode": "",
				"relatedOrgType": "",
				"relatedSyncType": "",
				"remarks": "",
				"sortKey": 0,
				"sourceId": "",
				"unitType": "1: 部门， 2：角色，3：用户 "
			}
		],
		"corpId": "",
		"createdBy": "",
		"createdTime": "",
		"deleted": false,
		"deptType": {
			"name": ""
		},
		"dingDeptManagerId": "",
		"employees": 0,
		"enabled": false,
		"extend1": "",
		"extend2": "",
		"extend3": "",
		"extend4": 0,
		"extend5": 0,
		"id": "",
		"isCorpRootNode": false,
		"isShow": false,
		"leaf": false,
		"managerId": "",
		"modifiedBy": "",
		"modifiedTime": "",
		"name": "",
		"parent": {},
		"parentId": "",
		"queryCode": "",
		"relatedOrgType": "",
		"relatedSyncType": "",
		"remarks": "",
		"sortKey": 0,
		"sourceId": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 根据sourceId及corpId获取用户信息


**接口地址**:`/api/openapi/v3/organization/user/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "corpId": "",
  "sourceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|openApi获取用户信息|OpenApi获取用户信息|body|true|OpenApi获取用户信息|OpenApi获取用户信息|
|&emsp;&emsp;corpId|组织机构Id||false|string||
|&emsp;&emsp;sourceId|来源Id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«OpenApi返回的用户信息»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|OpenApi返回的用户信息|OpenApi返回的用户信息|
|&emsp;&emsp;birthday|出生日期|string(date-time)||
|&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;departmentId|主部门ID|string||
|&emsp;&emsp;departments|用户所属部门|array|DepartmentInfoModel|
|&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;gender|性别：男 MALE 女 FEMALE 未指定 OTHER,可用值:FEMALE,MALE,OTHER|string||
|&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;identityNo|身份证号|string||
|&emsp;&emsp;mobile|手机|string||
|&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;modifiedTime|最近更新时间|string(date-time)||
|&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;username|账号名|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"birthday": "",
		"corpId": "",
		"createdBy": "",
		"createdTime": "",
		"deleted": false,
		"departmentId": "",
		"departments": [
			{
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"enabled": false,
				"id": "",
				"leaf": false,
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"parentId": "",
				"remarks": "",
				"sortKey": 0,
				"sourceId": ""
			}
		],
		"enabled": false,
		"gender": "",
		"id": "",
		"identityNo": "",
		"mobile": "",
		"modifiedBy": "",
		"modifiedTime": "",
		"name": "",
		"remarks": "",
		"sourceId": "",
		"username": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenAPIV3::表单


## 批量新增表单


**接口地址**:`/api/openapi/v3/bo/batchCreate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "dataList": [],
  "departmentId": "",
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|批量新增请求|批量新增请求|body|true|批量新增请求|批量新增请求|
|&emsp;&emsp;dataList|业务数据对象列表，数据格式与对应的业务模型一致||true|array|object|
|&emsp;&emsp;departmentId|部门id，为空时取主部门||false|string||
|&emsp;&emsp;schemaCode|业务模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«BatchCreateBoResponse»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|BatchCreateBoResponse|BatchCreateBoResponse|
|&emsp;&emsp;bizObjectIds|创建成功Bo的Id|array|string|
|&emsp;&emsp;schemaCode|业务模型编码|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"bizObjectIds": [],
		"schemaCode": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 批量删除表单


**接口地址**:`/api/openapi/v3/bo/batchDelete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "bizObjectIds": [],
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|batchDeleteBoRequest|BatchDeleteBoRequest|body|true|BatchDeleteBoRequest|BatchDeleteBoRequest|
|&emsp;&emsp;bizObjectIds|业务数据ID列表||true|array|string|
|&emsp;&emsp;schemaCode|业务模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 新增表单


**接口地址**:`/api/openapi/v3/bo/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "data": {},
  "departmentId": "",
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createBoRequest|CreateBoRequest|body|true|CreateBoRequest|CreateBoRequest|
|&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||true|object||
|&emsp;&emsp;departmentId|部门id，为空时取主部门||false|string||
|&emsp;&emsp;schemaCode|业务模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«CreateBoResponse»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|CreateBoResponse|CreateBoResponse|
|&emsp;&emsp;bizObjectId|创建成功Bo的Id|string||
|&emsp;&emsp;schemaCode|业务模型编码|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"bizObjectId": "",
		"schemaCode": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 删除表单


**接口地址**:`/api/openapi/v3/bo/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "bizObjectId": "",
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deleteBoRequest|DeleteBoRequest|body|true|DeleteBoRequest|DeleteBoRequest|
|&emsp;&emsp;bizObjectId|业务数据ID||true|string||
|&emsp;&emsp;schemaCode|业务模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 校验表单是否存在


**接口地址**:`/api/openapi/v3/bo/exists`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "objectId": "",
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|校验表单是否存在请求|校验表单是否存在请求|body|true|校验表单是否存在请求|校验表单是否存在请求|
|&emsp;&emsp;objectId|业务数据ID||true|string||
|&emsp;&emsp;schemaCode|模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 获取表单详情


**接口地址**:`/api/openapi/v3/bo/get`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "objectId": "",
  "perms": "",
  "schemaCode": "",
  "sheetCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|加载表单数据模型|加载表单数据模型|body|true|加载表单数据模型|加载表单数据模型|
|&emsp;&emsp;objectId|业务数据ID||true|string||
|&emsp;&emsp;perms|标识查看编辑权限：edit编辑，check查看 默认check||false|string||
|&emsp;&emsp;schemaCode|模型编码||true|string||
|&emsp;&emsp;sheetCode|表单编码||false|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«数据项视图对象»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|数据项视图对象|数据项视图对象|
|&emsp;&emsp;activityCode|当前流程节点编码|string||
|&emsp;&emsp;activityName|当前流程节点名称|string||
|&emsp;&emsp;bizObject|业务数据对象|BizObjectCreatedModel|BizObjectCreatedModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo||object||
|&emsp;&emsp;&emsp;&emsp;createdDeptId|创建人部门|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;excelType|可用值:1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullDepartment||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceParticipantType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;creater|创建人|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;excelType|可用值:1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullDepartment||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceParticipantType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urgencyLevel|可用值:0,1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;id|业务对象ID|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|修改时间|string||
|&emsp;&emsp;&emsp;&emsp;modifier|修改人|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;excelType|可用值:1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullDepartment||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceParticipantType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;name|名称|string||
|&emsp;&emsp;&emsp;&emsp;owner|所有人|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;excelType|可用值:1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullDepartment||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceParticipantType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptId|所有人部门|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;excelType|可用值:1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullDepartment||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceParticipantType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|部门查询编码|string||
|&emsp;&emsp;&emsp;&emsp;ownerId|拥有者|string||
|&emsp;&emsp;&emsp;&emsp;participants||string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|单据状态|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode||string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例ID|string||
|&emsp;&emsp;bizSchema|业务模型定义|BizSchemaModel|BizSchemaModel|
|&emsp;&emsp;&emsp;&emsp;bizDataRuleModels|数据规则列表|array|BizDataRuleModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;checkType|校验类型 当规则类型为提交校验时，校验类型包含1正则 2提交 3空行 4最大长度 5去重；当规则类型为其他时，校验类型包含必填|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childRule||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataRuleType|规则类型|DataRuleType|DataRuleType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|规则属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyName|字段名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaName|数据模型名称|string||
|&emsp;&emsp;&emsp;&emsp;businessRuleEnable|是否启用业务规则|boolean||
|&emsp;&emsp;&emsp;&emsp;code|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;icon|数据模型图标|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型 1 LIST-普通模型 2 TREE-树形模型,可用值:LIST,TREE|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|数据模型名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;permGroupModels|数据模型的数据项列表|array|BizPermGroupModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appPermGroupId|对应的应用权限组Id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;authorType|授权类型,可用值:0,1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments|组织json数据|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|权限组名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;permProperties|数据项权限|array|BizPermPropertyModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizPermType|权限类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;encryptVisible|是否可见加密|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;groupId|权限组ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|数据项名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|数据项编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|数据项类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码或子表数据项编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible|是否可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;writeAble|是否可写|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;roles|角色json数据|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;properties|数据模型的数据项列表|array|BizPropertyModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;backupQueryCode|是否开启冗余查询编码|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childProperty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|数据项编码，在一个模型中唯一|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;defaultProperty|是否系统默认数据项|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;defaultValue|属性默认值，数组使用',' 进行分隔|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;encryptOption|加密类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|数据项名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyEmpty|是否允许为空|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyIndex|是否创建索引|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyLength|数据项长度|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|数据项目类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyTypeName|数据项类型，显示名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;published|是否发布属性|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCodeProperty|是否是查询编码字段|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quoteCodes||array|QuoteModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyType|可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeCode|数据类型为“关联表单”，该字段保存模型表对应的模型Code|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyCode|数据类型为“关联表单”，该字段保存关联表单展示字段编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeQuoteCode|引用字段|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repeated|是否去重属性|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型对象Code|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;selectionJson|下拉框json|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序字段|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subSchema|子表对象|BizSchemaModel|BizSchemaModel|
|&emsp;&emsp;&emsp;&emsp;published|数据模型发布状态|boolean||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;summary|表单标题表达式，可能是规则表达式，也可以是具体的内容|string||
|&emsp;&emsp;bizSheet|业务表单|BizFormModel|BizFormModel|
|&emsp;&emsp;&emsp;&emsp;bizDataRuleModels|新增和更新的数据规则列表|array|BizDataRuleModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;checkType|校验类型 当规则类型为提交校验时，校验类型包含1正则 2提交 3空行 4最大长度 5去重；当规则类型为其他时，校验类型包含必填|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childRule||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataRuleType|规则类型|DataRuleType|DataRuleType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|规则属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyName|字段名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaName|数据模型名称|string||
|&emsp;&emsp;&emsp;&emsp;borderMode|表单是否支持边框模式,close或open|string||
|&emsp;&emsp;&emsp;&emsp;code|表单编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleteBizDataRuleIds|删除的数据规则id列表|array|string|
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;draftActionsJson|草稿在线设计与编辑按钮json|string||
|&emsp;&emsp;&emsp;&emsp;draftAttributesJson|草稿控件属性json|string||
|&emsp;&emsp;&emsp;&emsp;draftHtmlJson|草稿在线设计与编辑json|string||
|&emsp;&emsp;&emsp;&emsp;draftSchemaOptionsJson|草稿模型配置Json|string||
|&emsp;&emsp;&emsp;&emsp;draftViewJson|草稿表单视图json|string||
|&emsp;&emsp;&emsp;&emsp;editProperties|修改的数据项列表|array|BizPropertyModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;backupQueryCode|是否开启冗余查询编码|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childProperty||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|数据项编码，在一个模型中唯一|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;defaultProperty|是否系统默认数据项|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;defaultValue|属性默认值，数组使用',' 进行分隔|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;encryptOption|加密类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|数据项名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|数据项属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyEmpty|是否允许为空|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyIndex|是否创建索引|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyLength|数据项长度|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|数据项目类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyTypeName|数据项类型，显示名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;published|是否发布属性|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCodeProperty|是否是查询编码字段|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quoteCodes||array|QuoteModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyType|可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeCode|数据类型为“关联表单”，该字段保存模型表对应的模型Code|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativePropertyCode|数据类型为“关联表单”，该字段保存关联表单展示字段编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeQuoteCode|引用字段|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repeated|是否去重属性|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型对象Code|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;selectionJson|下拉框json|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序字段|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subSchema|子表对象|BizSchemaModel|BizSchemaModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizDataRuleModels|数据规则列表|array|BizDataRuleModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;checkType|校验类型 当规则类型为提交校验时，校验类型包含1正则 2提交 3空行 4最大长度 5去重；当规则类型为其他时，校验类型包含必填|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childRule||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataRuleType|规则类型|DataRuleType|DataRuleType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|规则属性|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyName|字段名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaName|数据模型名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;businessRuleEnable|是否启用业务规则|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon|数据模型图标|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelType|模型类型 1 LIST-普通模型 2 TREE-树形模型,可用值:LIST,TREE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|数据模型名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;permGroupModels|数据模型的数据项列表|array|BizPermGroupModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appPermGroupId|对应的应用权限组Id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;authorType|授权类型,可用值:0,1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments|组织json数据|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|权限组名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;permProperties|数据项权限|array|BizPermPropertyModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizPermType|权限类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;encryptVisible|是否可见加密|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;groupId|权限组ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|数据项名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|数据项编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|数据项类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码或子表数据项编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible|是否可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;writeAble|是否可写|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;roles|角色json数据|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;properties|数据模型的数据项列表|array|BizPropertyModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;published|数据模型发布状态|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;summary|表单标题表达式，可能是规则表达式，也可以是具体的内容|string||
|&emsp;&emsp;&emsp;&emsp;errorMsgList|异常配置项，如配置的用户、组织、角色不存在|array|FormMsgModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;data||array|FormMsgModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;errMsg||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyName_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaName_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sheetCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sheetName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sheetName_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;statusCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetDepartmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetRoleName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetSchemaName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetUserId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetUserName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit||object||
|&emsp;&emsp;&emsp;&emsp;existDraft|是否存在未发布的草稿内容|boolean||
|&emsp;&emsp;&emsp;&emsp;externalLinkAble|是否开启外链|boolean||
|&emsp;&emsp;&emsp;&emsp;formComment|是否开启表单评论|boolean||
|&emsp;&emsp;&emsp;&emsp;formSystemVersion|系统版本号|string||
|&emsp;&emsp;&emsp;&emsp;formTrack|是否开启表单留痕|boolean||
|&emsp;&emsp;&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;layoutType|表单属性，支持表单使用边框，horizontal  -- 左右布局  vertical --上下布局|string||
|&emsp;&emsp;&emsp;&emsp;mobileIsPc|是否移动访问的url同PC一样|boolean||
|&emsp;&emsp;&emsp;&emsp;mobileUrl|移动访问的url|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型 1 LIST-普通模型 2 TREE-树形模型,可用值:LIST,TREE|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|表单名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;options|扩展配置参数|string||
|&emsp;&emsp;&emsp;&emsp;pcUrl|pc访问的url|string||
|&emsp;&emsp;&emsp;&emsp;pdfAble|是否开启PDF打印|string||
|&emsp;&emsp;&emsp;&emsp;printIsPc|是否打印访问的url同PC一样|boolean||
|&emsp;&emsp;&emsp;&emsp;printJson|打印模板Json|string||
|&emsp;&emsp;&emsp;&emsp;printTemplateJson|关联的打印模板json字符串|string||
|&emsp;&emsp;&emsp;&emsp;printUrl|打印访问的url|string||
|&emsp;&emsp;&emsp;&emsp;publishBy|发布人名|string||
|&emsp;&emsp;&emsp;&emsp;published|是否发布|boolean||
|&emsp;&emsp;&emsp;&emsp;publishedActionsJson|发布在线设计与编辑j按钮json|string||
|&emsp;&emsp;&emsp;&emsp;publishedAttributesJson|发布控件属性json|string||
|&emsp;&emsp;&emsp;&emsp;publishedHtmlJson|发布在线设计与编辑json|string||
|&emsp;&emsp;&emsp;&emsp;publishedViewJson|发布表单视图json|string||
|&emsp;&emsp;&emsp;&emsp;qrCodeAble|是否开启二维码|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;settingPrint|是否已设置打印模板Json|boolean||
|&emsp;&emsp;&emsp;&emsp;sheetType|表单类型，0：默认表单 1：自定义表单 2：打印模板,可用值:0,1,2|string||
|&emsp;&emsp;&emsp;&emsp;sheetTypeName|表单类型，显示名称|string||
|&emsp;&emsp;&emsp;&emsp;shortCode|外链短码|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;subTip|首次打开，是否需要子表引导提示|boolean||
|&emsp;&emsp;&emsp;&emsp;tempAuthSchemaCodeSet||array|string|
|&emsp;&emsp;&emsp;&emsp;tempAuthSchemaCodes|临时授权的表单，约定为"schemacode_sheetcode" 以,分割|string||
|&emsp;&emsp;&emsp;&emsp;trackDataCodes|需要留痕的表单数据项，以 ; 号隔开|string||
|&emsp;&emsp;&emsp;&emsp;version|表单版本号|integer||
|&emsp;&emsp;commentInfo|转办、协办、加签的意见提示信息|表单加载转办、协办、加签的提示信息视图类|表单加载转办、协办、加签的提示信息视图类|
|&emsp;&emsp;&emsp;&emsp;comment|转办、协办、加签意见内容|string||
|&emsp;&emsp;&emsp;&emsp;originator|发起人|用户基本信息|用户基本信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|用户ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|用户头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织对象类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;type|任务类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;commonCommentSwitch|常用审批意见开关|boolean||
|&emsp;&emsp;departments|当前用户部门列表|array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;code|编码|string||
|&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;formPermission|表单权限|业务表单权限|业务表单权限|
|&emsp;&emsp;&emsp;&emsp;actionPermission|表单操作权限|业务表单操作权限|业务表单操作权限|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;adjustParticipant|是否允许加签|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;agree|是否展示同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assist|是否允许协助|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistRetrieve|是否显示撤回协办按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancel|是否允许作废|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;circulate|是否允许传阅|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;copy|是否显示表单复制按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;delete|是否允许删除|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disAgree|是否展示不同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;edit|是否允许编辑|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;editOwner|是否允许编辑拥有者|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishInstance|是否直接结束流程|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formTrack|是否显示表单留痕按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;forward|是否允许转发|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;print|是否允许打印|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reject|是否允许驳回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToActivityCode|驳回到指定节点|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToFixded|是否允许驳回到指定活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToStart|是否允许驳回到起始节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;retrieve|是否允许取回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;save|是否允许暂存|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showCheck|是否展示审批意见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showReject|是否展示驳回按钮，由驳回操作的三个属性决定|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;submit|是否允许提交|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urge|催办|boolean||
|&emsp;&emsp;&emsp;&emsp;btnConfigList|操作按钮配置|array|ActionBtnConfigModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;attachmentPermission||Permission|Permission|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;commentPermission||Permission|Permission|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remark||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;signPermission||Permission|Permission|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;system||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type||string||
|&emsp;&emsp;&emsp;&emsp;customButtons|自定义按钮|array|BizButtonModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionConfig|按钮配置|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bindAction|绑定动作,可用值:ADD_DATA,BUSINESS_RULE,FLOW,FORM,LIST,SCRIPT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|按钮编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|描述|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hint|移入提示|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|按钮名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;operateType|操作类型,可用值:WITH_OUT_VIEW,WITH_VIEW|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showPermCode|显示权限，绑定对象编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showPermType|显示权限，绑定对象类型,可用值:BIND_BUSINESS_RULE,BIND_SYS_BUTTON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|按钮排序|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetCode|目标编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;targetObjCode|目标对象|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;triggerCode|调用方编码（视图、表单）|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;triggerType|调用方类型（视图、表单）,可用值:FORM,QUERY|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;useLocation|使用位置,可用值:FORM,LIST,ROW|string||
|&emsp;&emsp;&emsp;&emsp;dataPermissions|业务数据权限|业务数据项权限|业务数据项权限|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;e|是否可编辑|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;m|是否可见加密|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|业务数据项编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;r|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subDataPermission|子表数据项权限|array|业务数据项权限|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;v|是否可见|boolean||
|&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;logInfoList|流程日志|array|流程实例审批日志打印视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;approvalActionStatus|审批意见动作 0 意见,1 提交,2 作废 3 同意 4 不同意,5加签,6协办,7转办,8驳回,9结束流程,10待阅,11已阅,12处理中,可用值:0,1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;comment|审批意见|string||
|&emsp;&emsp;&emsp;&emsp;finishTime|完成时间|string||
|&emsp;&emsp;&emsp;&emsp;logStatus|日志状态|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;originator|流程实例参与者|流程实例参与者|流程实例参与者|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|参与者头像url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|参与者姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceAction|任务来源操作: preAddSign前置加签、consult征询意见，以及其他自定义操作|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;receiveTime|接收时间|string||
|&emsp;&emsp;&emsp;&emsp;signature|手写签名|string||
|&emsp;&emsp;&emsp;&emsp;subInstanceActivity|是否是子流程|boolean||
|&emsp;&emsp;&emsp;&emsp;subInstanceStatus|子流程状态:0 未启动,1 进行中,2 已完成,3 作废,4 异常 |integer||
|&emsp;&emsp;&emsp;&emsp;subWorkItemId|子流程任务id|string||
|&emsp;&emsp;&emsp;&emsp;subWorkflowInstanceId|子流程流程实例id|string||
|&emsp;&emsp;&emsp;&emsp;tokenId|tokenid|integer||
|&emsp;&emsp;&emsp;&emsp;trustor|任务委托人|流程实例参与者|流程实例参与者|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|参与者头像url|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|参与者姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceAction|任务来源操作: preAddSign前置加签、consult征询意见，以及其他自定义操作|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;usedTime|使用时间|integer||
|&emsp;&emsp;&emsp;&emsp;workItemStatus|任务状态:1 未启动,2 进行中,3 已完成,4 被取消,5 草稿 ,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;nextNodeParticipant|选择下一个节点参与者方式,可用值:ORGANIZATION,PARTICIPANT|string||
|&emsp;&emsp;participantChoose|是否支持选择下节点审批人|boolean||
|&emsp;&emsp;properties|扩展属性|object||
|&emsp;&emsp;workFlowLog||array|打印模板流程日志对象|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName||string||
|&emsp;&emsp;&emsp;&emsp;activityStatus||string||
|&emsp;&emsp;&emsp;&emsp;approvalActionStatus||string||
|&emsp;&emsp;&emsp;&emsp;comment||string||
|&emsp;&emsp;&emsp;&emsp;finishTime||string||
|&emsp;&emsp;&emsp;&emsp;logStatus||string||
|&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;receiveTime||string||
|&emsp;&emsp;&emsp;&emsp;signature||string||
|&emsp;&emsp;&emsp;&emsp;usedTime||integer||
|&emsp;&emsp;workItemId|任务Id|string||
|&emsp;&emsp;workflowCode|工作流程编码|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID|string||
|&emsp;&emsp;workflowInstanceIsSubmit|流程实例是否已经提交|boolean||
|&emsp;&emsp;workflowName|工作流程模板名称|string||
|&emsp;&emsp;workflowTokenId|tokenId|string||
|&emsp;&emsp;workflowVersion|工作流程版本号|integer(int32)||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"activityCode": "",
		"activityName": "",
		"bizObject": {
			"childPageInfo": {},
			"createdDeptId": {
				"code": "",
				"corpId": "",
				"departmentId": "",
				"departments": [
					{
						"calendarId": "",
						"children": [
							{
								"calendarId": "",
								"children": [
									{}
								],
								"code": "",
								"corpId": "",
								"createdBy": "",
								"createdTime": "",
								"deleted": false,
								"deptType": {
									"name": ""
								},
								"dingDeptManagerId": "",
								"displayOption": false,
								"employees": 0,
								"enabled": false,
								"extend1": "",
								"extend2": "",
								"extend3": "",
								"extend4": 0,
								"extend5": 0,
								"hasPermission": false,
								"id": "",
								"isCorpRootNode": false,
								"isShow": false,
								"leaf": false,
								"managerId": "",
								"modifiedBy": "",
								"modifiedTime": "",
								"name": "",
								"parent": {},
								"parentDepartmentName": "",
								"parentId": "",
								"queryCode": "",
								"relatedOrgType": "",
								"relatedSyncType": "",
								"remarks": "",
								"sortKey": 0,
								"sourceId": "",
								"unitType": "1: 部门， 2：角色，3：用户 "
							}
						],
						"code": "",
						"corpId": "",
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"deptType": {
							"name": ""
						},
						"dingDeptManagerId": "",
						"displayOption": false,
						"employees": 0,
						"enabled": false,
						"extend1": "",
						"extend2": "",
						"extend3": "",
						"extend4": 0,
						"extend5": 0,
						"hasPermission": false,
						"id": "",
						"isCorpRootNode": false,
						"isShow": false,
						"leaf": false,
						"managerId": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"name": "",
						"parent": {},
						"parentDepartmentName": "",
						"parentId": "",
						"queryCode": "",
						"relatedOrgType": "",
						"relatedSyncType": "",
						"remarks": "",
						"sortKey": 0,
						"sourceId": "",
						"unitType": "1: 部门， 2：角色，3：用户 "
					}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"queryCode": "",
				"sourceParticipantType": "",
				"type": ""
			},
			"createdTime": "",
			"creater": {},
			"data": {},
			"extendInfo": {
				"creatorId": "",
				"sourceBizObjectId": "",
				"sourceBizObjectName": "",
				"sourceSchemaCode": "",
				"sourceSchemaName": "",
				"urgencyLevel": ""
			},
			"id": "",
			"loadedFromDb": false,
			"modifiedTime": "",
			"modifier": {},
			"name": "",
			"owner": {},
			"ownerDeptId": {},
			"ownerDeptQueryCode": "",
			"ownerId": "",
			"participants": "",
			"schemaCode": "",
			"sequenceNo": "",
			"sequenceStatus": "",
			"sheetCode": "",
			"status": "",
			"workflowInstanceId": ""
		},
		"bizSchema": {
			"bizDataRuleModels": [
				{
					"checkType": 0,
					"childRule": true,
					"createdBy": "",
					"createdTime": "",
					"dataRuleType": {
						"name": ""
					},
					"deleted": false,
					"id": "",
					"modifiedBy": "",
					"modifiedTime": "",
					"options": "",
					"propertyCode": "",
					"propertyName": "",
					"remarks": "",
					"schemaCode": "",
					"schemaName": ""
				}
			],
			"businessRuleEnable": false,
			"code": "",
			"createdBy": "",
			"createdTime": "",
			"deleted": false,
			"icon": "",
			"id": "",
			"modelType": "",
			"modifiedBy": "",
			"modifiedTime": "",
			"name": "",
			"name_i18n": "",
			"permGroupModels": [
				{
					"appPermGroupId": "",
					"authorType": "",
					"createdBy": "",
					"createdTime": "",
					"deleted": false,
					"departments": "",
					"enabled": false,
					"id": "",
					"modifiedBy": "",
					"modifiedTime": "",
					"name": "",
					"name_i18n": "",
					"permProperties": [
						{
							"bizPermType": "",
							"createdBy": "",
							"createdTime": "",
							"deleted": false,
							"encryptVisible": false,
							"groupId": "",
							"id": "",
							"modifiedBy": "",
							"modifiedTime": "",
							"name": "",
							"name_i18n": "",
							"propertyCode": "",
							"propertyType": "",
							"remarks": "",
							"required": false,
							"schemaCode": "",
							"visible": false,
							"writeAble": false
						}
					],
					"remarks": "",
					"roles": "",
					"schemaCode": ""
				}
			],
			"properties": [
				{
					"backupQueryCode": false,
					"childProperty": true,
					"code": "",
					"createdBy": "",
					"createdTime": "",
					"defaultProperty": false,
					"defaultValue": "",
					"deleted": false,
					"encryptOption": "",
					"id": "",
					"modifiedBy": "",
					"modifiedTime": "",
					"name": "",
					"name_i18n": "",
					"options": "",
					"propertyEmpty": false,
					"propertyIndex": false,
					"propertyLength": 0,
					"propertyType": "",
					"propertyTypeName": "",
					"published": false,
					"queryCodeProperty": false,
					"quoteCodes": [
						{
							"code": "",
							"createdBy": "",
							"createdTime": "",
							"deleted": false,
							"id": "",
							"modifiedBy": "",
							"modifiedTime": "",
							"propertyType": "",
							"relativeCode": "",
							"relativePropertyCode": "",
							"relativePropertyType": "",
							"relativeSchemaCode": "",
							"remarks": "",
							"schemaCode": ""
						}
					],
					"relativeCode": "",
					"relativePropertyCode": "",
					"relativeQuoteCode": "",
					"remarks": "",
					"repeated": false,
					"schemaCode": "",
					"selectionJson": "",
					"sortKey": 0,
					"subSchema": {}
				}
			],
			"published": false,
			"remarks": "",
			"summary": ""
		},
		"bizSheet": {
			"bizDataRuleModels": [
				{}
			],
			"borderMode": "",
			"code": "",
			"createdBy": "",
			"createdTime": "",
			"deleteBizDataRuleIds": [],
			"deleted": false,
			"draftActionsJson": "",
			"draftAttributesJson": "",
			"draftHtmlJson": "",
			"draftSchemaOptionsJson": "",
			"draftViewJson": "",
			"editProperties": [
				{}
			],
			"errorMsgList": [
				{
					"data": [
						{
							"data": [
								{}
							],
							"errMsg": "",
							"propertyCode": "",
							"propertyName": "",
							"propertyName_i18n": "",
							"schemaCode": "",
							"schemaName": "",
							"schemaName_i18n": "",
							"sheetCode": "",
							"sheetName": "",
							"sheetName_i18n": "",
							"statusCode": "",
							"targetDepartmentId": "",
							"targetDepartmentName": "",
							"targetRoleName": "",
							"targetSchemaCode": "",
							"targetSchemaName": "",
							"targetType": "",
							"targetUserId": "",
							"targetUserName": "",
							"unit": {}
						}
					],
					"errMsg": "",
					"propertyCode": "",
					"propertyName": "",
					"propertyName_i18n": "",
					"schemaCode": "",
					"schemaName": "",
					"schemaName_i18n": "",
					"sheetCode": "",
					"sheetName": "",
					"sheetName_i18n": "",
					"statusCode": "",
					"targetDepartmentId": "",
					"targetDepartmentName": "",
					"targetRoleName": "",
					"targetSchemaCode": "",
					"targetSchemaName": "",
					"targetType": "",
					"targetUserId": "",
					"targetUserName": "",
					"unit": {}
				}
			],
			"existDraft": false,
			"externalLinkAble": false,
			"formComment": false,
			"formSystemVersion": "",
			"formTrack": false,
			"icon": "",
			"id": "",
			"layoutType": "",
			"mobileIsPc": false,
			"mobileUrl": "",
			"modelType": "",
			"modifiedBy": "",
			"modifiedTime": "",
			"name": "",
			"name_i18n": "",
			"options": "",
			"pcUrl": "",
			"pdfAble": "",
			"printIsPc": false,
			"printJson": "",
			"printTemplateJson": "",
			"printUrl": "",
			"publishBy": "",
			"published": false,
			"publishedActionsJson": "",
			"publishedAttributesJson": "",
			"publishedHtmlJson": "",
			"publishedViewJson": "",
			"qrCodeAble": "",
			"remarks": "",
			"schemaCode": "",
			"settingPrint": false,
			"sheetType": "",
			"sheetTypeName": "",
			"shortCode": "",
			"sortKey": 0,
			"subTip": false,
			"tempAuthSchemaCodeSet": [],
			"tempAuthSchemaCodes": "",
			"trackDataCodes": "",
			"version": 0
		},
		"commentInfo": {
			"comment": "",
			"originator": {
				"departmentId": "",
				"departmentName": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"unitType": "1: 部门， 2：角色，3：用户 ",
				"username": ""
			},
			"type": ""
		},
		"commonCommentSwitch": false,
		"departments": [
			{
				"calendarId": "",
				"children": [
					{
						"calendarId": "",
						"children": [
							{}
						],
						"code": "",
						"corpId": "",
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"deptType": {
							"name": ""
						},
						"dingDeptManagerId": "",
						"displayOption": false,
						"employees": 0,
						"enabled": false,
						"extend1": "",
						"extend2": "",
						"extend3": "",
						"extend4": 0,
						"extend5": 0,
						"hasPermission": false,
						"id": "",
						"isCorpRootNode": false,
						"isShow": false,
						"leaf": false,
						"managerId": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"name": "",
						"parent": {},
						"parentDepartmentName": "",
						"parentId": "",
						"queryCode": "",
						"relatedOrgType": "",
						"relatedSyncType": "",
						"remarks": "",
						"sortKey": 0,
						"sourceId": "",
						"unitType": "1: 部门， 2：角色，3：用户 "
					}
				],
				"code": "",
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"deptType": {
					"name": ""
				},
				"dingDeptManagerId": "",
				"displayOption": false,
				"employees": 0,
				"enabled": false,
				"extend1": "",
				"extend2": "",
				"extend3": "",
				"extend4": 0,
				"extend5": 0,
				"hasPermission": false,
				"id": "",
				"isCorpRootNode": false,
				"isShow": false,
				"leaf": false,
				"managerId": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"parent": {},
				"parentDepartmentName": "",
				"parentId": "",
				"queryCode": "",
				"relatedOrgType": "",
				"relatedSyncType": "",
				"remarks": "",
				"sortKey": 0,
				"sourceId": "",
				"unitType": "1: 部门， 2：角色，3：用户 "
			}
		],
		"formPermission": {
			"actionPermission": {
				"adjustParticipant": false,
				"agree": false,
				"assist": false,
				"assistRetrieve": false,
				"cancel": false,
				"circulate": false,
				"copy": false,
				"delete": false,
				"disAgree": false,
				"edit": false,
				"editOwner": false,
				"finishInstance": false,
				"formTrack": false,
				"forward": false,
				"print": false,
				"reject": false,
				"rejectToActivityCode": "",
				"rejectToFixded": false,
				"rejectToStart": false,
				"retrieve": false,
				"save": false,
				"showCheck": false,
				"showReject": false,
				"submit": false,
				"urge": false
			},
			"btnConfigList": [
				{
					"attachmentPermission": {
						"required": true,
						"visible": true
					},
					"code": "",
					"commentPermission": {
						"required": true,
						"visible": true
					},
					"displayName": "",
					"enabled": true,
					"name": "",
					"remark": "",
					"signPermission": {
						"required": true,
						"visible": true
					},
					"system": true,
					"type": ""
				}
			],
			"customButtons": [
				{
					"actionConfig": "",
					"bindAction": "",
					"code": "",
					"createdBy": "",
					"createdTime": "",
					"deleted": false,
					"description": "",
					"hint": "",
					"id": "",
					"modifiedBy": "",
					"modifiedTime": "",
					"name": "",
					"operateType": "",
					"remarks": "",
					"schemaCode": "",
					"showPermCode": "",
					"showPermType": "",
					"sortKey": 0,
					"targetCode": "",
					"targetObjCode": "",
					"triggerCode": "",
					"triggerType": "",
					"useLocation": ""
				}
			],
			"dataPermissions": {
				"additionalProperties1": {
					"e": false,
					"m": false,
					"propertyCode": "",
					"r": false,
					"subDataPermission": [
						{}
					],
					"v": false
				}
			}
		},
		"instanceName": "",
		"logInfoList": [
			{
				"activityCode": "",
				"activityName": "",
				"approvalActionStatus": "",
				"comment": "",
				"finishTime": "",
				"logStatus": "",
				"name_i18n": "",
				"originator": {
					"id": "",
					"imgUrl": "",
					"name": "",
					"sourceAction": "",
					"sourceId": "",
					"sourceName": "",
					"workItemType": ""
				},
				"receiveTime": "",
				"signature": "",
				"subInstanceActivity": false,
				"subInstanceStatus": 0,
				"subWorkItemId": "",
				"subWorkflowInstanceId": "",
				"tokenId": 0,
				"trustor": {
					"id": "",
					"imgUrl": "",
					"name": "",
					"sourceAction": "",
					"sourceId": "",
					"sourceName": "",
					"workItemType": ""
				},
				"usedTime": 0,
				"workItemStatus": ""
			}
		],
		"nextNodeParticipant": "",
		"participantChoose": false,
		"properties": {},
		"workFlowLog": [
			{
				"activityCode": "",
				"activityName": "",
				"activityStatus": "",
				"approvalActionStatus": "",
				"comment": "",
				"finishTime": "",
				"logStatus": "",
				"name": "",
				"receiveTime": "",
				"signature": "",
				"usedTime": 0
			}
		],
		"workItemId": "",
		"workflowCode": "",
		"workflowInstanceId": "",
		"workflowInstanceIsSubmit": false,
		"workflowName": "",
		"workflowTokenId": "",
		"workflowVersion": 0
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 执行自定义业务规则


**接口地址**:`/api/openapi/v3/bo/invokeBizRule`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "bizRuleCode": "",
  "data": {},
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|执行业务规则请求|执行业务规则请求|body|true|执行业务规则请求|执行业务规则请求|
|&emsp;&emsp;bizRuleCode|业务规则编码||false|string||
|&emsp;&emsp;data|执行业务规则数据||false|object||
|&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«执行自定义业务规则返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|执行自定义业务规则返回|执行自定义业务规则返回|
|&emsp;&emsp;returnObject|返回对象|object||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"returnObject": {}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 表单列表查询


**接口地址**:`/api/openapi/v3/bo/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "allObjectId": [],
  "bizObjectId": "",
  "childPageEnable": false,
  "childSchemaCode": "",
  "columns": [
    {
      "childColumns": [
        {
          "clientType": "",
          "createdBy": "",
          "createdTime": "",
          "deleted": false,
          "displayFields": [
            {}
          ],
          "displayFormat": 0,
          "id": "",
          "isDefaultProperty": false,
          "isQueryColumn": false,
          "modifiedBy": "",
          "modifiedTime": "",
          "name": "",
          "name_i18n": "",
          "options": "",
          "propertyAlias": "",
          "propertyCode": "",
          "propertyType": "",
          "queryId": "",
          "queryLevel": 0,
          "relativeSchemaCode": "",
          "remarks": "",
          "schemaAlias": "",
          "schemaCode": "",
          "sortKey": 0,
          "sumType": "",
          "unit": 0,
          "visible": false,
          "width": ""
        }
      ],
      "clientType": "",
      "createdBy": "",
      "createdTime": "",
      "deleted": false,
      "displayFields": [
        {}
      ],
      "displayFormat": 0,
      "id": "",
      "isDefaultProperty": false,
      "modifiedBy": "",
      "modifiedTime": "",
      "name": "",
      "name_i18n": "",
      "options": "",
      "propertyAlias": "",
      "propertyCode": "",
      "propertyType": "",
      "queryId": "",
      "queryLevel": 0,
      "relativeSchemaCode": "",
      "remarks": "",
      "schemaAlias": "",
      "schemaCode": "",
      "sortKey": 0,
      "sumType": "",
      "syncDefaultFormat": false,
      "unit": 0,
      "visible": false,
      "width": ""
    }
  ],
  "condition": "",
  "customized": false,
  "customizedQuery": false,
  "display": false,
  "exportFieldsJson": "",
  "filters": [
    {
      "op": "",
      "operatorType": "",
      "propertyCode": "",
      "propertyType": "",
      "propertyValue": "",
      "queryFilterType": ""
    }
  ],
  "filtersMap": [],
  "filtersNewCondition": [
    {
      "op": "",
      "operatorType": "",
      "propertyCode": "",
      "propertyType": "",
      "propertyValue": "",
      "queryFilterType": ""
    }
  ],
  "formCode": "",
  "groupByFields": [],
  "isSheet": false,
  "isUpdateExportFields": false,
  "languageType": "",
  "mobile": false,
  "objectIds": [],
  "options": {
    "customDisplayColumns": [],
    "queryDisplayType": ""
  },
  "orderByFields": [],
  "orderType": 0,
  "orders": [
    {
      "dir": "",
      "propertyCode": ""
    }
  ],
  "ownerDeptId": "",
  "ownerId": "",
  "page": 0,
  "queryCode": "",
  "queryCondition": [],
  "queryVersion": 0,
  "reverseCode": "",
  "reverseSchemaCode": "",
  "reverseSchemaParam": {
    "reverseQueryCode": "",
    "reverseRelevanceFormCode": "",
    "reverseSchemaCode": "",
    "reverseSheetCode": ""
  },
  "reverseViewFlag": false,
  "schemaCode": "",
  "sheet": true,
  "showParticipant": false,
  "showTotal": false,
  "size": 0,
  "tempAuthObjectId": "",
  "tempAuthPropertyCode": "",
  "tempAuthSheetId": "",
  "userCommonQueryId": "",
  "userId": "",
  "view": {
    "depth": 1,
    "displayField": "",
    "parentRef": "",
    "showPath": false,
    "type": "list"
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|获取Bo列表请求|获取Bo列表请求|body|true|获取Bo列表请求|获取Bo列表请求|
|&emsp;&emsp;allObjectId|默认导出时传入的当前页的所有业务id||false|array|string|
|&emsp;&emsp;bizObjectId|主表数据id||false|string||
|&emsp;&emsp;childPageEnable|是否需要子表分页||false|boolean||
|&emsp;&emsp;childSchemaCode|需要查询的子表模型编码||false|string||
|&emsp;&emsp;columns|选择导出展示数据项||false|array|BizQueryColumnModel|
|&emsp;&emsp;&emsp;&emsp;childColumns|选择导出子表展示数据项||false|array|BizQueryChildColumnModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;clientType|客户端类型,可用值:APP,OTHER,PC||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayFields|数据项类型为关联表单时，展示其他模型数据项||false|array|BizQueryColumnModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayFormat|显示格式||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDefaultProperty|是否系统数据项||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isQueryColumn|给前端标识是queryColumn还是property属性||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|字段名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;options|数据项值||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyAlias|展示字段编码别名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;propertyType|数据项目类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryId|列表id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryLevel|查询批次 1-主表 2-子表||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relativeSchemaCode|关联的模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaAlias|模型编码别名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sumType|数值类型有效 求和 平均值 最大值 计数,可用值:0,1,2,3,4,5||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit|单位0:px,1:%||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;width|宽度px,%||false|string||
|&emsp;&emsp;&emsp;&emsp;clientType|客户端类型,可用值:APP,OTHER,PC||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;displayFields|数据项类型为关联表单时，展示其他模型数据项||false|array|BizQueryColumnModel|
|&emsp;&emsp;&emsp;&emsp;displayFormat|显示格式||false|integer||
|&emsp;&emsp;&emsp;&emsp;id|id标识||false|string||
|&emsp;&emsp;&emsp;&emsp;isDefaultProperty|是否系统数据项||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;name|字段名称||false|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称||false|string||
|&emsp;&emsp;&emsp;&emsp;options|数据项值||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyAlias|展示字段编码别名||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyType|数据项目类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;queryId|列表ID||false|string||
|&emsp;&emsp;&emsp;&emsp;queryLevel|查询批次 1-主表 2-子表||false|integer||
|&emsp;&emsp;&emsp;&emsp;relativeSchemaCode|关联的模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaAlias|模型编码别名||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号||false|integer||
|&emsp;&emsp;&emsp;&emsp;sumType|数值类型有效 求和 平均值 最大值 计数,可用值:0,1,2,3,4,5||false|string||
|&emsp;&emsp;&emsp;&emsp;syncDefaultFormat|是否同步默认格式||false|boolean||
|&emsp;&emsp;&emsp;&emsp;unit|单位0:px,1:%||false|integer||
|&emsp;&emsp;&emsp;&emsp;visible|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;width|宽度px,%||false|string||
|&emsp;&emsp;condition|下拉框属性||false|string||
|&emsp;&emsp;customized|是否是二次开发定制的方法||false|boolean||
|&emsp;&emsp;customizedQuery|(已废弃)是否自定义查询，自定义查询的话，会根据传入属性值查询||false|boolean||
|&emsp;&emsp;display|是否是查詢关联表单显示字段内容||false|boolean||
|&emsp;&emsp;exportFieldsJson|导出字段JSON||false|string||
|&emsp;&emsp;filters|查询对象||false|array|查询条件|
|&emsp;&emsp;&emsp;&emsp;op|匹配类型,可用值:Between,Eq,Gt,Gte,In,IsNotNull,IsNull,Like,Lt,Lte,NotBetween,NotEq,NotIn,NotLike||false|string||
|&emsp;&emsp;&emsp;&emsp;operatorType|关联查询配置查询条件类型,可用值:1,10,11,12,13,14,15,16,17,18,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyCode|条件编码||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyType|条件类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyValue|查询条件值,多值情况以分号隔开||false|string||
|&emsp;&emsp;&emsp;&emsp;queryFilterType|匹配类型,可用值:Between,Eq,Gt,Gte,In,IsNotNull,IsNull,Like,Lt,Lte,NotBetween,NotEq,NotIn,NotLike,NotOf,Of||false|string||
|&emsp;&emsp;filtersMap|查询对象Map接收参数||false|array|object|
|&emsp;&emsp;filtersNewCondition|查询对象Map接收参数||false|array|查询条件|
|&emsp;&emsp;&emsp;&emsp;op|匹配类型,可用值:Between,Eq,Gt,Gte,In,IsNotNull,IsNull,Like,Lt,Lte,NotBetween,NotEq,NotIn,NotLike||false|string||
|&emsp;&emsp;&emsp;&emsp;operatorType|关联查询配置查询条件类型,可用值:1,10,11,12,13,14,15,16,17,18,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyCode|条件编码||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyType|条件类型,可用值:0,1,10,11,12,13,14,15,2,20,3,4,5,50,51,6,60,61,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyValue|查询条件值,多值情况以分号隔开||false|string||
|&emsp;&emsp;&emsp;&emsp;queryFilterType|匹配类型,可用值:Between,Eq,Gt,Gte,In,IsNotNull,IsNull,Like,Lt,Lte,NotBetween,NotEq,NotIn,NotLike,NotOf,Of||false|string||
|&emsp;&emsp;formCode|反向关联的表单编码||false|string||
|&emsp;&emsp;groupByFields|分组字段||false|array|string|
|&emsp;&emsp;isSheet|是否视图批量操作||false|boolean||
|&emsp;&emsp;isUpdateExportFields|是否修改导出字段||false|boolean||
|&emsp;&emsp;languageType|语言类别||false|string||
|&emsp;&emsp;mobile|是否移动端||false|boolean||
|&emsp;&emsp;objectIds|选择导出的数据的id,列表||false|array|string|
|&emsp;&emsp;options|列表配置项||false|Options|Options|
|&emsp;&emsp;&emsp;&emsp;customDisplayColumns|自定义显示的字段（数据项编码）||false|array|string|
|&emsp;&emsp;&emsp;&emsp;queryDisplayType|查询列表显示类型。\nDEFAULT 默认展示查询列表配置的显示字段；\nOVERRIDE 覆盖展示查询列表配置的显示字段；\nAPPEND 在查询列表配置的显示字段的基础上新增显示字段。,可用值:0,1,2||false|string||
|&emsp;&emsp;orderByFields|排序字段||false|array|string|
|&emsp;&emsp;orderType|排序类型||false|integer(int32)||
|&emsp;&emsp;orders|排序，当传参使用orders，orderByFields和orderType参数作废||false|array|排序条件|
|&emsp;&emsp;&emsp;&emsp;dir|排序方式,可用值:ASC,DESC||false|string||
|&emsp;&emsp;&emsp;&emsp;propertyCode|字段编码||false|string||
|&emsp;&emsp;ownerDeptId|拥有者部门id||false|string||
|&emsp;&emsp;ownerId|拥有者id||false|string||
|&emsp;&emsp;page|当前页||false|integer(int32)||
|&emsp;&emsp;queryCode|查询列表编码||false|string||
|&emsp;&emsp;queryCondition|查询条件||false|array|array|
|&emsp;&emsp;queryVersion|查询条件版本号||false|integer(int32)||
|&emsp;&emsp;reverseCode|反向关联控件编码||false|string||
|&emsp;&emsp;reverseSchemaCode|反向关联的模型编码||false|string||
|&emsp;&emsp;reverseSchemaParam|关联表单展示字段视图配置查询参数||false|ReverseSchemaParam|ReverseSchemaParam|
|&emsp;&emsp;&emsp;&emsp;reverseQueryCode|反向关联表单queryCode||false|string||
|&emsp;&emsp;&emsp;&emsp;reverseRelevanceFormCode|反向关联表单编码||false|string||
|&emsp;&emsp;&emsp;&emsp;reverseSchemaCode|反向关联表单模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;reverseSheetCode|反向关联表单列表编码||false|string||
|&emsp;&emsp;reverseViewFlag|是否使用关联表单展示字段视图配置||false|boolean||
|&emsp;&emsp;schemaCode|需要查询的数据模型编码||false|string||
|&emsp;&emsp;sheet|||false|boolean||
|&emsp;&emsp;showParticipant|流程表单是否导出当前处理人||false|boolean||
|&emsp;&emsp;showTotal|显示总条数||false|boolean||
|&emsp;&emsp;size|数量||false|integer(int32)||
|&emsp;&emsp;tempAuthObjectId|（临时授权）跳转前源表单的业务对象id||false|string||
|&emsp;&emsp;tempAuthPropertyCode|（临时授权）跳转前源表单 关联表单 数据项的编码||false|string||
|&emsp;&emsp;tempAuthSheetId|（临时授权）跳转前源表单的表单id||false|string||
|&emsp;&emsp;userCommonQueryId|用户公用数据id-导出字段记录id||false|string||
|&emsp;&emsp;userId|用户id||false|string||
|&emsp;&emsp;view|模型参数（支持树形结构）||false|ModelViewQueryModelReq|ModelViewQueryModelReq|
|&emsp;&emsp;&emsp;&emsp;depth|深度（默认1）||false|integer||
|&emsp;&emsp;&emsp;&emsp;displayField|展示路径所用字段（若不指定使用关联单选的显示字段）||false|string||
|&emsp;&emsp;&emsp;&emsp;parentRef|父节点（为#时查根节点）||false|string||
|&emsp;&emsp;&emsp;&emsp;showPath|展示路径（默认不返回）||false|boolean||
|&emsp;&emsp;&emsp;&emsp;type|视图类型：list/tree (默认list),可用值:LIST,TREE||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«获取Bo列表返回»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|获取Bo列表返回|获取Bo列表返回|
|&emsp;&emsp;bizObjectPage|Bo分页数据|分页返回对象«BizObjectModel»|分页返回对象«BizObjectModel»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childPageInfo||object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdDeptId|创建人部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creater|创建人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致|object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urgencyLevel|可用值:0,1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|业务对象ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|修改时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifier|修改人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;owner|所有人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerDeptId|所有人部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|部门查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participants||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceStatus|单据状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sheetCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例ID|string||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModelRes|ModelViewQueryModelRes|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;depth|深度（默认1）|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayField|展示路径所用字段（若不指定使用关联单选的显示字段）|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentRef|父节点（为#时查根节点）|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showPath|展示路径（默认不返回）|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;treeModel||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|视图类型：list/tree (默认list),可用值:LIST,TREE|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"bizObjectPage": {
			"content": [
				{
					"childPageInfo": {},
					"createdDeptId": "",
					"createdTime": "",
					"creater": "",
					"data": {},
					"extendInfo": {
						"creatorId": "",
						"sourceBizObjectId": "",
						"sourceBizObjectName": "",
						"sourceSchemaCode": "",
						"sourceSchemaName": "",
						"urgencyLevel": ""
					},
					"id": "",
					"loadedFromDb": false,
					"modifiedTime": "",
					"modifier": "",
					"name": "",
					"owner": "",
					"ownerDeptId": "",
					"ownerDeptQueryCode": "",
					"participants": "",
					"schemaCode": "",
					"sequenceNo": "",
					"sequenceStatus": "",
					"sheetCode": "",
					"status": "",
					"workflowInstanceId": ""
				}
			],
			"sumLine": 0,
			"sumMap": {},
			"totalElements": 0,
			"totalPages": 0,
			"view": {
				"depth": 1,
				"displayField": "",
				"parentRef": "",
				"showPath": false,
				"treeModel": true,
				"type": "list"
			}
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 更新表单


**接口地址**:`/api/openapi/v3/bo/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "data": {},
  "departmentId": "",
  "schemaCode": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|更新表单数据请求|更新表单数据请求|body|true|更新表单数据请求|更新表单数据请求|
|&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||true|object||
|&emsp;&emsp;departmentId|部门id，为空时取主部门||false|string||
|&emsp;&emsp;schemaCode|业务模型编码||true|string||
|&emsp;&emsp;userId|用户id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«UpdateBoResponse»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|UpdateBoResponse|UpdateBoResponse|
|&emsp;&emsp;bizObjectId|更新成功Bo的Id|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"bizObjectId": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenAPIV3::订阅


## 订阅表单事件


**接口地址**:`/api/openapi/v3/subscription/bizobject/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>订阅表单事件</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "callback": "",
  "eventType": 0,
  "options": {},
  "schemaCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|订阅表单事件请求|订阅表单事件请求|body|true|订阅表单事件请求|订阅表单事件请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;callback|回调地址||true|string||
|&emsp;&emsp;eventType|事件类型:0.所有 1.新增 2.更新 3.删除||true|integer(int32)||
|&emsp;&emsp;options|扩展参数，OpenAPI鉴权参数，{  "url": "地址/api/oauth/token",  "client_id": "xxxxxxxx",  "client_secret": "oooooooo",  "grant_type": "client_credentials"}url：授权地址client_id：客户端ID，base_security_client表的clientId;client_secret：客户端密钥，base_security_client表的clientSecret,注意表里保存的{noop}oooooooo，需要去掉{noop};grant_type：授权类型，固定值client_credentials||false|object||
|&emsp;&emsp;schemaCode|模型编码，可选||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 删除实体订阅


**接口地址**:`/api/openapi/v3/subscription/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>删除实体订阅</p>



**请求示例**:


```javascript
{
  "id": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|删除订阅请求|删除订阅请求|body|true|删除订阅请求|删除订阅请求|
|&emsp;&emsp;id|订阅Id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询所有订阅


**接口地址**:`/api/openapi/v3/subscription/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询所有订阅</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询所有订阅返回»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询所有订阅返回|查询所有订阅返回|
|&emsp;&emsp;eventModelList|订阅列表|array|EventModel|
|&emsp;&emsp;&emsp;&emsp;callback||string||
|&emsp;&emsp;&emsp;&emsp;clientId||string||
|&emsp;&emsp;&emsp;&emsp;eventTarget||string||
|&emsp;&emsp;&emsp;&emsp;eventTargetType||integer||
|&emsp;&emsp;&emsp;&emsp;eventType||integer||
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;options||object||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"eventModelList": [
			{
				"callback": "",
				"clientId": "",
				"eventTarget": "",
				"eventTargetType": 0,
				"eventType": 0,
				"id": "",
				"options": {}
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 可订阅的实体类列表


**接口地址**:`/api/openapi/v3/subscription/model/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«可订阅的实体类列表返回»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|可订阅的实体类列表返回|可订阅的实体类列表返回|
|&emsp;&emsp;subscribeModelSet|可订阅的实体类列表|array|string|
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"subscribeModelSet": []
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 订阅实体类


**接口地址**:`/api/openapi/v3/subscription/model/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>订阅实体类</p>



**请求示例**:


```javascript
{
  "callback": "",
  "eventTarget": "",
  "eventType": 0,
  "options": {}
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|订阅实体事件请求|订阅实体事件请求|body|true|订阅实体事件请求|订阅实体事件请求|
|&emsp;&emsp;callback|回调地址||true|string||
|&emsp;&emsp;eventTarget|事件对象：可从allModels接口中查询||true|string||
|&emsp;&emsp;eventType|事件类型:0.所有 1.新增 2.更新 3.删除||true|integer(int32)||
|&emsp;&emsp;options|扩展参数，OpenAPI鉴权参数，{  "url": "地址/api/oauth/token",  "client_id": "xxxxxxxx",  "client_secret": "oooooooo",  "grant_type": "client_credentials"}url：授权地址client_id：客户端ID，base_security_client表的clientId;client_secret：客户端密钥，base_security_client表的clientSecret,注意表里保存的{noop}oooooooo，需要去掉{noop};grant_type：授权类型，固定值client_credentials||false|object||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": false,
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```