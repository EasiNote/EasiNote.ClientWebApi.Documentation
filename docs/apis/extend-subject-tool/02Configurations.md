# 学科工具插件配置

插件配置

| 配置项           | 说明         | 类型   | 是否必须 | 样例                                | 备注                      |
|------------------|------------|--------|---------|-------------------------------------|--------------------------|
| ProductGroupName | 产品组名称   | string | 是       | SeewoSchool.WebResource             | 名                        |
| Id               | 定制工具的ID | string | 是       | SeewoSchool.WebResource.ChineseCard | Id 是一个插件的唯一标识符 |

> ProductGroupName  
> 用于标识一系列工具的集合，一般使用内容供应商的公司  
> Id  
> Id 是一个插件的唯一标识符，插件服务和后台通过此 Id 来区分不同的插件Id 可以是任意的字符串，但我们建议使用 Organization.ProductName.FunctionName 形式来命名，或者使用 GUID 来命名。

以下的配置，都是备授课分开的，两者相关独立。
部分配置仅备课或仅授课适用。

## 基础配置

| 配置项             | 说明                 | 类型   | 是否必须 | 备授课 | 样例                       | 备注                                             |
|--------------------|--------------------|--------|---------|------|----------------------------|------------------------------------------------|
| Key                | 资源描述名称         | string | 是       | 备授课 | SeewoSchoolChineseCard     | 此名称必须在所有的 UI 扩展中唯一（备授课可以相同） |
| Name               | 工具栏按钮的显示名称 | string | 是       | 备授课 | 希沃汉字                   | 2-4个字                                          |
| ToolTipTitle       | 提示标题             | string | 是       | 备课   | 希沃汉字卡                 | 学科工具 hover 提示标题                          |
| ToolTipDescription | 提示详情             | string | 是       | 备课   | 获取希沃汉字卡资源         | 学科工具hover 提示详情                           |
| Group              | 分组名称             | string | 是       | 备授课 | WebResource                | 取值范围：["General","Subject","WebResource"]     |
| SortHint           | 排序值               | double | 否       | 备授课 | 1200                       | 默认 1000                                        |
| Url                | 工具内容 URL         | string | 是       | 备授课 | https://easinote.seewo.com | 工具栏按钮在点击时应该访问的 Web URL 链接        |

> Group 中取值 ["General","Subject","WebResource"] 的含义
> General：通用工具，将展示在顶部工具栏
> Subject：学科工具，展示在学科工具展开列表的上半区
> WebResource：资源性工具，展示在学科工具展开列表的下半区

## UI 显示相关的配置

| 配置项                  | 说明                        | 类型   | 是否必须 | 备授课 | 样例            | 备注                                        |
|-------------------------|---------------------------|--------|---------|------|-----------------|---------------------------------------------|
| Icon                    | 【备课】图标文件(svg)路径     | string | 是       | 备课   | seewo_card.svg  | 24*24 文件                                  |
| Icon_2x                 | 【备课】Icon 的 2 倍版本      | string | 是       | 备课   | seewo_card2.svg | 32*32 文件                                  |
| IconGeometry            | 【授课】Icon 的 SVG Path 数据 | string | 是       | 授课   | M11.3027756.... | 32*32 svg path                              |
| IconGeometry_Hd         | 【授课】Icon 的 SVG Path 数据 | string | 是       | 授课   | M18,8L17,8....  | 24*24 svg path                              |
| ShowInExternalToolsArea | 【授课】是否显示在扩展区域    | bool   | 否       | 授课   | false           | 默认 false                                  |
| WindowSize              | 弹出窗口的大小              | string | 否       | 备授课 | 1,000,800       | WindowType 为 Window 时必须                 |
| WindowType              | 【授课】弹出窗口的类型        | string | 否       | 授课   | Window          | 可选值：["Window","FullScreen"] 默认 Window。 |
| UseModalDialog          | 是否显示为模态窗口          | bool   | 否       | 备授课 | TRUE            | 默认 false。仅 WindowType 为 Window 时有效。  |

> WindowType 可选值 ["Window","FullScreen"] 的含义
> Window：在授课下，打开此工具时，窗口是弹窗的形式出现
> FullScreen：在授课下，打开此工具时，内容将全屏显示（类似浏览器 F11 全屏显示的效果）

备注1

授课的工具图标，使用的使用 svg path 的形式指定，不是 svg 文件。
可以使用相关的工具提取转换 svg 为 path。

工具参考：  
[dotnet-campus/dotnetCampus.SvgPathCombiner: A tool to convert svg to xaml and combine all the paths into a single one. 将 SVG 转换成 XAML 的工具，也可以将 SVG 中所有的路径合并成一个路径。](https://github.com/dotnet-campus/dotnetCampus.SvgPathCombiner )
