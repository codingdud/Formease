# build:
# 	cd frontendmain && $(make) build-dev
# 	cd backend && $(make) build

build-local:
	cd frontend && make build-local
	cd backend && make build

# run-local:
# 	docker-compose up


run-local:
	docker-compose -f docker-compose-production.yml up


build-production:
	cd frontend && make build-production
	cd backend && make build
