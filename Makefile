configure:
	cd ./cms && make configure

.PHONY: cms front
cms:
	cd ./cms && make run
front:
	sleep 4 && cd ./front/docker && make recreate

local:
	@echo Local…
	make cms & make front
