import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import path from "path";
import fs from "fs";

import { Home } from "./components/home";
import { Game } from "./components/game";

const server = express();
const port = 3000;
// let cache = {};

const getGameListMiddleware = async (req, res, next) => {
  const response = await fetch(
    "https://6598072c668d248edf23f18a.mockapi.io/snesdb/games",
  );
  // cache = response;
  const gameListData = await response.json();

  res.gameListData = gameListData;
  next();
};

const sendGameListReponseMiddleware = async (req, res) => {
  console.log(res.gameListData[0].publisherName);

  const game = renderToString(
    <Game
      name={req.params.name}
      publisher={res.gameListData[0].publisherName}
    />,
  );

  await res.send(
    `<html><body><div id="root">${game}</div><script src="/hydration.js"></script></body></html>`,
  );
};
server.use(express.static(__dirname + "/public"));

server.use("/client", (req, res) => {
  res.send(`<html><body><script src="/main.js"></script></body></html>`);
});

server.use("/game/:name", [
  getGameListMiddleware,
  sendGameListReponseMiddleware,
]);

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
