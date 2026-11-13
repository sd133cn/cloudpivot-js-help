# 云枢控件 HTML 格式参考

写 `src/custom.html` 时查这里：基础控件、子表、容器、标签页的标签与属性清单，以及自定义 HTML 元素的写法。
只在**新增或修改控件**时读。约束规则的唯一出处是仓库根 `AGENTS.md`。


## 添加控件的两条路径

**重要**：`src/custom.html` 由 `npm run extract` 从 `template.html` 生成，会被覆盖。要添加新控件：

**方式一：完整更新（覆盖所有文件）**
1. 在云枢平台设计表单，导出新模板覆盖 `template.html`
2. 运行 `npm run extract` - 会覆盖所有 src/ 文件

**方式二：仅更新类型（保留用户代码）**
1. 手动编辑 `src/custom.html` 添加新控件
2. 运行 `npm run refresh-types` - 只更新类型定义和注释

**控件 HTML 格式参考**（用于理解 `template.html` 结构，或在云枢平台直接编辑）：

## 1. 基础控件（无嵌套）

```html
<!-- 短文本 -->
<a-text key="ShortTextXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-text>

<!-- 短文本（完整属性示例） -->
<a-text key="ShortTextXXXXXXXXXXXX" 
        data-name="姓名" 
        data-tips="控件Tips" 
        data-default-value="默认值" 
        data-placeholder="提示文字" 
        data-max-length="200"
        data-regexp=""
        data-regexp-text=""
        data-no-repeat="false"
        data-style="color: #ff0000;font-size: 16px;" 
        data-span="24">
</a-text>

<!-- 长文本 -->
<a-textarea key="LongTextXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-textarea>

<!-- 日期 -->
<a-date key="DateXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-format1="YYYY-MM-DD"></a-date>

<!-- 数值 -->
<a-number key="NumberXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-format1="integer"></a-number>

<!-- 单选框 -->
<a-radio key="RadioXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-options="选项1;选项2;选项3"></a-radio>

<!-- 复选框 -->
<a-checkbox key="CheckboxXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-options="选项1;选项2;选项3"></a-checkbox>

<!-- 下拉单选 -->
<a-dropdown key="DropdownXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-options="选项1;选项2;选项3"></a-dropdown>

<!-- 下拉多选 -->
<a-dropdown-multi key="DropdownMultiXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-options="选项1;选项2;选项3"></a-dropdown-multi>

<!-- 逻辑 -->
<a-logic key="LogicXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-logic>

<!-- 附件 -->
<a-attachment key="AttachmentXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-attachment>

<!-- 图片 -->
<a-image key="AttachmentXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-image>

<!-- 手写签名 -->
<a-signature key="AttachmentXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-signature>

<!-- 地址 -->
<a-location key="AddressXXXXXXXXXXXX" data-name="控件名称" data-span="24"></a-location>

<!-- 关联表单（标签名是 a-association-form，不要写成 relevance-form） -->
<a-association-form key="RelevanceFormXXXXXXXXXXXX" data-name="控件名称" data-span="24"
                    data-schema-code="源表单编码" data-query-code="查询视图编码"
                    data-display-field="源表单显示字段key" data-select-mode="dropdown"></a-association-form>

<!-- ⚠️ 关联表单的完整属性集（data-schema-code / data-query-code / data-mappings /
     data-conditions 等）由平台按源表单生成，手拼极易出错——
     在云枢平台拖出来、导出模板、再复制。JS 侧取值格式见 code-patterns.md「关联表单 (type: 80)」。 -->

<!-- 人员单选 -->
<a-user-selector key="StaffSingleXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-dept-visible="user" data-default-value="[]" data-org-root="[]"></a-user-selector>

<!-- 人员多选 -->
<a-user-multi-selector key="StaffMultiXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-dept-visible="user" data-default-value="[]" data-org-root="[]"></a-user-multi-selector>

<!-- 部门单选 -->
<a-departmentselector key="DeptSingleXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-dept-visible="org" data-default-value="[]" data-org-root="[]"></a-departmentselector>

<!-- 部门多选 -->
<a-departmentmultiselector key="DeptMultiXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-dept-visible="org" data-default-value="[]" data-org-root="[]"></a-departmentmultiselector>

<!-- 混合选人 -->
<a-staffDeptMixed key="StaffDeptMixXXXXXXXXXXXX" data-name="控件名称" data-span="24" data-dept-visible="all" data-default-value="[]" data-org-root="[]"></a-staffDeptMixed>

<!-- 标题 -->
<a-title key="titleXXXXXXXXXXXX" data-name="标题名称" data-span="24"></a-title>

<!-- 创建人 -->
<a-create-by key="creater" data-name="创建人" data-span="8"></a-create-by>

<!-- 创建时间 -->
<a-created-time key="createdTime" data-name="创建时间" data-span="8"></a-created-time>

<!-- 单据号 -->
<a-sequence-no key="sequenceNo" data-name="单据号" data-span="8"></a-sequence-no>

<!-- 分组标题 -->
<a-group-title key="groupXXXXXXXXXXXX" data-name="分组标题" data-span="24"></a-group-title>

<!-- 描述说明 -->
<a-description key="descriptionXXXXXXXXXXXX" data-name="描述说明" data-span="24"></a-description>
```

## 2. 子表控件（含嵌套）

子表内部使用 `<a-columns>` 包含列控件，列控件使用 `width` 属性设置宽度：

```html
<a-sheet key="SheetXXXXXXXXXXXX" data-name="子表名称" data-span="24" data-sheet-fiters="[]" data-head-group="[]">
    <a-action-group>
        <!-- 子表自定义按钮 -->
        <a-sheet-action code="customBtn1" text="自定义按钮1"></a-sheet-action>
    </a-action-group>
    <a-columns>
        <!-- 列控件，使用 width 而非 data-span -->
        <a-text key="ShortTextXXXXXXXXXXXX" width="150" data-name="列1"></a-text>
        <a-textarea key="LongTextXXXXXXXXXXXX" width="150" data-name="列2"></a-textarea>
        <a-radio key="RadioXXXXXXXXXXXX" width="150" data-name="列3" data-options="选项1;选项2"></a-radio>
    </a-columns>
</a-sheet>
```

## 3. 容器控件（可嵌套）

容器控件 `<a-form-container>` 可以嵌套多层，内部控件需要 `path` 属性标识路径。

**⚠️ 重要：容器控件不能有 `prev-framework` 和 `form-framework` 属性！这两个属性仅用于标签页 `<a-tabs-panel>`。**

**⚠️ 重要：`data-max-rows` 属性控制容器高度！设置值 = 控件行数 + 1，否则会出现滚动条。**

```html
<!-- 一级容器 - 注意：没有 prev-framework/form-framework -->
<!-- data-max-rows="7" 表示容器可容纳 6 行控件（7 = 6 + 1） -->
<a-form-container key="formContainerXXXXXXXXXXXX" data-span="12" data-max-rows="7">
    <a-row>
        <a-col>
            <!-- 容器内的控件需要 path 属性 -->
            <!-- 注意：容器内控件通常不设置 data-span，由容器框架控制 -->
            <a-text key="ShortTextXXXXXXXXXXXX" 
                    path='["formContainerXXXXXXXXXXXX","ShortTextXXXXXXXXXXXX"]' 
                    data-name="控件名称">
            </a-text>
        </a-col>
    </a-row>
    
    <!-- 嵌套二级容器 -->
    <a-form-container key="formContainerYYYYYYYYYYYY" 
                      path='["formContainerXXXXXXXXXXXX","formContainerYYYYYYYYYYYY"]' 
                      data-span="24" 
                      data-max-rows="3">
        <a-row>
            <a-col>
                <a-text key="ShortTextZZZZZZZZZZZZ" 
                        path='["formContainerXXXXXXXXXXXX","formContainerYYYYYYYYYYYY","ShortTextZZZZZZZZZZZZ"]' 
                        data-name="嵌套控件">
                </a-text>
            </a-col>
        </a-row>
    </a-form-container>
</a-form-container>
```

**`data-max-rows` 计算规则**：

| 容器内控件行数 | `data-max-rows` 值 | 说明 |
|---------------|-------------------|------|
| 1 行 | `2` | 容器高度容纳 1 行 |
| 3 行 | `4` | 容器高度容纳 3 行 |
| 6 行 | `7` | 容器高度容纳 6 行 |
| N 行 | `N + 1` | 公式：max-rows = 行数 + 1 |

**注意**：如果不设置或设置过小，容器会出现滚动条，影响用户体验。

**⚠️ 重要：容器内控件的 `data-data-item-name` 属性必须与 `key` 一致！**

`data-data-item-name` 是数据项名称，用于数据存储和检索。在容器内的控件，此属性**不能为空**，且**必须与 `key` 属性值完全一致**。

```html
<!-- ✅ 正确：data-data-item-name 与 key 一致 -->
<a-text key="textName" 
        path='["formContainerBasicInfo","textName"]' 
        data-data-item-name="textName" 
        data-name="姓名">
</a-text>

<!-- ❌ 错误：data-data-item-name 为空 -->
<a-text key="textName" 
        path='["formContainerBasicInfo","textName"]' 
        data-data-item-name="" 
        data-name="姓名">
</a-text>

<!-- ❌ 错误：data-data-item-name 与 key 不一致 -->
<a-text key="textName" 
        path='["formContainerBasicInfo","textName"]' 
        data-data-item-name="userName" 
        data-name="姓名">
</a-text>
```

**容器内控件完整属性示例**（云枢自动生成）：

```html
<!-- 容器内的短文本控件 - 需要完整属性才能正常显示 -->
<!-- 注意：data-data-item-name 必须与 key 一致 -->
<a-text key="textName" 
        path='["formContainerBasicInfo","textName"]' 
        data-name="姓名" 
        data-name_i18n="" 
        data-visible="true" 
        data-data-item-name="textName" 
        data-data-item-type="" 
        data-dictionary-data="" 
        data-widget-type="" 
        data-tips="" 
        data-display-formula="" 
        data-on-change="" 
        data-required-formula="" 
        data-readonly-condition="" 
        data-readonly-formula="false" 
        data-default-value="" 
        data-regexp="" 
        data-regexp-text="" 
        data-placeholder="请输入姓名" 
        data-max-length="200" 
        data-no-repeat="false" 
        data-data-linkage="" 
        data-short-text-stitch="" 
        data-is-scan="false" 
        data-label-visible="true" 
        data-style="" 
        data-span="12" 
        data-label-align="left"
        data-required="true">
</a-text>
```

**常见容器内控件必要属性清单**：

| 控件类型 | 必要属性（容器内） |
|---------|------------------|
| `<a-text>` | `data-visible="true"`, `data-label-visible="true"`, `data-label-align="left"`, `data-data-item-name="{key}"` |
| `<a-number>` | `data-visible="true"`, `data-format="integer"`, `data-sync-formate="true"`, `data-data-item-name="{key}"` |
| `<a-date>` | `data-visible="true"`, `data-format1="YYYY-MM-DD"`, `data-sync-formate="true"`, `data-data-item-name="{key}"` |
| `<a-radio>` | `data-visible="true"`, `data-direction="horizontal"`, `data-display-setting="showSelected"`, `data-data-item-name="{key}"` |
| `<a-dropdown>` | `data-visible="true"`, `data-display-empty="true"`, `data-empty-value="请选择"`, `data-data-item-name="{key}"` |
| `<a-image>` | `data-visible="true"`, `data-number="batch"`, `data-label-visible="true"`, `data-data-item-name="{key}"` |
| `<a-location>` | `data-visible="true"`, `data-display-mode="accurate"`, `data-auto-get-location="'false'"`, `data-data-item-name="{key}"` |

> `{key}` 表示该属性的值应与控件的 `key` 属性值相同。

**最佳实践**：在云枢平台拖拽生成控件后，导出 HTML 模板，复制完整的属性列表。

## 4. 标签页控件（含嵌套）

标签页使用 `<a-tabs>` 包含多个 `<a-tabs-panel>`：

```html
<a-tabs key="tabsXXXXXXXXXXXX" 
        data-heads='[{"key":"tab1","title":"标签1","active":true},{"key":"tab2","title":"标签2","active":false}]' 
        data-span="24">
    <!-- 标签页1 -->
    <a-tabs-panel key="tab1" path='["tabsXXXXXXXXXXXX","tab1"]' prev-framework="5" form-framework="5">
        <a-row>
            <a-col>
                <!-- 标签页内可以放容器或直接放控件 -->
                <a-form-container key="formContainerXXXXXXXXXXXX" 
                                  path='["tabsXXXXXXXXXXXX","tab1","formContainerXXXXXXXXXXXX"]' 
                                  data-span="24">
                    <a-row>
                        <a-col>
                            <a-text key="ShortTextXXXXXXXXXXXX" 
                                    path='["tabsXXXXXXXXXXXX","tab1","formContainerXXXXXXXXXXXX","ShortTextXXXXXXXXXXXX"]' 
                                    data-name="标签页内控件">
                            </a-text>
                        </a-col>
                    </a-row>
                </a-form-container>
            </a-col>
        </a-row>
    </a-tabs-panel>
    
    <!-- 标签页2 -->
    <a-tabs-panel key="tab2" path='["tabsXXXXXXXXXXXX","tab2"]' prev-framework="5" form-framework="5">
    </a-tabs-panel>
</a-tabs>
```

## 5. 控件通用属性说明

| 属性 | 说明 | 示例 |
|------|------|------|
| `key` | 控件唯一标识，必填，不可重复 | `ShortText1234567890123` |
| `data-name` | 控件显示名称 | `姓名` |
| `data-span` | 控件宽度（1-24），24为整行 | `24`、`12`、`8` |
| `data-tips` | 控件提示信息，鼠标悬停或聚焦时显示 | `请输入真实姓名` |
| `data-default-value` | 控件默认值，表单加载时自动填充 | `默认文本` |
| `data-placeholder` | 输入框占位符，输入前显示的提示文字 | `请输入姓名` |
| `data-style` | 自定义CSS样式，支持内联样式语法 | `color: #ff0000;font-size: 16px;` |
| `data-options` | 选项值，分号分隔（单选/复选/下拉） | `选项1;选项2;选项3` |
| `data-format1` | 数值/日期显示格式 | `integer`、`YYYY-MM-DD` |
| `width` | 子表列宽度（仅子表内使用） | `150` |
| `path` | 嵌套路径（容器/标签页内控件必填） | `["容器key","控件key"]` |

## 自定义 HTML 元素

在 `custom.html` 中可添加自定义 HTML 元素（注意：会被 `npm run extract` 覆盖，需在生成后添加）：

- 自定义 HTML 必须放在 `<section type="template" id="template">` 区域内（`<section id="toolbar">` 是另一个区域，只放 `<action>` 按钮）
- `<a-row>` 表示一行，最多可有 4 个 `<a-col>` 子元素（列）
- `<a-col>` 的**第一个子元素**不能使用 `class`（会被云枢移除）- 请使用 `id`
- 从第二个子元素开始，可以使用 `class`

```html
<!-- ✅ 正确：第一个子元素用 id，后续用 class -->
<a-row>
    <a-col>
        <div id="my-custom-area">
            <button class="my-btn">自定义按钮</button>
        </div>
    </a-col>
</a-row>

<!-- ❌ 错误：a-col 的第一个子元素不能用 class -->
<a-row>
    <a-col>
        <div class="my-area">
            ...
        </div>
    </a-col>
</a-row>
```

### 为自定义 HTML 绑事件

在 `custom.ts` 的 `onRendered` 里用 `document.getElementById` 取元素绑事件，不要用内联 `onclick`——custom.ts 是 IIFE 包装的，内联 `onclick="show()"` 找不到 IIFE 里的函数（官方 Q&A 的内联 `<script>` 写法是旧平台示例，本项目不用；实在要用 `onclick`，必须显式 `window.show = show` 把函数挂到全局）：

```javascript
form.on('onRendered', function() {
    var form = this; // 回调里 this 不是表单，先捕获
    var btn = document.getElementById('my-custom-btn');
    if (btn) {
        btn.addEventListener('click', function() {
            form.$message.success('被点击了');
        });
    }
});
```

```html
<a-row>
    <a-col>
        <button id="my-custom-btn">自定义按钮</button>
    </a-col>
</a-row>
```
