# 获取浏览器Web位置、大小

## 方法原型

```csharp
void GetBrowserWindowRect(BrowserWindowRectModel model);
```

### 参数

```ts
interface BrowserWindowRectModel {
   
}
```

## 调用示例

打开一个新的浏览器，大小默认、位置默认：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "GetBrowserWindowRect"}))
```


# 浏览器Web位置、大小值返回值

## 说明
调用者需提供一个js办法，GetBrowserWindowRect获取成功后通过此办法通知web端

## 方法原型

```js
void NotifyBrowserWindowRect(BrowserWindowRectModel model);
```

### 参数

```js
interface BrowserWindowRectModel {
    /**
    * FrameX：页面内容离屏幕X坐标
    */
    frameX: number;

    /**
    * FrameY：页面内容离屏幕Y坐标
    */
    frameY: number;
    /**
    * FrameWidth：页面内容需要的宽度，浏览器宽度将依此设置以满足内容宽度。
    */
    frameWidth: number;

    /**
    * FrameHeight：页面内容需要的高度，浏览器宽度将依此设置，在可能的情况下尽量满足内容高度，不满足会显示滚动条
    */
    frameHeight: number;
}
```