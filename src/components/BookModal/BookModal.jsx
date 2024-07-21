import React from "react";
import styles from "./BookModal.module.scss";


const BookModal = ({ book, onClick }) => {

  const { volumeInfo, ...rest } = book;
  const authorsArray = volumeInfo.authors;
  const categoriesArray = volumeInfo.categories;

  console.log(categoriesArray);

  const handleClick = () => {
    onClick();
  };

  console.log(volumeInfo.title);
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modal_yellow}>
          <div className={styles.modal_blue}>
            <div className={styles.modal_red}>
              <button className={styles.close} onClick={handleClick}>
                X
              </button>
              <div className={styles.content}>
                <h1>{volumeInfo.title}</h1>
                {authorsArray?.map((author, index) => (
                  <h3 className={styles.author} key={index}>
                    {author}
                  </h3>
                ))}
                <span>
                  {categoriesArray && <h5>Categories: </h5>}
                  {categoriesArray?.map((category, index) => (
                    <p className={styles.category} key={index}>
                      {category}
                    </p>
                  ))}
                </span>
                <span>
                  <h5>{volumeInfo?.publisher}</h5>
                  {volumeInfo.publishedDate ? (
                    <h5> ({volumeInfo?.publishedDate})</h5>
                  ) : (
                    <h5> (publish date unavailable)</h5>
                  )}
                </span>
              </div>
              <div className={styles.modal_white}>
                <div className={styles.content}>
                  <h5>Description</h5>
                  <p>{volumeInfo?.description}</p>
                  <p>Page count: {volumeInfo?.pageCount > 0 ? (`${volumeInfo.pageCount}`) : ("page count unavailable")}</p>
                  <p>Rating: {(!volumeInfo.averageRating) ? ("Not yet rated") : (`${volumeInfo.averageRating} (${volumeInfo.ratingsCount})`)}</p>
                  <p>Language: {volumeInfo?.language}</p>
                  <p>Maturity Rating: {(!volumeInfo.maturityRating) ? ("Not yet rated") : (`${volumeInfo.maturityRating}`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;

// {authorsArray?.map((author, index) => (
//   <h3 className={styles.author} key={index}>
//     {!index[0] && !index[-1] ? `${author}, ` : { author }}
//   </h3>
// ))}
