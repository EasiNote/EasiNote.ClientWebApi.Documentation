#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd ./deploy

echo "开始 github 的部署"
sh ./deploy.github.sh

echo "开始 gitee 的部署"
sh ./deploy.gitee.sh
