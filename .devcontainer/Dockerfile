FROM mcr.microsoft.com/devcontainers/base:bookworm

RUN apt-get update

RUN apt install -y chromium chromium-driver

# install uv
USER vscode
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
