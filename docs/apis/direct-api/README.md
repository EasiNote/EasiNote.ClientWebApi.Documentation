---
title: 首页
date: '2021-03-16'
---

本组页面是 API(v2) 相关的描述，API(v2) 是 直接 API。

## 直接 API

区别于间接 API 必须通过 `InvokeMethod` 做一次包装，直接 API 就是直接调用的业务方法，使用起来更直观。

::: tip
部分功能使用直接 API 和间接 API 调用都能实现，但不是全部。
两者并不能一一对应。详情请参照具体的 API 说明。
:::

## 直接 API 与间接 API 的对比

以插入多媒体元素为例

直接 API
```js
window.external.InsertMedia(JSON.stringify({
  "type": "video",
  "url": "http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4",
  "fileName": "测试.mp4",
}));
```

间接 API
```js
window.external.InvokeMethod(JSON.stringify({
    "method": "InsertImage",
    "args": JSON.stringify({
        "url": "https://blog.walterlv.com/static/posts/2020-02-14-large-background-image.jpg",
        "top": 100,
        "left": 100
    })
}))
```

