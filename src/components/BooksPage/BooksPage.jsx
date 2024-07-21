import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import SearchBar from "../SearchBar/SearchBar";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";
import styles from "./BooksPage.module.scss";
import Pagination from "../Pagination/Pagination";
import Title from "../Title/Title";
import Bookshelf from "../../assets/bookshelf.svg"
import AuthorSearchBar from "../AuthorSearch/AuthorSearchBar";

const BooksPage = () => {
  const { page, term, setTerm, setAuthor, setPage } = useContext(ItemContext);
  const onSearch = (term) => {
    console.log("Searched for term " + term);
    setTerm(term);
    setPage(0);
  };

  // const onAuthorSearch = (author) => {
  //   console.log("searched for author" + author);
  //   setAuthor(author);
  //   setPage(0)
  // }


  return (
    <main>
      <div className={styles.search}>
        <Title text="Books" />
        <SearchBar placeholder={"search for books"} onSearch={onSearch} />
        {/* <AuthorSearchBar placeholder={"search by author"} onSearch={onAuthorSearch} /> */}
        <Pagination currentPage={page} />
      </div>
      <div className={styles.books}>
        <BooksLoader page={page} />
      </div>
      <img className={styles.bookshelf} src={Bookshelf} />
    </main>
  );
};

export default BooksPage;
