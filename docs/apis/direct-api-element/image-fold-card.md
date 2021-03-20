# 图片可折叠卡片元素

示例：
[《ImageFoldCard 示例》](https://r302.cc/1eMemMb?platform=enpc&channel=copylink)

## API

npm 包(推荐)  

详见：
[npm easinote-proxy](https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)
[npm easinote-proxy - gitee](https://gitee.com/easinote/client-web-api-documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)

```js
EasiNoteProxy.Proxy.insertElementByJson('ImageFoldCard','{元素数据描述的 Json 对象}');
```

EN window 客户端(不推荐)

```js
window.external.InsertElementByJson("ImageFoldCard", "{元素数据描述的 Json 对象}")
```

## 属性说明

| 属性协议名      | 类型   | 必需 | 描述           | 默认 | 备注                                               |
|-----------------|--------|-----|--------------|------|----------------------------------------------------|
| tag             | String | 是   | 卡片的类型标记 |      | 业务标记，区分不同元素，类似 seewo-tiku seewo-huaban |
| title           | String | 是   | 标题           |      |                                                    |
| titleImageUrl   | String | 是   | 标题图片URL    |      |                                                    |
| content         | String | 是   | 内容标题       |      |                                                    |
| contentImageUrl | String | 是   | 内容图片URL    |      |                                                    |

插入的元素，默认是折叠状态。

## json 示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [6 图片可折叠元素]

```json
{
  "tag": "seewo-tiku-test",
  "title": "单选题",
  "titleImageUrl": "http://files.eduuu.com/img/2011/08/18/162033_4e4ccb510ed70.jpg",
  "content": "答案与解析",
  "contentImageUrl": "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a90234b6511b178a82b901147b.jpg"
}
```
