import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import BooksPage from "./components/BooksPage/BooksPage";
import ItemContextProvider from "./contexts/ItemContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider";
import styles from "./Appstyle/App.module.scss"
import { LeftSide } from "./components/Sides/LeftSide";

function App() {
  return (
    <>
   <div className={styles.left}><LeftSide/></div>
      <div className={styles.mainapp}>
        <Header></Header>
        <Card />
        <ItemContextProvider>
          <ModalContextProvider>
            <BooksPage />
          </ModalContextProvider>
        </ItemContextProvider>
      </div>
      <div className={styles.left}><LeftSide/></div>
    </>
  );
}

export default App;
