# 插入元素

## API

npm 包(推荐)  

详见：
[npm easinote-proxy](https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)
[npm easinote-proxy - gitee](https://gitee.com/easinote/client-web-api-documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)

```js
EasiNoteProxy.Proxy.insertElementByJson('元素类型名称','{元素数据描述的 Json 对象}');
```

EN window 客户端(不推荐)

```js
window.external.InsertElementByJson("元素类型名称", "{元素数据描述的 Json 对象}")
```

### 参数说明

* 1 元素类型

| 元素类型        | 元素类型名称        | 备注 | 案例                                                                        |
|-------------|---------------------|------|---------------------------------------------------------------------------|
| Web内容呈现卡片 | WebPresentationCard |      | [《Web内容卡片元素》](https://r302.cc/4z6Vvlp?platform=enpc&channel=copylink) |
| 图片可折叠卡片元素 | ImageFoldCard |      | [《ImageFoldCard 示例》](https://r302.cc/1eMemMb?platform=enpc&channel=copylink) |

* 2 json 对象

这个与具体的元素类型相关，不同的类型，描述信息可能不一样。

## 具体元素

1 [Web内容呈现卡片（WebPresentationCard）](./element-json/web-presentation-card.md)
2 [图片可折叠卡片元素（ImageFoldCard）](./element-json/image-fold-card.md)

## 测试页面

[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )
