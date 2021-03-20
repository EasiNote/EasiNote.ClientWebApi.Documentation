---
title: 通用回调 InvokeMethod
date: "2021-03-16"
---

## 相关文档

这里使用 window.external 直接调用对应的函数，当前仅限 Windows 客户端

[间接 API](/apis/invoke-api/)

## 默认 API

```js
window.external.InvokeMethod(
  JSON.stringify({
    method: "实际方法名",
    args: JSON.stringify({ 参数1: "值1", 参数2: "值2", 参数3: "值3" }),
  })
);
```

## 插入元素的 API

```js
window.external.InvokeMethod(JSON.stringify({ "method": "实际方法名","args": "参数值" )}))
```

<ClientOnly>
  <DebugPageInvoke/>
</ClientOnly>
