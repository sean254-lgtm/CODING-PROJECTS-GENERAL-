const books = [
  {
    title: "Goosebumps",
    authorName: "RL Stine",
    releaseYear: 1937
  },
  {
    title: "Diary of a wimpy kid",
    authorName: "Jeff Kinney",
    releaseYear: 2016
  },
  {
    title: "5 am club",
    authorName: "Robin Sharma",
    releaseYear: 1949
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  } else if(book1.releaseYear > book2.releaseYear){
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(books)



