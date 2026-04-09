/**
 * 所有控件共有属性（基础控件）
 */
interface BaseControl {
  /** 只读，唯一标识 */
  readonly key: string;
  /** 只读，控件类型，对应枚举FormControlType */
  readonly type: number;
  /** 只读，控件选项，不同控件有不同的选项对象 */
  readonly options: Record<string, any>;
  /** 只读，父级key，目前只有子表行列控件有该属性 */
  readonly parentKey: string | undefined;
  /** 只读，校验后错误code */
  readonly errors: string[];
  /** 只读，无效的，校验不通过 */
  readonly invalid: boolean;
  /** 只读，是否在子表中 */
  readonly inSheet: boolean;
  /** 只读，属性变化可观察对象，回调函数(change: ControlPropertyChange) => void */
  readonly propertyChange: Observable<ControlPropertyChange>;
  /** 获取或设置控件值，不同控件具有不同类型的值 */
  value: any;
  /** 获取或设置是否显示，默认true */
  display: boolean;
  /** 校验 */
  validate(): boolean;
}

/**
 * 基础控件共有属性
 * 基础控件指除子表、子表行以外的控件
 */
interface BasicControl extends BaseControl {
  /** 只读，是否有值，不为null、undefined */
  readonly hasValue: boolean;
  /** 只读，值变化可观察对象，回调函数(change: ControlValueChange) => void */
  readonly valueChange: Observable<ControlValueChange>;
  /** 获取或设置是否必填，默认false */
  required: boolean;
  /** 获取或设置编辑模式，v1.3.0+ */
  edit: boolean;
}

/**
 * 短文本控件（type: 1）
 * 值类型：string | null
 */
interface TextControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 1;
  /** 获取或设置当前值 */
  value: string | null;
  /** 获取或设置最小长度 */
  minLength: number | undefined;
  /** 获取或设置最大长度 */
  maxLength: number | undefined;
  /** 获取或设置格式正则校验 */
  pattern: RegExp | undefined;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验格式 */
  validatePattern(): boolean;
  /** 校验最小长度 */
  validateMinLength(): boolean;
  /** 校验最大长度 */
  validateMaxLength(): boolean;
}

/**
 * 长文本控件（type: 2）
 * 值类型：string | null
 */
interface TextareaControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 2;
  /** 获取或设置当前值 */
  value: string | null;
  /** 获取或设置最大长度 */
  maxLength: number | undefined;
}

/**
 * 日期控件（type: 3）
 * 值类型：Date | null
 */
interface DateControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 3;
  /** 获取或设置当前值 */
  value: Date | null;
  /** 获取或设置最小值 */
  min: Date | null;
  /** 获取或设置最大值 */
  max: Date | null;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验最小值 */
  validateMin(): boolean;
  /** 校验最大值 */
  validateMax(): boolean;
  /** 比较大小，返回-1小于, 0等于, 1大于 */
  compare(a: Date | null, b: Date | null): number;
}

/**
 * 数值控件（type: 4）
 * 值类型：number | null
 */
interface NumberControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 4;
  /** 获取或设置当前值 */
  value: number | null;
  /** 获取或设置最小值 */
  min: number | null;
  /** 获取或设置最大值 */
  max: number | null;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验最小值 */
  validateMin(): boolean;
  /** 校验最大值 */
  validateMax(): boolean;
  /** 比较大小，返回-1小于, 0等于, 1大于 */
  compare(a: number | null, b: number | null): number;
}

/**
 * 单选框控件（type: 5）
 * 值类型：string | null
 */
interface RadioControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 5;
  /** 获取或设置当前值 */
  value: string | null;
  /** 获取或设置选项列表，v1.3.2+ */
  items: string[];
  /** 校验必填 */
  validateRequired(): boolean;
}

/**
 * 复选框控件（type: 6）
 * 值类型：string[] | null
 */
interface CheckboxControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 6;
  /** 获取或设置当前值 */
  value: string[] | null;
  /** 获取或设置选项列表，v1.3.2+ */
  items: string[];
  /** 获取或设置最小数量 */
  minCount: number | undefined;
  /** 获取或设置最大数量 */
  maxCount: number | undefined;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验最小数量 */
  validateMinCount(): boolean;
  /** 校验最大数量 */
  validateMaxCount(): boolean;
}

/**
 * 下拉单选控件（type: 7）
 * 值类型：string[] | null（文档显示为string[]，实际单选可能为string）
 */
interface DropdownControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 7;
  /** 获取或设置当前值 */
  value: string[] | null;
  /** 获取或设置选项列表，v1.3.2+ */
  items: string[];
  /** 获取或设置最小数量 */
  minCount: number | undefined;
  /** 获取或设置最大数量 */
  maxCount: number | undefined;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验最小数量 */
  validateMinCount(): boolean;
  /** 校验最大数量 */
  validateMaxCount(): boolean;
}

/**
 * 逻辑控件（type: 8）
 * 值类型：boolean，默认值true
 */
interface LogicControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 8;
  /** 获取或设置当前值 */
  value: boolean;
}

/**
 * 附件/图片值类型
 */
interface FileValue {
  /** 唯一标识 */
  refId: string;
  /** 文件扩展名 */
  fileExtension: string;
  /** 文件类型 */
  mimeType: string;
  /** 文件名称 */
  name: string;
}

/**
 * 附件控件（type: 9）
 * 图片控件（type: 10）
 * 值类型：FileValue[] | null
 */
interface AttachmentControl extends BaseControl {
  /** 只读，类型，附件9，图片10 */
  readonly type: 9 | 10;
  /** 获取或设置当前值 */
  value: FileValue[] | null;
}

/**
 * 地址/位置值类型
 */
interface LocationValue {
  /** 省名 */
  provinceName: string;
  /** 省编码 */
  provinceAdcode: string;
  /** 城市名 */
  cityName: string;
  /** 城市编码 */
  cityAdcode: string;
  /** 区名 */
  districtName: string;
  /** 区编码 */
  districtAdcode: string;
  /** 详细地址 */
  address: string;
  /** 纬度 */
  lat: number;
  /** 经度 */
  lng: number;
}

/**
 * 位置控件（type: 11）
 * 地址控件（type: 14）
 * 值类型：LocationValue | null
 */
interface LocationControl extends BasicControl {
  /** 只读，类型，位置11，地址14 */
  readonly type: 11 | 14;
  /** 获取或设置当前值 */
  value: LocationValue | null;
}

/**
 * 人员/部门值的数据格式
 */
interface StaffValue {
  /** 类型，1部门，3人员 */
  type: number;
  /** 名称 */
  name: string;
  /** 头像 */
  imgUrl: string;
  /** ID */
  id: string;
  /** 主部门ID */
  departmentId?: string;
  /** 所属部门列表（包含兼职） */
  departments?: object[];
  /** 用户ID */
  userId?: string;
  /** 来源ID */
  sourceId?: string;
  /** 企业ID */
  corpId?: string;
}

/**
 * 人员选择控件
 * 人员单选（type: 50）
 * 人员多选（type: 51）
 * 值类型：StaffValue[] | null
 */
interface StaffControl extends BasicControl {
  /** 只读，类型，人员单选50，人员多选51 */
  readonly type: 50 | 51;
  /** 获取或设置当前值 */
  value: StaffValue[] | null;
}

/**
 * 部门选择控件
 * 部门单选（type: 60）
 * 部门多选（type: 61）
 * 值类型：StaffValue[] | null
 */
interface DeptControl extends BasicControl {
  /** 只读，类型，部门单选60，部门多选61 */
  readonly type: 60 | 61;
  /** 获取或设置当前值 */
  value: StaffValue[] | null;
}

/**
 * 关联表单值类型
 */
interface RelevanceFormValue {
  /** 关联记录的ID */
  id: string;
  /** 关联记录的数据摘要 */
  name: string;
}

/**
 * 关联表单控件（type: 80）
 * 值类型：RelevanceFormValue | null
 */
interface RelevanceFormControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 80;
  /** 获取或设置当前值 */
  value: RelevanceFormValue | null;
}

/**
 * 子表行对象
 */
interface SheetRow<TColumns = Record<string, any>> {
  /** 行值 */
  value: TColumns;
}

/**
 * 子表选中行
 */
interface CheckedRow {
  /** 行索引 */
  index: number;
  /** 行数据 */
  data: Record<string, any>;
}

/**
 * 子表行变化对象
 */
interface RowChange {
  /** 行变化类型：insert新增行，remove删除行，insertMulti批量新增行，removeMulti批量删除行 */
  type: 'insert' | 'remove' | 'insertMulti' | 'removeMulti';
  /** 行索引 */
  index: number;
  /** 当前值 */
  value: object;
  /** 变化前的值 */
  oldValue: object;
  /** 批量删除的行索引集合，批量删除时有值，v1.4.0-alpha20+ */
  removeIndexs?: number[];
  /** 批量插入的行数，批量新增时有值，v1.4.0-alpha20+ */
  insertCount?: number;
}

/**
 * 子表行值变化对象
 */
interface RowValueChange {
  /** 行索引 */
  index: number;
  /** 变化的列索引，v1.3.0+ */
  columnIndex: number;
  /** 当前值 */
  value: object;
  /** 变化前的值 */
  oldValue: object;
}

/**
 * 子表列值变化对象
 */
interface ColumnValueChange {
  /** 列key */
  key: string;
  /** 列索引 */
  index: number;
  /** 变化的行索引，v1.3.0+ */
  rowIndex: number;
  /** 当前值 */
  value: any[];
  /** 变化前的值 */
  oldValue: any[];
}

/**
 * 子表控件（type: 201）
 */
interface SheetControl<TColumns = Record<string, any>> extends BaseControl {
  /** 只读，类型 */
  readonly type: 201;
  /** 只读，所有行对象 */
  readonly rows: SheetRow<TColumns>[];
  /** 只读，校验后所有行的错误code */
  readonly errors: { [key: string]: string[] };
  /** 只读，行变化可观察对象，回调函数(change: RowChange) => void */
  readonly rowChange: Observable<RowChange>;
  /** 获取或设置当前值 */
  value: TColumns[] | null;
  /** 校验子表所有行 */
  validate(): boolean;
  /** 获取单元格对象，columnIndex也可为列的数据项编码 */
  getCell(rowIndex: number, columnIndex: number | string): { value: any };
  /** 插入新行 */
  insertRow(index: number, value?: TColumns): SheetRow<TColumns>;
  /** 批量插入新行，v1.4.0-alpha20+ */
  insertRows(index: number, values: TColumns[]): void;
  /** 在最后追加新行 */
  appendRow(rowValue?: TColumns): SheetRow<TColumns>;
  /** 批量追加新行，v1.4.0-alpha20+ */
  appendRows(values: TColumns[]): void;
  /** 移除指定行 */
  removeRow(index: number): void;
  /** 批量移除指定行，v1.4.0-alpha20+ */
  removeRows(indexs: number[]): void;
  /** 移除所有行，v1.3.0+ */
  removeAllRow(): void;
  /** 获取行值变化可观察对象，回调函数(change: RowValueChange) => void */
  getRowValueChange(index: number): Observable<RowValueChange>;
  /** 获取列值变化可观察对象，回调函数(change: ColumnValueChange) => void */
  getColumnValueChange(key: string): Observable<ColumnValueChange> | undefined;
  /** 获取子表选中记录 */
  getCheckedRows(): CheckedRow[];
  /** 子表底部按钮事件回调 */
  sheetActionDown(callback: (event: { code: string; checkeds: CheckedRow[]; value: TColumns[] }) => void): void;
}

/**
 * 手写签名控件（type: 12）
 * 值类型：string | null
 */
interface SignatureControl extends BaseControl {
  /** 只读，类型 */
  readonly type: 12;
  /** 获取或设置当前值 */
  value: string | null;
}

/**
 * 混合选人控件（type: 70）
 * 值类型：StaffValue[] | null
 */
interface StaffDeptMixedControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 70;
  /** 获取或设置当前值 */
  value: StaffValue[] | null;
}

/**
 * 创建人控件（type: 100）
 * 值类型：StaffValue[] | null
 */
interface CreateByControl extends BaseControl {
  /** 只读，类型 */
  readonly type: 100;
  /** 获取或设置当前值 */
  value: StaffValue[] | null;
}

/**
 * 创建时间控件（type: 101）
 * 值类型：Date | null
 */
interface CreatedTimeControl extends BaseControl {
  /** 只读，类型 */
  readonly type: 101;
  /** 获取或设置当前值 */
  value: Date | null;
}

/**
 * 单据号控件（type: 102）
 * 值类型：string | null
 */
interface SequenceNoControl extends BaseControl {
  /** 只读，类型 */
  readonly type: 102;
  /** 获取或设置当前值 */
  value: string | null;
}

/**
 * 下拉多选控件（type: 7）
 * 值类型：string[] | null
 */
interface DropdownMultiControl extends BasicControl {
  /** 只读，类型 */
  readonly type: 7;
  /** 获取或设置当前值 */
  value: string[] | null;
  /** 获取或设置选项列表，v1.3.2+ */
  items: string[];
  /** 获取或设置最小数量 */
  minCount: number | undefined;
  /** 获取或设置最大数量 */
  maxCount: number | undefined;
  /** 校验必填 */
  validateRequired(): boolean;
  /** 校验最小数量 */
  validateMinCount(): boolean;
  /** 校验最大数量 */
  validateMaxCount(): boolean;
}