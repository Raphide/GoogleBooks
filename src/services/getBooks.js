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

  if(data.totalItems == 0){
    throw new Error("No results found :(")
  }

  const bookData = {
    books: data.items,
    id: data.id,
   };
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

export const getBooksByAuthor = async (author, page = 0) => {
  if (term === "") {
    throw new Error("Must input an author");
  }

  const authorSearch = `&q=inauthor:${author}`;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?maxResults=20${authorSearch}&startIndex=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();

  if(data.totalItems == 0){
    throw new Error("No results found :(")
  }

  const bookData = {
    books: data.items,
    id: data.id,
   };
  // const cleanedUpBook = {
  //   id: bookData.id,

  // };
  // console.log(cleanedUpBook);
  return bookData;
};