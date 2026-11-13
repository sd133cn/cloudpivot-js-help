# 云枢OpenWebAPI_V2接口文档


**简介**:云枢OpenWebAPI_V2接口文档


**HOST**:https://demo.cloudpivot.cn:443


**联系人**:


**Version**:3.0 [6.15.13]


**接口路径**:/v3/api-docs?group=04_OpenWebAPI


[TOC]






# OpenWebAPI::应用


## 查询应用接口


**接口地址**:`/api/api/v2/app/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询应用接口</p>



**请求示例**:


```javascript
{
  "filterNoWorkflow": false,
  "isMobile": false
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询应用-请求|查询应用-请求|body|true|查询应用-请求|查询应用-请求|
|&emsp;&emsp;filterNoWorkflow|过滤没有流程的应用||false|boolean||
|&emsp;&emsp;isMobile|是否移动端||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询应用-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询应用-响应|查询应用-响应|
|&emsp;&emsp;appFunctionModelList|模型列表|array|AppFunctionModel|
|&emsp;&emsp;&emsp;&emsp;appCode|应用id|string||
|&emsp;&emsp;&emsp;&emsp;appName|应用名称|string||
|&emsp;&emsp;&emsp;&emsp;appName_i18n|应用双语名称|string||
|&emsp;&emsp;&emsp;&emsp;bindWorkflow|是否绑定流程|boolean||
|&emsp;&emsp;&emsp;&emsp;children|子目录|array|AppFunctionModel|
|&emsp;&emsp;&emsp;&emsp;code|目录编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;icon|目录图标|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mobileAble|mobile可见|boolean||
|&emsp;&emsp;&emsp;&emsp;mobileUrl|mobileURL|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型 1 LIST-普通模型 2 TREE-树形模型,可用值:LIST,TREE|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;modifierName|修改人姓名|string||
|&emsp;&emsp;&emsp;&emsp;name|目录名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;openMode|打开方式,可用值:NEW_PAGE_MODE,RECENT_PAGE_MODE,VUE_MODE|string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级id|string||
|&emsp;&emsp;&emsp;&emsp;pcAble|pc可见|boolean||
|&emsp;&emsp;&emsp;&emsp;pcUrl|pcURL|string||
|&emsp;&emsp;&emsp;&emsp;published|数据模型发布状态|boolean||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;reportObjectId|报表标识符|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|目录排序|integer||
|&emsp;&emsp;&emsp;&emsp;type|目录类型,可用值:BizModel,Folder,Page,Report|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"appFunctionModelList": [
			{
				"appCode": "",
				"appName": "",
				"appName_i18n": "",
				"bindWorkflow": false,
				"children": [
					{
						"appCode": "",
						"appName": "",
						"appName_i18n": "",
						"bindWorkflow": false,
						"children": [
							{}
						],
						"code": "",
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"icon": "",
						"id": "",
						"mobileAble": false,
						"mobileUrl": "",
						"modelType": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"modifierName": "",
						"name": "",
						"name_i18n": "",
						"openMode": "",
						"parentId": "",
						"pcAble": false,
						"pcUrl": "",
						"published": false,
						"remarks": "",
						"reportObjectId": "",
						"sortKey": 0,
						"type": ""
					}
				],
				"code": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"icon": "",
				"id": "",
				"mobileAble": false,
				"mobileUrl": "",
				"modelType": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"modifierName": "",
				"name": "",
				"name_i18n": "",
				"openMode": "",
				"parentId": "",
				"pcAble": false,
				"pcUrl": "",
				"published": false,
				"remarks": "",
				"reportObjectId": "",
				"sortKey": 0,
				"type": ""
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenWebAPI::模型


## 查询目录接口


**接口地址**:`/api/api/v2/app/function/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据应用编码和是否移动端查询目录</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "isMobile": false
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询目录-请求|查询目录-请求|body|true|查询目录-请求|查询目录-请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;isMobile|是否移动端||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询应用-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询应用-响应|查询应用-响应|
|&emsp;&emsp;appFunctionModelList|模型列表|array|AppFunctionModel|
|&emsp;&emsp;&emsp;&emsp;appCode|应用id|string||
|&emsp;&emsp;&emsp;&emsp;appName|应用名称|string||
|&emsp;&emsp;&emsp;&emsp;appName_i18n|应用双语名称|string||
|&emsp;&emsp;&emsp;&emsp;bindWorkflow|是否绑定流程|boolean||
|&emsp;&emsp;&emsp;&emsp;children|子目录|array|AppFunctionModel|
|&emsp;&emsp;&emsp;&emsp;code|目录编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;icon|目录图标|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mobileAble|mobile可见|boolean||
|&emsp;&emsp;&emsp;&emsp;mobileUrl|mobileURL|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型 1 LIST-普通模型 2 TREE-树形模型,可用值:LIST,TREE|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;modifierName|修改人姓名|string||
|&emsp;&emsp;&emsp;&emsp;name|目录名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;openMode|打开方式,可用值:NEW_PAGE_MODE,RECENT_PAGE_MODE,VUE_MODE|string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级id|string||
|&emsp;&emsp;&emsp;&emsp;pcAble|pc可见|boolean||
|&emsp;&emsp;&emsp;&emsp;pcUrl|pcURL|string||
|&emsp;&emsp;&emsp;&emsp;published|数据模型发布状态|boolean||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;reportObjectId|报表标识符|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|目录排序|integer||
|&emsp;&emsp;&emsp;&emsp;type|目录类型,可用值:BizModel,Folder,Page,Report|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"appFunctionModelList": [
			{
				"appCode": "",
				"appName": "",
				"appName_i18n": "",
				"bindWorkflow": false,
				"children": [
					{
						"appCode": "",
						"appName": "",
						"appName_i18n": "",
						"bindWorkflow": false,
						"children": [
							{}
						],
						"code": "",
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"icon": "",
						"id": "",
						"mobileAble": false,
						"mobileUrl": "",
						"modelType": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"modifierName": "",
						"name": "",
						"name_i18n": "",
						"openMode": "",
						"parentId": "",
						"pcAble": false,
						"pcUrl": "",
						"published": false,
						"remarks": "",
						"reportObjectId": "",
						"sortKey": 0,
						"type": ""
					}
				],
				"code": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"icon": "",
				"id": "",
				"mobileAble": false,
				"mobileUrl": "",
				"modelType": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"modifierName": "",
				"name": "",
				"name_i18n": "",
				"openMode": "",
				"parentId": "",
				"pcAble": false,
				"pcUrl": "",
				"published": false,
				"remarks": "",
				"reportObjectId": "",
				"sortKey": 0,
				"type": ""
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenWebAPI::流程


## 加载可发起的流程


**接口地址**:`/api/api/v2/workflow/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>返回结果：{&quot;size&quot;: 8,&quot;appCode&quot;: &quot;testapp001&quot;,&quot;appName&quot;: &quot;测试应用1&quot;,&quot;dataList&quot;: [{&quot;code&quot;: &quot;test_wl1&quot;,&quot;name&quot;: &quot;测试流程1&quot;,&quot;id&quot;: &quot;2c92809667f0170f0167f028209b0027&quot;,&quot;icon&quot;:&quot;&quot;,&quot;type&quot;:&quot;Folder 目录、BizModel 流程&quot;}]}</p>



**请求示例**:


```javascript
{
  "isMobile": false
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|加载可发起的流程-请求|加载可发起的流程-请求|body|true|加载可发起的流程-请求|加载可发起的流程-请求|
|&emsp;&emsp;isMobile|是否是移动端||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«加载可发起的流程-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|加载可发起的流程-响应|加载可发起的流程-响应|
|&emsp;&emsp;workflowTreeList|流程树|array|流程树模型|
|&emsp;&emsp;&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;appGroupCode|应用分组编码|string||
|&emsp;&emsp;&emsp;&emsp;appGroupName|应用分组名称|string||
|&emsp;&emsp;&emsp;&emsp;appList|用户可发起的流程树模型列表|array|流程树模型|
|&emsp;&emsp;&emsp;&emsp;appName|应用名称|string||
|&emsp;&emsp;&emsp;&emsp;dataList|节点列表|array|节点|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataList|节点列表|array|节点|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;favorites|是否收藏|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullPath|全路径|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fullPath_i18n|全路径双语名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|节点id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|节点双语名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;size|数量size|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|节点类型,可用值:BizModel,Folder,Page,Report|string||
|&emsp;&emsp;&emsp;&emsp;logoUrl|应用图标地址|string||
|&emsp;&emsp;&emsp;&emsp;logoUrlId|应用图标|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|应用双语名称|string||
|&emsp;&emsp;&emsp;&emsp;size|数量|integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"workflowTreeList": [
			{
				"appCode": "",
				"appGroupCode": "",
				"appGroupName": "",
				"appList": [
					{
						"appCode": "",
						"appGroupCode": "",
						"appGroupName": "",
						"appList": [
							{}
						],
						"appName": "",
						"dataList": [
							{
								"appCode": "",
								"code": "",
								"dataList": [
									{
										"appCode": "",
										"code": "",
										"dataList": [
											{}
										],
										"favorites": false,
										"fullPath": "",
										"fullPath_i18n": "",
										"icon": "",
										"id": "",
										"name": "",
										"name_i18n": "",
										"schemaCode": "",
										"size": 0,
										"type": ""
									}
								],
								"favorites": false,
								"fullPath": "",
								"fullPath_i18n": "",
								"icon": "",
								"id": "",
								"name": "",
								"name_i18n": "",
								"schemaCode": "",
								"size": 0,
								"type": ""
							}
						],
						"logoUrl": "",
						"logoUrlId": "",
						"name_i18n": "",
						"size": 0
					}
				],
				"appName": "",
				"dataList": [
					{}
				],
				"logoUrl": "",
				"logoUrlId": "",
				"name_i18n": "",
				"size": 0
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询已阅列表


**接口地址**:`/api/api/v2/workItem/circulated/finished/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询已阅列表数据</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "endTime": "",
  "originator": "",
  "page": 0,
  "sequenceNo": "",
  "size": 0,
  "startTime": "",
  "unitType": 0,
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询已阅列表-请求|查询已阅列表-请求|body|true|查询已阅列表-请求|查询已阅列表-请求|
|&emsp;&emsp;appCode|模型编码||false|string||
|&emsp;&emsp;endTime|结束-接收时间||false|string||
|&emsp;&emsp;originator|发起人名称||false|string||
|&emsp;&emsp;page|当前页码||false|integer(int32)||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|每页显示数量||false|integer(int32)||
|&emsp;&emsp;startTime|开始-接收时间||false|string||
|&emsp;&emsp;unitType|组织用户类型||false|integer(int32)||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询已阅列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询已阅列表-响应|查询已阅列表-响应|
|&emsp;&emsp;circulateItemPage|已阅列表|分页返回对象«流程传阅任务列表信息»|分页返回对象«流程传阅任务列表信息»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|流程传阅任务列表信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activitySource|是否节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime|限时时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approval|任务审批结果,可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerCode|容器编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerName|容器名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|发起人部门id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|发起人部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formCode|表单编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|发起人头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId|流程实例id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator|流程实例发起人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName|流程实例发起人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant|参与者|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName|任务参与人姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime|接收时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|源ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceImgUrl|传阅来源头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|源Name|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceType|传阅来源类型：PARTICIPANT(用户) SYSTEM_ACTIVITY(系统),可用值:CIRCULATE,CONNECTION,END,PARTICIPANT,START,SUB_INSTANCE,SYSTEM_ACTIVITY|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|任务状态,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning1|超时警告1--黄色警告|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning2|超时警告2--红色警告|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedtime|任务耗时|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|任务类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceState|流程状态,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName|流程名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowTokenId|token id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本|integer||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModel|ModelViewQueryModel|
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
		"circulateItemPage": {
			"content": [
				{
					"activityCode": "",
					"activityName": "",
					"activitySource": false,
					"allowedTime": "",
					"appCode": "",
					"approval": "",
					"containerCode": "",
					"containerName": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"formCode": "",
					"id": "",
					"imgUrl": "",
					"instanceId": "",
					"instanceName": "",
					"name_i18n": "",
					"originator": "",
					"originatorName": "",
					"participant": "",
					"participantName": "",
					"receiveTime": "",
					"sequenceNo": "",
					"sourceId": "",
					"sourceImgUrl": "",
					"sourceName": "",
					"sourceName_i18n": "",
					"sourceType": "",
					"startTime": "",
					"state": "",
					"timeoutWarning1": "",
					"timeoutWarning2": "",
					"usedtime": 0,
					"workItemType": "",
					"workflowCode": "",
					"workflowInstanceState": "",
					"workflowName": "",
					"workflowTokenId": "",
					"workflowVersion": 0
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


## 查询待阅列表


**接口地址**:`/api/api/v2/workItem/circulated/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据流程名称或发起人查询待阅列表数据</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "originator": "",
  "page": 0,
  "queryType": "",
  "sequenceNo": "",
  "size": 0,
  "unitType": 0,
  "wd": "",
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询待阅列表-请求|查询待阅列表-请求|body|true|查询待阅列表-请求|查询待阅列表-请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;originator|发起人名称||false|string||
|&emsp;&emsp;page|当前页码||false|integer(int32)||
|&emsp;&emsp;queryType|查询类型：all全部(列表和总数) list只查列表 total只查总数,可用值:all,list,total||false|string||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|每页显示数量||false|integer(int32)||
|&emsp;&emsp;unitType|组织用户类型,1: 部门， 2：角色，3：用户||false|integer(int32)||
|&emsp;&emsp;wd|关键字。流程名称或发起人名称||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询待阅列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询待阅列表-响应|查询待阅列表-响应|
|&emsp;&emsp;circulateItemPage|待阅列表|分页返回对象«流程传阅任务列表信息»|分页返回对象«流程传阅任务列表信息»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|流程传阅任务列表信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activitySource|是否节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime|限时时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approval|任务审批结果,可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerCode|容器编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerName|容器名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|发起人部门id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|发起人部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formCode|表单编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl|发起人头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId|流程实例id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n|双语|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator|流程实例发起人|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName|流程实例发起人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant|参与者|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName|任务参与人姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime|接收时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|源ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceImgUrl|传阅来源头像|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|源Name|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceType|传阅来源类型：PARTICIPANT(用户) SYSTEM_ACTIVITY(系统),可用值:CIRCULATE,CONNECTION,END,PARTICIPANT,START,SUB_INSTANCE,SYSTEM_ACTIVITY|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|任务状态,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning1|超时警告1--黄色警告|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning2|超时警告2--红色警告|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedtime|任务耗时|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|任务类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceState|流程状态,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName|流程名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowTokenId|token id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本|integer||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModel|ModelViewQueryModel|
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
		"circulateItemPage": {
			"content": [
				{
					"activityCode": "",
					"activityName": "",
					"activitySource": false,
					"allowedTime": "",
					"appCode": "",
					"approval": "",
					"containerCode": "",
					"containerName": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"formCode": "",
					"id": "",
					"imgUrl": "",
					"instanceId": "",
					"instanceName": "",
					"name_i18n": "",
					"originator": "",
					"originatorName": "",
					"participant": "",
					"participantName": "",
					"receiveTime": "",
					"sequenceNo": "",
					"sourceId": "",
					"sourceImgUrl": "",
					"sourceName": "",
					"sourceName_i18n": "",
					"sourceType": "",
					"startTime": "",
					"state": "",
					"timeoutWarning1": "",
					"timeoutWarning2": "",
					"usedtime": 0,
					"workItemType": "",
					"workflowCode": "",
					"workflowInstanceState": "",
					"workflowName": "",
					"workflowTokenId": "",
					"workflowVersion": 0
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


## 查询已办列表


**接口地址**:`/api/api/v2/workItem/finished/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询已办列表数据</p>



**请求示例**:


```javascript
{
  "activityName": "",
  "appCode": "",
  "batchOperate": false,
  "instanceState": "",
  "originator": "",
  "page": 0,
  "participant": "",
  "participantName": "",
  "queryType": "",
  "sequenceNo": "",
  "size": 0,
  "source": "",
  "state": "",
  "unitType": 0,
  "wd": "",
  "workItemSource": 0,
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询待办列表-请求|查询待办列表-请求|body|true|查询待办列表-请求|查询待办列表-请求|
|&emsp;&emsp;activityName|节点名称||false|string||
|&emsp;&emsp;appCode|模型编码||false|string||
|&emsp;&emsp;batchOperate|有批量处理权限的任务||false|boolean||
|&emsp;&emsp;instanceState|流程实例状态,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF||false|string||
|&emsp;&emsp;originator|发起人名称||false|string||
|&emsp;&emsp;page|当前页码||false|integer(int32)||
|&emsp;&emsp;participant|处理人id||false|string||
|&emsp;&emsp;participantName|处理人||false|string||
|&emsp;&emsp;queryType|查询类型：all全部(列表和总数) list只查列表 total只查总数,可用值:all,list,total||false|string||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|每页显示数量||false|integer(int32)||
|&emsp;&emsp;source|环境来源||false|string||
|&emsp;&emsp;state|任务状态,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;unitType|组织用户类型,1: 部门， 2：角色，3：用户||false|integer(int32)||
|&emsp;&emsp;wd|关键字。流程名称或发起人名称||false|string||
|&emsp;&emsp;workItemSource|任务来源：1 系统转交 其他所有||false|integer(int32)||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询已办列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询已办列表-响应|查询已办列表-响应|
|&emsp;&emsp;workItemPage|已办列表|分页返回对象«流程任务列表信息»|分页返回对象«流程任务列表信息»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|流程任务列表信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionPermissionVO||业务表单操作权限|业务表单操作权限|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;adjustParticipant|是否允许调整活动参与者|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;agree|是否展示同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assist|是否允许协助|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistRetrieve|是否显示撤回协办按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancel|是否允许作废|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;circulate|是否允许传阅|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;copy|是否显示表单复制按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;delete|是否允许删除|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disAgree|是否展示不同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;edit|是否允许编辑|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;editOwner|是否允许编辑拥有者|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishInstance|是否直接结束流程|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formTrack|是否显示表单留痕按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;forward|是否允许进行转发|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;print|是否允许打印|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reject|是否允许驳回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToActivityCode|驳回到指定节点|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToFixded|是否允许驳回到指定活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToStart|是否允许驳回到起始节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;retrieve|是否允许取回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;save|是否允许暂存|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showCheck|是否展示审批意见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showReject|是否展示驳回按钮，由驳回操作的三个属性决定|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;submit|是否允许提交|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urge|催办|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approval|可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approvalName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistInfo||协办信息|协办信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistCount|协办次数|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistName|协办名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantImgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participants||object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remainingTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stayTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning1||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning2||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning3||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning4||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning5||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urgeCount||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedtime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemTimeoutStatus|可用值:NORMAL,ORANGE,RED,TIMEOUT,WARNING1,WARNING2,WARNING3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemTrust||流程审批任务委托|流程审批任务委托|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currentTrustor||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trust||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustor|委托人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustorName|委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceState|可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowTokenId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion||integer||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModel|ModelViewQueryModel|
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
		"workItemPage": {
			"content": [
				{
					"actionPermissionVO": {
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
					"activityCode": "",
					"activityName": "",
					"allowedTime": "",
					"appCode": "",
					"approval": "",
					"approvalName": "",
					"assistInfo": {
						"assistCount": 0,
						"assistName": ""
					},
					"containerCode": "",
					"containerName": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"formCode": "",
					"id": "",
					"imgUrl": "",
					"instanceId": "",
					"instanceName": "",
					"name_i18n": "",
					"originator": "",
					"originatorName": "",
					"participant": "",
					"participantImgUrl": "",
					"participantName": "",
					"participants": {},
					"receiveTime": "",
					"remainingTime": 0,
					"sequenceNo": "",
					"sourceId": "",
					"sourceName": "",
					"startTime": "",
					"state": "",
					"stayTime": 0,
					"timeoutWarning1": "",
					"timeoutWarning2": "",
					"timeoutWarning3": "",
					"timeoutWarning4": "",
					"timeoutWarning5": "",
					"urgeCount": 0,
					"usedtime": 0,
					"workItemTimeoutStatus": "",
					"workItemTrust": {
						"currentTrustor": true,
						"trust": true,
						"trustor": "",
						"trustorName": ""
					},
					"workItemType": "",
					"workflowCode": "",
					"workflowInstanceState": "",
					"workflowName": "",
					"workflowTokenId": "",
					"workflowVersion": 0
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


## 查询待办列表


**接口地址**:`/api/api/v2/workItem/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据流程名称或发起人查询代办列表数据</p>



**请求示例**:


```javascript
{
  "activityName": "",
  "appCode": "",
  "batchOperate": false,
  "instanceState": "",
  "originator": "",
  "page": 0,
  "participant": "",
  "participantName": "",
  "queryType": "",
  "sequenceNo": "",
  "size": 0,
  "source": "",
  "state": "",
  "unitType": 0,
  "wd": "",
  "workItemSource": 0,
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询待办列表-请求|查询待办列表-请求|body|true|查询待办列表-请求|查询待办列表-请求|
|&emsp;&emsp;activityName|节点名称||false|string||
|&emsp;&emsp;appCode|模型编码||false|string||
|&emsp;&emsp;batchOperate|有批量处理权限的任务||false|boolean||
|&emsp;&emsp;instanceState|流程实例状态,可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF||false|string||
|&emsp;&emsp;originator|发起人名称||false|string||
|&emsp;&emsp;page|当前页码||false|integer(int32)||
|&emsp;&emsp;participant|处理人id||false|string||
|&emsp;&emsp;participantName|处理人||false|string||
|&emsp;&emsp;queryType|查询类型：all全部(列表和总数) list只查列表 total只查总数,可用值:all,list,total||false|string||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|每页显示数量||false|integer(int32)||
|&emsp;&emsp;source|环境来源||false|string||
|&emsp;&emsp;state|任务状态,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;unitType|组织用户类型,1: 部门， 2：角色，3：用户||false|integer(int32)||
|&emsp;&emsp;wd|关键字。流程名称或发起人名称||false|string||
|&emsp;&emsp;workItemSource|任务来源：1 系统转交 其他所有||false|integer(int32)||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询待办列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询待办列表-响应|查询待办列表-响应|
|&emsp;&emsp;workItemPage|待办列表|分页返回对象«流程任务列表信息»|分页返回对象«流程任务列表信息»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|流程任务列表信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionPermissionVO||业务表单操作权限|业务表单操作权限|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;adjustParticipant|是否允许调整活动参与者|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;agree|是否展示同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assist|是否允许协助|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistRetrieve|是否显示撤回协办按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cancel|是否允许作废|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;circulate|是否允许传阅|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;copy|是否显示表单复制按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;delete|是否允许删除|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;disAgree|是否展示不同意按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;edit|是否允许编辑|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;editOwner|是否允许编辑拥有者|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishInstance|是否直接结束流程|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formTrack|是否显示表单留痕按钮|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;forward|是否允许进行转发|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;print|是否允许打印|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reject|是否允许驳回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToActivityCode|驳回到指定节点|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToFixded|是否允许驳回到指定活动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;rejectToStart|是否允许驳回到起始节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;retrieve|是否允许取回|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;save|是否允许暂存|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showCheck|是否展示审批意见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;showReject|是否展示驳回按钮，由驳回操作的三个属性决定|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;submit|是否允许提交|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urge|催办|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approval|可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;approvalName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistInfo||协办信息|协办信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistCount|协办次数|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assistName|协办名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participant||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantImgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participants||object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remainingTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stayTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning1||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning2||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning3||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning4||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeoutWarning5||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urgeCount||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedtime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemTimeoutStatus|可用值:NORMAL,ORANGE,RED,TIMEOUT,WARNING1,WARNING2,WARNING3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemTrust||流程审批任务委托|流程审批任务委托|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currentTrustor||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trust||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustor|委托人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustorName|委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceState|可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowTokenId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion||integer||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModel|ModelViewQueryModel|
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
		"workItemPage": {
			"content": [
				{
					"actionPermissionVO": {
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
					"activityCode": "",
					"activityName": "",
					"allowedTime": "",
					"appCode": "",
					"approval": "",
					"approvalName": "",
					"assistInfo": {
						"assistCount": 0,
						"assistName": ""
					},
					"containerCode": "",
					"containerName": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"formCode": "",
					"id": "",
					"imgUrl": "",
					"instanceId": "",
					"instanceName": "",
					"name_i18n": "",
					"originator": "",
					"originatorName": "",
					"participant": "",
					"participantImgUrl": "",
					"participantName": "",
					"participants": {},
					"receiveTime": "",
					"remainingTime": 0,
					"sequenceNo": "",
					"sourceId": "",
					"sourceName": "",
					"startTime": "",
					"state": "",
					"stayTime": 0,
					"timeoutWarning1": "",
					"timeoutWarning2": "",
					"timeoutWarning3": "",
					"timeoutWarning4": "",
					"timeoutWarning5": "",
					"urgeCount": 0,
					"usedtime": 0,
					"workItemTimeoutStatus": "",
					"workItemTrust": {
						"currentTrustor": true,
						"trust": true,
						"trustor": "",
						"trustorName": ""
					},
					"workItemType": "",
					"workflowCode": "",
					"workflowInstanceState": "",
					"workflowName": "",
					"workflowTokenId": "",
					"workflowVersion": 0
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


## 查询我的流程列表


**接口地址**:`/api/api/v2/workflow/instance/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询我的流程列表数据</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "endStatus": "",
  "endTime": "",
  "instanceState": "",
  "isMobile": false,
  "page": 0,
  "sequenceNo": "",
  "size": 0,
  "startTime": "",
  "workflowCode": "",
  "workflowName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询我的流程列表-请求|查询我的流程列表-请求|body|true|查询我的流程列表-请求|查询我的流程列表-请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;endStatus|结束状态：APPROVAL(正常流转结束) ABORT_END(审批结束) OPERATION(运维结束) TIMEOUT_END(超时结束)||false|string||
|&emsp;&emsp;endTime|流程结束时间||false|string||
|&emsp;&emsp;instanceState|流程实例状态||false|string||
|&emsp;&emsp;isMobile|移动端请求||false|boolean||
|&emsp;&emsp;page|当前页码||false|integer(int32)||
|&emsp;&emsp;sequenceNo|单据号||false|string||
|&emsp;&emsp;size|每页显示数量||false|integer(int32)||
|&emsp;&emsp;startTime|流程开始时间||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowName|流程名称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询我的流程列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询我的流程列表-响应|查询我的流程列表-响应|
|&emsp;&emsp;workflowInstancePage|我的流程列表|分页返回对象«流程实例列表信息»|分页返回对象«流程实例列表信息»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|流程实例列表信息|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;activityName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allowedTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;appName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizObjectId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;containerName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|可用值:NORMAL,SIMULATIVE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;finishTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;imgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;instanceName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isTrustStart||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isTrustor||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name_i18n||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originator||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;originatorName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participantImgUrl||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participants||object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;receiveTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;runMode|可用值:AUTO,MANUAL|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;state|可用值:APPROVED,CANCELED,COMPLETED,DRAFT,EXCEPTION,PROCESSING,TOPPING_OFF|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stayTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trustee||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trusteeName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;usedTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;userName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;waitTime||integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowTokenId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowVersion||integer||
|&emsp;&emsp;&emsp;&emsp;sumLine|汇总行数|integer||
|&emsp;&emsp;&emsp;&emsp;sumMap|汇总数据项|object||
|&emsp;&emsp;&emsp;&emsp;totalElements|数据总个数|integer||
|&emsp;&emsp;&emsp;&emsp;totalPages|总页数|integer||
|&emsp;&emsp;&emsp;&emsp;view||ModelViewQueryModel|ModelViewQueryModel|
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
		"workflowInstancePage": {
			"content": [
				{
					"activityCode": "",
					"activityName": "",
					"allowedTime": "",
					"appCode": "",
					"appName": "",
					"bizObjectId": "",
					"containerCode": "",
					"containerName": "",
					"costTime": 0,
					"dataType": "",
					"departmentId": "",
					"departmentName": "",
					"finishTime": "",
					"id": "",
					"imgUrl": "",
					"instanceName": "",
					"isTrustStart": true,
					"isTrustor": true,
					"name_i18n": "",
					"originator": "",
					"originatorName": "",
					"participantImgUrl": "",
					"participants": {},
					"receiveTime": "",
					"runMode": "",
					"schemaCode": "",
					"sequenceNo": "",
					"startTime": "",
					"state": "",
					"stayTime": 0,
					"trustee": "",
					"trusteeName": "",
					"usedTime": 0,
					"userName": "",
					"waitTime": 0,
					"workItemId": "",
					"workflowCode": "",
					"workflowName": "",
					"workflowTokenId": "",
					"workflowVersion": 0
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


# OpenWebAPI::组织机构


## 云枢维护查找部门详情


**接口地址**:`/api/api/v2/organization/department`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>云枢维护查找部门详情</p>



**请求示例**:


```javascript
{
  "departmentId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|云枢维护查找部门详情-请求|云枢维护查找部门详情-请求|body|true|云枢维护查找部门详情-请求|云枢维护查找部门详情-请求|
|&emsp;&emsp;departmentId|departmentId||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«云枢维护查找部门详情-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|云枢维护查找部门详情-响应|云枢维护查找部门详情-响应|
|&emsp;&emsp;deptId|部门id|string||
|&emsp;&emsp;deptName|部门名称|string||
|&emsp;&emsp;managerId|主管userid|string||
|&emsp;&emsp;managerName|主管名称|string||
|&emsp;&emsp;parentId|父部门id|string||
|&emsp;&emsp;parentName|父部门名称|string||
|&emsp;&emsp;scopeModel|选人控件权限域配置|SelectionScopeModel|SelectionScopeModel|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;departmentId|部门ID|string||
|&emsp;&emsp;&emsp;&emsp;deptVisibleScope|部门可见域|string||
|&emsp;&emsp;&emsp;&emsp;deptVisibleType|部门可见类型|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;staffVisibleScope|成员可见域|string||
|&emsp;&emsp;&emsp;&emsp;staffVisibleType|成员可见类型|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"deptId": "",
		"deptName": "",
		"managerId": "",
		"managerName": "",
		"parentId": "",
		"parentName": "",
		"scopeModel": {
			"createdBy": "",
			"createdTime": "",
			"deleted": false,
			"departmentId": "",
			"deptVisibleScope": "",
			"deptVisibleType": "",
			"id": "",
			"modifiedBy": "",
			"modifiedTime": "",
			"remarks": "",
			"staffVisibleScope": "",
			"staffVisibleType": ""
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 选人控件根据名称搜索人或部门


**接口地址**:`/api/api/v2/organization/search`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>选人控件根据名称搜索人或部门</p>



**请求示例**:


```javascript
{
  "activityCode": "",
  "corpId": "",
  "deptIds": "",
  "filterType": "",
  "name": "",
  "queryType": "",
  "roleIds": "",
  "rootDeptIds": "",
  "selectUserIds": "",
  "sourceType": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|选人控件根据名称搜索人或部门-请求|选人控件根据名称搜索人或部门-请求|body|true|选人控件根据名称搜索人或部门-请求|选人控件根据名称搜索人或部门-请求|
|&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;corpId|关联组织编码 “,”分割||false|string||
|&emsp;&emsp;deptIds|部门编码 “,”分割||false|string||
|&emsp;&emsp;filterType|过滤方式 admin admin_corp-应用管理员  main-只显示主部门  self-只显示自维护组织“,”分割||false|string||
|&emsp;&emsp;name|搜索名称||false|string||
|&emsp;&emsp;queryType|查询类型||false|string||
|&emsp;&emsp;roleIds|角色编码 “,”分割||false|string||
|&emsp;&emsp;rootDeptIds|表单根部门id||false|string||
|&emsp;&emsp;selectUserIds|选人控件中选中的用户id集合，逗号隔开，用来过滤其所在部门和兼职部门及其下子部门，和当前查询的应用管理员权限取交集||false|string||
|&emsp;&emsp;sourceType|来源类型，admin-后台，portal-门户||false|string||
|&emsp;&emsp;workflowInstanceId|流程实例id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«选人控件根据名称搜索人或部门-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|选人控件根据名称搜索人或部门-响应|选人控件根据名称搜索人或部门-响应|
|&emsp;&emsp;departments|部门集合|array|DepartmentVO|
|&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptType|类型 ：dept 部门 edu_dept 家校部门 ...用户组，圈子等需要自定义|DeptType|DeptType|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dingDeptManagerId|主管id集合|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;displayOption|是否展示维护功能 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;employees|员工数量|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否禁用:默认启动|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;hasPermission|当前登录用户是否有该部门权限，需要和应用管理员权限范围确定值|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isCorpRootNode|是否组织根节点 true：是，flase：否 |boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isShow|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;leaf|是否叶子节点|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId|部门主管|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|部门名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parent||DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentDepartmentName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;parentDepartmentName|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;parentId|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;queryCode|数据查询编码|string||
|&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;scopeModel|选人控件权限域配置|SelectionScopeModel|SelectionScopeModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|部门ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptVisibleScope|部门可见域|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptVisibleType|部门可见类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;staffVisibleScope|成员可见域|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;staffVisibleType|成员可见类型|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;departmentsTotal|部门总数|integer(int32)||
|&emsp;&emsp;users|人员集合|array|用户详情视图类|
|&emsp;&emsp;&emsp;&emsp;active|是否激活|boolean||
|&emsp;&emsp;&emsp;&emsp;admin|是否管理员|boolean||
|&emsp;&emsp;&emsp;&emsp;agentId||string||
|&emsp;&emsp;&emsp;&emsp;appellation|称谓|string||
|&emsp;&emsp;&emsp;&emsp;birthday|出生日期|string||
|&emsp;&emsp;&emsp;&emsp;boss|是否企业老板|boolean||
|&emsp;&emsp;&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;departmentId|部门ID|string||
|&emsp;&emsp;&emsp;&emsp;departments|所属部门|array|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;departureDate|离职日期|string||
|&emsp;&emsp;&emsp;&emsp;deptIds|兼职部门id|array|string|
|&emsp;&emsp;&emsp;&emsp;deptNum||integer||
|&emsp;&emsp;&emsp;&emsp;dingUserJson|钉钉用户整个用户的Json数据|string||
|&emsp;&emsp;&emsp;&emsp;dingtalkId|钉钉id|string||
|&emsp;&emsp;&emsp;&emsp;email|邮件|string||
|&emsp;&emsp;&emsp;&emsp;employeeNo|员工编号|string||
|&emsp;&emsp;&emsp;&emsp;employeeRank|员工职级|integer||
|&emsp;&emsp;&emsp;&emsp;enabled|是否可见：默认可见|boolean||
|&emsp;&emsp;&emsp;&emsp;entryDate|入职日期|string||
|&emsp;&emsp;&emsp;&emsp;entryTime|入职时间|string||
|&emsp;&emsp;&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;&emsp;&emsp;extend4|扩展字段4|integer||
|&emsp;&emsp;&emsp;&emsp;extend5|扩展字段5|integer||
|&emsp;&emsp;&emsp;&emsp;gender|性别,可用值:FEMALE,MALE,OTHER|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;identityNo|身份证号|string||
|&emsp;&emsp;&emsp;&emsp;imgUrl|头像url|string||
|&emsp;&emsp;&emsp;&emsp;imgUrlId|头像Id|string||
|&emsp;&emsp;&emsp;&emsp;isAuthUser|是否授权用户|boolean||
|&emsp;&emsp;&emsp;&emsp;isImport|是否导入用户|boolean||
|&emsp;&emsp;&emsp;&emsp;leader|是否部门主管|boolean||
|&emsp;&emsp;&emsp;&emsp;manager|是否是主管|boolean||
|&emsp;&emsp;&emsp;&emsp;managerId|上级主管id|string||
|&emsp;&emsp;&emsp;&emsp;managerSelection|上级主管|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;mobile|手机|string||
|&emsp;&emsp;&emsp;&emsp;mobileServerUrl||string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;&emsp;&emsp;officePhone|办公电话|string||
|&emsp;&emsp;&emsp;&emsp;parentDepartmentName|上级部门|string||
|&emsp;&emsp;&emsp;&emsp;pcServerUrl||string||
|&emsp;&emsp;&emsp;&emsp;pinYin|用户姓名拼音|string||
|&emsp;&emsp;&emsp;&emsp;position|职位|string||
|&emsp;&emsp;&emsp;&emsp;privacyLevel|隐私级别,可用值:ALL_VISIABLE,DEPT_VISIABLE,OWNER_ADMIN_VISIABLE|string||
|&emsp;&emsp;&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;&emsp;&emsp;relatedType|第三方类型：0-DINGTALK-钉钉，1-WECHAT-微信，2-OTHER-其它,可用值:CUSTOMIZE,DINGTALK,OTHER,WECHAT|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;roleIds|角色ID集合|array|string|
|&emsp;&emsp;&emsp;&emsp;roleName|所属角色|string||
|&emsp;&emsp;&emsp;&emsp;secretary|秘书|SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;secretaryId|秘书id|string||
|&emsp;&emsp;&emsp;&emsp;shortPinYin|用户姓名拼音首字母|string||
|&emsp;&emsp;&emsp;&emsp;sortKey|排序号|integer||
|&emsp;&emsp;&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;&emsp;&emsp;status|状态,可用值:DISABLE,ENABLE,LOCK|string||
|&emsp;&emsp;&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;userId|钉钉userid|string||
|&emsp;&emsp;&emsp;&emsp;userManagerConfigList||array|UserManagerConfig|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deptId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isMain||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;managerId||string||
|&emsp;&emsp;&emsp;&emsp;userUnion|拓展信息|array|UserUnionExtAttrModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extendAttrId|扩展属性ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mapVal|映射值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;userId|用户主键ID|string||
|&emsp;&emsp;&emsp;&emsp;userWorkStatus|用户职务状态,可用值:DIMISSION,NORMAL,WAITING_TRANSFER|string||
|&emsp;&emsp;&emsp;&emsp;username|账号名|string||
|&emsp;&emsp;usersTotal|人员总数|integer(int32)||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"departments": [
			{
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
				"parentDepartmentName": "/研发部/前端部",
				"parentId": "",
				"queryCode": "",
				"relatedOrgType": "",
				"relatedSyncType": "",
				"remarks": "",
				"scopeModel": {
					"createdBy": "",
					"createdTime": "",
					"deleted": false,
					"departmentId": "",
					"deptVisibleScope": "",
					"deptVisibleType": "",
					"id": "",
					"modifiedBy": "",
					"modifiedTime": "",
					"remarks": "",
					"staffVisibleScope": "",
					"staffVisibleType": ""
				},
				"sortKey": 0,
				"sourceId": "",
				"unitType": "1: 部门， 2：角色，3：用户 "
			}
		],
		"departmentsTotal": 0,
		"users": [
			{
				"active": false,
				"admin": false,
				"agentId": "",
				"appellation": "",
				"birthday": "",
				"boss": false,
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"departmentId": "",
				"departments": [
					{
						"departmentId": "",
						"departments": [
							{}
						],
						"excelType": "",
						"fullDepartment": "",
						"id": "",
						"imgUrl": "",
						"name": "",
						"parentId": "",
						"type": ""
					}
				],
				"departureDate": "",
				"deptIds": [],
				"deptNum": 0,
				"dingUserJson": "",
				"dingtalkId": "",
				"email": "",
				"employeeNo": "",
				"employeeRank": 0,
				"enabled": false,
				"entryDate": "",
				"entryTime": "",
				"extend1": "",
				"extend2": "",
				"extend3": "",
				"extend4": 0,
				"extend5": 0,
				"gender": "",
				"id": "",
				"identityNo": "",
				"imgUrl": "",
				"imgUrlId": "",
				"isAuthUser": false,
				"isImport": false,
				"leader": false,
				"manager": false,
				"managerId": "",
				"managerSelection": {
					"departmentId": "",
					"departments": [
						{}
					],
					"excelType": "",
					"fullDepartment": "",
					"id": "",
					"imgUrl": "",
					"name": "",
					"parentId": "",
					"type": ""
				},
				"mobile": "",
				"mobileServerUrl": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"officePhone": "",
				"parentDepartmentName": "/研发部/前端部",
				"pcServerUrl": "",
				"pinYin": "",
				"position": "",
				"privacyLevel": "",
				"relatedOrgType": "",
				"relatedSyncType": "",
				"relatedType": "",
				"remarks": "",
				"roleIds": [],
				"roleName": "",
				"secretary": {
					"departmentId": "",
					"departments": [
						{}
					],
					"excelType": "",
					"fullDepartment": "",
					"id": "",
					"imgUrl": "",
					"name": "",
					"parentId": "",
					"type": ""
				},
				"secretaryId": "",
				"shortPinYin": "",
				"sortKey": 0,
				"sourceId": "",
				"status": "",
				"unitType": "1: 部门， 2：角色，3：用户 ",
				"userId": "",
				"userManagerConfigList": [
					{
						"deptId": "",
						"isMain": true,
						"managerId": ""
					}
				],
				"userUnion": [
					{
						"createdBy": "",
						"createdTime": "",
						"deleted": false,
						"extendAttrId": "",
						"id": "",
						"mapVal": "",
						"modifiedBy": "",
						"modifiedTime": "",
						"remarks": "",
						"userId": ""
					}
				],
				"userWorkStatus": "",
				"username": ""
			}
		],
		"usersTotal": 0
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询组织机构的子组织,树形控件


**接口地址**:`/api/api/v2/organization/tree`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>通过 deptIds 获取组织机构的子组织多个用&#39;,&#39;隔开，不查询第一级部门下的子部门,deptIds空则查询第一级</p>



**请求示例**:


```javascript
{
  "corpId": "",
  "deptIds": "",
  "excludedCorpId": "",
  "filterType": "",
  "rootDeptIds": "",
  "selected": "",
  "sourceType": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询组织机构的子组织-请求|查询组织机构的子组织-请求|body|true|查询组织机构的子组织-请求|查询组织机构的子组织-请求|
|&emsp;&emsp;corpId|corpId||false|string||
|&emsp;&emsp;deptIds|部门ids||false|string||
|&emsp;&emsp;excludedCorpId|要过滤的企业id||false|string||
|&emsp;&emsp;filterType|过滤类型，可选：admin admin_corp(应用管理员相关) related main  self(只显示自维护的部门) root_display(直接返回deptIds指定的部门)||false|string||
|&emsp;&emsp;rootDeptIds|表单根部门id||false|string||
|&emsp;&emsp;selected|选人控件中选中的用户id集合，逗号隔开，用来过滤其所在部门和兼职部门及其下子部门，和当前查询的应用管理员权限取交集||false|string||
|&emsp;&emsp;sourceType|来源类型，admin-后台，portal-门户||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询组织机构的子组织-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询组织机构的子组织-响应|查询组织机构的子组织-响应|
|&emsp;&emsp;departmentTreeMap|组织机构的子组织集合|DepartmentModel|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"departmentTreeMap": {
			"additionalProperties1": {
				"calendarId": "",
				"children": [
					{
						"calendarId": "",
						"children": [
							{}
						],
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
		}
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 根据 id 获取用户信息


**接口地址**:`/api/api/v2/organization/user`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据用户名或账户名查询用户信息</p>



**请求示例**:


```javascript
{
  "id": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|根据 id 获取用户信息-请求|根据 id 获取用户信息-请求|body|true|根据 id 获取用户信息-请求|根据 id 获取用户信息-请求|
|&emsp;&emsp;id|用户 id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«用户详情-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|用户详情-响应|用户详情-响应|
|&emsp;&emsp;active|是否激活|boolean||
|&emsp;&emsp;admin|是否管理员|boolean||
|&emsp;&emsp;agentId||string||
|&emsp;&emsp;appellation|称谓|string||
|&emsp;&emsp;birthday|出生日期|string(date-time)||
|&emsp;&emsp;boss|是否企业老板|boolean||
|&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;dataDictionaryManage|是否有数据字典的权限|boolean||
|&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;departmentId|部门ID|string||
|&emsp;&emsp;departmentName|所属部门|string||
|&emsp;&emsp;departmentNames|兼职部门集合|array|object|
|&emsp;&emsp;departureDate|离职日期|string(date-time)||
|&emsp;&emsp;deptIds|兼职部门id|array|string|
|&emsp;&emsp;deptNum||integer(int32)||
|&emsp;&emsp;dingUserJson|钉钉用户整个用户的Json数据|string||
|&emsp;&emsp;dingtalkId|钉钉id|string||
|&emsp;&emsp;email|邮件|string||
|&emsp;&emsp;employeeNo|员工编号|string||
|&emsp;&emsp;employeeRank|员工职级|integer(int32)||
|&emsp;&emsp;enabled|是否可见：默认可见|boolean||
|&emsp;&emsp;entryDate|入职日期|string(date-time)||
|&emsp;&emsp;entryTime|入职时间|string||
|&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;extend4|扩展字段4|integer(int32)||
|&emsp;&emsp;extend5|扩展字段5|integer(int32)||
|&emsp;&emsp;gender|性别,可用值:FEMALE,MALE,OTHER|string||
|&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;identityNo|身份证号|string||
|&emsp;&emsp;imgUrl|头像url|string||
|&emsp;&emsp;imgUrlId|头像Id|string||
|&emsp;&emsp;isAuthUser|是否授权用户|boolean||
|&emsp;&emsp;isHomeSchool|是否家校部门|boolean||
|&emsp;&emsp;isImport|是否导入用户|boolean||
|&emsp;&emsp;lastLoginTime|上次登录时间|string(date-time)||
|&emsp;&emsp;leader|是否部门主管|boolean||
|&emsp;&emsp;logoUrl|头像存储云地址|string||
|&emsp;&emsp;mainDepartmentName|主部门|object||
|&emsp;&emsp;manager|是否是主管|boolean||
|&emsp;&emsp;managerId|上级主管id|string||
|&emsp;&emsp;managerName|上级主管|string||
|&emsp;&emsp;mobile|手机|string||
|&emsp;&emsp;mobileServerUrl||string||
|&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;modifiedTime|最近更新时间|string(date-time)||
|&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;officePhone|办公电话|string||
|&emsp;&emsp;parentDepartmentName|上级部门|string||
|&emsp;&emsp;pcServerUrl||string||
|&emsp;&emsp;permissions|用户权限|array|string|
|&emsp;&emsp;pinYin|用户姓名拼音|string||
|&emsp;&emsp;position|职位|string||
|&emsp;&emsp;privacyLevel|隐私级别,可用值:ALL_VISIABLE,DEPT_VISIABLE,OWNER_ADMIN_VISIABLE|string||
|&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;relatedType|第三方类型：0-DINGTALK-钉钉，1-WECHAT-微信，2-OTHER-其它,可用值:CUSTOMIZE,DINGTALK,OTHER,WECHAT|string||
|&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;roleIds|角色ID集合|array|string|
|&emsp;&emsp;roleManage|是否角色管理的权限|boolean||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;secretaryId|秘书id|string||
|&emsp;&emsp;secretaryName|秘书|string||
|&emsp;&emsp;shortPinYin|用户姓名拼音首字母|string||
|&emsp;&emsp;sortKey|排序号|integer(int64)||
|&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;status|状态,可用值:DISABLE,ENABLE,LOCK|string||
|&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;userExtAttrModels|拓展信息|array|UserExtAttrModel|
|&emsp;&emsp;&emsp;&emsp;belong|所属分组|string||
|&emsp;&emsp;&emsp;&emsp;code|编码code|string||
|&emsp;&emsp;&emsp;&emsp;corpId|组织ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;enable|是否启用 0：否  1：是|integer||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mapKey|映射key|string||
|&emsp;&emsp;&emsp;&emsp;mapVal|映射值|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|扩展字段名称|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;userId|钉钉userid|string||
|&emsp;&emsp;userManagerConfigList||array|UserManagerConfig|
|&emsp;&emsp;&emsp;&emsp;deptId||string||
|&emsp;&emsp;&emsp;&emsp;isMain||boolean||
|&emsp;&emsp;&emsp;&emsp;managerId||string||
|&emsp;&emsp;userUnion|拓展信息|array|UserUnionExtAttrModel|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;extendAttrId|扩展属性ID|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mapVal|映射值|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户主键ID|string||
|&emsp;&emsp;userWorkStatus|用户职务状态,可用值:DIMISSION,NORMAL,WAITING_TRANSFER|string||
|&emsp;&emsp;username|账号名|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"active": false,
		"admin": false,
		"agentId": "",
		"appellation": "",
		"birthday": "",
		"boss": false,
		"corpId": "",
		"createdBy": "",
		"createdTime": "",
		"dataDictionaryManage": false,
		"deleted": false,
		"departmentId": "",
		"departmentName": "",
		"departmentNames": [],
		"departureDate": "",
		"deptIds": [],
		"deptNum": 0,
		"dingUserJson": "",
		"dingtalkId": "",
		"email": "",
		"employeeNo": "",
		"employeeRank": 0,
		"enabled": false,
		"entryDate": "",
		"entryTime": "",
		"extend1": "",
		"extend2": "",
		"extend3": "",
		"extend4": 0,
		"extend5": 0,
		"gender": "",
		"id": "",
		"identityNo": "",
		"imgUrl": "",
		"imgUrlId": "",
		"isAuthUser": false,
		"isHomeSchool": false,
		"isImport": false,
		"lastLoginTime": "",
		"leader": false,
		"logoUrl": "",
		"mainDepartmentName": {},
		"manager": false,
		"managerId": "",
		"managerName": "",
		"mobile": "",
		"mobileServerUrl": "",
		"modifiedBy": "",
		"modifiedTime": "",
		"name": "",
		"officePhone": "",
		"parentDepartmentName": "/研发部/前端部",
		"pcServerUrl": "",
		"permissions": [],
		"pinYin": "",
		"position": "",
		"privacyLevel": "",
		"relatedOrgType": "",
		"relatedSyncType": "",
		"relatedType": "",
		"remarks": "",
		"roleIds": [],
		"roleManage": false,
		"roleName": "",
		"secretaryId": "",
		"secretaryName": "",
		"shortPinYin": "",
		"sortKey": 0,
		"sourceId": "",
		"status": "",
		"unitType": "1: 部门， 2：角色，3：用户 ",
		"userExtAttrModels": [
			{
				"belong": "",
				"code": "",
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"enable": 0,
				"id": "",
				"mapKey": "",
				"mapVal": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"remarks": ""
			}
		],
		"userId": "",
		"userManagerConfigList": [
			{
				"deptId": "",
				"isMain": true,
				"managerId": ""
			}
		],
		"userUnion": [
			{
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"extendAttrId": "",
				"id": "",
				"mapVal": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"remarks": "",
				"userId": ""
			}
		],
		"userWorkStatus": "",
		"username": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询当前登录用户信息


**接口地址**:`/api/api/v2/organization/user/current`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>解析请求头，查询用户信息</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«用户详情-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|用户详情-响应|用户详情-响应|
|&emsp;&emsp;active|是否激活|boolean||
|&emsp;&emsp;admin|是否管理员|boolean||
|&emsp;&emsp;agentId||string||
|&emsp;&emsp;appellation|称谓|string||
|&emsp;&emsp;birthday|出生日期|string(date-time)||
|&emsp;&emsp;boss|是否企业老板|boolean||
|&emsp;&emsp;corpId|组织唯一ID|string||
|&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;dataDictionaryManage|是否有数据字典的权限|boolean||
|&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;departmentId|部门ID|string||
|&emsp;&emsp;departmentName|所属部门|string||
|&emsp;&emsp;departmentNames|兼职部门集合|array|object|
|&emsp;&emsp;departureDate|离职日期|string(date-time)||
|&emsp;&emsp;deptIds|兼职部门id|array|string|
|&emsp;&emsp;deptNum||integer(int32)||
|&emsp;&emsp;dingUserJson|钉钉用户整个用户的Json数据|string||
|&emsp;&emsp;dingtalkId|钉钉id|string||
|&emsp;&emsp;email|邮件|string||
|&emsp;&emsp;employeeNo|员工编号|string||
|&emsp;&emsp;employeeRank|员工职级|integer(int32)||
|&emsp;&emsp;enabled|是否可见：默认可见|boolean||
|&emsp;&emsp;entryDate|入职日期|string(date-time)||
|&emsp;&emsp;entryTime|入职时间|string||
|&emsp;&emsp;extend1|扩展字段1|string||
|&emsp;&emsp;extend2|扩展字段2|string||
|&emsp;&emsp;extend3|扩展字段3|string||
|&emsp;&emsp;extend4|扩展字段4|integer(int32)||
|&emsp;&emsp;extend5|扩展字段5|integer(int32)||
|&emsp;&emsp;gender|性别,可用值:FEMALE,MALE,OTHER|string||
|&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;identityNo|身份证号|string||
|&emsp;&emsp;imgUrl|头像url|string||
|&emsp;&emsp;imgUrlId|头像Id|string||
|&emsp;&emsp;isAuthUser|是否授权用户|boolean||
|&emsp;&emsp;isHomeSchool|是否家校部门|boolean||
|&emsp;&emsp;isImport|是否导入用户|boolean||
|&emsp;&emsp;lastLoginTime|上次登录时间|string(date-time)||
|&emsp;&emsp;leader|是否部门主管|boolean||
|&emsp;&emsp;logoUrl|头像存储云地址|string||
|&emsp;&emsp;mainDepartmentName|主部门|object||
|&emsp;&emsp;manager|是否是主管|boolean||
|&emsp;&emsp;managerId|上级主管id|string||
|&emsp;&emsp;managerName|上级主管|string||
|&emsp;&emsp;mobile|手机|string||
|&emsp;&emsp;mobileServerUrl||string||
|&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;modifiedTime|最近更新时间|string(date-time)||
|&emsp;&emsp;name|用户姓名|string||
|&emsp;&emsp;officePhone|办公电话|string||
|&emsp;&emsp;parentDepartmentName|上级部门|string||
|&emsp;&emsp;pcServerUrl||string||
|&emsp;&emsp;permissions|用户权限|array|string|
|&emsp;&emsp;pinYin|用户姓名拼音|string||
|&emsp;&emsp;position|职位|string||
|&emsp;&emsp;privacyLevel|隐私级别,可用值:ALL_VISIABLE,DEPT_VISIABLE,OWNER_ADMIN_VISIABLE|string||
|&emsp;&emsp;relatedOrgType|组织类型   0   MAIN 主组织 , 1   RELEVANCE  关联组织  ,可用值:MAIN,RELEVANCE|string||
|&emsp;&emsp;relatedSyncType|同步方式 0 PULL  拉取 ,1 PUSH 推送 ,可用值:PULL,PUSH|string||
|&emsp;&emsp;relatedType|第三方类型：0-DINGTALK-钉钉，1-WECHAT-微信，2-OTHER-其它,可用值:CUSTOMIZE,DINGTALK,OTHER,WECHAT|string||
|&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;roleIds|角色ID集合|array|string|
|&emsp;&emsp;roleManage|是否角色管理的权限|boolean||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;secretaryId|秘书id|string||
|&emsp;&emsp;secretaryName|秘书|string||
|&emsp;&emsp;shortPinYin|用户姓名拼音首字母|string||
|&emsp;&emsp;sortKey|排序号|integer(int64)||
|&emsp;&emsp;sourceId|来源id|string||
|&emsp;&emsp;status|状态,可用值:DISABLE,ENABLE,LOCK|string||
|&emsp;&emsp;unitType|组织类型,可用值:1,2,3|string||
|&emsp;&emsp;userExtAttrModels|拓展信息|array|UserExtAttrModel|
|&emsp;&emsp;&emsp;&emsp;belong|所属分组|string||
|&emsp;&emsp;&emsp;&emsp;code|编码code|string||
|&emsp;&emsp;&emsp;&emsp;corpId|组织ID|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;enable|是否启用 0：否  1：是|integer||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mapKey|映射key|string||
|&emsp;&emsp;&emsp;&emsp;mapVal|映射值|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|扩展字段名称|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;userId|钉钉userid|string||
|&emsp;&emsp;userManagerConfigList||array|UserManagerConfig|
|&emsp;&emsp;&emsp;&emsp;deptId||string||
|&emsp;&emsp;&emsp;&emsp;isMain||boolean||
|&emsp;&emsp;&emsp;&emsp;managerId||string||
|&emsp;&emsp;userUnion|拓展信息|array|UserUnionExtAttrModel|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;extendAttrId|扩展属性ID|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;mapVal|映射值|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户主键ID|string||
|&emsp;&emsp;userWorkStatus|用户职务状态,可用值:DIMISSION,NORMAL,WAITING_TRANSFER|string||
|&emsp;&emsp;username|账号名|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"active": false,
		"admin": false,
		"agentId": "",
		"appellation": "",
		"birthday": "",
		"boss": false,
		"corpId": "",
		"createdBy": "",
		"createdTime": "",
		"dataDictionaryManage": false,
		"deleted": false,
		"departmentId": "",
		"departmentName": "",
		"departmentNames": [],
		"departureDate": "",
		"deptIds": [],
		"deptNum": 0,
		"dingUserJson": "",
		"dingtalkId": "",
		"email": "",
		"employeeNo": "",
		"employeeRank": 0,
		"enabled": false,
		"entryDate": "",
		"entryTime": "",
		"extend1": "",
		"extend2": "",
		"extend3": "",
		"extend4": 0,
		"extend5": 0,
		"gender": "",
		"id": "",
		"identityNo": "",
		"imgUrl": "",
		"imgUrlId": "",
		"isAuthUser": false,
		"isHomeSchool": false,
		"isImport": false,
		"lastLoginTime": "",
		"leader": false,
		"logoUrl": "",
		"mainDepartmentName": {},
		"manager": false,
		"managerId": "",
		"managerName": "",
		"mobile": "",
		"mobileServerUrl": "",
		"modifiedBy": "",
		"modifiedTime": "",
		"name": "",
		"officePhone": "",
		"parentDepartmentName": "/研发部/前端部",
		"pcServerUrl": "",
		"permissions": [],
		"pinYin": "",
		"position": "",
		"privacyLevel": "",
		"relatedOrgType": "",
		"relatedSyncType": "",
		"relatedType": "",
		"remarks": "",
		"roleIds": [],
		"roleManage": false,
		"roleName": "",
		"secretaryId": "",
		"secretaryName": "",
		"shortPinYin": "",
		"sortKey": 0,
		"sourceId": "",
		"status": "",
		"unitType": "1: 部门， 2：角色，3：用户 ",
		"userExtAttrModels": [
			{
				"belong": "",
				"code": "",
				"corpId": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"enable": 0,
				"id": "",
				"mapKey": "",
				"mapVal": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"remarks": ""
			}
		],
		"userId": "",
		"userManagerConfigList": [
			{
				"deptId": "",
				"isMain": true,
				"managerId": ""
			}
		],
		"userUnion": [
			{
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"extendAttrId": "",
				"id": "",
				"mapVal": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"remarks": "",
				"userId": ""
			}
		],
		"userWorkStatus": "",
		"username": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


# OpenWebAPI::表单


## 执行自定义业务规则


**接口地址**:`/api/api/v2/businessRule/invoke`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>[open]执行自定义业务规则</p>



**请求示例**:


```javascript
{
  "appCode": "",
  "businessRuleCode": "",
  "data": {},
  "schemaCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|执行自定义业务规则-请求|执行自定义业务规则-请求|body|true|执行自定义业务规则-请求|执行自定义业务规则-请求|
|&emsp;&emsp;appCode|应用编码||false|string||
|&emsp;&emsp;businessRuleCode|业务规则编码||false|string||
|&emsp;&emsp;data|业务规则参数||false|object||
|&emsp;&emsp;schemaCode|模型编码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«object»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|object||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 删除表单数据接口


**接口地址**:`/api/api/v2/bizobject/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "objectId": "",
  "schemaCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|删除表单数据-请求|删除表单数据-请求|body|true|删除表单数据-请求|删除表单数据-请求|
|&emsp;&emsp;objectId|业务数据ID||false|string||
|&emsp;&emsp;schemaCode|数据模型编码||false|string||


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


## 加载表单数据


**接口地址**:`/api/api/v2/bizobject/load`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>如果任务ID和流程实例ID都不为空，则打开待办任务;如果流程编码不为空，则发起流程;如果数据模型编码和表单编码都不为空时，分两种场景：a:在objectId不为空时，则打开空表单；b:在objectId为空时,则打开数据表单。</p>



**请求示例**:


```javascript
{
  "childPageEnable": false,
  "from": "",
  "isMobile": false,
  "objectId": "",
  "perms": "",
  "relevanceInfo": "",
  "schemaCode": "",
  "sheetCode": "",
  "simulative": false,
  "ssc": "",
  "startWorkflowCode": "",
  "tempAuthObjectId": "",
  "tempAuthPropertyCode": "",
  "tempAuthSheetId": "",
  "workflowInstanceId": "",
  "workitemId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|加载表单数据-请求|加载表单数据-请求|body|true|加载表单数据-请求|加载表单数据-请求|
|&emsp;&emsp;childPageEnable|是否子表分页||false|boolean||
|&emsp;&emsp;from|标识打开的页面位置||false|string||
|&emsp;&emsp;isMobile|是否是移动端||false|boolean||
|&emsp;&emsp;objectId|业务数据ID||false|string||
|&emsp;&emsp;perms|标识查看编辑权限：edit编辑，check查看||false|string||
|&emsp;&emsp;relevanceInfo|需要自动加载的关联信息||false|string||
|&emsp;&emsp;schemaCode|数据模型编码||false|string||
|&emsp;&emsp;sheetCode|表单编码||false|string||
|&emsp;&emsp;simulative|是否模拟||false|boolean||
|&emsp;&emsp;ssc|表单短码sheetShortCode||false|string||
|&emsp;&emsp;startWorkflowCode|发起流程编码||false|string||
|&emsp;&emsp;tempAuthObjectId|（临时授权）跳转前源表单的业务对象id||false|string||
|&emsp;&emsp;tempAuthPropertyCode|（临时授权）跳转前源表单 关联表单 数据项的编码||false|string||
|&emsp;&emsp;tempAuthSheetId|（临时授权）跳转前源表单的表单id||false|string||
|&emsp;&emsp;workflowInstanceId|流程实例ID||false|string||
|&emsp;&emsp;workitemId|当前任务ID||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«加载表单数据-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|加载表单数据-响应|加载表单数据-响应|
|&emsp;&emsp;activityCode|当前流程节点编码|string||
|&emsp;&emsp;activityName|当前流程节点名称|string||
|&emsp;&emsp;bizObject|业务数据对象|BizObjectCreatedModel|BizObjectCreatedModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo||object||
|&emsp;&emsp;&emsp;&emsp;createdDeptId||SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;createdTime||string||
|&emsp;&emsp;&emsp;&emsp;creater||SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName||string||
|&emsp;&emsp;&emsp;&emsp;formCode||string||
|&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime||string||
|&emsp;&emsp;&emsp;&emsp;modifier||SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;owner||SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptId||SelectionValue|SelectionValue|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departments||array|DepartmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;calendarId|工作日历|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;children||array|DepartmentModel|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type|可用值:1,2,3|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode||string||
|&emsp;&emsp;&emsp;&emsp;ownerId||string||
|&emsp;&emsp;&emsp;&emsp;participants||string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo||string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus||string||
|&emsp;&emsp;&emsp;&emsp;sheetCode||string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId||string||
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
|&emsp;&emsp;&emsp;&emsp;originator|发起人|用户基本信息Res|用户基本信息Res|
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;adjustParticipant|是否允许调整活动参与者|boolean||
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;forward|是否允许进行转发|boolean||
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;signPermission||Permission|Permission|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required||boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;visible||boolean||
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
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceId|来源的id|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceName|来源的姓名|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workItemType|类型,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;usedTime|使用时间|integer||
|&emsp;&emsp;&emsp;&emsp;workItemStatus|任务状态:1 未启动,2 进行中,3 已完成,4 被取消,5 草稿 ,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;nextNodeParticipant|选择下一个节点参与者方式,可用值:ORGANIZATION,PARTICIPANT|string||
|&emsp;&emsp;participantChoose|是否支持选择下节点审批人|boolean||
|&emsp;&emsp;printBindType|节点绑定打印模板类型,可用值:ALL,SPECIFIED|string||
|&emsp;&emsp;properties|扩展属性|object||
|&emsp;&emsp;settingPrint|是否打开打印模板|boolean||
|&emsp;&emsp;templateList|绑定打印模板列表|array|PrintTemplateSimpleModel|
|&emsp;&emsp;&emsp;&emsp;code||string||
|&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;schemaCode||string||
|&emsp;&emsp;workFlowLog||array|打印模板流程日志对象|
|&emsp;&emsp;&emsp;&emsp;activityName||string||
|&emsp;&emsp;&emsp;&emsp;approvalActionStatus||string||
|&emsp;&emsp;&emsp;&emsp;comment||string||
|&emsp;&emsp;&emsp;&emsp;finishTime||string||
|&emsp;&emsp;&emsp;&emsp;logStatus||string||
|&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;receiveTime||string||
|&emsp;&emsp;&emsp;&emsp;signature||string||
|&emsp;&emsp;&emsp;&emsp;usedTime||integer||
|&emsp;&emsp;workItemId|任务Id|string||
|&emsp;&emsp;workItemType|可用值:0,1,2,3,4,5|string||
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
				"departmentId": "",
				"departments": [
					{}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"type": ""
			},
			"createdTime": "",
			"creater": {
				"departmentId": "",
				"departments": [
					{}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"type": ""
			},
			"data": {},
			"extendInfo": {
				"creatorId": "",
				"sourceBizObjectId": "",
				"sourceBizObjectName": "",
				"sourceSchemaCode": "",
				"sourceSchemaName": ""
			},
			"formCode": "",
			"id": "",
			"loadedFromDb": false,
			"modifiedTime": "",
			"modifier": {
				"departmentId": "",
				"departments": [
					{}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"type": ""
			},
			"name": "",
			"owner": {
				"departmentId": "",
				"departments": [
					{}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"type": ""
			},
			"ownerDeptId": {
				"departmentId": "",
				"departments": [
					{}
				],
				"excelType": "",
				"fullDepartment": "",
				"id": "",
				"imgUrl": "",
				"name": "",
				"parentId": "",
				"type": ""
			},
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
							"statusCode": ""
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
					"statusCode": ""
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
					"name": "",
					"signPermission": {
						"required": true,
						"visible": true
					}
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
		"printBindType": "",
		"properties": {},
		"settingPrint": false,
		"templateList": [
			{
				"code": "",
				"name": "",
				"schemaCode": ""
			}
		],
		"workFlowLog": [
			{
				"activityName": "",
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
		"workItemType": "",
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


## 保存编辑表单数据接口


**接口地址**:`/api/api/v2/bizobject/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存编辑表单数据接口</p>



**请求示例**:


```javascript
{
  "approval": {
    "actionType": "",
    "activityCode": "",
    "activityName": "",
    "bizObjectId": "",
    "bizPropertyCode": "",
    "commentTime": "",
    "commonSet": false,
    "content": "",
    "createdBy": "",
    "createdTime": "",
    "creater": {},
    "deleted": false,
    "id": "",
    "lastAttachment": {
      "base64ImageStr": "",
      "createdBy": "",
      "createdTime": "",
      "deleted": false,
      "fileExtension": "",
      "fileSize": 0,
      "id": "",
      "mimeType": "",
      "modifiedBy": "",
      "modifiedTime": "",
      "name": "",
      "refId": "",
      "remarks": "",
      "schemaCode": ""
    },
    "modifiedBy": "",
    "modifiedTime": "",
    "relUsers": [],
    "remarks": "",
    "resources": [
      {
        "base64ImageStr": "",
        "createdBy": "",
        "createdTime": "",
        "deleted": false,
        "fileExtension": "",
        "fileSize": 0,
        "id": "",
        "mimeType": "",
        "modifiedBy": "",
        "modifiedTime": "",
        "name": "",
        "refId": "",
        "remarks": "",
        "schemaCode": ""
      }
    ],
    "result": "",
    "schemaCode": "",
    "tokenId": 0,
    "workItemId": "",
    "workflowInstanceId": "",
    "workflowTokenId": ""
  },
  "bizObject": {
    "childPageInfo": {},
    "createdTime": "",
    "data": {},
    "extendInfo": {
      "creatorId": "",
      "sourceBizObjectId": "",
      "sourceBizObjectName": "",
      "sourceSchemaCode": "",
      "sourceSchemaName": ""
    },
    "formCode": "",
    "id": "",
    "loadedFromDb": false,
    "modifiedTime": "",
    "name": "",
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
  "latestSign": {
    "base64ImageStr": "",
    "createdBy": "",
    "createdTime": "",
    "deleted": false,
    "fileExtension": "",
    "fileSize": 0,
    "id": "",
    "mimeType": "",
    "modifiedBy": "",
    "modifiedTime": "",
    "name": "",
    "refId": "",
    "remarks": "",
    "schemaCode": ""
  },
  "queryId": "",
  "replayToken": "",
  "saveBizObject": false,
  "workItemId": "",
  "workflowCode": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|保存编辑表单-请求|保存编辑表单-请求|body|true|保存编辑表单-请求|保存编辑表单-请求|
|&emsp;&emsp;approval|审批意见||false|BizCommentModel|BizCommentModel|
|&emsp;&emsp;&emsp;&emsp;actionType|审批对应操作类型. 1 审批 2 协办 3 加签 4 转办 5 作废 6 结束流程 7: 系统自动添加.  其中2, 3不需要审批结果,可用值:1,10,11,12,13,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称||false|string||
|&emsp;&emsp;&emsp;&emsp;bizObjectId|业务对象id||false|string||
|&emsp;&emsp;&emsp;&emsp;bizPropertyCode|数据项编码||false|string||
|&emsp;&emsp;&emsp;&emsp;commentTime|审批时间||false|string||
|&emsp;&emsp;&emsp;&emsp;commonSet|是否设置为常用意见||false|boolean||
|&emsp;&emsp;&emsp;&emsp;content|审批意见内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;creater|创建人||false|object||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识||false|string||
|&emsp;&emsp;&emsp;&emsp;lastAttachment|上一次签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;relUsers|协办、加签关联用户. 格式同选人控件的存储值: [{id: "xxx", type: 3}]||false|array|object|
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;resources|关联的附件资源||false|array|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;result|审批结果. 1: 同意, 2: 不同意, 3: 转办,  0或null: 空(无意义的值)',,可用值:1,2,3,4||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;tokenId|TokenNumber||false|integer||
|&emsp;&emsp;&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowTokenId|任务的TokenId||false|string||
|&emsp;&emsp;bizObject|业务数据对象||false|BizObjectModel|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo|||false|object||
|&emsp;&emsp;&emsp;&emsp;createdTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息||false|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName|||false|string||
|&emsp;&emsp;&emsp;&emsp;formCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerId|||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|||false|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|||false|string||
|&emsp;&emsp;latestSign|最近的签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;queryId|视图queryId||false|string||
|&emsp;&emsp;replayToken|重放验证码||false|string||
|&emsp;&emsp;saveBizObject|是否saveBizObject||false|boolean||
|&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowInstanceId|流程实例id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«保存编辑表单-请求»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|保存编辑表单-请求0|保存编辑表单-请求0|
|&emsp;&emsp;objectId|业务对象id|string||
|&emsp;&emsp;workItem|任务对象|流程任务对象|流程任务对象|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;allowedTime|超时时间|string||
|&emsp;&emsp;&emsp;&emsp;appCode|应用编码|string||
|&emsp;&emsp;&emsp;&emsp;approval|任务审批结果,AGREE:同意;REJECT:驳回;FORWARD:转办;CANCELLED:被取消;UNDO:未处理,可用值:1,2,3,4,5,6,7|string||
|&emsp;&emsp;&emsp;&emsp;batchOperate|是否允许批量处理|boolean||
|&emsp;&emsp;&emsp;&emsp;circulate||boolean||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;departmentId|发起人部门id|string||
|&emsp;&emsp;&emsp;&emsp;departmentName|发起人部门名称|string||
|&emsp;&emsp;&emsp;&emsp;finishTime|结束时间|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;instanceId|流程实例id|string||
|&emsp;&emsp;&emsp;&emsp;instanceName|流程实例名称|string||
|&emsp;&emsp;&emsp;&emsp;isTrust|是否被委托,如果是true，则参与者是被委托人|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|节点名称|string||
|&emsp;&emsp;&emsp;&emsp;originator|流程实例发起人id|string||
|&emsp;&emsp;&emsp;&emsp;originatorName|流程实例发起人名称|string||
|&emsp;&emsp;&emsp;&emsp;participant|参与者id|string||
|&emsp;&emsp;&emsp;&emsp;participantName|任务参与人姓名|string||
|&emsp;&emsp;&emsp;&emsp;receiveTime|接收时间|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;rootTaskId|rootTaskId|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|单据号|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|表单编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceId|源ID|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|源名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceTaskId|sourceTaskId|string||
|&emsp;&emsp;&emsp;&emsp;startTime|开始时间|string||
|&emsp;&emsp;&emsp;&emsp;state|任务状态,NOTSTARTED:未启动;INPROGRESS:进行中;FINISHED:已完成;CANCELLED:被取消;DRAFT:草稿;REVOKE:被撤回,可用值:1,10,11,12,13,14,15,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;timeoutWarn1|超时警告1--黄色警告|string||
|&emsp;&emsp;&emsp;&emsp;timeoutWarn2|超时警告2--红色警告|string||
|&emsp;&emsp;&emsp;&emsp;timeoutWarn3|超时警告3|string||
|&emsp;&emsp;&emsp;&emsp;timeoutWarn4|超时警告4|string||
|&emsp;&emsp;&emsp;&emsp;timeoutWarn5|超时警告5|string||
|&emsp;&emsp;&emsp;&emsp;trustor|委托人id|string||
|&emsp;&emsp;&emsp;&emsp;trustorName|委托人名称|string||
|&emsp;&emsp;&emsp;&emsp;usedtime|任务耗时|integer||
|&emsp;&emsp;&emsp;&emsp;workItemSource|任务来源,可用值:0,1,2,3,4,5,6,7,8,9|string||
|&emsp;&emsp;&emsp;&emsp;workItemTimeoutStatus|任务超时状态,TIMEOUT:超时;RED:警告1;ORANGE:警告2;NORMAL:正常,可用值:NORMAL,ORANGE,RED,TIMEOUT,WARNING1,WARNING2,WARNING3|string||
|&emsp;&emsp;&emsp;&emsp;workItemType|任务类型,NORMAL:普通;FORWORD:转办;ASSIST:协办;ADD_WORKITEM:加签;CIRCULATE_ITEM:传阅;SUB_INSTANCE:子流程,可用值:0,1,2,3,4,5|string||
|&emsp;&emsp;&emsp;&emsp;workflowCode|流程编码|string||
|&emsp;&emsp;&emsp;&emsp;workflowTokenId|外键，tokenId|string||
|&emsp;&emsp;&emsp;&emsp;workflowVersion|流程模板版本|integer||
|&emsp;&emsp;workflowInstanceId|流程实例id|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"objectId": "",
		"workItem": {
			"activityCode": "",
			"activityName": "",
			"allowedTime": "",
			"appCode": "",
			"approval": "",
			"batchOperate": false,
			"circulate": true,
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
			"name_i18n": "",
			"originator": "",
			"originatorName": "",
			"participant": "",
			"participantName": "",
			"receiveTime": "",
			"remarks": "",
			"rootTaskId": "",
			"sequenceNo": "",
			"sheetCode": "",
			"sourceId": "",
			"sourceName": "",
			"sourceTaskId": "",
			"startTime": "",
			"state": "",
			"timeoutWarn1": "",
			"timeoutWarn2": "",
			"timeoutWarn3": "",
			"timeoutWarn4": "",
			"timeoutWarn5": "",
			"trustor": "",
			"trustorName": "",
			"usedtime": 0,
			"workItemSource": "",
			"workItemTimeoutStatus": "",
			"workItemType": "",
			"workflowCode": "",
			"workflowTokenId": "",
			"workflowVersion": 0
		},
		"workflowInstanceId": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 表单新增


**接口地址**:`/api/api/v2/bizobject/submit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "bizObject": {
    "childPageInfo": {},
    "createdTime": "",
    "data": {},
    "extendInfo": {
      "creatorId": "",
      "sourceBizObjectId": "",
      "sourceBizObjectName": "",
      "sourceSchemaCode": "",
      "sourceSchemaName": ""
    },
    "formCode": "",
    "id": "",
    "loadedFromDb": false,
    "modifiedTime": "",
    "name": "",
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
  "depatmentId": "",
  "owner": "",
  "replayToken": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|表单新增-请求|表单新增-请求|body|true|表单新增-请求|表单新增-请求|
|&emsp;&emsp;bizObject|运行时业务数据对象||false|BizObjectModel|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo|||false|object||
|&emsp;&emsp;&emsp;&emsp;createdTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息||false|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName|||false|string||
|&emsp;&emsp;&emsp;&emsp;formCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerId|||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|||false|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|||false|string||
|&emsp;&emsp;depatmentId|用户选择部门id||false|string||
|&emsp;&emsp;owner|拥有者||false|string||
|&emsp;&emsp;replayToken|重放验证码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«表单新增-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|表单新增-响应|表单新增-响应|
|&emsp;&emsp;formCode|表单编码|string||
|&emsp;&emsp;objectId|业务对象id|string||
|&emsp;&emsp;schemaCode|模型编码|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"formCode": "",
		"objectId": "",
		"schemaCode": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 流程审批


**接口地址**:`/api/api/v2/workItem/submit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>流程审批</p>



**请求示例**:


```javascript
{
  "actionCode": "",
  "agree": false,
  "approval": {
    "actionType": "",
    "activityCode": "",
    "activityName": "",
    "bizObjectId": "",
    "bizPropertyCode": "",
    "commentTime": "",
    "commonSet": false,
    "content": "",
    "createdBy": "",
    "createdTime": "",
    "creater": {},
    "deleted": false,
    "id": "",
    "lastAttachment": {
      "base64ImageStr": "",
      "createdBy": "",
      "createdTime": "",
      "deleted": false,
      "fileExtension": "",
      "fileSize": 0,
      "id": "",
      "mimeType": "",
      "modifiedBy": "",
      "modifiedTime": "",
      "name": "",
      "refId": "",
      "remarks": "",
      "schemaCode": ""
    },
    "modifiedBy": "",
    "modifiedTime": "",
    "relUsers": [],
    "remarks": "",
    "resources": [
      {
        "base64ImageStr": "",
        "createdBy": "",
        "createdTime": "",
        "deleted": false,
        "fileExtension": "",
        "fileSize": 0,
        "id": "",
        "mimeType": "",
        "modifiedBy": "",
        "modifiedTime": "",
        "name": "",
        "refId": "",
        "remarks": "",
        "schemaCode": ""
      }
    ],
    "result": "",
    "schemaCode": "",
    "tokenId": 0,
    "workItemId": "",
    "workflowInstanceId": "",
    "workflowTokenId": ""
  },
  "bizObject": {
    "childPageInfo": {},
    "createdTime": "",
    "data": {},
    "extendInfo": {
      "creatorId": "",
      "sourceBizObjectId": "",
      "sourceBizObjectName": "",
      "sourceSchemaCode": "",
      "sourceSchemaName": ""
    },
    "formCode": "",
    "id": "",
    "loadedFromDb": false,
    "modifiedTime": "",
    "name": "",
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
  "depatmentId": "",
  "isSimulative": false,
  "latestSign": {
    "base64ImageStr": "",
    "createdBy": "",
    "createdTime": "",
    "deleted": false,
    "fileExtension": "",
    "fileSize": 0,
    "id": "",
    "mimeType": "",
    "modifiedBy": "",
    "modifiedTime": "",
    "name": "",
    "refId": "",
    "remarks": "",
    "schemaCode": ""
  },
  "owner": "",
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
          "name": ""
        }
      ]
    }
  ],
  "replayToken": "",
  "runMode": "",
  "trustor": "",
  "workItemId": "",
  "workflowCode": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|流程审批-请求|流程审批-请求|body|true|流程审批-请求|流程审批-请求|
|&emsp;&emsp;actionCode|操作按钮编码，提交submit，同意agree，不同意disAgree||false|string||
|&emsp;&emsp;agree|是否同意, true:同意。false:不同意||false|boolean||
|&emsp;&emsp;approval|审批意见||false|BizCommentModel|BizCommentModel|
|&emsp;&emsp;&emsp;&emsp;actionType|审批对应操作类型. 1 审批 2 协办 3 加签 4 转办 5 作废 6 结束流程 7: 系统自动添加.  其中2, 3不需要审批结果,可用值:1,10,11,12,13,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称||false|string||
|&emsp;&emsp;&emsp;&emsp;bizObjectId|业务对象id||false|string||
|&emsp;&emsp;&emsp;&emsp;bizPropertyCode|数据项编码||false|string||
|&emsp;&emsp;&emsp;&emsp;commentTime|审批时间||false|string||
|&emsp;&emsp;&emsp;&emsp;commonSet|是否设置为常用意见||false|boolean||
|&emsp;&emsp;&emsp;&emsp;content|审批意见内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;creater|创建人||false|object||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识||false|string||
|&emsp;&emsp;&emsp;&emsp;lastAttachment|上一次签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;relUsers|协办、加签关联用户. 格式同选人控件的存储值: [{id: "xxx", type: 3}]||false|array|object|
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;resources|关联的附件资源||false|array|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;result|审批结果. 1: 同意, 2: 不同意, 3: 转办,  0或null: 空(无意义的值)',,可用值:1,2,3,4||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;tokenId|TokenNumber||false|integer||
|&emsp;&emsp;&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowTokenId|任务的TokenId||false|string||
|&emsp;&emsp;bizObject|运行时业务数据对象||false|BizObjectModel|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo|||false|object||
|&emsp;&emsp;&emsp;&emsp;createdTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息||false|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName|||false|string||
|&emsp;&emsp;&emsp;&emsp;formCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerId|||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|||false|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|||false|string||
|&emsp;&emsp;depatmentId|用户选择部门id||false|string||
|&emsp;&emsp;isSimulative|是否模拟||false|boolean||
|&emsp;&emsp;latestSign|最近的签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;owner|拥有者||false|string||
|&emsp;&emsp;participantInfos|下节点参与人信息||false|array|选择下审批节点参与人视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名||false|string||
|&emsp;&emsp;&emsp;&emsp;participantList|手动指定的参与者||false|array|string|
|&emsp;&emsp;&emsp;&emsp;participantType|参与者类型,可用值:MULTI_PARTICIPANT,SINGLE_PARTICIPANT||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|参与者列表||false|array|用户基本信息Req|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;replayToken|重放验证码||false|string||
|&emsp;&emsp;runMode|运行模式，0：自动；1：手动,可用值:AUTO,MANUAL||false|string||
|&emsp;&emsp;trustor|委托人id||false|string||
|&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowInstanceId|流程实列id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«流程审批-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|流程审批-响应|流程审批-响应|
|&emsp;&emsp;objectId|对象id|string||
|&emsp;&emsp;result|任务执行结果|boolean||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"objectId": "",
		"result": false
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 发起流程


**接口地址**:`/api/api/v2/workflow/start`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>发起流程</p>



**请求示例**:


```javascript
{
  "actionCode": "",
  "agree": false,
  "approval": {
    "actionType": "",
    "activityCode": "",
    "activityName": "",
    "bizObjectId": "",
    "bizPropertyCode": "",
    "commentTime": "",
    "commonSet": false,
    "content": "",
    "createdBy": "",
    "createdTime": "",
    "creater": {},
    "deleted": false,
    "id": "",
    "lastAttachment": {
      "base64ImageStr": "",
      "createdBy": "",
      "createdTime": "",
      "deleted": false,
      "fileExtension": "",
      "fileSize": 0,
      "id": "",
      "mimeType": "",
      "modifiedBy": "",
      "modifiedTime": "",
      "name": "",
      "refId": "",
      "remarks": "",
      "schemaCode": ""
    },
    "modifiedBy": "",
    "modifiedTime": "",
    "relUsers": [],
    "remarks": "",
    "resources": [
      {
        "base64ImageStr": "",
        "createdBy": "",
        "createdTime": "",
        "deleted": false,
        "fileExtension": "",
        "fileSize": 0,
        "id": "",
        "mimeType": "",
        "modifiedBy": "",
        "modifiedTime": "",
        "name": "",
        "refId": "",
        "remarks": "",
        "schemaCode": ""
      }
    ],
    "result": "",
    "schemaCode": "",
    "tokenId": 0,
    "workItemId": "",
    "workflowInstanceId": "",
    "workflowTokenId": ""
  },
  "bizObject": {
    "childPageInfo": {},
    "createdTime": "",
    "data": {},
    "extendInfo": {
      "creatorId": "",
      "sourceBizObjectId": "",
      "sourceBizObjectName": "",
      "sourceSchemaCode": "",
      "sourceSchemaName": ""
    },
    "formCode": "",
    "id": "",
    "loadedFromDb": false,
    "modifiedTime": "",
    "name": "",
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
  "depatmentId": "",
  "isSimulative": false,
  "latestSign": {
    "base64ImageStr": "",
    "createdBy": "",
    "createdTime": "",
    "deleted": false,
    "fileExtension": "",
    "fileSize": 0,
    "id": "",
    "mimeType": "",
    "modifiedBy": "",
    "modifiedTime": "",
    "name": "",
    "refId": "",
    "remarks": "",
    "schemaCode": ""
  },
  "owner": "",
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
          "name": ""
        }
      ]
    }
  ],
  "replayToken": "",
  "runMode": "",
  "trustor": "",
  "workItemId": "",
  "workflowCode": "",
  "workflowInstanceId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|发起流程-请求|发起流程-请求|body|true|发起流程-请求|发起流程-请求|
|&emsp;&emsp;actionCode|操作按钮编码，提交submit，同意agree，不同意disAgree||false|string||
|&emsp;&emsp;agree|是否同意, true:同意。false:不同意||false|boolean||
|&emsp;&emsp;approval|审批意见||false|BizCommentModel|BizCommentModel|
|&emsp;&emsp;&emsp;&emsp;actionType|审批对应操作类型. 1 审批 2 协办 3 加签 4 转办 5 作废 6 结束流程 7: 系统自动添加.  其中2, 3不需要审批结果,可用值:1,10,11,12,13,2,3,4,5,6,7,8,9||false|string||
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名称||false|string||
|&emsp;&emsp;&emsp;&emsp;bizObjectId|业务对象id||false|string||
|&emsp;&emsp;&emsp;&emsp;bizPropertyCode|数据项编码||false|string||
|&emsp;&emsp;&emsp;&emsp;commentTime|审批时间||false|string||
|&emsp;&emsp;&emsp;&emsp;commonSet|是否设置为常用意见||false|boolean||
|&emsp;&emsp;&emsp;&emsp;content|审批意见内容||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;creater|创建人||false|object||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|id标识||false|string||
|&emsp;&emsp;&emsp;&emsp;lastAttachment|上一次签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;relUsers|协办、加签关联用户. 格式同选人控件的存储值: [{id: "xxx", type: 3}]||false|array|object|
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;resources|关联的附件资源||false|array|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;result|审批结果. 1: 同意, 2: 不同意, 3: 转办,  0或null: 空(无意义的值)',,可用值:1,2,3,4||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|数据模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;tokenId|TokenNumber||false|integer||
|&emsp;&emsp;&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|流程实例id||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowTokenId|任务的TokenId||false|string||
|&emsp;&emsp;bizObject|运行时业务数据对象||false|BizObjectModel|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;childPageInfo|||false|object||
|&emsp;&emsp;&emsp;&emsp;createdTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致||false|object||
|&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息||false|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName|||false|string||
|&emsp;&emsp;&emsp;&emsp;formCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象||false|boolean||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;ownerId|||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceNo|||false|string||
|&emsp;&emsp;&emsp;&emsp;sequenceStatus|||false|string||
|&emsp;&emsp;&emsp;&emsp;sheetCode|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW||false|string||
|&emsp;&emsp;&emsp;&emsp;workflowInstanceId|||false|string||
|&emsp;&emsp;depatmentId|用户选择部门id||false|string||
|&emsp;&emsp;isSimulative|是否模拟||false|boolean||
|&emsp;&emsp;latestSign|最近的签名信息||false|AttachmentModel|AttachmentModel|
|&emsp;&emsp;&emsp;&emsp;base64ImageStr|base64图片改造||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true||false|boolean||
|&emsp;&emsp;&emsp;&emsp;fileExtension|资源文件扩展名||false|string||
|&emsp;&emsp;&emsp;&emsp;fileSize|资源大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;id|资源id||false|string||
|&emsp;&emsp;&emsp;&emsp;mimeType|资源mime type||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id||false|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;refId|资源关联id||false|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码||false|string||
|&emsp;&emsp;owner|拥有者||false|string||
|&emsp;&emsp;participantInfos|下节点参与人信息||false|array|选择下审批节点参与人视图类|
|&emsp;&emsp;&emsp;&emsp;activityCode|节点编码||false|string||
|&emsp;&emsp;&emsp;&emsp;activityName|节点名||false|string||
|&emsp;&emsp;&emsp;&emsp;participantList|手动指定的参与者||false|array|string|
|&emsp;&emsp;&emsp;&emsp;participantType|参与者类型,可用值:MULTI_PARTICIPANT,SINGLE_PARTICIPANT||false|string||
|&emsp;&emsp;&emsp;&emsp;participants|参与者列表||false|array|用户基本信息Req|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;departmentName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;replayToken|重放验证码||false|string||
|&emsp;&emsp;runMode|运行模式，0：自动；1：手动,可用值:AUTO,MANUAL||false|string||
|&emsp;&emsp;trustor|委托人id||false|string||
|&emsp;&emsp;workItemId|任务id||false|string||
|&emsp;&emsp;workflowCode|流程编码||false|string||
|&emsp;&emsp;workflowInstanceId|流程实列id||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«发起流程-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|发起流程-响应|发起流程-响应|
|&emsp;&emsp;objectId|对象id|string||
|&emsp;&emsp;result|任务执行结果|boolean||
|&emsp;&emsp;workflowInstanceId|流程实列id|string||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"objectId": "",
		"result": false,
		"workflowInstanceId": ""
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```


## 查询表单数据列表接口


**接口地址**:`/api/api/v2/bizobject/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询表单数据列表接口</p>



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
|查询数据结果对象-请求|查询数据结果对象-请求|body|true|查询数据结果对象-请求|查询数据结果对象-请求|
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
|&emsp;&emsp;view|模型参数（支持树形结构）||false|ModelViewQueryModelReq|ModelViewQueryModelReq|
|&emsp;&emsp;&emsp;&emsp;depth|深度（默认1）||false|integer||
|&emsp;&emsp;&emsp;&emsp;displayField|展示路径所用字段（若不指定使用关联单选的显示字段）||false|string||
|&emsp;&emsp;&emsp;&emsp;parentRef|父节点（为#时查根节点）||false|string||
|&emsp;&emsp;&emsp;&emsp;showPath|展示路径（默认不返回）||false|boolean||
|&emsp;&emsp;&emsp;&emsp;type|视图类型：list/tree (默认list),可用值:LIST,TREE||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询表单数据列表-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询表单数据列表-响应|查询表单数据列表-响应|
|&emsp;&emsp;bizObjectPage|表单数据列表|分页返回对象«BizObjectModel»|分页返回对象«BizObjectModel»|
|&emsp;&emsp;&emsp;&emsp;content|业务对象数组|array|BizObjectModel|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;childPageInfo||object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;data|业务数据对象，数据格式与对应的业务模型一致|object||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extendInfo|业务数据对象扩展信息|BizObjectExtendInfo|BizObjectExtendInfo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;creatorId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceBizObjectName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceSchemaName||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;formCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;loadedFromDb|是否是从数据库加载的对象|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modifiedTime||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerDeptQueryCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerId||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;participants||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaCode|业务模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceNo||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sequenceStatus||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sheetCode||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|业务数据对象状态,可用值:UPDATE},{NEW|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;workflowInstanceId||string||
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
					"createdTime": "",
					"data": {},
					"extendInfo": {
						"creatorId": "",
						"sourceBizObjectId": "",
						"sourceBizObjectName": "",
						"sourceSchemaCode": "",
						"sourceSchemaName": ""
					},
					"formCode": "",
					"id": "",
					"loadedFromDb": false,
					"modifiedTime": "",
					"name": "",
					"ownerDeptQueryCode": "",
					"ownerId": "",
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


# OpenWebAPI::视图


## 获取列表头信息


**接口地址**:`/api/api/v2/query/header/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据模型编码获取列表头信息</p>



**请求示例**:


```javascript
{
  "currentAppCode": "",
  "schemaCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询列表头-请求|查询列表头-请求|body|true|查询列表头-请求|查询列表头-请求|
|&emsp;&emsp;currentAppCode|应用编码||false|string||
|&emsp;&emsp;schemaCode|模型编码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应结果«查询列表头-响应»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|返回结果|查询列表头-响应|查询列表头-响应|
|&emsp;&emsp;bizQueryHeaderList|应用编码|array|BizQueryHeaderModel|
|&emsp;&emsp;&emsp;&emsp;code|列表编码|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人id|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间|string||
|&emsp;&emsp;&emsp;&emsp;deleted|逻辑删除标识，启用状态为false， 禁用状态为true|boolean||
|&emsp;&emsp;&emsp;&emsp;icon|列表图标|string||
|&emsp;&emsp;&emsp;&emsp;id|id标识|string||
|&emsp;&emsp;&emsp;&emsp;modifiedBy|修改人id|string||
|&emsp;&emsp;&emsp;&emsp;modifiedTime|最近更新时间|string||
|&emsp;&emsp;&emsp;&emsp;name|列表名称|string||
|&emsp;&emsp;&emsp;&emsp;name_i18n|双语名称|string||
|&emsp;&emsp;&emsp;&emsp;newCode|未发布时修改后的编码|string||
|&emsp;&emsp;&emsp;&emsp;publish|是否发布|boolean||
|&emsp;&emsp;&emsp;&emsp;queryPresentationType|列表视图类型,可用值:BOARD,CALENDAR,GANTT,LIST|string||
|&emsp;&emsp;&emsp;&emsp;remarks|备注|string||
|&emsp;&emsp;&emsp;&emsp;schemaCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;showOnMobile|移动端可见|boolean||
|&emsp;&emsp;&emsp;&emsp;showOnPc|PC可见|boolean||
|&emsp;&emsp;&emsp;&emsp;sortKey|列表排序号|integer||
|errcode|错误码,成功返回0|integer(int64)|integer(int64)|
|errmsg|提示消息|string||
|traceId||string||


**响应示例**:
```javascript
{
	"data": {
		"bizQueryHeaderList": [
			{
				"code": "",
				"createdBy": "",
				"createdTime": "",
				"deleted": false,
				"icon": "",
				"id": "",
				"modifiedBy": "",
				"modifiedTime": "",
				"name": "",
				"name_i18n": "",
				"newCode": "",
				"publish": false,
				"queryPresentationType": "",
				"remarks": "",
				"schemaCode": "",
				"showOnMobile": false,
				"showOnPc": false,
				"sortKey": 0
			}
		]
	},
	"errcode": 0,
	"errmsg": "",
	"traceId": ""
}
```