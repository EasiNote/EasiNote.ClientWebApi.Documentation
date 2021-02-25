# 打开一个新的浏览器窗口，位置、大小、标题可自定义

## 方法原型

```csharp
void CreateBrowserWindow(CreateBrowserWindowModel model);
```

### 参数

```ts
interface BrowserWindowTitlebarModel {
    /**
    * FrameX：页面内容离屏幕X坐标（可空，默认居中）。
    */
    frameX: number;
    /**
    * FrameY：页面内容离屏幕Y坐标（可空，默认居中）。
    */
    frameY: number;
    /**
    * FrameWidth：页面内容需要的宽度，浏览器宽度将依此设置以满足内容宽度（可空，默认值600）。
    */
    frameWidth: number;
    /**
    * FrameHeight：页面内容需要的高度，浏览器宽度将依此设置，在可能的情况下尽量满足内容高度，不满足会显示滚动条（可空，默认值1024）。
    */
    frameHeight: number;
    /**
    * TitleText：标题内容（可空，不显示）。
    */
    titleText: string;
    /**
    * Url：标题内容（不可为空，一旦为空，整个api没响应）。
    */
    url: string;
    /**
    * IsModal：是否模态打开（可空，默认模态打开）。
    */
    isModal: boolean;
}
```

## 调用示例

打开一个新的浏览器，大小默认、位置默认：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "CreateBrowserWindow", "args": JSON.stringify({ "isModal": true, "url": "http://www.baidu.com" })}))
```