# 插入元素

## API

::: warning 警告
如果你的业务需要同时支持 EN5 Windows 客户端和 enow，请使用 easinote-proxy npm 包。
:::

npm 包(推荐，同时支持 EN5 Windows 客户端和 enow)  

详见：[easinote-proxy](/apis/npm/easinote-proxy.html)

```js
EasiNoteProxy.Proxy.insertElementByJson('元素类型名称','{元素数据描述的 Json 对象}');
```

希沃版本 window 客户端(不推荐，仅支持 Windows 客户端)

```js
window.external.InsertElementByJson("元素类型名称", "{元素数据描述的 Json 对象}")
```

## 具体元素

具体的元素创建 API 请查看：

[直接 API - 创建元素](/apis/direct-api-element/)

## 测试页面

[EasiNote 前端调用测试](/debug-pages/)
