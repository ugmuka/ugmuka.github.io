init:
	uv sync

	# start local server to avoid CROS error
	npm install -g http-server
	nohup http-server &

	echo completed.
