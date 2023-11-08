import React from "react";

export const Game = ({ name = "", id }) => {
  const hasExtension = /.png/.test(name);
  const parsedName = name.replace(".png", "");
  const gameTitle = id?.replace(" (PAL).png", "") || name;

  const imagePath = hasExtension
    ? `/${parsedName} (PAL).png`
    : `/${name} (PAL).png`;

  return (
    <div style={styles.container}>
      <div style={{ width: "780px" }}>
        <h1 style={styles.title}>{gameTitle.toLowerCase()}</h1>
        <div style={{ position: "relative" }}>
          <div style={styles.imageBackground}></div>
          <div style={styles.topEdge}></div>
          <div style={styles.bottomEdge}></div>
          <img
            src={id || imagePath}
            alt={id || name}
            style={{ transform: "skewX(10deg)" }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    placeItems: "center",
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
  imageBackground: {
    background: "black",
    transform: "skewX(10deg)",
    width: "100%",
    height: "100%",
    zIndex: "-1",
    position: "absolute",
    right: "-6%",
    top: "36px",
  },
  topEdge: {
    zIndex: "-1",
    position: "absolute",
    right: "4px",
    top: "15px",
    width: "0",
    height: "0",
    borderLeft: "30px solid transparent",
    borderRight: "30px solid transparent",
    borderTop: "30px solid black",
    transform: "rotate(38deg)",
  },
  bottomEdge: {
    zIndex: "-1",
    position: "absolute",
    left: "50px",
    bottom: "-21px",
    width: "0",
    height: "0",
    borderLeft: "31px solid transparent",
    borderRight: "30px solid transparent",
    borderTop: "30px solid black",
    transform: "rotate(-143deg)",
  },
};
