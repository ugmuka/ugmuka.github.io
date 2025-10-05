init:
	uv sync
	source .venv/bin/activate
	
	# start local server to avoid CROS error
	npm install -g http-server
	http-server &
