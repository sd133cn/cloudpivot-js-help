# 表单在线开发全局上下文变量（h3form）标准化属性及释义

# 可访问属性（能够通过“.”访问到的属性）
| 属性 | 属性类型 | 属性值含义 | 备注 |
| --- | --- | --- | --- |
| sumbit | function() | 方法，提交表单 |  |
| doAction | function(code: string) | 方法，执行按钮操作 | 使用时需传递按钮code |
| $confirm |  | 构建确认弹出框组件 |  |
| $router | | 路由操作 | |
| $message | | 构建气泡提示信息 | |
| $i18n | | 国际化语言环境信息 | 当前表单实例所处的语言环境 |
| actions | Array<object> | 当前表单可用的默认操作按钮列表 | 根据表单当前权限展示以下按钮（默认名称）值的集合：<br/>提交（submit）、编辑（edit）、暂存/保存（save）、同意（agree）、驳回（showReject）、协办（assist）、加签（adjustParticipant）、传阅（circulate）、删除（delete）、转办（forward）、撤回（retrieve）、催办（urge）、打印（print）、不同意（disAgree）、作废流程（cancel）、结束流程（finishInstance）、撤回协办（assistRetrieve）、前置加签（preAddSign）、修改拥有者（editOwner） |
| workflowInfo | object | 当前流程表单所处流程节点信息 | 属性只读 |
| submited | boolean | 当前表单是否已经被提交过 | 属性只读 |
| isNew | boolean | 当前表单是否为新建表单 | 属性只读 |
| isDraft | boolean | 当前表单是否为草稿状态 | 属性只读 |
| inEdit | boolean | 当前表单是否进入了编辑状态 | 流程表单的非结束节点均为可编辑状态，可修改 |
| isMobile | boolean | 当前表单的打开方式是否为移动端打开 | |
| formInEdit | boolean | 当前表单是否可提交/同意/保存 | 属性只读 |
| value | object | 表单当前值 | |
| errors | object | 表单错误列表 | |
| validate | function | 表单校验方法 | |
| formObj | object | 后端api接口获取到的表单数据对象 | |
| axios | axios | | |
| extraProperties | object | url额外入参，可携带部分自定义参数 | |
| currentUser | object | 当前用户信息 | |


# 其他访问属性名（使用未明确定义的可通过“.”访问的属性名）
+ 不归属于上述列表中的其他属性名将作为控件key值进行控件查找，如果能查找到对应的控件，则将控件的control作为返回值，否则返回undefined



> 更新: 2024-01-05 19:45:24  
> 原文: <https://www.yuque.com/skwme4/hzo079/hla6q8if6g5s1qb8>