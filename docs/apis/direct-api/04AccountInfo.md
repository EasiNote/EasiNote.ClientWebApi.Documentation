# 账号信息相关的 API

::: warning 警告
这里的 API 仅在 EN5 Windows 客户端支持
:::

* 获取希沃用户ID

```js
// 获取希沃用户ID
await window.externalAsync.GetAccountInfo();
```

返回数据示例 {\"t_user_id\":\"\",\"user_id\":\"smwytvyzsorknpyvnvlygjys66289121\"}

``` json
{
  "t_user_id": "", // 第三方用户ID，通过定制方式使用第三方账号登录才有值
  "user_id": "smwytvyzsorknpyvnvlygjys66289121" // seewo 用户ID，用户登录之后有值
}
```

* 获取 OAUTH 鉴权使用的 CODE

只有对接了[希沃开放平台](http://open.seewo.com/#/service/1112/doc/1695)才能使用

```js
// 根据 app_id 获取鉴权使用的 CODE (app_id 指希沃开放平台申请的 app_id)
await window.externalAsync.GetOpenOAuthCode('app_id');
```

返回数据示例 {\"success\":true,\"error_code\":0,\"message\":\"OK\",\"code\":\"fb2f757941bd405db51f2ccb13660783\"}

```json
{
  "success": true,
  "error_code": 0,
  "message": "OK",
  "code": "fb2f757941bd405db51f2ccb13660783"
}
```
