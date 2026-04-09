/**
 * 项目环境参数配置对象
 * 来源项目public/config.js
 * 3个端都有的配置，其他入口会根据需要扩展
 */
interface Config {
  /** OAuth地址 */
  oauthHost: string;
  /** OAuth回调地址 */
  redirectHost: string;
  /** OAuth参数 */
  client_id: string;
  /** OAuth参数 */
  scope: string;
  /** OAuth参数 */
  secret: string;
  /** 后台API地址 */
  apiHost: string;
}

/**
 * HTTP请求库（第三方ajax库axios）
 */
interface AxiosStatic {
  /** GET请求 */
  get<T = any>(url: string, config?: any): Promise<AxiosResponse<T>>;
  /** POST请求 */
  post<T = any>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>>;
  /** PUT请求 */
  put<T = any>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>>;
  /** DELETE请求 */
  delete<T = any>(url: string, config?: any): Promise<AxiosResponse<T>>;
}

/**
 * HTTP响应对象
 */
interface AxiosResponse<T = any> {
  /** 响应数据 */
  data: T;
  /** HTTP状态码 */
  status: number;
  /** HTTP状态文本 */
  statusText: string;
  /** 响应头 */
  headers: any;
  /** 请求配置 */
  config: any;
}

/** 项目配置对象，全局可用 */
declare const config: Config;

/** HTTP请求库，全局可用 */
declare const axios: AxiosStatic;