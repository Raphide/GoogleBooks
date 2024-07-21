import React, { useContext, useEffect, useState } from "react";
import styles from "./BookCard.module.scss";
import BookModal from "../BookModal/BookModal";
import { ModalContext } from "../../contexts/ModalContextProvider";
import { ItemContext } from "../../contexts/ItemContextProvider";
import NoCover from "../../assets/NoCover.svg"

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
            NoCover
          })`,
        }} onClick={handleClick}
      >
        <div className={styles.overlay}>
          <h5>Click for more information on this title</h5>
          <button className={styles.seeMore} onClick={handleClick}>See more</button>
        </div>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{book.volumeInfo.title}</h1>
        {authorsArray?.length > 1 ? (
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
