 docker build -t simpform:lates -t simpform:v0.0.0 .  

 

  docker run -d -p 3000:3000 (image id)

docker image prune --all --force

> to delete all container and images
docker rm -vf $(docker ps -aq)

> to delete images
docker rmi -f $(docker images -aq)

>delete all
docker system prune -a --volumes

# inctractive

docker container run -it [yourImage] bash


# important links
[caddy tls](https://caddyserver.com/docs/caddyfile/directives/tls)