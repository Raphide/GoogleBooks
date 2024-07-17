import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const thumbnail =
    book.volumeInfo &&
    book.volumeInfo.imageLinks &&
    book.volumeInfo.imageLinks.thumbnail;

  //   console.log(thumbnail);

  const authorsArray = book.volumeInfo.authors;

  console.log(authorsArray);

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
          <button>See more</button>
        </div>
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>{book.volumeInfo.title}</h1>
        {authorsArray.length > 1 ? (
          <h3 className={styles.author}>{authorsArray[0]}, ...</h3>
        ) : (
          <h3 className={styles.author}>{authorsArray[0]}</h3>
        )}
      </div>
    </div>
  );
};

export default BookCard;

//.volumeInfo.title

// {authorsArray.map((author, index) => (
//   <h3 className={styles.author} key={index} author={author}>{author}</h3>
// ))}
