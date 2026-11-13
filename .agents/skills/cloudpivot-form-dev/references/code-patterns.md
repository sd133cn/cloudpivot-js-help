# 云枢表单代码模式

写 `src/custom.ts` 时查这里：生命周期、控件取值赋值、子表操作、按钮、消息、HTTP 的可用写法。
纯 JavaScript 语法，内容直接复制进云枢 JS 编辑窗口。约束规则的唯一出处是仓库根 `AGENTS.md`；
更完整的官方说明见仓库 `表单开发API/`。

## 生命周期事件

> `form.on(事件, 处理函数, 'cover')` 的第三个参数：官方文档统一带 `'cover'` 但从未解释语义，照抄官方写法统一带上，不要省略。

### onLoad - 初始化数据/权限

```javascript
// 渲染前修改控件值
form.on('onLoad', function(data, dataPermission) {
    // 直接修改 data 对象设置初始值
    data.textField = '初始值';
    data.numberField = 100;
}, 'cover');

// 渲染前修改数据权限
form.on('onLoad', function(data, dataPermission) {
    dataPermission.textField.e = false;  // 禁止编辑
    dataPermission.textField.v = false;  // 隐藏
    dataPermission.textField.r = true;   // 必填
}, 'cover');

// 异步请求后修改数据
form.on('onLoad', function(data, dataPermission) {
    var url = config.apiHost + '/api/user';
    return axios.get(url).then(function(res) {
        data.textField = res.data.name;
    });
}, 'cover');
```

### onRendered - 渲染后操作

```javascript
// DOM操作、控件监听
form.on('onRendered', function(data) {
    // 注意：不要用箭头函数，IE需要用 function + window.h3form

    // 监听控件值变化
    this.textField.valueChange.subscribe(function(change) {
        console.log('新值:', change.value);
        console.log('旧值:', change.oldValue);
    });

    // 监听控件属性变化（display、required等）
    this.textField.propertyChange.subscribe(function(change) {
        console.log('属性:', change.name);
        console.log('新值:', change.value);
    });
});
```

### onValidate - 自定义校验

```javascript
// 同步校验
form.on('onValidate', function(action, data) {
    if (action.code === 'submit') {
        if (this.amount.value > 10000 && !this.approver.value) {
            this.$message.error('金额超过10000需填写审批人');
            return false;  // 阻止提交
        }
    }
    return true;
});

// 异步校验
form.on('onValidate', function(action, data) {
    var closeLoading = this.$message.loading('正在校验', 0);
    var form = this;
    return new Promise(function(resolve) {
        axios.get(config.apiHost + '/api/validate').then(function(res) {
            closeLoading();
            if (!res.data.valid) {
                form.$message.error('校验失败');
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
});
```

### onPreAction - 阻止按钮操作

```javascript
form.on('onPreAction', function(action, data) {
    if (action.code === 'save') {
        return false;  // 阻止保存
    }
});
```

### onCustomAction - 自定义按钮

```javascript
// HTML: <action text="按钮1" code="btn1"></action>
form.on('onCustomAction', function(action, data) {
    if (action.code === 'btn1') {
        this.$message.success('按钮1被点击');
        // 发送请求
        axios.post(config.apiHost + '/api/action', data).then(function(res) {
            // 处理响应
        });
    }
});
```

### onActionDone - 操作后处理

```javascript
form.on('onActionDone', function(action, data, httpRes) {
    if (action.code === 'submit') {
        // return false 阻止提交后的自动跳转
        // return false;
    }
});
```

## 控件操作

### 获取/设置控件值

```javascript
// 文本控件 (type: 1, 2)
var textValue = this.textField.value;
this.textField.value = '新值';

// 数值控件 (type: 4)
this.numberField.value = 100;

// 日期控件 (type: 3)
this.dateField.value = new Date();

// 单选/下拉 (type: 5, 7)
this.radioField.value = '选项A';

// 复选/下拉多选 (type: 6)
this.checkboxField.value = ['选项A', '选项B'];

// 人员/部门控件 (type: 50, 51, 60, 61, 70)
this.staffField.value = [{
    type: 3,  // 3人员, 1部门
    name: '张三',
    imgUrl: '头像URL',
    id: 'userId',
    departmentId: '主部门ID'
}];

// 关联表单 (type: 80)
this.relevanceForm.value = {
    id: 'bizObjectId',
    name: '数据摘要'
};
```

### 控件状态控制

```javascript
// 显示/隐藏
this.textField.display = false;

// 编辑/只读
this.textField.edit = false;

// 必填
this.textField.required = true;

// 下拉选项
this.dropdownField.items = ['选项1', '选项2', '选项3'];
```

## 子表（Sheet）操作

```javascript
// 整表赋值
this.sheetField.value = [
    { col1: '值1', col2: 10 },
    { col1: '值2', col2: 20 }
];

// 整行赋值
this.sheetField.rows[0].value = { col1: '值', col2: 10 };

// 单元格赋值
this.sheetField.getCell(0, 0).value = '值';         // 按索引
this.sheetField.getCell(0, 'col1').value = '值';    // 按列key

// 新增行
this.sheetField.appendRow({ col1: '值', col2: 10 });
this.sheetField.insertRow(0, { col1: '值', col2: 10 });

// 批量新增 (v1.4.0+)
this.sheetField.appendRows([{ col1: 'a' }, { col1: 'b' }]);
this.sheetField.insertRows(0, [{ col1: 'a' }, { col1: 'b' }]);

// 删除行
this.sheetField.removeRow(0);
this.sheetField.removeRows([0, 1, 2]);  // 批量删除
this.sheetField.removeAllRow();          // 清空

// 获取选中行
var checkedRows = this.sheetField.getCheckedRows();
// 返回: [{ index: 0, data: { col1: '值', ... } }]

// 监听行变化
this.sheetField.rowChange.subscribe(function(change) {
    if (change.type === 'insert') {
        // 新增行
    } else if (change.type === 'remove') {
        // 删除行
    }
});

// 监听行值变化
this.sheetField.getRowValueChange(0).subscribe(function(change) {
    console.log('行索引:', change.index);
    console.log('列索引:', change.columnIndex);
});

// 监听列值变化
var subject = this.sheetField.getColumnValueChange('col1');
if (subject) {
    subject.subscribe(function(change) {
        console.log('列key:', change.key);
        console.log('行索引:', change.rowIndex);
    });
}
```

### 子表行状态 `rowStatus`：赋值能不能生效，看它

云枢提交子表时逐行看 `rowStatus` 决定怎么处理。四个固定取值，大小写照抄（是 `Unchange` 不是 `Unchanged`）：

| `rowStatus` | 含义 |
|---|---|
| `Added` | 新增行 |
| `Modified` | 修改行 |
| `Deleted` | 删除行（标记，提交时移除） |
| `Unchange` | 未变动，不参与写入 |

**谁写数据，谁负责 `rowStatus`**：

- 走控件 API —— `appendRow` / `insertRow` / `getCell(i, col).value` / `rows[i].value = {...}`：平台自己维护状态，你不用管。
- 直接操作数据对象 —— `onLoad` 里改 `data.sheetKey`、整表 `value = rows`、自己拼行数组：平台看不到你的意图，`rowStatus` **必须你来设**，设成什么就按什么提交。

拿不准就提交前打一行日志核对状态和意图是否一致：

```javascript
console.log(this.sheetField.value.map(function(r) {
    return { name: r.col1, rowStatus: r.rowStatus };
}));
```

#### 只改少数行：显式设 rowStatus（高性能路径）

改动量小的时候不要清空重建。只动要动的那几行，把状态标对，其余行原样不动——省掉整表重建，行多或有附件列时差距明显。

```javascript
var rows = this.sheetField.value;      // 或从别处取回、准备整体赋值的行数组

rows[2].textCol = '改过的值';
rows[2].rowStatus = 'Modified';        // 只有这一行参与写入

// 删一行：打标记，不要 splice / delete 掉数组元素
// rows[3].rowStatus = 'Deleted';
// 加一行：新行标成 Added
// newRow.rowStatus = 'Added';

this.sheetField.value = rows;
```

这条路径上如果界面没更新，退回下面的整表替换（先剥属性）。

#### 整表替换外部数据：先剥掉平台附属属性

行数据来自 API 返回，或从本表单/其他表单读回来的子表（含关联表单带出的数据）时，每一行都带着**源单据**的 `id`、`parentId`、`rowStatus`、`version`。那套状态描述的是源单据的行，直接赋回去，平台按那份旧的增删改指令处理，结果就是赋值看着执行了、界面和数据却没变。

**先把这四个属性逐行删掉**，让平台重新按新增处理。需要控制行顺序就自己补 `sortKey`。

```javascript
form.on('onRendered', function() {
    var form = this; // subscribe 的 function 回调里 this 不是表单，先捕获
    this.relevanceForm.valueChange.subscribe(function(change) {
        if (change.value == null) { return; }
        var closeLoading = form.$message.loading('加载中', 0);
        var sheetField = form.sheetField;

        // 取回源单据数据，例如从接口读回另一张表单的子表
        // getFormData 是业务侧自己封装的取数函数，非平台 API；第三个参数是源单据的模板编码
        getFormData(axios, change.value.id, sourceTemplateCode).then(function(data) {
            var rows = data.sourceSheetKey;   // 源子表数据，每行带 id/parentId/rowStatus/version

            // 一次性剥掉全部平台附属属性，否则赋值不生效
            rows.forEach(function(row, index) {
                delete row.id;
                delete row.parentId;
                delete row.rowStatus;
                delete row.version;
                row.sortKey = index;      // 按源数据顺序重排
            });

            sheetField.removeAllRow();
            sheetField.appendRows(rows);
            // sheetField.value = rows;   // 整表赋值同样要先剥属性；实测走 appendRows 更稳
            closeLoading();
        }).catch(function(err) {
            closeLoading();
            form.$message.error('抓取数据失败，请刷新页面重试');
            console.log('抓取数据失败:', err);
        });
    }.bind(this));
});
```

要点：

- 四个属性**一次性全删**，不用挑：`id`、`parentId`、`rowStatus`、`version` 都是平台私有字段，业务代码不该把它们写回。
- 删掉 `rowStatus` 的实质是"别替平台做决定"；反过来，想替平台做决定（只改一行）就走上面那条显式设状态的路径。
- `removeAllRow()` + `appendRows(rows)` 和整表 `value = rows` 两条路都要求先剥属性；剥完之后两条路才都可用。
- `appendRow` / `insertRow` 单条新增同理——塞进去的行必须是"干净"的新行。
- 排查这类"赋值没反应"：在 forEach 前后各 `console.log` 一次行对象，比对 `rowStatus` 等字段是否还在。

### 子表自定义按钮

```html
<!-- HTML配置 -->
<a-sheet key="sheetField">
    <a-action-group>
        <a-sheet-action code="customBtn1" text="自定义按钮1"></a-sheet-action>
        <a-sheet-action code="customBtn2" text="自定义按钮2"></a-sheet-action>
    </a-action-group>
</a-sheet>
```

```javascript
// JS事件挂载
form.on('onRendered', function() {
    this.sheetField.sheetActionDown(function(event) {
        switch (event.code) {
            case 'customBtn1':
                console.log('选中行:', event.checkeds);
                console.log('全部数据:', event.value);
                break;
            case 'customBtn2':
                // 处理按钮2
                break;
        }
    });
});
```

## 按钮操作

### 表单自定义按钮

**HTML 配置**（在 `<section id="toolbar">` 内添加）：

```html
<section id="toolbar">
    <action text="自定义按钮1" code="customBtn1"></action>
    <action text="自定义按钮2" code="customBtn2"></action>
</section>
```

**JS 事件处理**：

```javascript
form.on('onCustomAction', function(action, data) {
    switch (action.code) {
        case 'customBtn1':
            this.$message.success('按钮1被点击');
            // 发送请求
            axios.post(config.apiHost + '/api/action', data).then(function(res) {
                // 处理响应
            });
            break;
        case 'customBtn2':
            // 处理按钮2
            break;
    }
});
```

### 子表自定义按钮

同一套写法，见上文「子表（Sheet）操作 → 子表自定义按钮」。

### 隐藏按钮

```javascript
// 隐藏系统按钮（submit、save等）- 在 onLoad 中
form.on('onLoad', function() {
    var btnSubmit = this.actions.find(function(a) {
        return a.code === 'submit';
    });
    if (btnSubmit) {
        btnSubmit.visible = false;
    }
});

// 隐藏自定义按钮 - 在 onRendered 中
form.on('onRendered', function() {
    this.actions.forEach(function(item) {
        if (item.code === 'customBtn') {
            item.actionController.visible = false;
        }
    });
});
```

### 执行按钮操作

```javascript
this.doAction('submit');  // 提交
this.doAction('save');    // 暂存
this.submit();            // 提交的快捷方法
```

## UI 消息提示

```javascript
// 提示框
this.$message.success('操作成功');
this.$message.error('操作失败');
var closeLoading = this.$message.loading('加载中', 0);  // 0表示不自动关闭
closeLoading();  // 手动关闭

// 对话框
this.$confirm({
    title: '确认对话框',
    content: '确定要执行此操作吗？',
    onOk: function() {
        // 确认回调
    },
    onCancel: function() {
        // 取消回调
    }
});
```

## HTTP 请求

> 平台有一组表单可调用的 OpenWebAPI 接口（列表查询、发起/审批流程、组织人员等 22 个端点），就用这个 axios 范式调，带页面会话不用管 token——端点与请求体见 `references/webapi.md`。上面的 `/api/resource` 只是占位示例。

```javascript
// 使用全局 axios
var url = config.apiHost + '/api/resource';
axios.get(url).then(function(res) {
    // 处理响应
});

axios.post(url, { data: 'value' }).then(function(res) {
    // 处理响应
});
```

---
