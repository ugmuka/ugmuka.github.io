init:
	# install git hooks (JSON auto-format / syntax check)
	uv tool install pre-commit
	uv tool run pre-commit install

	# start local server to avoid CROS error
	npm install -g http-server
	nohup http-server &


	# install chrome
	# sudo apt install -y chromium chromium-driver

	echo completed.
