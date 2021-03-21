# 插入视频

## 方法原型

```csharp
void InsertVideo(InsertMediaModel model);
```

### 参数

```ts
interface InsertMediaModel {
    /**
    * Url：资源字符串，支持 web url 和 data url。
    */
    url: string;

    /**
    * Top：媒体元素与画布顶部距离。画布虚拟坐标系。
    */
    top: number;

    /**
    * Top：媒体元素与画布左侧距离。画布虚拟坐标系。
    */
    left: number
}
```

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。

## 调用示例

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "InsertVideo", "args": JSON.stringify({ "url": "http://localhost:5000/test.mp4", "top": 100, "left": 100 })}))
```
