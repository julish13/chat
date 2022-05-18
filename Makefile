install: install-deps

start:
	heroku local -f Procfile.dev

start-backend:
	npm start --watch --verbose-watch

start-frontend:
	npx webpack serve

install-deps:
	npm ci

build:
	npm run build

lint:
	npx eslint . --ext js,jsx

format:
	npx prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc

publish:
	npm publish

deploy:
	git push heroku

test:
	npm test -s

.PHONY: test
