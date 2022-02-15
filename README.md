
# Node.js with TypeScript Boilerplate
Skeleton for Node.js applications written in TypeScript  
## Purpose
 Start server application with Node.js and TypeScript.
## Roadmap
This project will be divided by phases.
1. Instalation & Configuration **(done)**
2. Organization **(progress)**
3. Fake data
4. Modules + Documentation (open API) + Unit & Integration Test Cases + Logs + Debug right way
5. Database 
6. Authorization + Roles & Permissions + Security
# 1 - Instalation & Configuration
## Features
- Quick start
- Integrated EsLint and Prettier (with their plugins)
-  Added Express
- Added TypeScript
- Added Nodemon + Ts Node
## Packages installed
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemon](https://nodemon.io/)
- [EsLint](https://eslint.org/)
- [Ts Node](https://github.com/TypeStrong/ts-node)
- [Prettier](https://prettier.io/)
- [Eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [Eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- @types/node
- @types/express
## Configuration
npm init, tsc init
## Commands
```bash
npm init -y
npm i typescript -D
npm i @types/node -D
tsc --init (Gerar o ficheiro tsconfig.json)
npm i express
npm i @types/express -D
npm i eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier -D
npx eslint --init
npm i ts-node -D
npm i nodemon -D
```

Eslint
> How would you like to use ESLint?: **To check syntax and find problems**
> What type of modules does your project use?: **JavaScript modules (import/export)**
> Which framework does your project use?: **None of these**
> Does your project use TypeScript?: **Yes**
> Where does your code run?: **Node**
> What format do you want your config file to be in?: **JSON**
# 2 - Organization
## Features
- Added dotenv and config packages.
- Global Enviroment Object
## Packages installed
- [Config](https://github.com/node-config/node-config)
- [Dotenv](https://github.com/motdotla/dotenv)
- @types/config
- @types/dotenv
# 3 - Fake data
## Features
- Coming Soon
## Packages installed
Coming soon
# 4 - Modules + Documentation (Open API) + Unit & Integration Test Cases + Logs + Debug right way
## Features
- Integrated Winston Logger
- Integrated Open API
- Creating first modules with TDD
- Common Error Handler
- Common Response Handler
## Packages installed
- [Http Status Codes](https://github.com/prettymuchbryce/http-status-codes)
- [Winston Logger](https://github.com/winstonjs/winston)
- @types/winston
- @types/http-status-codes
# 5 - Database
## Features
- Coming Soon
## Packages installed
Coming soon
# 6 - Authorization + Roles & Permissions + Security
## Features
- Coming Soon
## Packages installed
Coming soon