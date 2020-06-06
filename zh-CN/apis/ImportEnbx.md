# 插入课件（ENBX）

## 方法原型

```csharp
void ImportEnbx(ImportFileModel model);
```

### 参数

```ts
interface InsertSlideModel {
    /**
    * FileUrl：资源字符串，支持 web url 和 data url。
    */
    url: string;

    /**
    * FileType：文件类型，可传入 enbx 或 pptx，不区分大小写。
    */
    fileType: string
}
```

关于资源字符串，请参阅：[资源类型](/zh-CN/basic-types/resource.md)。

