# 表单HTML二开-子表API扩展

# 1、"获取单元格对象”方法——getCell

| `getCell(rowIndex: number, columnIndex: number)`                                                     |     |
|:---------------------------------------------------------------------------------------------------- | --- |
| `rowIndex`：子表数据行序号，从0开始`columnIndex`：子表数据列序号或列字段编码，列序号从0开始                                           |     |
| `this.Sheet1671528710462.getCell(0,1)`或`this.Sheet1671528710462.getCell(0,'ShortText1671528712711')` |     |

# 2、新增“获取子表当前选中行数据”方法——getCheckedRows

* 入参：无入参

```typescript
[
  {
    index: number;    // 被选中行序号
    data: object;        // 被选中行数据
  }
]
```

```typescript
// HTML二开代码
this.ShortText1671528403035.valueChange.subscribe((change) => {
    debugger
    const checked = this.Sheet1671528710462.getCheckedRows();
    console.log(checked)
})

// 输出
[
    {
        "index": 1,
        "data": {
            "rowStatus": "Added",
            "ShortText1671528712711": "",
            "LongText1671528713119": "",
            "Date1671528713509": null,
            "Number1671528713854": null,
            "Radio1671528714238": "",
            "Checkbox1671528714710": [],
            "Dropdown1671528715150": "",
            "DropdownMulti1671528715541": [],
            "Logic1671528715942": true,
            "Attachment1671528716326": null,
            "Attachment1671528716734": null,
            "Attachment1671528717135": null,
            "Address1671528717559": null,
            "StaffSingle1671528717958": [],
            "StaffMulti1671528718382": [],
            "DeptSingle1671528718814": [],
            "DeptMulti1671528720846": [],
            "StaffDeptMix1671528721445": [],
            "id": null
        }
    }
]
```

> 更新: 2023-07-05 10:06:56  
> 原文: <https://www.yuque.com/skwme4/hzo079/grg01w9mon069az5>