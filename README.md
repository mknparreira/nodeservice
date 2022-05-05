
# Node.js with TypeScript Boilerplate
Boilerplate for Node.js applications written with TypeScript  
## Purpose
Start server application with Node.js and TypeScript.
## Roadmap
This project will be divided by phases:
1. Instalation + Configuration **(done)**
2. Project Structure **(done)**
3. User component + Winston Logger + DI Container **(done)**
4. Unit Test Cases (Jest) + Supertest + Debugging right way **(done)**
5. Database + TypeORM **(done)**
6. Security Practices **(done)**
7. Open API Documentation with Swagger **(done)**
8. Authorization with JWT + Bcrypt **(in progress)**
9. Monitoring + Perfomance
10. Some issues
# 1 - Instalation + Configuration
## Features
- Quick start
- Integrated Linters and Code Style --- ESLint and Prettier (with their plugins)
- Added Express
- Added TypeScript
- Added Nodemon with Ts Node
## Packages installed
| Package | Description |
|---------|-------------|
|[Express](https://expressjs.com/)                                              | Node.js web framework                         |
|[TypeScript](https://www.typescriptlang.org/)                                  | JavaScript with syntax for types              |
|[Nodemon](https://nodemon.io/)                                                 | Restarting application when file changes are detected |
|[ESLint](https://eslint.org/)                                                  | Linter JavaScript                             |
|[Ts Node](https://github.com/TypeStrong/ts-node)                               | Execute TypeScript without precompiling       |
|[Prettier](https://prettier.io/)                                               | Code formatter                                |
|[Eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)   | Turns off unnecessary rules or conflict with Prettier |
|[Eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)   | ESLint plugin for Prettier formatting         |
|[Eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)         | Additional ESLint's rules for Node.js         |
|[@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)              | Tooling which enables ESLint to support TypeScript |
|@types/node                                                                    | Types for Node                                |
|@types/express                                                                 | Types for Express package                     |
 
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
- The project will be structured by components
## Packages installed
| Package | Description |
|---------|-------------|
|[Node Config](htttps://github.com/node-config/node-config)                     | Organizes hierarchical configurations for your app |
|[Dotenv](https://github.com/motdotla/dotenv)                                   | Loads environment variables from .env file    |
|@types/config                                                                  | Types for Config package                      |
|@types/dotenv                                                                  | Types for Dotenv package                      |
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
| Package | Description |
|---------|-------------|
| [Http Status Codes](https://github.com/prettymuchbryce/http-status-codes)     | Constants enumerating the HTTP status codes   |
| [Winston Logger](https://github.com/winstonjs/winston)                        | Logger for Node.js                            |
| [Microsoft Tsringe](https://github.com/Microsoft/tsyringe)                    | Resolve dependency injection                  |
| [Reflect Metadata](https://github.com/rbuckton/reflect-metadata)              | Prototype for a Metadata Reflection API for ECMAScript |
## Commands
```bash
npm i winston
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
- Configuring Visual Studio debug
## Packages installed
| Package | Description |
|---------|-------------|
| [Jest](https://github.com/facebook/jest)                                      | JavaScript Testing                  |
| @types/jest                                                                   | Types for Jest                      |
| [Ts-Jest](https://github.com/kulshekhar/ts-jest)                              | Allows Jest to transpile TypeScript |
| [Supertest](https://github.com/visionmedia/supertest)                         | HTTP assertion library              |
| [Eslint Plugin Jest](https://github.com/jest-community/eslint-plugin-jest)    | ESLint plugin for Jest              |

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
Visual Studio Debug - launch.json
```javascript
{
    "configurations": [

        {
            "type": "node-terminal",
            "name": "Node Debug",
            "request": "launch",
            "command": "npm run start:inspect",
            "cwd": "${workspaceFolder}",
            "console": "integratedTerminal"
        }
    ]
}
```
# 5 - Database + TypeORM
## Features
- Integrated with TypeORM
- Added MySQL
- Added Validation model using Class Validator package
## Packages installed
| Package | Description |
|---------|-------------|
| [Typeorm](https://typeorm.io/)                                                | ORM                       |
| [MySQL 2](https://github.com/sidorares/node-mysql2)                           | MySQL driver              |
| @types/mysql                                                                  | Types for MySql package   |
| [Class Validator](https://github.com/typestack/class-validator)               | Decorator validation data |
| [Class Transformer](https://github.com/typestack/class-transformer)           | Transform class as object |

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
| Package | Description |
|---------|-------------|
| [Helmet](https://helmetjs.github.io/)                                                 | Help secure Express apps with various HTTP headers |
| [ESLint Plugin Security](https://github.com/nodesecurity/eslint-plugin-security)      | ESLint rules for Node Security |
| [Express Rate Limiter Flexible](https://github.com/animir/node-rate-limiter-flexible) | Limits number of actions by key and protects from DDoS and brute force attacks |
| [CORS](https://github.com/expressjs/cors)                                             | Node.js CORS middleware |

## Commands
```bash
npm i eslint-plugin-security -D
npm i helmet
npm i rate-limiter-flexible
npm i cors
npm i -D @types/cors
```
# 7 - Open API Documentation with Swagger
## Features
- Swagger
- Open API 3.0.1
## Packages installed
| Package | Description |
|---------|-------------|
| [Swagger](https://github.com/scottie1984/swagger-ui-express)  | Middleware to Swagger UI |

## Commands
```bash
npm i swagger-ui-express
npm i -D @types/swagger-ui-express
```
# 8 - Authorization with JWT + Bcrypt
## Features
- Integrated with JWT (Jason Web Tokens)
- Token integrated with Bcrypt
## Packages installed
| Package | Description |
|---------|-------------|
| [JSON Web Token](https://github.com/auth0/node-jsonwebtoken) | JsonWebToken implementation |

## Commands
```bash
npm i jsonwebtoken
npm i -D @types/jsonwebtoken
```
# 9 - Monitoring + Perfomance
## Features
- Monitoring application using Pm2
- Gzip Compression
- Diagnose Perfomance
- Caching strategy
- Added HTTP Header X-Response-Time *Added
## Packages installed
| Package | Description |
|---------|-------------|
| [Cache API Request with Redis](https://javascript.plainenglish.io/how-to-cache-api-requests-with-redis-and-node-js-385cee0edff7) |               |
| [Gzip Compression](https://github.com/expressjs/compression) | Node.js compression middleware |
| [Diagnose Performance](https://clinicjs.org/) |  |
| [PM2](https://github.com/Unitech/pm2) |  |
| [Express Status Monitor](https://github.com/RafalWilinski/express-status-monitor) |  |
| [Response Time](https://github.com/expressjs/response-time) | Added HTTP Header X-Response-Time |
| Transaction ID  |  |

## Commands
```bash
npm i response-time
npm i -D @types/response-time
```

# 10 - Future issues
## Features
| Package | Description |
|---------|-------------|
| Cluster |             |
| Closures |            |
| [Publisher Subscriber Models (Pub/Sub)](https://faye.jcoglan.com/) |  |
| [Husky](https://github.com/typicode/husky) |  |
| [Validate JSON Schema](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/security/validation.md) |  |
| [Sinon](https://sinonjs.org/) | Spies, Stubs and Mocks |
| Cron Jobs |           |
| Conditional Requests Headers | Last-Modified, Etag, If-Modified-Since, If-None-Match |
| Fixed some issues to prepare project for production. | |
| [Blacklist JWT](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/security/expirejwt.md) | |

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
- [Example Boilerplate](https://github.com/santiq/bulletproof-nodejs)
- [Example Boilerplate](https://github.com/bartosz-io/budget-node)
- [Example Boilerplate](https://github.com/Rocketseat/umbriel)
- [Example Boilerplate](https://github.com/phatvo21/task-management)
- [Example Boilerplate](https://github.com/sahat/hackathon-starter)
- [Brute Force Protectiion](https://medium.com/@animirr/brute-force-protection-node-js-examples-cd58e8bd9b8d)
- [Node Express Helmet](https://betterprogramming.pub/nodejs-express-helmet-aa58c09c55c5)
- [Clean Architecture Node Use Case](https://github.com/royib/clean-architecture-node)
- [Better way to testing Middlwares](https://javascript.plainenglish.io/how-to-unit-test-express-middleware-typescript-jest-c6a7ad166e74)
- [JWT with Express](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)