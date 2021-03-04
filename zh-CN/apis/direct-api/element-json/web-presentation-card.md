# web 内容卡片元素

示例：
[《Web内容卡片元素》](https://r302.cc/4z6Vvlp?platform=enpc&channel=copylink)

## API

npm 包(推荐)  

详见：
[npm easinote-proxy](https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)
[npm easinote-proxy - gitee](https://gitee.com/easinote/client-web-api-documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)

```js
EasiNoteProxy.Proxy.insertElementByJson('WebPresentationCard','{元素数据描述的 Json 对象}');
```

EN window 客户端(不推荐)

```js
window.external.InsertElementByJson("WebPresentationCard", "{元素数据描述的 Json 对象}")
```

## 属性说明

| 属性协议名       | 类型   | 必需 | 描述                        | 默认       | 备注                                               |
|------------------|--------|-----|---------------------------|------------|----------------------------------------------------|
| tag              | String | 是   | 卡片的类型标记              |            | 业务标记，区分不同元素，类似 seewo-tiku seewo-huaban |
| title            | String | 是   | 卡片上的标题                |            |                                                    |
| thumbnailUrl     | String | 是   | 卡片中的缩列图              |            |                                                    |
| buttonContent    | String | 是   | 卡片下方的点击按钮的标题    | 打开       |                                                    |
| editingUrl       | String | 是   | 备课端内容的URL             |            |                                                    |
| displayUrl       | String | 是   | 授课端内容的URL             |            |                                                    |
| editingFrameSize | Size   | 是   | 备课下打开的 web 页面的大小 |            |                                                    |
| displayFrameSize | Size   | 是   | 授课下打开的 web 页面的大小 |            | DisplayMode 为 Window 时有效。                      |
| displayMode      | String | 否   | 授课端的web内容显示模式     | FullScreen | Window(以窗口形式显示) FullScreen(全屏显示)        |
| layoutSize       | Size   | 是   | 元素初始大小                |            | 宽度最小值：1 高度最小值：80；参考值：(200,200)        |

## json 示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [3 web卡片元素]

```json
{
  "tag": "seewo-tiku-test",
  "title": "希沃题库（测试）",
  "thumbnailUrl": "http://n.sinaimg.cn/sinakd20200605ac/416/w640h576/20200605/301b-iurnkpq9297963.jpg",
  "buttonContent": "点击",
  "editingUrl": "https://bilibili.com",
  "displayUrl": "https://www.zhihu.com/",
  "editingFrameSize": {
    "width": 1000,
    "height": 500
  },
  "displayFrameSize": {
    "width": 1000,
    "height": 500
  },
  "displayMode": "Window",
  "layoutSize": {
    "width": 200,
    "height": 200
  }
}
```
