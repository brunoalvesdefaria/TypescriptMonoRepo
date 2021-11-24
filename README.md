# TypescriptMonoRepo

## Introduction

This repository was created with the intention to solve the issue with Visual Studio Code not recognizing types exported by local packages linked using yarn.

Please see the [Stack Overflow question](https://stackoverflow.com/questions/70103082/how-can-i-make-vs-code-recognize-typescript-declarations-between-mono-repo-packa) for more details.

## Running the project

To run the project and observe the issue, please follow these steps:

- Using the terminal, go to the project root directory and run `yarn`. This will install the dependencies for the root project and the `library` and the `web-ui` packages.
- After the dependencies are installed, go to the library package's directory and build the package:
  - `cd shared/lib`
  - `yarn build`
- Now open the file `ui/web/src/App.tsx` and observe the Visual Studio Code error highlighting over `ParamType` type. Hover over it and the message `Cannot find name 'ParamType'.ts(2304)` is displayed.
- As a quick fix, Visual Studio suggests me to manually import the `ParamType` type by adding `import { ParamType } from 'library/src/types';`. I don't think it's practical considering that as the library grows, a lot of imports would be needed from the consumer packages.

## Watching for changes

In order to run the project in watch mode, please follow these steps:

- Using the terminal, go to the project root directory and run `yarn`. This will install the dependencies for the root project and the `library` and the `web-ui` packages.
- After the dependencies are installed, go to the library package's directory and run the watch command:
  - `cd shared/lib`
  - `yarn watch`
- Open another terminal instance, go to the web UI package's directory and run the start command:
  - `cd shared/lib`
  - `yarn start`
