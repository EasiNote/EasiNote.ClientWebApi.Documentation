# 插入页面

## 方法原型

```csharp
void InsertSlide(InsertSlideModel model);
```

### 参数

```ts
interface InsertSlideModel {
    /**
    * InsertBeforeIndex：在第几页之前插入页面。不指定则紧跟在当前页后插入。
    */
    index?: number;

    /**
    * BackgroundColor：背景色，可选。形如 #50D67C。
    */
    background-color?: color

    /**
    * BackgroundImage：背景图，支持 base64 和 web url。
    */
    background-image?: color
}
```

关于颜色字符串，请参阅：[颜色类型](/zh-CN/basic-types/color.md)。

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。

## 调用示例

```ts
window.external.InvokeMethod('{"method":"InsertSlide"}')
```
