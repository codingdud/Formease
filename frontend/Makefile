build:
	docker build -t simpform .


build-local:
	docker build\
		-t simpform:local\
		--build-arg CADDYFILE=Caddyfile.local\
		--build-arg BASE_URL=http://localhost:5001\
		-f Dockerfile.production .


build-production:
	docker build \
	-t simpform:production \
	--build-arg CADDYFILE=Caddyfile.production \
	--build-arg CERT=cert.pem \
	--build-arg KEY=key.pem \
	--build-arg BASE_URL=http://simpform.codindud.co \
	-f Dockerfile.production .