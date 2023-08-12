# build:
# 	cd frontendmain && $(make) build-dev
# 	cd backend && $(make) build

build-local:
	cd frontend && $(MAKE) build-local
	cd backend && $(MAKE) build

# run-local:
# 	docker-compose up


run-local:
	docker-compose -f Docker-compose-production.yml up


build-production:
	cd frontend && $(make) build-production
	cd backend && $(make) build
