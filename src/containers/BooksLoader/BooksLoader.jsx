import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import { getBooks } from "../../services/getBooks";
import BookCard from "../../components/BookCard/BookCard";


const BooksLoader = () => {
  const { term, page } = useContext(ItemContext);
  const [bookData, setBookData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (term === null) return;
    setFetchStatus("loading");
    getBooks(term, page)
      .then((data) => {
        setFetchStatus("success");
        setBookData(data);
        // console.log(bookData);
      })
      .catch((error) => {
        setFetchStatus("failure");
        setError(error);
      });
  }, [term, page]);

  return (
    <>
      
      {fetchStatus === "loading" && <p>Loading Books...</p>}
      {fetchStatus === "success" &&
        bookData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      {fetchStatus === "failure" && <p>{error.message}</p>}
     
    </>
  );
};

export default BooksLoader;
