import React from "react";
import styles from "./Side.module.scss";
import BookBlue from "../../assets/GoogleBookBlue.svg";
import BookYellow from "../../assets/GoogleBookYellow.svg";
import BookGreen from "../../assets/GoogleBookGreen.svg";
import BookRed from "../../assets/GoogleBookRed.svg";

export const LeftSide = () => {
  return (
    <div className={styles.bar}>
      <img src={BookBlue} />
      <h1>x</h1>
      <img src={BookRed} />
      <h1>o</h1>
      <img src={BookYellow} />
      <h1>x</h1>
      <img src={BookBlue} />
      <h1>o</h1>
      <img src={BookGreen} />
      <h1>x</h1>
      <img src={BookRed} />
    </div>
  );
};
