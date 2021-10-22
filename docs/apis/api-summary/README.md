---
title: 首页
date: '2021-09-29'
---


## API 功能

- 插入画布元素（画布/元素/文本/图片/音频/视频）
- 导入文件（enbx/pptx）
- 窗口控制

## Web 页面与客户端程序的基本调用入门

所有基础公开 API 都挂在 `window.external` 中，例如我们有一个 `Foo` 方法，需要传入一个 JSON 对象的字符串，则调用为：

```js
window.external.Foo(JSON.stringify({ "propertyA": "valueA", "propertyB": { "key": "value" } }))
```

在最新版本的希沃版本客户端中，将 API 调用放在了 `window.externalAsync` 下面，建议优先使用这里的 API 版本。
这里的 API 返回 Promise，如果有返回值，则需要 await。后续可能会移除 `window.external` 中扩展的 API。

## API 调用

提供了两种 API 调用形式，上面提到的 `window.external` 是其中一种，另一种是 `npm` 包。

区别：  
`window.external` 仅支持在希沃版本 Windows 客户端的内嵌页面中使用，不能在 enow（希沃版本网页版）上使用。  
`npm` 包同时支持希沃白板 Windows 客户端和 enow。

npm 包详见：[easinote-proxy](/apis/npm/easinote-proxy.html)

::: warning 警告
如果你的业务需要同时支持 EN5 Windows 客户端和 enow，请使用 easinote-proxy npm 包。
:::

## 直接 API（v2） 与间接 API（v1）

这是两套不同风格的 API。推荐使用 v2 版本。

间接 API 是指，所有的函数调用，都是调用 `InvokeMethod` 这一个方法，而在这个方法的参数中，传递具体要调用的功能。

而直接 API 不经过 `InvokeMethod` 的包装。

* 间接 API 详见：[间接 API](/apis/invoke-api/)
* 直接 API 详见：[直接 API](/apis/direct-api/)

## 调试页面

提供部分功能的调试前端页面，可直接执行相关的 API 测试调用效果。

详见：[调试页面](/apis/debug-pages/)
