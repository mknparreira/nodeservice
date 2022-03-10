
# Node.js with TypeScript Boilerplate
Skeleton for Node.js applications written in TypeScript  
## Purpose
 Start server application with Node.js and TypeScript.
## Roadmap
This project will be divided by phases.
1. Instalation & Configuration **(done)**
2. Project Structure **(done)**
3. User component + Winston Logger + DI Container **(done)**
4. Unit Test Cases (Jest) + Supertest + Debugging right way **(done)**
5. Database + TypeORM **(in progress)**
6. API Documentation Open API + Swagger
7. Authorization + Roles & Permissions + Security
8. Others issues
# 1 - Instalation & Configuration
## Features
- Quick start
- Integrated Lint and Code Style --- ESLint and Prettier (with their plugins)
- Added Express
- Added TypeScript
- Added Nodemon + Ts Node
## Packages installed
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemon](https://nodemon.io/)
- [ESLint](https://eslint.org/)
- [Ts Node](https://github.com/TypeStrong/ts-node)
- [Prettier](https://prettier.io/)
- [Eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [Eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Eslint-plugin-node](https://github.com/prettier/eslint-plugin-node)
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
tsc --init (Create tsconfig.json file)
npm i express
npm i @types/express -D
npm i eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier -D
npx eslint --init
npm i ts-node -D
npm i nodemon -D
npm i eslint-plugin-node -D
```

ESLint
```bash
How would you like to use ESLint?: **To check syntax and find problems**
What type of modules does your project use?: **JavaScript modules (import/export)**
Which framework does your project use?: **None of these**
Does your project use TypeScript?: **Yes**
Where does your code run?: **Node**
What format do you want your config file to be in?: **JSON**
```
# 2 - Project Structure 
## Features
- Integrated dotenv and config packages.
- Global Enviroment Object
- Structure by components
## Packages installed
- [Config](https://github.com/node-config/node-config)
- [Dotenv](https://github.com/motdotla/dotenv)
- @types/config
- @types/dotenv

```bash
npm i dotenv -D
npm i @types/dotenv -D
npm i config
npm i @types/config -D
```
# 3 - User component + Winston Logger + DI Container
## Features
- Integrated Winston Logger
- Integrated Microsoft Tsringe DI Container to resolve dependency injection
- Custom Error Handler
- Custom Exceptions Class
## Packages installed
- [Http Status Codes](https://github.com/prettymuchbryce/http-status-codes)
- [Winston Logger](https://github.com/winstonjs/winston)
- @types/winston
- [https://github.com/Microsoft/tsyringe](Microsoft Tsringe)
- [https://github.com/rbuckton/reflect-metadata](Reflect Metadata)

```bash
npm i winston
npm i @types/winston -D
npm i http-status-codes
npm i reflect-metadata
npm i tsyringe
```
# 4 - Unit Test Cases (Jest) + Supertest + Debugging right way
## Features
- Integrated Open API
- Creating first component with TDD (Jest)
- Using Ts-Jest (Preprocessor for Jest which allows Jest to transpile TypeScript)
- Using Supertest (SuperTest is an HTTP assertions library that allows you to test your Node.js HTTP)
## Packages installed
- [Jest](https://github.com/facebook/jest)
- [Ts-Jest](https://github.com/kulshekhar/ts-jest)
- [Supertest](https://github.com/visionmedia/supertest)

```bash
npm i jest -D
npm i @types/jest -D
npm i ts-jest -D
npm jest --init
npm i eslint-plugin-jest -D
npm i supertest @types/supertest -D

```

Generate Jest config
```bash
Would you like to use Typescript for the configuration file? ... yes
Choose the test environment that will be used for testing » node
Do you want Jest to add coverage reports? ... no
Which provider should be used to instrument code for coverage? » v8
Automatically clear mock calls, instances and results before every test? ... yes
```

# 5 - Database + TypeORM
## Features
- Coming Soon
## Packages installed
Coming soon

# 6 -  API Documentation Open API + Swagger
## Features
- Coming Soon
## Packages installed
Coming soon
# 7 - Authorization + Roles & Permissions + Security
## Features
- Integrated with Helmet
- Integrated with Passport
## Packages installed
Coming soon
# 8 - Future issues
## Features
- [Cache API Request with Redis](https://javascript.plainenglish.io/how-to-cache-api-requests-with-redis-and-node-js-385cee0edff7)
- [Gzip Compression](https://github.com/expressjs/compression)
The server can use gzip compression to reduce file sizes before sending them to a web browser. This will reduce latency and lag
```javascript
const express     = require('express');
const compression = require('compression');
const app         = express();
app.use(compression())
```
- Cluster
- [Publisher Subscriber Models (Pub/Sub)](https://faye.jcoglan.com/)
- [Husky](https://github.com/typicode/husky) 

# Reference
- [Winston Quick Start](https://github.com/winstonjs/winston/blob/master/examples/quick-start.js)
- [Write README.md](https://stackedit.io/app)
- [Error Handling in Express](https://medium.com/@utkuu/error-handling-in-express-js-and-express-async-errors-package-639c91ba3aa2)