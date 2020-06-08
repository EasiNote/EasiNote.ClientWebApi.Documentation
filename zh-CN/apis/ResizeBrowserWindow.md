# 调整浏览器窗口大小

## 方法原型

```csharp
void ResizeBrowserWindow(BrowserWindowResizeModel model);
```

### 参数

```ts
interface BrowserWindowResizeModel {
    /**
    * FrameWidth：页面内容需要的宽度，浏览器宽度将依此设置以满足内容宽度。
    */
    frameWidth: number;

    /**
    * FrameHeight：页面内容需要的高度，浏览器宽度将依此设置，在可能的情况下尽量满足内容高度，不满足会显示滚动条。
    */
    frameHeight: number;

    /**
    * ResizeDirection：枚举值，可选：
    *  - bottomRight：通过移动右下角的点来调整窗口大小。
    *  - topLeftBottomRight：通过向四周调整窗口边缘来调整窗口大小。
    */
    resizeDirection: string
}
```

## 调用示例

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindow", "args": JSON.stringify({ "frameWidth": 960, "frameHeight": 640 })}))
```
