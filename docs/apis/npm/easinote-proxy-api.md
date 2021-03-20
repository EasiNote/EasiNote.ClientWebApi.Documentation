---
title: easinote-proxy API 
date: '2021-03-16'
---

## API

### 1 插入多媒体

```js
EasiNoteProxy.Proxy.insertMedia('elementJsonData');
```

方法名：  
insertMedia

参数：  
elementData: string 元素Json数据

详见：

[插入多媒体](/apis/direct-api/InsertMedia.html)

### 2 插入web内容卡片元素

```js
EasiNoteProxy.Proxy.insertElementByJson('elementType','elementJsonData');
```

方法名:  
insertElementByJson  

参数:  
elementType: string  元素类型名(WebPresentationCard)  
elementData: string  元素Json数据

详见：

[web 内容卡片元素](/apis/direct-api-element/web-presentation-card.html )

### 3 插入图片可折叠卡片元素

```js
EasiNoteProxy.Proxy.insertElementByJson('elementType','elementJsonData');
```

方法名:  
insertElementByJson  
参数:  
elementType: string  元素类型名(ImageFoldCard)  
elementData: string  元素Json数据

详见：

[图片可折叠卡片元素](/apis/direct-api-element/image-fold-card.html )
