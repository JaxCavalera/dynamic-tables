# Dynamic Tables

## Introduction

Dynamic Tables is a proof of concept (POC) project that demonstrates how the fundamental scaffolding for a data driven table system can be implemented using React.

## Dev Notes

The project has the ability to take advantage of [MobX](https://mobx-react.js.org/state-local) for any global state management such as handling interactions between the heading items and table rows. This work has not yet been implemented but there are sufficient data-points included in the interfaces to easily support this additional work if desired.

The project is fully configured with **typescript**, **eslint-typescript**, **styled-components** and is compatible with vscode plugins such as **prettier** and **vscode-styled-components**.

The file structure is as follows:

- **\*.tsx files** - are used for housing React functional components (bare minimum business logic)
- **\<ComponentName\>-styles.ts files** - are for unique (not shared) styled components
- **\<ComponentName\>-logic.ts files** - are where component specific business logic is kept
- **\<ComponentName\>-models.ts files** - are where component specific interfaces, enums and other typescript schemas are kept for use as named exports

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
