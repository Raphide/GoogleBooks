import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import { getBooks, getBooksByAuthor } from "../../services/getBooks";
import BookCard from "../../components/BookCard/BookCard";
import Loader from "../../assets/loader.svg";
import { ModalContext } from "../../contexts/ModalContextProvider";
import BookModal from "../../components/BookModal/BookModal";

const BooksLoader = () => {
  const { term, page, author, bookData, setBookData } = useContext(ItemContext);
  // const { modal, toggleModal } = useContext(ModalContext);
  const [selectedBook, setSelectedBook] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (term === null) return;
    setFetchStatus("loading");
    getBooks(term, page)
      .then((data) => {
        setFetchStatus("success");
        setBookData(data);
      })
      .catch((error) => {
        setFetchStatus("failure");
        setError(error);
      });
  }, [term, page]);

  // useEffect(() => {
  //   if (author === null) return;
  //   setFetchStatus("loading");
  //   getBooksByAuthor(author, page)
  //     .then((data) => {
  //       setFetchStatus("success");
  //       setBookData(data);
  //     })
  //     .catch((error) => {
  //       setFetchStatus("failure");
  //       setError(error);
  //     });
  // }, [author, page]);



  const onClick = (book) => {
    setSelectedBook(book);
    setModal(!modal);
  }


  return (
    <>
      {fetchStatus === "loading" && <p>Loading Books...</p>}
      {fetchStatus === "success" &&
        bookData?.books.map((book) => (
          <BookCard key={book.id} book={book} onClick={onClick} />
        ))}
      {fetchStatus === "failure" && <p style={{color:"red"}}>{error.message}</p>}
      {modal && <BookModal key={selectedBook.id} book={selectedBook} onClick={onClick} />}
    </>
  );
};

export default BooksLoader;
