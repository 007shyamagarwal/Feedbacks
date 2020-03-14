# Checkout Front End Assignemt Using React and Redux.

# Overview 
Front end for feedback form and animation image for reconciliation api

# Basic use cases are 
1. Users can submit feedbacks.
2. Users can see latest feedback posted.


## Technologies


| **Tech** | **Description** |
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.      |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).|
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     |
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). |
[Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node.  |
[ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. |
|[npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |
#
# To start the project just follow following steps 

1. Install node_modules dependencies via npm install 
2. Start the project by npm start 
3. You can start posting feedback form by filling form and submitting it.
4. All the fields are mandatory so make sure to fill all the details and correct email ID.
5. Since all the state chagnes are <strong>maintained in redux-state, so don't refresh the page otherwise</strong> all the changes will go.
6. For any queries  feel free to react me at 007shyamagarwal@gmail.com :smile:

#
# Project Folder structure

1. Organisms - Page level components with major functionality 
2. Atoms - Smaller independent components like button, input to support organisms.
3. Utils - Contains constants for project wide use and store logic.
4. Scss- project level sass files.
5. Apart from this everyone component has it's corresponding action and scss file in same folder.
