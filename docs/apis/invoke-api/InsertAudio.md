# 插入音频

## 方法原型

```csharp
void InsertAudio(InsertMediaModel model);
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
window.external.InvokeMethod(JSON.stringify({ "method": "InsertAudio", "args": JSON.stringify({ "url": "http://localhost:5000/%E5%BD%92%E5%8E%BB%E6%9D%A5.mp3", "top": 100, "left": 100 })}))
```
