import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";

const Title = ({ text }) => {
  const { term } = useContext(ItemContext);

  if (term !== null) {
    text = `Searching for ${term}`;
  }

  return <h3>{text}</h3>;
};

export default Title;
