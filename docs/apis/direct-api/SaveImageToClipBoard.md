# 保存图片到剪贴板

## API

::: warning 警告
此 API 仅在 EN5 Windows 客户端支持
:::

```js
window.external.SaveQrImage("image base64");
```

说明：  
这里的 `SaveQrImage` 名字是遗留问题，起初是用于保存二维码到剪贴板中。

## 参数说明

参数为字符串，是图片的 base64 编码。

## 业务场景

在生成海报图片，二维码图片等期望用户保存下来的图片时，可以提示用户将图片保存到剪贴板中。
