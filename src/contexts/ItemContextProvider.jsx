import { createContext, useState } from "react";

export const ItemContext = createContext(null);

const ItemContextProvider = ({ children }) => {
  const [term, setTerm] = useState(null);


  return (
    <ItemContext.Provider value={{ term, setTerm }}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;


