---
title: easinote-proxy
date: '2021-03-16'
---

安装  
`npm install easinote-proxy@latest`

## 作用

调用 easinote 提供的 api，完成插入元素等 api 提供的功能。

调用方（web前端）----> api 执行方（EasiNote5 Windows 客户端 或者 Enow Web 前端）

`easinote-proxy` 的作用就是对屏蔽调用方屏蔽 api 执行方的差异，完成自动调用。

## 技术细节

当调用方调用 `easinote-proxy` 提供的 api 时，`easinote-proxy` 自动判断，如果当前是在 EasiNote5 Windows 客户端环境，
则执行 `window.external.xxxx` 方法，如果是普通 Web 环境，则执行消息发送。

## 如何使用

外部业务不用关心当前的页面是在windows客户端运行还是在web内嵌的iframe运行

以 React 为例，有两种使用方式：

* 方式一：可以在程序的入口处初始化

```js
import EasiNoteProxy from 'easinote-proxy';
EasiNoteProxy.init().then(()=> ReactDom.render("xxx", "xx"));
```

* 方式二：在组件的生命周期中初始化

```js
componentWillMount/ComponentDidMount(){
  await EasiNoteProxy.init()
}
```

在具体的调用

``` js
EasiNoteProxy.Proxy.XXX('xxx');
```
