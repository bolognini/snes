import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Game } from "./components/game";

const root = document.getElementById("root");
hydrateRoot(root, <Game />);
