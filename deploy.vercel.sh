#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd deploy

# 进入部署脚本文件夹
# 因为vercel的部署服务器初始目录是在仓库根目录下的

rm -rf ./deployType
echo "vercel" > ./deployType

node ./basePathGenrater.js

cd ../

# 生成静态文件 vercel会自动识别dist下的文件并部署
yarn run build
