import { Books } from "./books.js";

// function create input
const CreateInputForm = (form, type, name) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = name;
  input.name = name;
  input.placeholder = name;
  form.append(input);
};

const createBookSection = () => {
  const bookSection = document.createElement("section");
  bookSection.classList.add("add-book");

  // title add section
  const h2 = document.createElement("h2");
  h2.textContent = "Add a new book";

  //form add section

  const form = document.createElement("form");
  form.id = "form";
  form.action = "/addBook.html";

  CreateInputForm(form, "text", "title");
  CreateInputForm(form, "text", "author");

  // create button
  const button = document.createElement("button");
  button.id = "btn-add";
  button.textContent = 'Add'
  form.append(button);

  // add elements to book section
  bookSection.append(h2);
  bookSection.append(form);

    document.body.append(bookSection);

    document.getElementById("btn-add").addEventListener("click", (event) => {
        event.preventDefault();
        const books = new Books();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        if (document.getElementById("books"))
          document.getElementById("books").remove();
        const arrayBooks = books.addBook(title, author);
        localStorage.setItem("books", JSON.stringify(arrayBooks));
      });
};

export default createBookSection;