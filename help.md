 docker build -t simpform .  

 docker run -t -p 3000:3000 (image id)

  docker run -d -p 3000:3000 (image id)

docker image prune --all --force

> to delete all container and images
docker rm -vf $(docker ps -aq)

> to delete images
docker rmi -f $(docker images -aq)

>delete all
docker system prune -a --volumes
