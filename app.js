const books = [
  { id: 1, title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi" },
  {
    id: 2,
    title: "Political History of Assam (1947-1971) – Volume 1",
    author: "Dr. Rajen Saikia",
  },
  { id: 3, title: "Ambedkar: A Life", author: "Shashi Tharoor" },
];

const addBook = (authorValue, titleValue) => {
  const id = books.length + 1;
  books.push({ id: id, author: authorValue, titleValue });
  return books;
};

const removeBook = (id) => {
  books.filter();
  const newBooks = books.filter((book) => book.id !== id);
  return newBooks;
};
