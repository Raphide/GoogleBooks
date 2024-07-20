import React from "react";
import styles from "./BookModal.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookModal = ({ book, onClick }) => {
  // const { id } = useParams();
  // const [book, setBook] = useState(null);

  // useEffect(() => {
  //   getBookById(id).then((data) => setBook(data));
  // }, [id]);

  const { volumeInfo, ...rest } = book;
  const authorsArray = volumeInfo.authors;

  const handleClick = () => {
    onClick();
  }

  console.log(volumeInfo.title);
  return (
    <div className={styles.modal}>
      <button onClick={handleClick}>Close</button>
      <h1>{volumeInfo.title}</h1>
      {authorsArray?.map((author, index) => (
        <h3 className={styles.author} key={index}>
          {author}
        </h3>
      ))}
      <h4>{volumeInfo?.publisher} ({volumeInfo?.publishedDate})</h4>
      <p>{volumeInfo?.description}</p>
    </div>
  );
};

export default BookModal;
