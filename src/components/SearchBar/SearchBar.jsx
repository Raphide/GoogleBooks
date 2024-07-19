import styles from "./SearchBar.module.scss"

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const term = new FormData(form).get("search");
    onSearch(String(term));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.searchbar} type="text" placeholder={placeholder} name="search" />
      <button className={styles.button}>Search</button>
    </form>
  );
};
export default SearchBar;
