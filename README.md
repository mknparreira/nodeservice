
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
5. Database + TypeORM **(done)**
6. Security Practices **(in progress)**
7. Authorization with Passport + Roles & Permissions 
8. Documentation Open API + Swagger 
9. Others issues
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
- [Config](htttps://github.com/node-config/node-config)
- [Dotenv](https://github.com/motdotla/dotenv)
- @types/config
- @types/dotenv
## Commands
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
- [Microsoft Tsringe](https://github.com/Microsoft/tsyringe)
- [Reflect Metadata](https://github.com/rbuckton/reflect-metadata)
## Commands
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

## Commands
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
- Integrated with TypeORM
- Added MySQL
- Added Validation model using Class Validator package
## Packages installed
- [Typeorm](https://typeorm.io/)
- [MySQL 2](https://github.com/sidorares/node-mysql2)
- [Class Validator](https://github.com/typestack/class-validator)
- [Class Transformer](https://github.com/typestack/class-transformer)
## Commands
```bash
npm i typeorm
npm i mysql2 @types/mysql
npm i class-validator -D
npm i class-transformer
```
## Configuration
```bash
npx typeorm init
```
# 6 - Security Practices
## Features
- Integrated with Helmet
- Integrated with ESLint Plugin Security
- Protects from DDoS attacks
- Prevent Brute Force attacks
- Limit concurrent requests using a middleware Express Rate Limit
- Enabled CORS

## Packages installed
- [Helmet](https://helmetjs.github.io/)
- [ESLint Plugin Security](https://github.com/nodesecurity/eslint-plugin-security)
- [Express Rate Limiter Flexible](https://github.com/animir/node-rate-limiter-flexible)
- [CORS](https://github.com/expressjs/cors)

## Commands
```bash
npm i eslint-plugin-security -D
npm i helmet
npm i rate-limiter-flexible
npm i cors
npm i -D @types/cors
```
# 7 - Authorization with Passport + Roles & Permissions
## Features
- Integrated with Passport + JWT (Jason Web Tokens)
- Users password with Bcrypt
- Support blocklisting JWTs
## Packages installed
- [Passaport](https://github.com/jaredhanson/passport)

## Commands
Coming soon
# 8 - Documentation Open API + Swagger
## Features
- Coming Soon
## Packages installed
Coming soon

# 9 - Future issues
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
- [Diagnose Performance](https://clinicjs.org/)
- [PM2](https://github.com/Unitech/pm2)
- [Validate JSON Schema](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/security/validation.md)
- [Blacklist JWT](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/security/expirejwt.md)

# Reference
- [Node Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Node Best Practices](https://softwareontheroad.com/ideal-nodejs-project-structure/)
- [Winston Quick Start](https://github.com/winstonjs/winston/blob/master/examples/quick-start.js)
- [Write README.md](https://stackedit.io/app)
- [Error Handling in Express](https://medium.com/@utkuu/error-handling-in-express-js-and-express-async-errors-package-639c91ba3aa2)
- [Libraries you should use for every Node Express project](https://dev.to/wizbuntu/top-15-libraries-you-should-use-for-every-node-express-backend-project-3k23)
- [Handling errors in Express async middleware](https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware)
- [TypeScript Decorators](https://stackoverflow.com/questions/49352943/how-to-get-parameters-name-within-decorators)
- [Example Boilerplate](https://github.com/vassalloandrea/express-template/)
- [Example Boilerplate](https://github.com/santoshshinde2012/node-boilerplate)
- [Example Boilerplate](https://github.com/bartosz-io/budget-node)
- [Example Boilerplate](https://github.com/Rocketseat/umbriel)
- [Example Boilerplate](https://github.com/phatvo21/task-management)
- [Brute Force Protectiion](https://medium.com/@animirr/brute-force-protection-node-js-examples-cd58e8bd9b8d)