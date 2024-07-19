import React, { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const providedValues = { modal, toggleModal };
  return (
    <ModalContext.Provider value={providedValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
