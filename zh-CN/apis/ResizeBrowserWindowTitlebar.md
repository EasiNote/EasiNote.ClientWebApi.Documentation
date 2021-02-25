# 调整浏览器窗口大小

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
}
```

## 调用示例

设置位置：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ResizeBrowserWindowTitlebar", "args": JSON.stringify({ "isVisible": true, "titleText": "测试标题" })}))
```