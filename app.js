const books = [
  { id: 1, title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi" },
  {
    id: 2,
    title: "Political History of Assam (1947-1971) – Volume 1",
    author: "Dr. Rajen Saikia",
  },
  { id: 3, title: "Ambedkar: A Life", author: "Shashi Tharoor" },
];

const addBook = (authorValue, titleValue) => {
  const newBooks = [...books];
  const id = books.length + 1;
  newBooks = books.push({ id: id, author: authorValue, titleValue });
  return newBooks;
};

const removeBook = (id) => {
const newBooks = [...books];
   newBooks = books.filter((book) => book.id !== id);
  return newBooks;
};

const displayBooks = () => {
    const BooksSection = document.createElement('section');
    books.map(book => {
        const ul = document.createElement('ul');

        const liTitle = document.createElement('li');
        liTitle.textContent = book.title;
        ul.append(liTitle);

        const liAuthor = document.createElement('li');
        liAuthor.textContent = book.author;
        ul.append(liAuthor);

        const button = document.createElement('button');
        button.textContent = 'Remove'
        const liButton = document.createElement('li');
        liButton.append(button);
        ul.append(liButton);
        const p = document.createElement('p');
        p.textContent = '_____________________________________';
        ul.append(p);
        BooksSection.append(ul);

        document.body.insertBefore(BooksSection, document.getElementById('form'));

    })

}

    document.addEventListener('DOMContentLoaded', () => {
        console.log(' onload body');
        displayBooks();
    })


