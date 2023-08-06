build:
	docker build -t reactapp .


build-local:
	docker build\
		-t react-app-production:local\
		--build-arg CADDYFILE=Caddyfile.local\
		--build-arg BASE_URL=http://localhost:5000\
		-f Dockerfile.production .


buid-production:
	docker build \
	-t react-app-production:production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg BASE_URL=https://codindud.co \
	-f Dockerfile.production .