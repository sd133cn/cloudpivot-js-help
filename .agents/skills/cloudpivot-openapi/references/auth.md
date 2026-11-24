# 鉴权：token 从哪来、往哪放

协议原文在 `raw/00_接入协议.md`「奥哲云枢开放平台接入说明」（下称协议行号均指该文件）；03 导出（Knife4j）不含 token 端点本体，鉴权信息以协议为准。

## 拿 token

```
POST http(s)://<云枢host>/api/oauth/token
```

参数 `grant_type=client_credentials&client_id=<clientId>&client_secret=<clientSecret>`——协议示例是 **query string** 形式（协议:49），官方 Java 示例（协议:2387）以 **POST + 参数** 发出；Spring OAuth2 两种都收，demo 实测用 `application/x-www-form-urlencoded` body 通过。

响应（协议:54-67）：`{access_token, token_type:"bearer", expires_in, scope, jti, aud:["api"], authorities:["openapi"], client_id}`。token 缓存到 `expires_in` 快到期再换，别每请求都换（协议示例的 expires_in 给了个夸张值 999999998，**别当真读它当真数用**——按平台实际配置，拿不准就定期重取）。

- **client_id/secret 申请入口**：平台后台 **系统管理 → API接口配置** 录入第三方平台，`authorizedGrantTypes` 必须选 **client_credentials**（协议:79）。对应库表 `base_security_client`（03 导出订阅 options 说明口径）；**表里 secret 存 `{noop}xxxxxxxx`，取值去掉 `{noop}` 前缀**。
- 应用编码/密钥也可从 `/api/openapi/v3/app/list` 响应 `appPackageModels[].appKey/appSecret` 拿（原文注"用于获取token"，见 endpoints.md 应用节）。
- **诚实边界**：`client_credentials` 之外是否支持别的 grant、token 有效期默认值、scope 粒度（协议 Java 示例注释提到 read/write，示例值却是占位 "scope"），均未实测。

## 用 token

每个 v3 请求带请求头：`Authorization: Bearer <access_token>`（协议:73 官方明示，Bearer 前缀坐实）。

## 实测证据（2026-11-19，demo.cloudpivot.cn，平台 6.15.13）

无 token 调 `/api/openapi/v3/bo/list` → **401**，包装形：

```json
{"errcode":401,"errmsg":"Full authentication is required to access this resource","data":{"path":"/api/openapi/v3/bo/list","time":"2026-11-19T10:40:49.356"}}
```

用假 client_id 调 `/api/oauth/token` → **401** `{"error":"unauthorized","error_description":"该客户端不合法"}`——端点存在、走 Spring OAuth2 client_credentials 语义坐实；「该客户端不合法」= clientId 不在 `base_security_client` 表。

注意：协议称「http status 均为 200」（协议:138）只对**过了鉴权关之后**的业务响应成立；鉴权失败在 Spring Security 层就 401 返回，包装体也不同（见上）。代码里判 `errcode` 前先分流 HTTP 状态码。

## 401/鉴权排障速查

| 现象 | 判断 |
|---|---|
| `{"error":"unauthorized","error_description":"该客户端不合法"}`（token 端点） | clientId/secret 不对，或没去 `{noop}`，或该客户端没配 client_credentials 模式 |
| `{"errcode":401,"errmsg":"Full authentication is required…"}`（v3 端点） | 没带 Authorization 头或 token 失效 |
| token 拿到了但业务接口 403/errcode 权限类 | 应用权限/数据权限问题，非鉴权问题——去平台核对应用授权 |
| 连接被 TLS 错误拒掉 | 企业内网部署常用自签名/内部 CA 证书（生产实例实测 8443 端口即如此）——脚本侧跳过证书校验或导入企业 CA，与鉴权无关 |
