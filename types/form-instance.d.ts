/**
 * 消息提示API
 */
interface MessageApi {
  /** 成功提示 */
  success(msg: string): void;
  /** 错误提示 */
  error(msg: string): void;
  /** 加载中提示，返回关闭函数 */
  loading(msg?: string, autoClose?: number): () => void;
}

/**
 * 对话框配置
 */
interface ConfirmOptions {
  /** 对话框标题 */
  title: string;
  /** 对话框内容 */
  content: string;
  /** 确认回调 */
  onOk?(): void;
  /** 取消回调 */
  onCancel?(): void;
}

/**
 * 表单按钮项
 * 通过actions访问，可通过该对象获知当前用户可操作的权限
 */
interface ActionItem {
  /** 按钮编码（权限编码） */
  code: string;
  /** 按钮文本 */
  text: string;
  /** 是否禁用 */
  disabled: boolean;
  /** 是否可见，默认true */
  visible: boolean;
  /** 按钮控制器 */
  actionController?: { visible: boolean };
}

/**
 * 流程信息对象
 * v1.4.0-alpha20+
 */
interface WorkflowInfo {
  /** 流程编码（只读） */
  readonly code: string;
  /** 流程实例ID（只读） */
  readonly instanceId: string;
  /** 流程实例名称（只读） */
  readonly instanceName: string;
  /** 流程活动实例ID（只读） */
  readonly tokenId: string;
  /** 流程任务ID（只读） */
  readonly itemId: string;
  /** 流程版本（只读） */
  readonly version: number;
  /** 当前流程节点编码（只读） */
  readonly activityCode: string;
  /** 当前流程节点名称（只读） */
  readonly activityName: string;
}

/**
 * 数据权限配置
 */
interface DataPermission {
  [key: string]: {
    /** 可编辑（可写） */
    e: boolean;
    /** 必填 */
    r: boolean;
    /** 可见 */
    v: boolean;
    /** 子表数据权限 */
    subDataPermission?: DataPermission[];
  };
}

/**
 * 表单实例对象
 * 在生命周期函数中，通过this可访问的对象
 */
interface FormInstance<TControls = Record<string, BasicControl>> {
  /** 对话框（只读） */
  readonly $confirm: (options: ConfirmOptions) => void;
  /** 消息提示（success/error/loading）（只读） */
  readonly $message: MessageApi;
  /** Vue路由对象（只读） */
  readonly $router: any;
  /** Vue多语言对象，v1.4.0-alpha20+（只读） */
  readonly $i18n: any;
  /** 当前表单可用的操作按钮列表（只读） */
  readonly actions: ActionItem[];
  /** 流程信息，v1.4.0-alpha20+（只读） */
  readonly workflowInfo: WorkflowInfo | null;
  /** 当前登录用户，v1.4.0-alpha20+（只读） */
  readonly currentUser: any;
  /** 是否提交过，v1.4.0-alpha20+（只读） */
  readonly submited: boolean;
  /** 是否新增状态，v1.4.0-alpha20+（只读） */
  readonly isNew: boolean;
  /** 是否草稿状态（只读） */
  readonly isDraft: boolean;
  /** 是否编辑状态 */
  readonly inEdit: boolean;
  /** 是否移动端打开（只读） */
  readonly isMobile: boolean;
  /** 是否可提交/同意/保存（只读） */
  readonly formInEdit: boolean;
  /** 当前表单所有控件的值（只读） */
  readonly value: Record<string, any>;
  /** 当前表单所有控件的校验错误信息（只读） */
  readonly errors: Record<string, any>;
  /** 后端API获取的表单数据对象（只读） */
  readonly formObj: Record<string, any>;
  /** URL额外入参（只读） */
  readonly extraProperties: Record<string, any>;
  /** Axios HTTP请求库（只读） */
  readonly axios: AxiosStatic;

  /** 校验表单，返回是否通过 */
  validate(): boolean;
  /** 执行表单动作，参数为action.code，如submit、save等 */
  doAction(code: string): void;
  /** 提交表单，doAction('submit')的快捷方法 */
  submit(): void;
}