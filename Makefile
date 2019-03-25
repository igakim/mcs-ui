build:
	rm -rf examples/dist
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

test-coverage:
	npm run test -- --coverage

publish:
	npm publish --access=public

deploy:
	npm run build
	npm run deploy