INSTALLATIONS:

- git clone repo
- cd cloned repo
- npx create-react-app .
- npm install react-scripts@latest
- npm install --save-dev prop-types
- npm install --save-dev prettier
- npm install --save-dev husky@4.3.7
- npm install --save-dev lint-staged@9.4.2
- folder src => delete all except index.js and App.js
- folder public => delete all except index.html
- in index.html comment link with manifest
- create file in project root .huskyrc: : { "hooks": { "pre-commit":
  "lint-staged" } }
- create file in project root .lintstagedrc: { "src/**/\*.{json,css,scss,md}":
  ["prettier --write"], "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write",
  "eslint --fix"] }
- create file in project root .prettierrc.json => { "printWidth": 80,
  "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true,
  "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false,
  "arrowParens": "avoid", "proseWrap": "always" }
- npm install --save-dev modern-normalize (in index.js => import
  'modern-normalize/modern-normalize.css')
- import React from 'react' in each simple component
- import React, { Component } from "react"; => for classes
- FOR SASS => npm install --save-dev sass => POSSIBLE ERROR => npm cache clear
  --force, npm install --save-dev sass
- create .env=> SASS_PATH=src
- npm install --save-dev classnames ( optional for dynamic classes )
- npm start => to develop
- FOR FORMS ADDITIONAL: => npm install --save-dev uuid => import uuid from
  'uuid' => id: uuid() => POSSIBLE ERROR => Attempted import error: 'uuid' does
  not contain a default export (imported as 'uuid') => import { v1 as uuid }
  from 'uuid';

  ***

- DEPLOY

- npm install --save-dev gh-pages
- in package.json ( after -- "private": true ) => - scripts => "homepage":
  "https://myusername.github.io/my-app"add to package.json => change to
  =>"homepage": "https://erpua.github.io/goit-react-hw-01-components";
- in package.json => add scripts: "predeploy": "npm run build", "deploy":
  "gh-pages -d build" => "scripts": { "start": "react-scripts start", "build":
  "react-scripts build", "test": "react-scripts test", "eject": "react-scripts
  eject", "predeploy": "npm run build", "deploy": "gh-pages -d build" },
- git add . / commit / push
- npm run deploy
- add repository root to GitHub Website link
