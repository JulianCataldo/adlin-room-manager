ENV ?= local
include ./.env.$(ENV)

down:
	@echo Docker down…
	@docker compose down

up:
	@echo Docker up…
	@PRIVATE_CMS_TOKEN=$(PRIVATE_CMS_TOKEN) \
	docker compose up --build --remove-orphans

recreate: down up
