# 调整浏览器窗口大小

## 方法原型

```csharp
void ResizeBrowserWindow(BrowserWindowResizeModel model);
```

### 参数

```ts
interface BrowserWindowResizeModel {
    /**
    * FrameX：页面内容离屏幕X坐标（可空）。
    */
    frameX: number;

    /**
    * FrameY：页面内容离屏幕Y坐标（可空）。
    */
    frameY: number;
    /**
    * FrameWidth：页面内容需要的宽度，浏览器宽度将依此设置以满足内容宽度（可空）。
    */
    frameWidth: number;

    /**
    * FrameHeight：页面内容需要的高度，浏览器宽度将依此设置，在可能的情况下尽量满足内容高度，不满足会显示滚动条（可空）。
    */
    frameHeight: number;

    /**
    * WindowContentLengthUnit：枚举值，可选：
    *  - effectivePixel：有效像素（默认单位）。
    *  - percentageToCurrentWindow：（目前尚不支持）通过向四周调整窗口边缘来调整窗口大小。
    *  - percentageToCurrentScreen：相对于当前屏幕的百分比，1 表示最大化显示。（若要全屏，请调用 Web 全屏 API）
    */
    lengthUnit?: string

    /**
    * ResizeDirection：枚举值，可选：
    *  - bottomRight：通过移动右下角的点来调整窗口大小（默认行为）。
    *  - topLeftBottomRight：通过向四周调整窗口边缘来调整窗口大小。
    */
    resizeDirection?: string
}
```

## 调用示例

设置位置：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindow", "args": JSON.stringify({ "frameX": 200, "frameY": 300 })}))
```

向右下扩展：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindow", "args": JSON.stringify({ "frameWidth": 960, "frameHeight": 640 })}))
```

向四周扩展：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindow", "args": JSON.stringify({ "frameWidth": 1280, "frameHeight": 720, "resizeDirection": "topLeftBottomRight" })}))
```

向四周扩展至屏幕大小的 75%：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindow", "args": JSON.stringify({ "frameWidth": 0.5, "frameHeight": 0.75, "lengthUnit": "percentageToCurrentScreen", "resizeDirection": "topLeftBottomRight" })}))
```

## 额外说明

如果希望浏览器全屏，请直接调用全屏 API：

```ts
document.documentElement.webkitRequestFullscreen()
```

相应的，退出全屏：

```ts
document.webkitExitFullscreen()
```
