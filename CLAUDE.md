# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website hosted on GitHub Pages. The site uses [stlite](https://github.com/whitphx/stlite) (Streamlit running entirely in the browser via WebAssembly) to render a Streamlit application without requiring a backend server.

## Architecture

- **Entry point**: `docs/index.html` - HTML file that loads stlite from CDN and mounts the Streamlit app
- **Application**: `docs/app/main.py` - Streamlit Python code that defines the portfolio content (profile, experience, skills, certifications, presentations)
- **Deployment**: GitHub Pages serves the static files from the `docs/` directory

The key architectural pattern is that the entire Streamlit application runs client-side in the browser through stlite's WebAssembly runtime. No Python backend server is needed.

## Development Commands

### Initial Setup
```bash
make init
```
This command:
- Syncs dependencies with `uv sync`
- Installs and starts `http-server` globally to serve files locally and avoid CORS errors

### Local Development
```bash
http-server
```
Then access: http://127.0.0.1:8080/docs

The local server is started by `make init` and runs in the background. Access the application at the URL above to see the Streamlit app rendered in the browser.

### Linting
```bash
uv run ruff check
```
Ruff is configured as a dev dependency for Python linting.

## Key Files

- `docs/index.html` - Configures stlite to load `main.py` as the entry point
- `docs/app/main.py` - Portfolio content (personal info, work history, skills, certifications)
- `Makefile` - Contains the `init` target for project setup
- `pyproject.toml` - Python project configuration with ruff as dev dependency
- `.devcontainer/` - DevContainer configuration for development environment
