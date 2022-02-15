# Node.js + TypeScript service boilerplate
My Node.js + TypeScript boilerplate project

This project will be divided by phases. 
1. Instalation & Configuration  **(done)**
2. Organization **(progress)**
3. Fake data to service consume
4. Modules + Documentation + TDD + Logs + Debug right way
5. Database + Authorization + Roles & Permissions + Security

# 1 - Instalation & Configuration

**Packages installed**: 
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
 
**Configuration**: npm init, tsc init
**Commands**: 
```bash
    npm init -y
    npm i typescript -D
    npm i @types/node -D
    tsc --init   (Gerar o ficheiro tsconfig.json)
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