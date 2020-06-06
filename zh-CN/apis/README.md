# 希沃白板 Web 插件 API

## Web 页面与客户端程序的基本调用入门

所有基础公开 API 都在 `window.external` 中，例如我们有一个 `Foo` 方法，需要传入一个 JSON 对象的字符串，则调用为：

```js
window.external.Foo(JSON.stringify({ "propertyA": "valueA", "propertyB": { "key": "value" } }))
```

## Web 页面与希沃白板的调用模式

不过，在插件机制中，为了保持与本机代码更好的兼容性，包括方法名在内的所有方法也都使用字符串参数，因此，实际上在随后的所有方法调用都应该遵循以下模式：

```js
window.external.InvokeMethod(JSON.stringify({ "method":"实际方法名", "args": JSON.stringify({ "参数1": "值1", "参数2": "值2", "参数3": "值3" }) }))
```

其中，`InvokeMethod` 中传入对象的定义为：

```ts
interface WebToolParamModel {
    /**
    * 本次调用的唯一标识字符串，可任意生成，用于匹配针对此方法的回调函数。
    * 此属性为可选属性，如果不指定或指定为空字符串，则不会调用回调函数通知执行结果。
    */
    id?: string;

    /**
    * 需要调用的方法名，可在随后的 API 详细文档中了解所有可使用的方法名。
    */
    method: string;

    /**
    * 调用此方法需要传入的参数。应该格式化成 JSON 字符串。
    * 需要注意的是，对于每个在 API 文档中提及的 API，方法应该传入的参数应遵循方法的参数定义，但最终必须在此格式化为 JSON 字符串。
    */
    args: string
}
```

如果期望在调用方法结束后得到返回，你需要定义一个回调方法：

```ts
function ExternalCallback(result) {
    // 针对 result 进行处理。
}
```

并将此回调通过以下方法加入到信号监听中：

```ts
receive(signal: string, callback: Function) {
    window[signal] = (params) => {
        callback(params);
    };
}
```

对于以上的 `ExternalCallback`，参数 `result` 的类型定义如下：

```ts
interface WebToolReturnModel {
    /**
    * 如果在 InvokeMethod 的参数中指定了 Id 属性，那么在回调中的此 Id 属性将与之对应，表示这是针对那个特定调用的回调。
    */
    id: string;

    /**
    * 在 InvokeMethod 调用时的方法名，也是与那个调用对应。
    */
    method: string;

    /**
    * 如果 API 中声明某个方法有返回值，那么这里将是此返回值的 JSON 字符串。
    */
    result?: string;

    /**
    * 如果某 API 调用发生异常（客户端异常），则此值为异常字符串，建议仅用于调试。
    */
    exception?: string;
}
```
