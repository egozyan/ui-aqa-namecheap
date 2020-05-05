# NC-UI-AQA

## Introduction

- This project created due to simplify the UAT/PROD validation process and save QA team time by providing FE AQA tests.
- For this purpose we use [Test Cafe](https://devexpress.github.io/testcafe/).

## Installation

- Install Node.js v11.11.0 or higher

- **FOR TESTS DEVELOPMENT ONLY** Download and setup IDE for working with TypeScript ([Webstorm](https://www.jetbrains.com/webstorm/),
  [Visual Studio Code](https://code.visualstudio.com/),
  [Atom IDE](https://ide.atom.io/) or similar)
  
- Clone project from repository
  
- Navigate to the project in Terminal or Power Shell `cd PATH_TO_PROJECT`
  
- Update npm

```bash
npm i -g npm
```

- Install dependencies

```bash
npm install typescript
npm install testcafe
npm install prettier
```

## Start test runner for QA

- Run one of specified commands `npm run test:chrome` in PowerShell (Windows OS) or Terminal (MacOS) from the root folder where automation project is located

This command will run all test in _Chrome_ browser on Stage from your computer except tests that have some restrictions to be run

## Handle test output

Each test have 3 output types:

- Test successful
- Test assertion failed - means, that actual value not the same as expected
- Test run error - means, that you have syntax or logic mistakes in test code.
  In this case your tests will stop, until you fix it