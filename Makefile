install: npm ci

start:
	make start-backend & make start-frontend

start-backend:
	npx start-server

start-frontend:
	npm run dev

build:
	npm run prebuild & npm run build

lint:
	npx eslint . --ext js,jsx

format:
	npx prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc

precommit: 
	npx lint-staged

deploy:
	git push heroku
