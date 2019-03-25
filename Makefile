build:
	rm -rf dist
	npm run build

transpile:
	rm -rf dist
	npm run transpile

dev:
	npm run dev

lint:
	npm run eslint .

test:
	npm run test

test-watch:
	npm run test -- --watchAll

publish:
	npm publish