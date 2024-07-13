import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContextProvider";
import SearchBar from "../SearchBar/SearchBar";
import BooksLoader from "../../containers/BooksLoader/BooksLoader";

const BooksPage = () => {
  const { term, setTerm } = useContext(ItemContext);
  const onSearch = (term) => {
    console.log('Searched for term ' + term);
    setTerm(term);
  }

  return (
    <div>
      <h1>Books</h1>
      <main>
        <SearchBar placeholder={'search for books'} onSearch={onSearch} />
        <BooksLoader/>
      </main>
    </div>
  );
};

export default BooksPage;
