import createBookSection from "./modules/addBook.js";
import { Books } from "./modules/books.js";
import displayBooks from "./modules/displayBooks.js";
import createFooter from "./modules/footer.js";
import CreateNavBar from "./modules/navBar.js";

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


document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement('section');
  container.id = 'container';
  document.body.append(container);
  CreateNavBar();
  displayBooks(books);
  createFooter();
});
