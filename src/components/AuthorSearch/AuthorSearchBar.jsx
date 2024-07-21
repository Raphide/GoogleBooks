import styles from "./AuthorSearchBar.module.scss"

const AuthorSearchBar = ({ placeholder, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const author = new FormData(form).get("search");
    onSearch(String(author));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.searchbar} type="text" placeholder={placeholder} name="search" />
      <button className={styles.button}>Search</button>
    </form>
  );
};
export default AuthorSearchBar;
