# 插入多媒体

## API

::: warning 警告
如果你的业务需要同时支持 EN5 Windows 客户端和 enow，请使用 easinote-proxy npm 包。
:::

npm 包(推荐，同时支持 EN5 Windows 客户端和 enow)  

详见：[easinote-proxy](/apis/npm/easinote-proxy.html)

```js
EasiNoteProxy.Proxy.InsertMedia("{多媒体数据描述的 Json 对象}");
```

EN window 客户端(不推荐，仅支持 Windows 客户端)

这种方式仅限于 EN5 Windows 客户端，ENOW（web网页）端不支持。

```js
window.external.InsertMedia("{多媒体数据描述的 Json 对象}");
```

### 参数说明

json 对象字段：

| 参数名称 | 类型   | 必需 | 描述                          | 默认 | 备注             |
|----------|--------|-----|-----------------------------|------|------------------|
| type     | String | 是   | 类型标识：image,audio,video    |      |                  |
| url      | String | 是   | http(s) 下载链接，可以没有后缀 |      |                  |
| fileName | String | 是   | 文件名，必须有后缀             |      | 用户看到的文件名 |

PS：
备课插入图片，音视频，会先下载，然后插入。
授课插入图片，会先下载然后插入；授课插入音视频，会直接播放 Http(s) 流，即使用在线播放的方式。

## 示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [4 插入多媒体（图片，音视频）元素]

```json
{
  "type": "video",
  "url": "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4",
  "fileName": "测试.mp4",
}
```
