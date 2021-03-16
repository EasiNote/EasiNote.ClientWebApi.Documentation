# 调整浏览器标题栏


## 方法原型

```csharp
void ResizeBrowserWindowTitlebar(BrowserWindowTitlebarModel model);
```

### 参数

```ts
interface BrowserWindowTitlebarModel {
    /**
    * IsVisible：标题栏是否可见（可空）。
    */
    isVisible: boolean;

    /**
    * TitleText：标题内容（可空）。
    */
    titleText: string;

    /**
    * DragHeight：web内容能被拖拽-->整个窗口会移动高度（针对Web端Top开始能被拖动高度）,最大值500（可空）
    */
    dragHeight: number;
}
```

## 调用示例

设置位置：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindowTitlebar", "args": JSON.stringify({ "isVisible": true, "titleText": "测试标题","dragHeight": 120 })}))
```