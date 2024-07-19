import React from "react";
import styles from "./BookModal.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookModal = ({ book }) => {
  // const { id } = useParams();
  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   getBookById(id).then((data) => setBook(data));
  // }, [id]);

  const { volumeInfo, ...rest } = book;
  const authorsArray = volumeInfo.authors;

  console.log(volumeInfo.title);
  return (
    <div className={styles.modal}>
      <h1>{volumeInfo.title}</h1>
      {authorsArray?.map((author, index) => (
        <h3 className={styles.author} key={index} author={author}>
          {author}
        </h3>
      ))}
    </div>
  );
};

export default BookModal;
