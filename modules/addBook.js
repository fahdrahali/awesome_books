// function create input
const CreateInputForm = (type, name) => {
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

  createImageBitmap("text", "title");
  CreateInputForm("text", "author");

  // create button
  const button = document.createElement("button");
  button.id = "btn-add";
  form.append(button);

  // add elements to book section
  bookSection.append(h2);
  bookSection.append(form);

  document.body.append(bookSection)
};

export default createBookSection;