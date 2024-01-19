import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import path from "path";
import fs from "fs";

import { Home } from "./components/home";
import { Game } from "./components/game";

const server = express();
const port = 3000;
// [TO-DO] let cache = {};

const getGameListMiddleware = async (req, res, next) => {
  const response = await fetch(
    "https://6598072c668d248edf23f18a.mockapi.io/snesdb/games",
  );
  // [TO-DO] cache = response;
  const gameListData = await response.json();

  res.gameListData = gameListData;
  next();
};

const sendGameNameMiddleware = async (req, res) => {
  const game = renderToString(<Game name={req.params.name} publisher="" />);

  await res.send(
    `<html><body><div id="root">${game}</div><div id="serverData">${JSON.stringify(
      { name: req.params.name, publisher: "" },
    )}</div><script src="/hydrationName.js"></script></body></html>`,
  );
};

const sendGameIdMiddleware = async (req, res) => {
  const queryParameterId = req.query.id;
  const id = queryParameterId - 1 || 0;

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

        const gamePage = renderToString(
          <Game
            id={files[id]}
            publisher={res.gameListData[id - 1].publisherName}
          />,
        );

        res.send(
          `<html><body><div id="root">${gamePage}</div><div id="serverData">${JSON.stringify(
            {
              id: files[id],
              publisher: res.gameListData[id - 1].publisherName,
            },
          )}</div><script src="/hydrationId.js"></script></body></html>`,
        );
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
};

server.use(express.static(__dirname + "/public"));

server.use("/client", (req, res) => {
  res.send(`<html><body><script src="/main.js"></script></body></html>`);
});

server.use("/game/:name", [getGameListMiddleware, sendGameNameMiddleware]);

// Game rout with ID on query parameter
server.use("/game", [getGameListMiddleware, sendGameIdMiddleware]);

server.use("/", (_, res) => {
  res.send(renderToString(<Home />));
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
