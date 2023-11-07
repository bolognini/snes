import React from "react";

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SNES</h1>
      <p style={styles.description}>
        {`go to`}
        <a
          style={styles.link}
          href="/game?id=378"
        >{` /game?id={number between 1 and 822}`}</a>
      </p>
      <p style={styles.description}>
        {`or go to`}
        <a
          style={styles.link}
          href="/game/Super Mario World"
        >{` /game/{name of the game}`}</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Monaco",
    fontSize: "72px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    color: "#251b1b",
    textAlign: "center",
    textShadow: "3px 3px 0 red, -3px -3px 0 aqua",
  },
  description: {
    fontFamily: "Monaco",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    color: "#251b1b",
    textAlign: "center",
  },
  link: {
    color: "#ff5076",
    textDecoration: "none",
  },
};
