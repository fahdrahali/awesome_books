const books = [
  { id: 1, title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi" },
  {
    id: 2,
    title: "Political History of Assam (1947-1971) – Volume 1",
    author: "Dr. Rajen Saikia",
  },
  { id: 3, title: "Ambedkar: A Life", author: "Shashi Tharoor" },
];

const addBook = (author, title) => {
  const id = books.length + 1;
  books.push({ id: id, author: author, title });
  displayBooks();
};

const removeBook = (id) => {
  books.filter((book) => book.id !== id);
  books = newBooks;
  return books;
};

const displayBooks = () => {
  const booksSection = document.createElement("section");
  booksSection.id = "books";
  books.map((book) => {
    const ul = document.createElement("ul");

    const liTitle = document.createElement("li");
    liTitle.textContent = book.title;
    ul.append(liTitle);

    const liAuthor = document.createElement("li");
    liAuthor.textContent = book.author;
    ul.append(liAuthor);

    const button = document.createElement("button");
    button.textContent = "Remove";
    const liButton = document.createElement("li");
    liButton.append(button);
    ul.append(liButton);
    const p = document.createElement("p");
    p.textContent = "_____________________________________";
    ul.append(p);
    booksSection.append(ul);

    document.body.insertBefore(booksSection, document.getElementById("form"));
  });
};

document.getElementById("btn-add").addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  document.getElementById("books").remove();
  addBook(title, author);
  console.log(books);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(" onload body");
  displayBooks();
});
