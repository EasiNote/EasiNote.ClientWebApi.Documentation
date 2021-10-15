# 学科工具插件配置

插件配置

| 配置项           | 说明         | 类型   | 是否必须 | 样例                                |
|------------------|------------|--------|---------|-------------------------------------|
| ProductGroupName | 产品组名称   | string | 是       | SeewoSchool.WebResource             |
| Id               | 定制工具的ID | string | 是       | SeewoSchool.WebResource.ChineseCard |

* ProductGroupName  
用于标识一系列工具的集合，一般使用内容供应商的公司名称，同一个供应商提供多个学科工具，这个值应保持一致。  

* Id  
Id 是一个插件的唯一标识符，插件服务和后台通过此 Id 来区分不同的插件Id 可以是任意的字符串，但我们建议使用 Organization.ProductName.FunctionName 形式来命名，或者使用 GUID 来命名。

---

以下的配置，都是备授课分开的，两者相互独立。
部分配置仅备课或仅授课适用。

## 基础配置

| 配置项             | 说明           | 类型   | 是否必须 | 备授课 | 样例                       |
|--------------------|--------------|--------|---------|------|----------------------------|
| Key                | 资源描述名称   | string | 是       | 备授课 | SeewoSchoolChineseCard     |
| Name               | 按钮的显示名称 | string | 是       | 备授课 | 希沃汉字                   |
| ToolTipTitle       | 提示标题       | string | 是       | 备课   | 希沃汉字卡                 |
| ToolTipDescription | 提示详情       | string | 是       | 备课   | 获取希沃汉字卡资源         |
| Group              | 分组名称       | string | 是       | 备授课 | WebResource                |
| SortHint           | 排序值         | int    | 否       | 备授课 | 1200                       |
| Url                | 工具内容 URL   | string | 是       | 备授课 | https://easinote.seewo.com |

* Key  
此名称必须在所有的 UI 扩展中唯一（备授课可以相同）

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
