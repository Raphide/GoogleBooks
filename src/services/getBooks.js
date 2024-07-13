export const getBooks = async (term) => {
  if (term === '') {
    throw new Error('Must input a term');
  }

  const termSearch = `&q=${term}`;
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=40${termSearch}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();

  const bookData = data.items;
  // console.log(userData);
  // const cleanedUpBook = {
  //   id: bookData.id,
  //   title: bookData.volumeInfo.title,
  //   // author: bookData.volumeInfo.authors,
  // };
  // console.log(cleanedUpBook);
  return bookData;
};

// startIndex will be used for pagination where page index starts at 0

// const getBooksByAuthor = async (author) => {
//   const response = await fetch()
// }