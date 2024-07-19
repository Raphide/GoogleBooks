import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import BooksPage from "./components/BooksPage/BooksPage";
import ItemContextProvider from "./contexts/ItemContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Card />
        <ItemContextProvider>
          <ModalContextProvider>
            <BooksPage />
          </ModalContextProvider>
        </ItemContextProvider>
      </div>
    </>
  );
}

export default App;
