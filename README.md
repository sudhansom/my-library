# SitemuleNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Publish new version of npm package
```
$ git checkout main
$ git pull
$ cd projects/ng-components
$ npm version <major | minor | patch>
$ git add package.json
$ git commit -m <Version> ex. 0.1.0
$ git tag <version> ex v0.1.0
$ git push 
$ git push --tags
```

## Publish prerelease version of npm package for testing purpose

* Visit https://sitemule.dev/-/profile/personal_access_tokens and create a new token with at least these scopes read_api, read_repository and write_repository.
* Run these commands with the generated token
```
$ npm config set -- "//sitemule.dev/api/v4/projects/18/packages/npm/:_authToken" <Generated Token>
$ npm config set @sitemule:registry https://sitemule.dev/api/v4/projects/18/packages/npm/
$ rm -fr dist node_modules
$ npm ci
$ cd projects/ng-components
$ npm version <premajor | preminor | prepatch>
$ cd ../..
$ npm run build:ngx:prod
$ cd dist/ng-components
$ npm publish --tag next
```
