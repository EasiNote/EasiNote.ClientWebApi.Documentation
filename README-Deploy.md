# 如何修改文档后发布

## 1 修改或添加文档

在 docs 文件夹中对应的目录添加或修改文档。

如果修改或新增了目录，则需要调整 `nav.js` 文件。

## 2 本地调试

在根目录（`package.json` 所在目录）运行 `yarn dev`

## 3 发布修改

在根目录运行 `yarn deploy`

然后运行 `yarn deploy`，完成之后，需要手动到 gitee 上更新 pages 服务，gitee 不会自动更新。

> 利用发布时运行的脚本 `basePathGenrater.js`，自动处理了 github 和 gitee 根目录不一样的问题。
