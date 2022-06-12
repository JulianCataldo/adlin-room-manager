configure:
	cd ./cms && make configure

local:
	cd ./cms && make run & \
	cd ./front/docker && make recreate
