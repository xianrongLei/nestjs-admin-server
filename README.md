# 项目介绍
使用nodejs开发后端，基于nestjs框架 
# 项目依赖
docker         版本 >= 1.13.1
docker-compose 版本 >= 1.26.2
git            版本 >= 2.35.1
node           版本 >= 16

# 项目启动步骤

git clone ...
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V
