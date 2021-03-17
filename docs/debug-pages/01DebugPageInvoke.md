---
title: 通用回调 InvokeMethod
date: "2021-03-16"
---

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
