import { Books } from "./books.js";

const displayBooks = () => {
  const booksSection = document.createElement("section");
  booksSection.id = "books";
  let books = JSON.parse(localStorage.getItem('books'));
  const booksObject = new Books();

  const h1 = document.createElement("h1");
  h1.textContent = "All Awesome books";
  booksSection.append(h1);

  books.map((book) => {
    const ul = document.createElement("ul");

    const liTitle = document.createElement("li");
    liTitle.textContent = `"${book.title}" by  ` + book.author;
    ul.append(liTitle);

    const button = document.createElement("button");
    button.textContent = "Remove";
    button.id = "btn-remove";

    button.addEventListener("click", () => {
      document.getElementById("books").remove();
      books = booksObject.removeBook(book.id);
      localStorage.setItem("books", JSON.stringify(books));
      displayBooks();
    });

    const liButton = document.createElement("li");
    liButton.append(button);
    ul.append(liButton);
    booksSection.append(ul);

    const container = document.getElementById("container");
    container.insertBefore(booksSection, document.getElementById("footer"));
  });
};

export default displayBooks;
