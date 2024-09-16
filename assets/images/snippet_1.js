shelf1 = [
  {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    shelf: "philosophy",
  },
  {
    title: "Nausea",
    author: "Jean-Paul Sartre",
    shelf: "philosophy",
  },
];
const shelf2 = [
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    shelf: "dystopian novel",
  },
  {
    title: "1984",
    author: "George Orwell",
    shelf: "dystopian novel",
  },
];
const allBooks = [...shelf1, ...shelf2]; // spread operator
const filter = (books) => (shelf) =>
  books.filter((book) => {
    return book.shelf === shelf;
  }); // curried function
const filterBy = filter(allBooks);
const booksOnShelf = filterBy("dystopian novel");

filter(shelf1)("plilosophy");

console.log(allBooks);
console.log(booksOnShelf);

// const { title, author, shelf } = allBooks[0];
// const { title, author, ...rest } = allBooks[1];
