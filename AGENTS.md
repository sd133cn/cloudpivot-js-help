# cloudpivot-js-help

云枢表单本地开发工具 - 用于云枢低代码表单自定义开发的 TypeScript 类型辅助工具。

## 项目简介

这是一个 TypeScript 类型辅助工具，帮助开发者编写云枢（CloudPivot）低代码表单的自定义 JavaScript 代码。提供 VSCode 智能提示，支持表单控件、生命周期事件和 API。

**输出产物**：生成 3 个独立文件（HTML、CSS、TS），可分别复制到云枢平台的对应编辑窗口。

---

## AI Agent 入口决策流程（重要！）

**⚠️ AI Agent 首次进入项目时，必须按以下流程操作：**

```
┌─────────────────────────────────────────────────────────────┐
│  步骤 1：检查根目录是否有 template.html                       │
├─────────────────────────────────────────────────────────────┤
│  有 → 用户已从云枢导出模板，继续下一步                          │
│  无 → 提示用户需要从云枢平台导出模板                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  步骤 2：运行 npm run extract 生成 src/ 文件                   │
├─────────────────────────────────────────────────────────────┤
│  这会生成：                                                   │
│    src/custom.html      - HTML 片段                          │
│    src/custom.css       - CSS 样式                           │
│    src/custom.ts        - JavaScript 代码                    │
│    src/custom-types.d.ts - 类型定义                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  步骤 3：在 src/custom.html 中二次开发                        │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ 不要修改 template.html！                                  │
│  ✅ 在 src/custom.html 中添加/修改控件                        │
│  参考"添加云枢控件"章节的格式                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  步骤 4：运行 npm run refresh-types 更新类型                  │
├─────────────────────────────────────────────────────────────┤
│  这会更新类型定义，同时保留 custom.ts/css 的用户代码           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  步骤 5：编写业务代码                                          │
├─────────────────────────────────────────────────────────────┤
│  编辑 src/custom.ts → 编写 JavaScript 业务逻辑               │
│  编辑 src/custom.css → 添加样式                               │
│  参考"代码模式"章节                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  步骤 6：部署到云枢                                            │
├─────────────────────────────────────────────────────────────┤
│  src/custom.html → 复制到云枢 HTML 编辑窗口                   │
│  src/custom.css → 复制到云枢 CSS 编辑窗口                     │
│  src/custom.ts → 复制到云枢 JS 编辑窗口                       │
└─────────────────────────────────────────────────────────────┘
```

**关键要点**：
- `template.html` 是只读文件，不要修改它
- `src/custom.html` 是二次开发的工作区，在此添加控件
- `npm run refresh-types` 会保留用户代码，只更新类型

---

## 开发流程

```
npm run extract        # 从 template.html 完整生成（首次或模板更新时）
npm run refresh-types  # 仅更新类型定义（保留 custom.ts/css 用户代码）
npm run dev            # TypeScript 监听模式（仅类型检查）
```

**脚本说明**：

| 脚本 | 用途 | 覆盖文件 |
|------|------|----------|
| `npm run extract` | 从 template.html 完整生成 | 全部覆盖（custom.html, custom.css, custom.ts, custom-types.d.ts） |
| `npm run refresh-types` | 仅更新类型定义 | 仅覆盖 custom-types.d.ts，更新 custom.ts 注释（保留用户代码） |
| `npm run dev` | 类型检查监听 | 不修改文件 |

**典型工作流**：

```
首次使用：
  1. npm install
  2. npm run extract          # 从 template.html 生成初始文件
  3. 编辑 src/custom.ts       # 编写业务代码
  4. npm run dev              # 开启类型检查

模板更新后：
  1. 覆盖 template.html       # 从云枢平台导出新模板
  2. npm run extract          # 重新生成（会覆盖 custom.ts/css！）

如果已编辑 custom.ts/css，只更新类型：
  1. 编辑 src/custom.html     # 手动添加新控件
  2. npm run refresh-types    # 更新类型，保留用户代码
```

---

## ⚠️ 编写代码前必读：关键约束

**在阅读参考资料或编写代码之前，必须先阅读"关键约束"部分（见文档后半部分）！**

核心规则摘要：
1. **控件 key 必须与 HTML 一致** - 先读取 `custom.html` 获取 key
2. **CSS 只针对自定义 HTML 元素** - 不要对云枢控件写样式
3. **云枢控件样式通过 `data-style`** - 在 HTML 属性中设置，不在 CSS 文件
4. **系统控件不可修改** - 只能改 `data-name`
5. **平台约束** - 不用 ES 模块，IE 兼容用 `function` 语法

> ⚠️ 违反这些规则会导致代码无效或运行错误！

---

## 源文件说明

**由 `npm run extract` 生成**：

| 文件 | 说明 | 复制到云枢 |
|------|------|-----------|
| `src/custom.html` | HTML 模板片段 | HTML 编辑窗口 |
| `src/custom.css` | CSS 样式 | CSS 编辑窗口 |
| `src/custom.ts` | JavaScript 代码（含类型提示注释） | 直接复制到 JS 编辑窗口 |
| `src/custom-types.d.ts` | 类型定义（仅开发时使用） | - |

**⚠️ 重要：`custom.ts` 文件只能写 JavaScript 语法！**

虽然文件扩展名是 `.ts`，但代码内容必须是纯 JavaScript，不能使用 TypeScript 语法：

| ❌ 禁止使用 | ✅ 正确写法 |
|-----------|-----------|
| `(form: any)` | `(form)` |
| `(data: any)` | `(data)` |
| `function x(): void` | `function x()` |
| `interface Xxx {}` | 不使用接口 |
| `type Xxx = ...` | 不使用类型别名 |
| `const x: string` | `var x` 或 `let x` |

**为什么用 `.ts` 扩展名？**
- 用于 VSCode 识别三斜线指令 `/// <reference path="..." />`
- 获得 `custom-types.d.ts` 的类型提示支持
- 本地开发时有智能补全

**部署到云枢时**：直接复制 `custom.ts` 内容到 JS 编辑窗口即可，无需编译。

### 添加云枢控件

**重要**：`src/custom.html` 由 `npm run extract` 从 `template.html` 生成，会被覆盖。要添加新控件：

**方式一：完整更新（覆盖所有文件）**
1. 在云枢平台设计表单，导出新模板覆盖 `template.html`
2. 运行 `npm run extract` - 会覆盖所有 src/ 文件

**方式二：仅更新类型（保留用户代码）**
1. 手动编辑 `src/custom.html` 添加新控件
2. 运行 `npm run refresh-types` - 只更新类型定义和注释

**控件 HTML 格式参考**（用于理解 `template.html` 结构，或在云枢平台直接编辑）：

##### 1. 基础控件（无嵌套）

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

##### 2. 子表控件（含嵌套）

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

##### 3. 容器控件（可嵌套）

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

##### 4. 标签页控件（含嵌套）

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

##### 5. 控件通用属性说明

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

### 自定义 HTML 元素

在 `custom.html` 中可添加自定义 HTML 元素（注意：会被 `npm run extract` 覆盖，需在生成后添加）：

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

## 运行顺序

```
1. npm install              # 安装依赖（仅 typescript）
2. npm run extract          # 从 template.html 生成 src/ 文件
3. [编辑 src/ 文件]         # 编辑 custom.html, custom.css, custom.ts
4. [复制到云枢]             # 将各文件内容复制到对应编辑窗口

如果只改了 custom.html，想刷新类型：
  npm run refresh-types     # 更新类型定义，保留 custom.ts/css 用户代码
```

## 关键约束（必须遵守！）

**⚠️ AI Agent 编写代码前，必须阅读并遵守以下所有约束规则。违反这些规则会导致代码无效或运行错误。**

---

### 约束 1：控件 key 必须与 HTML 一致（重要！）

- 编写 `custom.ts` 前，**必须先读取 `src/custom.html`** 获取所有控件的 `key` 属性
- 只能使用 HTML 中存在的控件 key，不得凭空编造
- 每个控件的 `key` 是唯一标识（如 `textName`、`numberAge`、`sheetWorkHistory`）
- 检查方法：在 `custom.html` 中搜索 `key="xxx"` 确认控件是否存在
- 子表列的 key 也在 `<a-columns>` 内的列控件中定义

---

### 约束 2：CSS 只针对自定义 HTML 元素（重要！）

- **不要对云枢控件写样式**：云枢控件（如 `<a-text>`、`<a-sheet>`）样式由平台管理，自定义样式可能冲突或无效
- **只能对自定义 HTML 元素写样式**：如 `<div id="my-custom-area">`、`<button class="my-btn">`
- 检查方法：在 `custom.html` 中确认目标元素是**自定义 HTML 元素**（非云枢控件标签）
- 自定义元素的判断：标签名不含 `a-` 前缀（云枢控件均为 `<a-xxx>` 格式）

---

### 约束 3：云枢控件样式只能通过 `data-style` 属性修改（重要！）

- 如果需要自定义云枢控件样式，**只能编辑 `custom.html` 里控件的 `data-style` 属性**
- `data-style` 支持内联 CSS 语法：`data-style="color: #ff0000; font-size: 16px;"`
- **不要在 `custom.css` 中用选择器针对云枢控件**（如 `.a-text`、`[key="xxx"]`），这类样式可能被平台覆盖

示例：
```html
<!-- ✅ 正确：通过 data-style 设置控件样式 -->
<a-text key="textName" 
        data-name="姓名" 
        data-style="color: #333; font-weight: bold;" 
        data-span="12">
</a-text>

<!-- ❌ 错误：在 CSS 文件中写控件样式（可能无效） -->
/* custom.css 中不要这样写 */
a-text { color: #333; }          /* 无效 */
[key="textName"] { color: #333; } /* 可能被覆盖 */
```

---

### 约束 4：系统控件不可修改

以下控件由云枢平台自动管理，**只能修改 `data-name`，其他属性保持原样**：

| 控件 | 可修改属性 | 说明 |
|------|-----------|------|
| `<a-title>` | `data-name` | 表单标题，只能改显示名称 |
| `<a-create-by>` | ❌ 不可修改 | 创建人控件，保持原样 |
| `<a-created-time>` | ❌ 不可修改 | 创建时间控件，保持原样 |
| `<a-sequence-no>` | ❌ 不可修改 | 单据号控件，保持原样 |

```html
<!-- ✅ 正确：a-title 只改 data-name -->
<a-title key="title1775714535885" data-name="个人资料表单" data-name_i18n='{"en":"Profile"}'></a-title>

<!-- ❌ 错误：修改 a-create-by 的属性 -->
<a-create-by key="creater" data-name="创建人" data-span="8"></a-create-by>
<!-- 以上控件应保持云枢导出时的原样，不做任何修改 -->
```

---

### 约束 5：不要编辑自动生成的文件

`src/custom-types.d.ts` 由 `scripts/extract.mjs` 自动生成。文件头部标注：
```
// Auto-generated by extract.mjs - DO NOT EDIT MANUALLY
```

**如果修改了 template.html**：需运行 `npm run extract` 重新生成类型。

---

### 约束 6：模块系统

- **仅 ESM**：`package.json` 设置 `"type": "module"`
- **脚本扩展名**：Node.js 脚本使用 `.mjs`（如 extract.mjs）
- **类型引用**：使用 `/// <reference path="..." />` 三斜线指令，而非 ES imports

---

### 约束 7：template.html 是只读文件

`template.html` 是从云枢平台导出的原始文件。不要直接编辑它 - 它是提取的源文件。

---

### 约束 8：平台约束

- **输出代码不能用 ES 模块**：云枢平台不支持 `import/export` - 使用 IIFE 包装
- **onRendered 中不要用箭头函数（IE 兼容）**：如需 IE 兼容，使用 `function` 语法，通过 `window.h3form` 获取控件
- **控件访问必须在 onLoad 之后**：控件仅在表单数据加载后才可用

---

### 约束 9：访问属性前先确认控件类型

不同控件有不同值类型：

| 控件类型 | type 值 | 值类型 |
|---------|--------|--------|
| 文本 | 1, 2 | `string` |
| 数值 | 4 | `number` |
| 复选框 | 6 | `string[]` |
| 人员 | 50, 51 | `StaffValue[]` |
| 子表 | 201 | `object[]` |

---

### 约束 10：生命周期时机

- 控件仅在 **onLoad 之后** 可用（在 onRendered/onValidate/... 中）
- 数据修改仅在 **onLoad** 中进行（渲染前）

---

## 代码模式（实现参考）

### 生命周期事件

#### onLoad - 初始化数据/权限

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

#### onRendered - 渲染后操作

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

#### onValidate - 自定义校验

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

#### onPreAction - 阻止按钮操作

```javascript
form.on('onPreAction', function(action, data) {
    if (action.code === 'save') {
        return false;  // 阻止保存
    }
});
```

#### onCustomAction - 自定义按钮

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

#### onActionDone - 操作后处理

```javascript
form.on('onActionDone', function(action, data, httpRes) {
    if (action.code === 'submit') {
        // return false 阻止提交后的自动跳转
        // return false;
    }
});
```

### 控件操作

#### 获取/设置控件值

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

#### 控件状态控制

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

### 子表（Sheet）操作

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

#### 子表自定义按钮

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

### 按钮操作

#### 表单自定义按钮

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

#### 子表自定义按钮

**HTML 配置**（在 `<a-sheet>` 内添加）：

```html
<a-sheet key="sheetField" data-name="子表" data-span="24">
    <a-action-group>
        <a-sheet-action code="customBtn1" text="自定义按钮1"></a-sheet-action>
        <a-sheet-action code="customBtn2" text="自定义按钮2"></a-sheet-action>
    </a-action-group>
    <a-columns>
        <!-- 列控件 -->
    </a-columns>
</a-sheet>
```

**JS 事件处理**：

```javascript
form.on('onRendered', function() {
    this.sheetField.sheetActionDown(function(event) {
        switch (event.code) {
            case 'customBtn1':
                // event.checkeds: 选中的行数据
                // event.value: 子表全部数据
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

#### 隐藏按钮

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

#### 执行按钮操作

```javascript
this.doAction('submit');  // 提交
this.doAction('save');    // 暂存
this.submit();            // 提交的快捷方法
```

### UI 消息提示

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

### HTTP 请求

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

## Agent 决策指南

### 当用户要求...

| 用户请求 | 使用此模式 |
|----------|-----------|
| "初始化表单数据" | `form.on('onLoad', ...)` - 修改 `data` 对象 |
| "初始化后设置控件值" | `form.on('onRendered', ...)` - 使用 `this.controlKey.value` |
| "修改数据权限" | `form.on('onLoad', ...)` - 修改 `dataPermission` 对象 |
| "校验表单" | `form.on('onValidate', ...)` - 返回 `false` 阻止 |
| "阻止按钮操作" | `form.on('onPreAction', ...)` - 返回 `false` 阻止 |
| "添加表单自定义按钮" | HTML: `<action text="按钮名" code="btnCode">` + `form.on('onCustomAction', ...)` |
| "添加子表自定义按钮" | HTML: `<a-sheet-action code="btnCode" text="按钮名">` + `sheet.sheetActionDown(...)` |
| "操作后处理" | `form.on('onActionDone', ...)` - 检查 `httpRes` |
| "操作子表" | 使用 SheetControl 方法：`appendRow`、`removeRow`、`getCell` 等 |
| "监听控件变化" | `control.valueChange.subscribe(...)` 或 `propertyChange.subscribe(...)` |
| "发送HTTP请求" | 使用全局 `axios`，拼接 `config.apiHost` |
| "隐藏按钮" | 系统按钮在 `onLoad` 中设置 `visible=false`，自定义按钮在 `onRendered` 中设置 |

**⚠️ 重要：编写代码前必须遵守"关键约束"部分的所有规则！**

---

## API 参考文档

详细 API 文档位于 `表单开发API/`：

| 文件 | 内容 |
|------|------|
| `1.表单开发Q&A.md` | 常见模式与示例 |
| `2.表单生命周期API.md` | 生命周期事件详解 |
| `3.表单控件API.md` | 控件属性与方法 |
| `4.表单控件选项API.md` | 控件选项配置 |
| `表单在线开发全局上下文变量（h3form）标准化属性及释义.md` | FormInstance 属性说明 |
| `表单HTML二开-子表API扩展.md` | 子表扩展 API |
| `使用说明-子表新增自定义按钮及事件挂载.md` | 子表自定义按钮 |

---

## 项目结构

```
types/           # 静态类型定义 (controls.d.ts, form-instance.d.ts, lifecycle.d.ts)
src/             # 生成的可编辑文件
  custom.html    # HTML 片段
  custom.css     # CSS 样式
  custom.ts      # TypeScript 代码
  custom-types.d.ts  # 自动生成的类型
scripts/         # 构建工具 (extract.mjs) - Node.js ESM
template.html    # 源表单模板（只读，来自云枢）
表单开发API/     # 官方 API 文档
```

## 无构建产物

此工具**不会**生成单个合并的 HTML 文件。用户需要手动复制：
- `custom.html` → 云枢 HTML 编辑窗口
- `custom.css` → 云枢 CSS 编辑窗口
- 编译 `custom.ts` → 云枢 JS 编辑窗口

## 无测试/Lint/CI 配置

- 无测试框架（Jest、Vitest 等）
- 无 Lint 工具（ESLint、Prettier）
- 无 CI 流程（GitHub Actions）

**除非明确要求，不要添加这些。**

## 备注

- 代码使用中文注释
- 编辑时保持注释风格一致
- 每个生成的文件都有指向相关文件的注释