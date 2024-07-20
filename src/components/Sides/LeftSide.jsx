import React from "react";
import styles from "./Side.module.scss";
import BookBlue from "../../assets/GoogleBookBlue.svg";
import BookYellow from "../../assets/GoogleBookYellow.svg";
import BookGreen from "../../assets/GoogleBookGreen.svg";
import BookRed from "../../assets/GoogleBookRed.svg";

const LeftSide = () => {
  return (
    <div className={styles.bar}>
      <img src={BookBlue} style={{transform:"rotate(35deg)"}} />
      <h1>X</h1>
      <img src={BookRed} style={{transform:"rotate(-35deg)"}}/>
      <h1>O</h1>
      <img src={BookYellow} style={{transform:"rotate(35deg)"}}/>
      <h1>X</h1>
      <img src={BookBlue} style={{transform:"rotate(-35deg)"}}/>
      <h1>O</h1>
      <img src={BookGreen} style={{transform:"rotate(35deg)"}}/>
      <h1>:D</h1>
      <img src={BookRed} style={{transform:"rotate(-35deg)"}}/>
    </div>
  );
};
 export default LeftSide;