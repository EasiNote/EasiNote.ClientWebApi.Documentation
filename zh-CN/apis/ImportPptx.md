# 插入课件（PPTX）

## 方法原型

```csharp
void ImportPptx(ImportFileModel model);
```

### 参数

```ts
interface ImportFileModel {
    /**
    * FileUrl：资源字符串，支持 web url 和 data url。
    */
    url: string;

    /**
    * fileType：文件类型，请始终指定为“pptx”。
    */
    fileType: string
}
```

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。

## 调用示例

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "ImportPptx", "args": JSON.stringify({ "url": "http://localhost:5000/%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99.pptx", "fileType": "pptx" })}))
```
