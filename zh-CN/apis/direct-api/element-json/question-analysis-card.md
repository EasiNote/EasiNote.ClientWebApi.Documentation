# 题目卡片元素

示例：
[《题目卡片元素示例》](https://r302.cc/KJnY0jW?platform=enpc&channel=copylink)

## API

npm 包(推荐)  

这种方式同时支持 EN5 Windows 客户端和 ENOW（web网页）端，内部会做自动判断。

详见：  
[npm easinote-proxy](https://github.com/EasiNote/EasiNote.ClientWebApi.Documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)  
[npm easinote-proxy - gitee](https://gitee.com/easinote/client-web-api-documentation/blob/master/zh-CN/apis/npm/easinote-proxy.md)

```js
EasiNoteProxy.Proxy.insertElementByJson('QuestionAnalysisCard','{元素数据描述的 Json 对象}');
```

EN window 客户端(不推荐)

这种方式仅限于 EN5 Windows 客户端，ENOW（web网页）端不支持。

```js
window.external.InsertElementByJson("QuestionAnalysisCard", "{元素数据描述的 Json 对象}")
```

## 属性说明

| 属性协议名         | 类型   | 必需 | 描述            | 默认 | 备注                                               |
|--------------------|--------|-----|---------------|------|----------------------------------------------------|
| tag                | String | 是   | 卡片的类型标记  |      | 业务标记，区分不同元素，类似 seewo-tiku seewo-huaban |
| questionType       | String | 是   | 题目类型        |      |                                                    |
| questionTitleUrl   | String | 是   | 题干图片URL     |      |                                                    |
| questionContentUrl | String | 是   | 题目内容图片URL |      |                                                    |
| answerUrl          | String | 是   | 答案图片URL     |      |                                                    |
| analysisUrl        | String | 是   | 解析图片URL     |      |                                                    |

## json 示例

测试：[EasiNote 前端回调测试](https://easinote.github.io/EasiNote.ClientWebApi.Documentation/ )

选择 [5 题库元素]

```json
{
  "tag": "seewo-tiku-test",
  "questionType": "单选题",
  "questionTitleUrl": "http://files.eduuu.com/img/2011/08/18/162033_4e4ccb510ed70.jpg",
  "questionContentUrl": "http://5b0988e595225.cdn.sohucs.com/images/20170914/e22bca324ab242f3bc91295b855f4d6d.jpeg",
  "answerUrl": "http://files.eduuu.com/img/2012/07/11/100611_4ffcdf9349df0.jpg",
  "analysisUrl": "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a90234b6511b178a82b901147b.jpg"
}
```
