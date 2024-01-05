# SNES 👾

<p align="center"><img src="assets/icon.png" alt="SNES console" width="60"></p>
<p align="center">&laquo;<b>A Fullstack project to render SNES box cover arts</b>&raquo;</p>
<p align="center">SNES is an extremely simple Fullstack project, including a Backend for Frontend API and a React application that lists SNES box cover arts</p>
<br />
<br />

## Description

SNES was created for study purposes - The objective is to use it as a simple project example for a mentorship I'm having in my current workplace. The objective is to go back to the foundation and understand how things work under the hood by trying to replicate it from scratch. It includes mostly understanding how server and client connect with each other, and how cache, hydration, and SSR work.

## Project

SNES has just 2 routes:

- `/game?id`: The id needs to be between 1 and 822 <br/>
- `/game/:name`: The name needs to be exact the same name of the game <br/>

### Installing

To run the project on development mode, you just need an LTS Node version installed (v20.9.0 or higher recommended), and Yarn for managing the packages. If you haven't it yet, you can follow the [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page.

With Node and Yarn installed, run the commands below. They will clone the project on the current folder and download all the project dependencies.

```shell
git clone https://github.com/bolognini/snes.git
cd snes
yarn
```

Next, please open a new terminal window. One window will listen to any changes made on JSX files that needs to be compiled, using ESBuild `--watch` listener, and the other window will listen to any changes made on the server, using the nodemon package.

#### First Terminal Instance

```shell
yarn build:watch
```

#### Second Terminal Instance

```shell
yarn dev
```

With that, in a few seconds the server can be accessed by Insomnia, Postman, cURL or on any program that uses HTTP communication. The client is also accessible in the browser on `localhost:3000`.

### Built With

- [ESBuild](https://esbuild.github.io/) - An extremely fast bundler for the web
- [Nodemon](https://nodemon.io/) - A monitor for any changes in the source code
- [Express](https://expressjs.com/) - Web framework for Node.js
