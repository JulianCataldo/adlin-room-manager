configure:
	cd cms && make configure

run:
	cd cms && make run
	cd front && make recreate
