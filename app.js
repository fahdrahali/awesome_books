import { Books } from "./modules/books.js";

const books = new Books();

books.books = [
  { id: 1, title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi" },
  {
    id: 2,
    title: "Political History of Assam (1947-1971) – Volume 1",
    author: "Dr. Rajen Saikia",
  },
  { id: 3, title: "Ambedkar: A Life", author: "Shashi Tharoor" },
];

const displayBooks = () => {
  const booksSection = document.createElement("section");
  booksSection.id = "books";
  console.log(books.books);
  
  books.books.map((book) => {
    const ul = document.createElement("ul");

    const liTitle = document.createElement("li");
    liTitle.textContent = book.title;
    ul.append(liTitle);

    const liAuthor = document.createElement("li");
    liAuthor.textContent = book.author;
    ul.append(liAuthor);

    const button = document.createElement("button");
    button.textContent = "Remove";
    button.id = "btn-remove";

    button.addEventListener("click", () => {
      document.getElementById("books").remove();
      books.books = books.removeBook(book.id);
      localStorage.setItem("books", JSON.stringify(books.books));
      displayBooks();
    });

    const liButton = document.createElement("li");
    liButton.append(button);
    ul.append(liButton);
    const p = document.createElement("p");
    p.textContent = "_____________________________________";
    ul.append(p);
    booksSection.append(ul);

    document.body.insertBefore(booksSection, document.getElementById("form"));
  });
  localStorage.setItem("books", JSON.stringify(books.books));
};

document.getElementById("btn-add").addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  if (document.getElementById("books"))
    document.getElementById("books").remove();
  books.books = books.addBook(title, author);
  localStorage.setItem("books", JSON.stringify(books.books));
  displayBooks();
});

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});
