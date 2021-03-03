# 保存二维码至粘贴板


## 方法原型

```csharp
void SaveQrImage(SaveQrImageModel model);
```

### 参数

```ts
interface SaveQrImageModel {
    /**
    * Base64：图片内容，Base64格式（不能为空，如果为空则没响应）。
    */
    base64: string;
}
```

## 调用示例

设置位置：

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "SaveQrImageModel", "args": JSON.stringify({ "base64": "XXXXXXXXX" })}))
```