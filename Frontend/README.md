

# FrontendAngular

## Recommended node version

The recommended node version should be v16.19.0 and can be found [here](https://nodejs.org/download/release/v16.19.0/).

## About the Frontend Monorepo

This project was generated using [Nx](https://nx.dev). You can find more information on [Nx Documentation](https://nx.dev/getting-started/intro). 

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

This repository is already configured for angular 14+ development.

### Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib --unit-test-runner karma` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@frontend-angular/mylib`.

### Development server

Run `npx nx serve app-demo` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npx nx run app-demo:test` to execute the unit tests use Jasmine and Karma.

Run `nx affected:test` to execute the unit tests affected by a change.

For code coverage, use `npx nx run app-demo:test -- --code-coverage --no-watch`. 

This commands are already present on package.json as scripts for test and coverage.

Running coverage commands also gives a HTML report at `./coverage/apps/app-demo/index.html`.

The recommendation is to pursue at least 90% of code coverage. 

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Structure organizations

The base structure of a bounded context should be as the following example: 

```
src
  group1/
    pages
    components
    directives
    pipes
    service
    models
    group1.module.ts
    group1.routing.ts
```

For instance, considering a bounded context of `patients`: 

```
src
  patients/
    pages
      list-patients.component.ts
      list-patients.component.html
      list-patients.component.spec.ts
      list-patients.component.less
    components
      create-patient
        create-patient.component.ts
        create-patient.component.html
        create-patient.component.spec.ts
        create-patient.component.less
    directives
    pipes
    services
    resources
    models
    patients.module.ts
    patients.routing.ts
```

This structure is valid for using on applications and libraries.

## Libraries organization

Libraries are organized by scope into `libs` directory. 

Example:

```
/libs/<scope-1>/<lib-name>
/libs/<scope-1>/<lib-name>

/libs/<scope-2>/<lib-name>
/libs/<scope-2>/<lib-name>
```

### Libraries Scope

The possible scopes of libraries can be:

- a logical scope to represent a semantically similar group  
- segregation by directories

The goal is to provide insights about the logical part for:

- all team members to instantly identify if the scope can or cannot be used by another library or application
- the library mantainers to easily identify what applications and libraries can depend on and are aware of the impact on changes

# Creating a new ui library

To create a new ui component library you can use the following command:

```
# npx nx generate @nrwl/angular:lib common/ui

```

The output should be something similar to:

```
? Which stylesheet format would you like to use? LESS         [ http://lesscss.org     ]
CREATE libs/common/ui/README.md (142 bytes)
CREATE libs/common/ui/tsconfig.lib.json (408 bytes)
CREATE libs/common/ui/tslint.json (256 bytes)
CREATE libs/common/ui/src/index.ts (40 bytes)
CREATE libs/common/ui/src/lib/common-ui.module.ts (164 bytes)
CREATE libs/common/ui/tsconfig.json (123 bytes)
CREATE libs/common/ui/jest.config.js (357 bytes)
CREATE libs/common/ui/tsconfig.spec.json (233 bytes)
CREATE libs/common/ui/src/test-setup.ts (30 bytes)
UPDATE angular.json (12708 bytes)
UPDATE nx.json (639 bytes)
UPDATE tsconfig.json (703 bytes)
```

Given the use case of creating three new components at the `common/ui`, the following commands should do the job:

```
# npx ng generate component file-list  --project=common/ui --export
# npx ng generate component image-capture  --project=common/ui --export
# npx ng generate component image-editor  --project=common/ui --export

```

With the output:

```
CREATE libs/common/ui/src/lib/file-list/file-list.component.less (0 bytes)
CREATE libs/common/ui/src/lib/file-list/file-list.component.html (24 bytes)
CREATE libs/common/ui/src/lib/file-list/file-list.component.spec.ts (643 bytes)
CREATE libs/common/ui/src/lib/file-list/file-list.component.ts (296 bytes)
```
