import createBookSection from "./addBook.js";
import createContactSection from "./contact.js";
import displayBooks from "./displayBooks.js";

const createItemLink = (ul, linkTitle) => {
  const books = JSON.parse(localStorage.getItem("books"));
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = linkTitle;
  a.classList.add(linkTitle.toLowerCase().split(" ").join(""));
  a.href = "#";
  li.append(a);
  ul.append(li);

  a.addEventListener("click", (e) => {
    const booksSection = document.getElementById("books");
    const contactSection = document.getElementById("contact");
    const addBookSection = document.querySelector(".add-book");

    if (e.target.classList.value === "list") {
      if (contactSection) contactSection.remove();
      if (addBookSection) addBookSection.remove();
      if (booksSection) booksSection.remove();
      displayBooks(books);
    }

    if (e.target.classList.value === "addnew") {
      if (addBookSection) addBookSection.remove();
      if (contactSection) contactSection.remove();
      if (booksSection) booksSection.remove();
      createBookSection();
    }
    if (e.target.classList.value === "contact") {
      if (addBookSection) addBookSection.remove();
      if (booksSection) booksSection.remove();
      if (contactSection) contactSection.remove();
      createContactSection();
    }
  });
};
const createNavBar = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const logo = document.createElement("span");
  logo.textContent = "Awesome Books";

  const nav_link = document.createElement("ul");

  createItemLink(nav_link, "List");
  createItemLink(nav_link, "|");
  createItemLink(nav_link, "Add new");
  createItemLink(nav_link, "|");
  createItemLink(nav_link, "Contact");

  nav.append(nav_link);
  header.append(logo);
  header.append(nav);

  document.getElementById("container").append(header);
};

export default createNavBar;
