import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";

const Title = ({ text }) => {
  const { term } = useContext(ItemContext);

  if (term !== null) {
    text = `Searching for ${term}`;
  }

  return <h2>{text}</h2>;
};

export default Title;
