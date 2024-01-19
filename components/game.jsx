import React, { useState, useEffect } from "react";

export const Game = ({ name = "", id, publisher }) => {
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const hasExtension = /.png/.test(name);
  const parsedName = name.replace(".png", "");
  const gameTitle = id?.replace(" (PAL).png", "") || name;

  const imagePath = hasExtension
    ? `/${parsedName} (PAL).png`
    : `/${name} (PAL).png`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay(showModal)} />
      <div style={styles.modal(showModal)}>
        <button style={styles.closeButton} onClick={() => setShowModal(false)}>
          ✖
        </button>
        Attention! All data are fake. This is just a very simple project to
        serve for studies purposes! :)
      </div>
      <div style={{ width: "780px" }}>
        <h1 style={styles.title}>{gameTitle.toLowerCase()}</h1>
        <p style={styles.publisher}>
          Publisher: {isClient ? publisher : "Publisher Not Found"}
        </p>
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
      <button style={styles.button} onClick={() => setShowModal(!showModal)}>
        More information
      </button>
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
  publisher: {
    fontFamily: "Monaco",
    fontSize: "18px",
    color: "#340682",
    textAlign: "center",
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
  overlay: (showModal) => ({
    display: showModal ? "block" : "none",
    width: "100%",
    height: "100%",
    margin: "auto",
    position: "absolute",
    zIndex: 1,
    background: "rgb(50 50 50 / 60%)",
  }),
  modal: (showModal) => ({
    display: showModal ? "block" : "none",
    fontFamily: "sans-serif",
    width: "300",
    border: "1px solid gray",
    padding: 40,
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    zIndex: 2,
    background: "white",
    boxShadow: "4px 3px 4px 0px rgba(0, 0, 0, 0.4)",
    lineHeight: 1.5,
  }),
  button: {
    border: "none",
    padding: "16 12",
    background: "#340682",
    color: "white",
    fontSize: 18,
    cursor: "pointer",
  },
  closeButton: {
    border: "none",
    padding: 4,
    background: "transparent",
    fontSize: 28,
    cursor: "pointer",
    position: "absolute",
    top: 10,
    right: 10,
  },
};
