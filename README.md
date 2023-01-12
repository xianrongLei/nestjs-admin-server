# run docker-compose
  $ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --scale app-server=2

# 删除那些已停止的容器、dangling 镜像、未被容器引用的 network 和构建过程中的 cache：
  $ docker system prune
#  重启docker服务：
  $ systemctl restart docker
# win强制删除非空目录
  rd/s/q <dir>