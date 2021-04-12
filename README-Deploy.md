# 如何修改文档后发布

## 1 修改或添加文档

在 docs 文件夹中对应的目录添加或修改文档。

如果修改或新增了目录，则需要调整 `nav.js` 文件。

## 2 本地调试

在根目录（`package.json` 所在目录）运行 `yarn dev`

## 3 发布修改

在根目录运行 `yarn deploy`

如果是发布到 gitee 上，则需要先手动修改两处地方。

1 `project-const.js` 中的路径  
2 修改 `deploy.sh` 中的发布仓库地址

注意：**上面两个修改不要提交保存到 git 中**

然后运行 `yarn deploy`，完成之后，需要手动到 gitee 上更新 pages 服务，gitee 不会自动更新。
