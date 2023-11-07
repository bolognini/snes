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

        if (id > files.length || id <= 0) {
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
