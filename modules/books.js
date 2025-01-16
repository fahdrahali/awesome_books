export class Books {
  constructor() {
    this.books = [];
  }

  addBook = (author, title) => {
    let books = JSON.parse(localStorage.getItem("books"));
    
    let id = books.length + 1;
    if (!books) books.push({ id: id, author: author, title });
    else {
      books.map((book) => {
        if (id === book.id) id = book.id + 1;
      });
      books.push({ id: id, author: author, title });
    }    
    return books;
  };

  removeBook = (id) => {
    let books = JSON.parse(localStorage.getItem("books"));
    books = books.filter((book) => book.id !== id);
    return books;
  };
}
