[<< Back to Node JS modular application boilerplate README](https://github.com/FSVD/NodeJS-modular-application-boilerplate)

# Development environment setup

### Code editor: Visual Studio Code

Install [NodeJs](https://nodejs.rg/").<br>
Install Visual Studio Code [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions using following commands in VSCode shell.

- code --install-extension dbaeumer.vscode-eslint
- code --install-extension esbenp.prettier-vscode

#### Edit VSCode settings (File > Preferences > Settings) and add following configuration:

```
"editor.formatOnSave": true,
"[javascript]": {
"editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"prettier.disableLanguages": ["js"] // Disable Prettier code formatting fon javascript files to let only ESlint to format JS files
```

<br>

# Project setup

Install [Nodemon](https://nodemon.io/) package for your project using following command in VSCode shell.

- npm i -D nodemon

<i>To install Nodemon globally execute: "npm i -g nodemon" command</i>

#### Edit project "package.json" script section in order to use nodemon in development. (<i>Never use Nodemon in production</i>)

```
"scripts": {
    "dev": "nodemon index.js"
  },
```

Install [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) packages for your project using following command in VSCode shell.

- npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-html eslint-plugin-import eslint-plugin-prettier babel-eslint prettier

#### Create an ".eslintrc.js" file into your project root folder and copy/paste following content:

```
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/named':0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 2,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { 'allow': ['warn', 'log'] }],
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'import/prefer-default-export': 'off',

    // allow paren-less arrow functions
    'arrow-parens': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

```

Install [Babel](https://babeljs.io/) JavaScript compiler packages for your project using following command in VSCode shell.

- npm i -D @babel/core @babel/cli @babel/preset-env @babel/node babel-plugin-dynamic-import-node-babel-7

#### Create an ".babelrc" file into your project root folder and copy/paste following content:

```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["dynamic-import-node-babel-7"]
}
```

#### Edit "package.json" script section in order to use babel in dev and start commands:

```
"scripts": {
    "dev": "nodemon --exec babel-node index.js",
    "start": "babel-node index.js"
  },
```

<br>

# Debug configuration setup

Project setup include Nodemon package in order to restart automatically your server when source code changes, and babel transpiler whitch allows you to use ES6 syntax. Use following configuration in <strong>launch.json</strong> file to debug project.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "NodeJS-modular-application-boilerplate-DEBUG",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
      "runtimeArgs": [
        "--nolazy",
        "--exec",
        "${workspaceFolder}/node_modules/.bin/babel-node"
      ],
      "program": "${workspaceFolder}/index.js",
      "restart": true,
      "protocol": "inspector",
      "sourceMaps": true,
      "showAsyncStacks": true,
      "console": "integratedTerminal",
      "skipFiles": [
        "/node_modules/**/*.js",
        "<node_internals>/**/*.js",
        "<eval>/**/*.js"
      ]
    }
  ]
}
```

<br>

# Test configuration setup

Install [Mocha](https://mochajs.org/) testing framework for your project using following command in VSCode shell.

- npm i -D mocha

Install [Chai](https://www.chaijs.com/) assertion library for your project using following command in VSCode shell.

- npm i -D chai

Install [Istanbul](https://istanbul.js.org/) test coverage package for your project using following command in VSCode shell.

- npm i -D nyc

#### Create a "mocha.opts" file into your project root folder and copy/paste following content:

```
./**/*.spec.js
--recursive
--exclude ./node_modules/**/*.js
```

#### Add following commands to "package.json" script section:

```
"scripts": {
    "test": "mocha --opts ./mocha.opts --watch --require @babel/register",
    "coverage": "nyc mocha --opts ./mocha.opts --require @babel/register",
  },
```

To ensure your project pass all testing before committing changes install [pre-commit](https://www.npmjs.com/package/pre-commit) package using following command in VSCode shell.

- npm i -D pre-commit

#### Add a "pre-commit" attribute to "package.json" witch calls test command before committing changes:

```
"pre-commit": [
    "test"
  ],
```
