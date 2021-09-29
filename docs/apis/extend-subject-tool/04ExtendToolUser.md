# 学科工具扩展的用户识别

::: warning 警告
此功能正在开发中，暂未发布。
:::

在按照 [配置说明](./02Configurations.md) 中的配置完成设置，生成插件之后，就可以用扩展的学科工具提供内容服务了。

但此时内容页无法知道当前登录的用户是谁，无法提供个性化的服务。

最简单的，可以要求用户在打开学科工具之后，在内容页进行登录。但这样每次使用学科工具都需要登录一次，交互过于繁琐。

希沃白板学科工具扩展提供两种方案，可以告知当前登录的用户信息。

> 本质上，都是在 URL 中提供参数

## 方案1 对接 UC 账号系统，用户直接使用三方账号登录

如果对接了 UC（希沃 user center） 的帐号系统进行登录，则 EN5 会通过 UC 获取第三方用户 ID，并将这些参数附加到 URL 中。

> 对接 UC 的相关说明见：[账号登录](../../guide/01Account.md)

具体而言，第三方业务的 URL 样式是

`http://xxx.com/resource?aaa=123&userId={USERID}&timestamp={TIMESTAMP}&tickct={TICKET}`

在真实调用时，会将其中的参数进行替换。

* {USERID}  
第三方用户ID

* {TIMESTAMP}  
时间戳（毫秒）

* {TICKET}
校验用的 ticket  
`ticket = MD5($"{timestamp}{userId}{secretKey}")`  
这里的 secretKey 是一个加密混淆用的，由 EN5 在线下向相关方提供

使用此种方式，业务方（第三方）可以直接根据 USERID 确定用户是谁，TIMESTAMP 和 TICKET 用于做安全校验。

::: warning 提示
此种方式要求用户必须使用三方账号登录，不能直接使用希沃账号登录。
:::

## 2 使用特定的用户ID标记

如果用户直接使用希沃账号登录，则没有第三方账号相关的数据。此时可以提供希沃用户ID。

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
根据实际情况，在首次使用时，可能需要要求用户进行账号绑定，然后将绑定结果记录在内容提供方的数据库中，下载用户使用时，就可以自动登入使用了。

::: tip 提示
当此方式不依赖与 UC 的对接，用户使用上也更方便（除了第一次可能需要进行一次账号绑定操作）
:::
