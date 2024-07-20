import React, { useContext, useEffect, useState } from "react";
import styles from "./BookCard.module.scss";
import BookModal from "../BookModal/BookModal";
import { ModalContext } from "../../contexts/ModalContextProvider";
import { ItemContext } from "../../contexts/ItemContextProvider";

const BookCard = ({ book, onClick }) => {
  const { bookData } = useContext(ItemContext);
  const { modal, toggleModal } = useContext(ModalContext);
  const [selectedBook, setSelectedBook] = useState([]);
  // useEffect(() => {
  //   setSelectedBook(book);
  // }, [modal]);

  const thumbnail =
    book.volumeInfo &&
    book.volumeInfo.imageLinks &&
    book.volumeInfo.imageLinks.thumbnail;

  //   console.log(thumbnail);

  const authorsArray = book.volumeInfo.authors;

  // console.log(authorsArray);

  //need to use useParams?

  const handleClick = () => {
    onClick(book);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.cover}
        style={{
          backgroundImage: `url(${
            thumbnail ||
            `https://upload.wikimedia.org/wikipedia/commons/7/72/Placeholder_book.svg`
          })`,
        }}
      >
        <div className={styles.overlay}>
          <h4>{book.volumeInfo.subtitle}</h4>
          <button onClick={handleClick}>See more</button>
        </div>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{book.volumeInfo.title}</h1>
        {authorsArray > 1 ? (
          <h3 className={styles.author}>{authorsArray[0]}, and others</h3>
        ) : (
          <h3 className={styles.author}>{authorsArray}</h3>
        )}
      </div>
      {/* {modal && <BookModal book={selectedBook} />} */}
    </div>
  );
};

export default BookCard;

//.volumeInfo.title

// {authorsArray.map((author, index) => (
//   <h3 className={styles.author} key={index} author={author}>{author}</h3>
// ))}

// {authorsArray.length > 1 ? (
//   <h3 className={styles.author}>{authorsArray[0]}, ...</h3>
// ) : (
//   <h3 className={styles.author}>{authorsArray[0]}</h3>
// )}

// {authorsArray?.map((author, index) => (
//   <h3 className={styles.author} key={index} >{author}</h3>
// ))}
