import React from "react";
import styles from "./BookModal.module.scss";
import preview from "../../assets/preview.svg";
import readHere from "../../assets/readHere.svg"

const BookModal = ({ book, onClick }) => {
  const { volumeInfo, ...rest } = book;
  const authorsArray = volumeInfo.authors;
  const categoriesArray = volumeInfo.categories;

  console.log(categoriesArray);

  const handleClick = () => {
    onClick();
  };

  const isMature = () => {
    if (volumeInfo.maturityRating === "NOT_MATURE") {
      return "Not mature";
    } else if (volumeInfo.maturityRating === "MATURE") {
      return "Mature";
    } else {
      return "not yet rated";
    }
  };

  console.log(volumeInfo.title);
  return (
    <div className={styles.backdrop} onClick={handleClick}>
      <div className={styles.modal}>
        <span className={styles.layout}>
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
                </div>
              </div>
              <div className={styles.modal_white}>
                <div className={styles.content}>
                  <h5>Description</h5>
                  <p className={styles.description}>
                    {volumeInfo?.description}
                  </p>
                  <span>
                    <h5>{volumeInfo?.publisher}</h5>
                    {volumeInfo.publishedDate ? (
                      <h5> ({volumeInfo?.publishedDate})</h5>
                    ) : (
                      <h5> (publish date unavailable)</h5>
                    )}
                  </span>
                  <span>
                    <div className={styles.info}>
                      <span>
                        {categoriesArray && <h5>Categories: </h5>}
                        {categoriesArray?.map((category, index) => (
                          <p className={styles.category} key={index}>
                            {category}
                          </p>
                        ))}
                      </span>
                      <span>
                        <h5>Page Count: </h5>
                        <p>
                          {volumeInfo?.pageCount > 0
                            ? `${volumeInfo.pageCount}`
                            : "page count unavailable"}
                        </p>
                      </span>
                      <span>
                        <h5>Rating: </h5>
                        <p>
                          {!volumeInfo.averageRating
                            ? "Not yet rated"
                            : `${volumeInfo.averageRating} (${volumeInfo.ratingsCount})`}
                        </p>
                      </span>
                      <span>
                        <h5>Language: </h5>
                        <p>{volumeInfo?.language}</p>
                      </span>
                      <span>
                        <h5>Maturity: </h5>
                        <p>{isMature()}</p>
                      </span>
                    </div>
                    <div className={styles.read}>
                      {volumeInfo.previewLink && (
                        <a href={volumeInfo?.previewLink} target="_blank"><img src={preview} alt="Preview" className={styles.links}/></a>
                      )}
                      {book.accessInfo.webReaderLink && (
                        <a href={book.accessInfo?.webReaderLink} target="_blank"><img  src={readHere} alt="Read Here" className={styles.links}/></a>
                      )}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </span>
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
