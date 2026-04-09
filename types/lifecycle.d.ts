/**
 * 流程状态枚举
 * - DRAFT 草稿
 * - PROCESSING 进行中
 * - COMPLETED 已完成
 * - CANCELED 已取消
 * - EXCEPTION 流程异常
 */
type SequenceStatus = 'DRAFT' | 'PROCESSING' | 'COMPLETED' | 'CANCELED' | 'EXCEPTION';

/**
 * 控件数据类型
 * 从控件对象中提取值类型
 */
type ControlData<T> = { [K in keyof T]: T[K] extends { value: infer V } ? V : any };

/**
 * 数据权限项
 * 来源于流程设计-数据权限，可直接修改，因此可修改对应的值来控制可读可写
 */
interface ControlDataPermissionItem {
  /** 编辑权限（可写） */
  e: boolean;
  /** 必填限制 */
  r: boolean;
  /** 可见权限 */
  v: boolean;
  /** 子表列的数据权限 */
  subDataPermission?: any[];
}

/**
 * 数据权限类型
 * 对应每个控件的数据权限配置
 */
type ControlDataPermission<T> = { [K in keyof T]: ControlDataPermissionItem };

/**
 * 表单基础对象，生命周期事件注册接口
 * 通过form.on()注册生命周期事件处理器
 */
interface FormBase<TControls = Record<string, BasicControl>> {
  /**
   * 加载数据后，渲染之前
   * @param handler 处理函数，this为Window & FormInstance & TControls
   * @param data API表单数据，可直接修改
   * @param dataPermission API表单数据权限，来源于流程设计-数据权限
   * @param interceptConfig 拦截配置
   * @param cover 使用'cover'覆盖平台根生命周期
   * 如果onLoad返回Promise，表单会等待其完成；如果有返回数据，将会完全覆盖API返回的data
   */
  on(event: 'onLoad', handler: (this: Window & FormInstance & TControls, data: ControlData<TControls>, dataPermission: ControlDataPermission<TControls>, interceptConfig?: any) => void | Promise<any>, cover?: 'cover'): void;

  /**
   * 渲染后
   * 表单完成渲染后触发，可以在这里做一些DOM操作
   * 注意：onRendered中不要使用箭头函数，如果是IE浏览器则需要通过window.h3form拿控件对象
   * @param handler 处理函数，this为FormInstance & TControls
   * @param data 表单数据
   */
  on(event: 'onRendered', handler: (this: FormInstance & TControls, data: ControlData<TControls>) => void): void;

  /**
   * 内置校验通过后
   * 表单submit前，内置校验通过后触发
   * @param handler 处理函数，返回false表示校验失败，会中断submit
   * 如果onValidate返回Promise，表单会等待其完成
   */
  on(event: 'onValidate', handler: (this: FormInstance & TControls, action: ActionItem, data: ControlData<TControls>) => void | boolean | Promise<boolean>): void;

  /**
   * 按钮事件执行前
   * 包括自定义按钮事件
   * @param handler 处理函数，return false会阻止事件执行
   */
  on(event: 'onPreAction', handler: (this: FormInstance & TControls, action: ActionItem, data: ControlData<TControls>) => void | boolean): void;

  /**
   * 按钮事件执行后
   * 包括自定义按钮事件
   * @param handler 处理函数，return false会阻止默认行为，如提交后的自动跳转
   * @param httpRes HTTP响应结果
   */
  on(event: 'onActionDone', handler: (this: FormInstance & TControls, action: ActionItem, data: ControlData<TControls>, httpRes?: any) => void | boolean): void;

  /**
   * 自定义按钮事件执行
   * @param handler 处理函数
   */
  on(event: 'onCustomAction', handler: (this: FormInstance & TControls, action: ActionItem, data: ControlData<TControls>) => void): void;
}