# 插入多媒体

## API

```js
window.external.InsertMedia("{多媒体数据描述的 Json 对象}")
```

### 参数说明

json 对象字段：

| 参数名称   | 类型    | 必需 | 描述                                          | 默认   | 备注                                           |
|------------|---------|-----|---------------------------------------------|--------|------------------------------------------------|
| url        | String  | 是   | http(s) 下载链接，可以没有后缀                 |        |                                                |
| fileName   | String  | 是   | 文件名，必须有后缀                             |        | 用户看到的文件名                               |
| mode       | String  | 否   | 插入元素的模式（仅授课有效，仅对音视频设置有效） | online | download:下载文件后插入;online:在线播放（默认）; |
| isAutoPlay | Boolean | 否   | 是否自动播放，仅当是在线播放模式时有效         | true   | 默认：自动播放                                  |

## 示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [4 插入多媒体（图片，音视频）元素]

```json
{
  "url": "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4",
  "fileName": "测试.mp4",
  "mode": "online",
  "isAutoPlay": false
}
```
