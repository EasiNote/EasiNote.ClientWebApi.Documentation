# 插入多媒体

## 方法原型

```csharp
void InsertMedia(InsertMediaModel model);
```

此方法会根据 url 参数所得的实际资源自动识别应该插入的元素类型。

### 参数

```ts
interface InsertSlideModel {
    /**
    * Url：资源字符串，支持 web url 和 data url。
    */
    url: string;

    /**
    * Top：图片与画布顶部距离。画布虚拟坐标系。
    */
    top: number;

    /**
    * Top：图片与画布左侧距离。画布虚拟坐标系。
    */
    left: number
}
```

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。
