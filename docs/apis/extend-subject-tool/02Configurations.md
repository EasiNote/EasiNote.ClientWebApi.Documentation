# 学科工具插件配置

插件配置

| 配置项          | 说明          | 类型   | 是否必须 | 样例                |
|-----------------|-------------|--------|---------|---------------------|
| ResourceId      | 资源/插件ID   | string | 是       | 通常是 UUID         |
| ResrouceName    | 资源/插件名称 | string | 是       | 希沃题库            |
| Version         | 版本          | string | 是       | 1.0.0               |
| ToolType        | 资源类型      | string | 是       | EasiNoteSubjectTool |
| ManifestVersion | 清单文件版本  | int    | 是       | 1                   |

* ResourceId  
资源/插件ID，在希沃资源中心申请。可以联系希沃工作人员提供。在开发联调阶段，可以设置为 `debugdebugdebug***` 的形式。

> 这里必须以 `debugdebugdebug` 开头，希沃白板会绕过相关的权限检查，否则插件将不可用。

* ResrouceName  
资源名称，通常就是学科工具的名称

* Version
资源的版本

* ToolType
资源类型，当前只有希沃白板学科工具类型 `EasiNoteSubjectTool`

* ManifestVersion
清单文件版本，为之后的配置升级预留，当前固定为 1

---

以下的配置，都是备授课分开的，两者相互独立。
部分配置仅备课或仅授课适用。

## 基础配置

| 配置项             | 说明           | 类型   | 是否必须 | 备授课 | 样例                       |
|--------------------|--------------|--------|---------|------|----------------------------|
| Key                | 资源Key        | string | 是       | 备授课 | 与 ResourceId 一致         |
| Name               | 按钮的显示名称 | string | 是       | 备授课 | 希沃汉字                   |
| ToolTipTitle       | 提示标题       | string | 是       | 备课   | 希沃汉字卡                 |
| ToolTipDescription | 提示详情       | string | 是       | 备课   | 获取希沃汉字卡资源         |
| Group              | 分组名称       | string | 是       | 备授课 | WebResource                |
| SortHint           | 排序值         | int    | 否       | 备授课 | 1200                       |
| Url                | 工具内容 URL   | string | 是       | 备授课 | https://easinote.seewo.com |

* Key  
此名称必须在所有的 UI 扩展中唯一，在存在 ResourceId 时，与 ResourceId 保持一致

* Name  
2-4个字

* ToolTipTitle  
学科工具 hover 提示标题

* ToolTipDescription  
学科工具 hover 提示详情

* Group  
Group 的取值范围 ["General","Subject","WebResource"]  
General：通用工具，将展示在顶部工具栏  
Subject：学科工具，展示在学科工具展开列表的上半区  
WebResource：资源性工具，展示在学科工具展开列表的下半区  

* SortHint  
默认 1000

* Url  
工具栏按钮在点击时应该访问的 Web URL 链接

## UI 显示相关的配置

| 配置项          | 说明                        | 类型   | 是否必须 | 备授课 | 样例            |
|-----------------|---------------------------|--------|---------|------|-----------------|
| Icon            | 图标文件(svg)路径 24x24     | string | 是       | 备课   | seewo_card.svg  |
| Icon_2x         | 图标文件(svg)路径 32x32     | string | 是       | 备课   | seewo_card2.svg |
| IconGeometry    | Icon 的 SVG Path 数据 32x32 | string | 是       | 授课   | M11.3027756.... |
| IconGeometry_Hd | Icon 的 SVG Path 数据 24x24 | string | 是       | 授课   | M18,8L17,8....  |
| WindowSize      | 弹出窗口的大小              | string | 否       | 备授课 | 1000,800        |
| WindowType      | 弹出窗口的类型              | string | 否       | 授课   | Window          |
| UseModalDialog  | 是否显示为模态窗口          | bool   | 否       | 备授课 | TRUE            |

* Icon Icon_2x  
备课工具按钮的图标 svg 文件

* IconGeometry IconGeometry_Hd  
授课工具按钮的图标，这里使用的是 Path 数据，不是 svg 文件。  
可以使用相关的工具提取转换 svg 为 path。  

工具参考：  
[dotnet-campus/dotnetCampus.SvgPathCombiner: A tool to convert svg to xaml and combine all the paths into a single one. 将 SVG 转换成 XAML 的工具，也可以将 SVG 中所有的路径合并成一个路径。](https://github.com/dotnet-campus/dotnetCampus.SvgPathCombiner )

* WindowSize  
这里用一个字符串 `1000,800` 的形式，同时标记宽高  
WindowType 为 Window 时必须指定  

* WindowType  
WindowType 可选值 ["Window","FullScreen"]  
Window：在授课下，打开此工具时，窗口是弹窗的形式出现  
FullScreen：在授课下，打开此工具时，内容将全屏显示（类似浏览器 F11 全屏显示的效果）  

* UseModalDialog  
默认 false。仅 WindowType 为 Window 时有效。
