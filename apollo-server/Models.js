const {books, genres} = require('../api/db');

class Book {
  constructor(book) {
    this.id = book.id;
    this.name = book.name;
    this.description = book.description;
    this.genreId = book.genre;
    this.price = book.price;
    this.img = book.img;
  }

  genre() {
    const genre = genres.find(
        ({ id }) => id === this.genreId
    );
    return new Genre(genre);
  }
}

class Genre {
  constructor({ id, name, books}) {
    this.id = id;
    this.name = name;
    this.booksIds = books;
  }

  // async method
  async books() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return books
        .filter(({ id }) => this.booksIds.includes(id))
        .map(book => new Book(book));
  }
}

module.exports = {
  Book,
  Genre
};
