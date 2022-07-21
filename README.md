# Sitemule Angular Component Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The storybook will automatically reload if you change any of the source files.


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
$ npm config set -- "//sitemule.dev/api/v4/projects/400/packages/npm/:_authToken" <Generated Token>
$ npm config set @sitemule:registry https://sitemule.dev/api/v4/projects/400/packages/npm/
$ rm -fr dist node_modules
$ npm ci
$ cd projects/ng-components
$ npm version <premajor | preminor | prepatch>
$ cd ../..
$ npm run build ng-components
$ cd dist/ng-components
$ npm publish --tag next
```
