import { createContext, useState } from "react";

export const ItemContext = createContext(null);

const ItemContextProvider = ({ children }) => {
  const [term, setTerm] = useState(null);
const [author, setAuthor] = useState(null);
const [page, setPage] = useState(0)
const [bookData, setBookData] = useState([]);

  return (
    <ItemContext.Provider value={{ term, setTerm, page, setPage, bookData, setBookData, author, setAuthor }}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;


