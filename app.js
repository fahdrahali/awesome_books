import createBookSection from "./modules/addBook.js";
import { Books } from "./modules/books.js";
import displayBooks from "./modules/displayBooks.js";

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
  displayBooks(books);
});
