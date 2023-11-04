# SNES 👾

<p align="center"><img src="assets/icon.png" alt="SNES console" width="60"></p>
<p align="center">&laquo;<b>A Fullstack project to render SNES box cover arts.</b>&raquo;</p>
<p align="center">SNES is a very simple Fullstack project, including a Backend for Frontend API and a React application that lists SNES box cover arts</p>
<br />
<br />

## Description

SNES was created for study purposes - The objective is using it as a simple project example to use in a mentorship I'm having in my current workplace.

## Project
SNES has just X endpoints to receive data.

**GET** - `/TBD/:TBD` <br/>

### Installing

To run the project on development mode, you just need an LTS Node version installed (v20.9.0 or higher recommended), and Yarn for managing the packages. If you haven't it yet, you can follow the [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page.

With Node and Yarn installed, run the commands below. They will clone the project on the current folder and download all the project dependencies.

```shell
git clone https://github.com/bolognini/snes.git
cd snes
yarn
```

Next, please open a new terminal window. One window will listen to any changes made on JSX files that needs to be compiled, using ESBuild `--watch` listener, and the other window will listen to any changes made on the server, using the nodemon package.

```shell
yarn build:watch
```

```shell
yarn dev
```

With that, in a few seconds the server can be accessed by Insomnia, Postman, cURL or on any program that uses HTTP communication. The client is also accessible in the browser on `localhost:3000`.

### Built With

* [ESBuild](https://esbuild.github.io/) - An extremely fast bundler for the web
* [Nodemon](https://nodemon.io/) - A monitor for any changes in the source code
* [Express](https://expressjs.com/) - Web framework for Node.js
