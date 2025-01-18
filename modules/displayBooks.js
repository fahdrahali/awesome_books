const displayBooks = (books) => {
    const booksSection = document.createElement("section");
    booksSection.id = "books";
  
    const h1 = document.createElement('h1');
    h1.textContent = 'All Awesome books';
    booksSection.append(h1);
    
    books.books.map((book) => {
      const ul = document.createElement("ul");
  
      const liTitle = document.createElement("li");
      liTitle.textContent = `"${book.title}" by  ` + book.author ;
      ul.append(liTitle);
  
      const button = document.createElement("button");
      button.textContent = "Remove";
      button.id = "btn-remove";
  
      button.addEventListener("click", () => {
        document.getElementById("books").remove();
        books.books = books.removeBook(book.id);
        localStorage.setItem("books", JSON.stringify(books.books));
        displayBooks(books);
      });
  
      const liButton = document.createElement("li");
      liButton.append(button);
      ul.append(liButton);
      booksSection.append(ul);
  
      document.body.insertBefore(booksSection, document.querySelector(".add-book"));
    });
    localStorage.setItem("books", JSON.stringify(books.books));
  };

  export default displayBooks;