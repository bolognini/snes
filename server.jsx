import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import path from "path";
import fs from "fs";

import { Home } from "./components/home";
import { Game } from "./components/game";

const server = express();
const port = 3000;

server.use(express.static(__dirname + "/public"));

server.use("/server/bicho", [
  async (req, res, next) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const dados = await response.json();

    res.poke = dados;
    next();
  },
  async (req, res, next) => {
    res.json({
      id: res.poke.id,
      name: res.poke.name,
      height: res.poke.height,
      sprite: res.poke.sprites.front_default,
    });
  },
]);

server.use("/client", (req, res) => {
  res.send(`<html><body><script src="/main.js"></script></body></html>`);
  // fs.readFile("main.js", "utf8", (err, data) => {
  //   if (err) throw err;
  //   console.log(data);
  // });
});

server.use("/game/:name", (req, res) => {
  res.send(renderToString(<Game name={req.params.name} />));
});

server.use("/game", (req, res) => {
  const id = req.query.id;

  if (id && Number(id)) {
    const publicPath = path.join(__dirname, "/public");

    try {
      fs.readdir(publicPath, (error, files) => {
        if (error) {
          res.redirect("/");
          return console.err(err);
        }

        if (id >= files.length || id <= 0) {
          res.redirect("/");
          return console.error(`file id doesn't exist`);
        }
        res.send(renderToString(<Game id={files[id]} />));
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
});

server.use("/", (_, res) => {
  res.send(renderToString(<Home />));
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
