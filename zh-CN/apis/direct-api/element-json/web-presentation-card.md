# web 内容卡片元素

示例：
[《Web内容卡片元素》](https://r302.cc/4z6Vvlp?platform=enpc&channel=copylink)

## 属性说明

| 属性协议名              | 类型   | 描述                        | 默认       | 备注                                   |
|-------------------------|--------|---------------------------|------------|----------------------------------------|
| cardTag                 | String | 卡片的类型标记              |            |                                        |
| title                   | String | 标题                        |            | —                                      |
| thumbnailUri            | String | 缩列图                      |            | —                                      |
| clickTitle              | String | 点击按钮的标题              | 打开       | —                                      |
| offlineClickTitle       | String | 断网时的按钮标题（授课有效）  | 网络异常   |                                        |
| editingUrl              | String | 备课端内容的URL             |            |                                        |
| displayUrl              | String | 授课端内容的URL             |            |                                        |
| editingPresentationSize | Size   | 备课下打开的 web 窗口的大小 |            |                                        |
| displayPresentationSize | Size   | 授课下打开的 web 窗口的大小 |            | DisplayMode 为 Window 时有效。          |
| presentationWindowTitle | String | Web内容窗口的标题           |            |                                        |
| editingWindowIconUri    | String | 备课端Web内容窗口的Icon     |            |                                        |
| displayWindowIconUri    | String | 授课端Web内容窗口的Icon     |            |                                        |
| displayMode             | String | 授课端的web内容显示模式     | FullScreen | Window(窗口显示);FullScreen(全屏显示); |
| zoomMode                | String | 卡片缩放模式（备课有效）      | Scale      | Scale(等比缩放);Adaptive(自适应);      |

## json 文件示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [3 创建 web presentation card 元素]

```json
{
  "cardTag": "TEST",
  "title": "测试标题",
  "thumbnailUri": "http://n.sinaimg.cn/sinakd20200605ac/416/w640h576/20200605/301b-iurnkpq9297963.jpg",
  "clickTitle": "点击",
  "offlineClickTitle": "网络错误",
  "editingUrl": "https://bilibili.com",
  "displayUrl": "https://www.zhihu.com/",
  "editingPresentationSize": {
    "width": 1000,
    "height": 500
  },
  "displayPresentationSize": {
    "width": 1000,
    "height": 500
  },
  "presentationWindowTitle": "窗口标题",
  "editingWindowIconUri": "http://n.sinaimg.cn/sinakd20200605ac/186/w640h346/20200605/a50a-iurnkpq9297973.jpg",
  "displayWindowIconUri": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4267424444,91867147&fm=26&gp=0.jpg",
  "displayMode": "Window",
  "zoomMode": "Scale"
}
```
