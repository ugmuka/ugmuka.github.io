init:
	uv sync

	# start local server to avoid CROS error
	npm install -g http-server
	nohup http-server &


	# install chrome
	# sudo apt install -y chromium chromium-driver

	echo completed.
