# 学科工具扩展的用户识别

::: warning 警告
此功能正在开发中，暂未发布。
:::

在按照 [配置说明](./02Configurations.md) 中的配置完成设置，生成插件之后，就可以用扩展的学科工具提供内容服务了。

但此时内容页无法知道当前登录的用户是谁，无法提供个性化的服务。

最简单的，可以要求用户在打开学科工具之后，在内容页进行登录。但这样每次使用学科工具都需要登录一次，交互过于繁琐。

希沃白板学科工具扩展提供两种方案，可以告知当前登录的用户信息。

> 本质上，都是 EN5 在调用对应 URL 时，替换预设 URL 中参数占位符。

## 方案1 对接希沃开放平台

如果对接了[希沃开放平台](http://open.seewo.com/#/service/1112/doc/1695) 的帐号系统进行登录，则可以直接通过 javescript API 接口获取到用户信息。

> 希沃开放平台还可以对接第三方账号登录，相关说明见：[账号登录](../../guide/01Account.md)

具体而言，业务的 URL 上没有任何参数

`http://xxx.com/resource?aaa=123`

需要通过 javascript 脚本来获取到用户的信息。

```js
// 获取希沃用户信息
await window.externalAsync.GetAccountInfo();
```

返回数据示例 `{\"t_user_id\":\"\",\"user_id\":\"smwytvyzsorknpyvnvlygjys66289121\"}`

```json
{
  "t_user_id": "", // 第三方用户ID，通过定制方式使用第三方账号登录才有值
  "user_id": "smwytvyzsorknpyvnvlygjys66289121" // seewo 用户ID，用户登录之后有值
}
```

```js
// 根据 app_id 获取鉴权使用的 CODE (这里 http://open.seewo.com/#/service/1112/doc/1695 的 app_id 的 CODE)
await window.externalAsync.GetOpenOAuthCode('app_id');
```

返回数据示例 `{\"success\":true,\"error_code\":0,\"message\":\"OK\",\"code\":\"fb2f757941bd405db51f2ccb13660783\"}`

```json
{
  "success": true,
  "error_code": 0,
  "message": "OK",
  "code": "fb2f757941bd405db51f2ccb13660783"
}
```

## 2 使用特定的用户ID标记

如果应用没有对接希沃开放平台，则没有第三方账号相关的数据。此时可以提供希沃用户ID。

具体而言，要求业务方的 URL 样式是

`http://xxx.com/resource?aaa=123&swUserId={SW_USER_ID}&timestamp={TIMESTAMP}&tickct={TICKET}`

在真实调用时，会将其中的参数进行替换。

* {SW_USER_ID}  
希沃的用户ID  
如果用户没有登录，则此值为 `anonymous`。

* {TIMESTAMP}  
时间戳（毫秒）  

* {TICKET}  
校验用的 ticket  
`ticket = MD5($"{timestamp}{swUserId}{secretKey}")`  
这里的 secretKey 是一个加密混淆用的，由 EN5 在线下向相关方提供。

使用此种方式，内容提供方在第一次无法直接根据 SW_USER_ID 确定用户是谁。
根据实际情况，在首次使用时，可能需要要求用户进行账号绑定，然后将绑定结果记录在内容提供方的数据库中，下次用户使用时，就可以自动登入使用了。或者给用户直接创建一个新的账号。

::: tip 提示
当此方式不依赖与希沃开放平台的对接
:::

::: warning 风险提示
在用户首次使用业务时，需要让用户进行账号关联确认，直接进行账号绑定或新建账号，可能有法律风险。
:::
