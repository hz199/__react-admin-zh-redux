#!/usr/bin/env sh

# 终止一个错误
set -e
# 构建
yarn run build

# 复制CNAME文件
cp ./CNAME ./build

# 进入生成的构建文件夹
cd build

git init
git add -A
git commit -m 'init project'
git remote add origin git@github.com:hz199/reactAdmin.io.git
git push -f origin master

cd -