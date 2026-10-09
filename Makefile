FONT_DIR := cv/fonts
FONT_URL := https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/SubsetOTF/JP
FONTS := $(FONT_DIR)/NotoSansJP-Regular.otf $(FONT_DIR)/NotoSansJP-Bold.otf

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

# 経歴書 PDF を cv/rendercv_output/ に生成
cv: $(FONTS)
	uv sync
	uv run rendercv render cv/cv.yaml

$(FONT_DIR)/%.otf:
	mkdir -p $(FONT_DIR)
	curl -sSL -o $@ $(FONT_URL)/$(notdir $@)

.PHONY: init cv
