export const getBooks = async (term, page = 0) => {
  if (term === "") {
    throw new Error("Must input a term");
  }

  const termSearch = `&q=${term}`;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=20${termSearch}&startIndex=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();

  const bookData = data.items;
  // const cleanedUpBook = {
  //   id: bookData.id,

  // };
  // console.log(cleanedUpBook);
  return bookData;
};

// startIndex will be used for pagination where page index starts at 0. use this with contex page, setPage

export const getBookbyId = async (id) => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes/" + id
  );
  if (!response.ok) {
    throw new Error("Book not found");
  }
  return await response.json();
};
