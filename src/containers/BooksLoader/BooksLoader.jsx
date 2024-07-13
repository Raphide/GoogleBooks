

import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../../contexts/ItemContextProvider'
import { getBooks } from '../../services/getBooks';

const BooksLoader = () => {
    const {term} = useContext(ItemContext);
    const [bookData, setBookData] = useState(null);
    const [fetchStatus, setFetchStatus] =useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (term === null) return;
        setFetchStatus("loading");
        getBooks(term).then((data) => {
            setFetchStatus("success");
            setBookData(data);
            console.log(bookData);
        }).catch((error) => {
            setFetchStatus("failure");
            setError(error);
        });
    }, [term])

  return (
    <>
    {fetchStatus === "loading" && <p>Loading Books...</p>}
    {fetchStatus === "success" && bookData.map((book => <p key={book.accessInfo.id}>{book.volumeInfo.title}</p>))}
    {fetchStatus === "failure" && (<p>{error.message}</p>)}
    </>
  )
}

export default BooksLoader