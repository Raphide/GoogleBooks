import { createContext, useState } from "react";

export const ItemContext = createContext(null);

const ItemContextProvider = ({ children }) => {
  const [term, setTerm] = useState(null);
const [author, setAuthor] = useState(null);
const [page, setPage] = useState(0)

  return (
    <ItemContext.Provider value={{ term, setTerm, page, setPage }}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;


