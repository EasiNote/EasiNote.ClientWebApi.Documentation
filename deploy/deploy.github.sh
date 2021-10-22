#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm ./deployType
echo "github" > ./deployType

node ./basePathGenrater.js

cd ../

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'xxx.com' > CNAME

echo "test error"
exit 445

time=$(date "+%Y%m%d-%H%M%S")
message="deploy$time"

git init
git config user.email "easinote@seewo.com"
git config user.name "easinote"
git add -A
git commit -m $message
git checkout -b public

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:EasiNote/EasiNote.ClientWebApi.Documentation.git public

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 发布到 gitee （需要在 basePathConst 修改根路径之后再编译）
# git push -f https://gitee.com/easinote/client-web-api-documentation.git public

cd -