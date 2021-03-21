# 插入页面

## 方法原型

```csharp
void InsertSlide(InsertSlideModel model);
```

### 参数

```ts
interface InsertSlideModel {
    /**
    * InsertBeforeIndex：在第几页之前插入页面（序号从 0 开始）。不指定则紧跟在当前页后插入。
    */
    index?: number;

    /**
    * BackgroundColor：背景色，可选。颜色字符串，形如 #50D67C。
    */
    background-color?: color;

    /**
    * BackgroundImage：背景图。资源字符串，支持 web url 和 data url。
    */
    background-image?: color
}
```

关于颜色字符串，请参阅：[颜色类型](/zh-CN/basic-types/color.md)。

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。

## 调用示例

在当前页面后创建新的一页，并使用默认的页面背景设定。

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "InsertSlide" }))
```

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "InsertSlide", "args": "{}" }))
```

说明：

1. `args` 参数可以不指定，可以指定成空字符串，也可以指定成空对象。
1. 当不指定页面背景，将使用当前模板中的背景。

插入到首页并使用位图背景：

```js
window.external.InvokeMethod(JSON.stringify({ "method": "InsertSlide", "args": JSON.stringify({ "index": 0, "background-image": "https://blog.walterlv.com/static/posts/2020-02-14-large-background-image.jpg" })}))
```
