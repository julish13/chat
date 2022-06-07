install: install-deps

start:
	heroku local -f Procfile.dev

start-backend:
	npm start --watch --verbose-watch

start-frontend:
	make build
	npx webpack serve

install-deps:
	npm ci

build:
	npm run build

lint:
	npx eslint . --ext js,jsx

format:
	npx prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc

precommit: 
	npx lint-staged

publish:
	npm publish

deploy:
	git push heroku

test:
	npm test -s

.PHONY: test
