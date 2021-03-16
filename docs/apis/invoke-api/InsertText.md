# 插入文本

## 方法原型

```csharp
void InsertText(InsertTextModel model);
```

### 参数

```ts
interface InsertTextModel {
    text: string;
    font-size: number;
    font-family: string;
    color: string;
    top: number;
    left: number;
}
```

## 调用示例

```ts
window.external.InvokeMethod(JSON.stringify({ "method": "InsertText", "args": JSON.stringify({ "text": "示例文字", "font-size": 24, "font-family": "Microsoft YaHei", "color": "#FFFFFF", "top": 100, "left": 100 })}))
```
