ENV ?= local
include ./.env.$(ENV)

configure:
	git clone git@github.com:JulianCataldo/paper-cms.git ./paper-cms
	# cd ./paper-cms && git checkout -b stable v0.0.6

run:
	cd ./paper-cms/docker && \
	DOCKER_PAPER_PORT=$(DOCKER_PAPER_PORT) \
	DOCKER_PAPER_DATA_DIR=$(DOCKER_PAPER_DATA_DIR) \
	make local
