const SearchBar = ({ placeholder, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const term = new FormData(form).get("search");
    onSearch(String(term));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} name="search" />
      <button>Search</button>
    </form>
  );
};
export default SearchBar;
