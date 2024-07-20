import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import SearchBar from "../SearchBar/SearchBar";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";
import styles from "./BooksPage.module.scss";
import Pagination from "../Pagination/Pagination";
import Title from "../Title/Title";

const BooksPage = () => {
  const { page, term, setTerm, setPage } = useContext(ItemContext);
  const onSearch = (term) => {
    console.log("Searched for term " + term);
    setTerm(term);
    setPage(0);
  };

  return (
    <main>
      <div className={styles.search}>
        <Title text="Books" />
        <SearchBar placeholder={"search for books"} onSearch={onSearch} />
        <Pagination currentPage={page} />
      </div>
      <div className={styles.books}>
        <BooksLoader page={page} />
      </div>
    </main>
  );
};

export default BooksPage;
