export class Book {
    constructor(book) {
    this.id = book.id;
    this.name = book.name;
    this.description = book.description;
    this.genreId = book.genre;
    this.price = book.price;
    this.img = book.img;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  // getGenre() {
  //   const genre = genres.find(
  //       ({ id }) => id === this.genreId
  //   );
  //   return new Genre(genre);
  // }

  setGenre(id) {
    // const genre = genres.find(
    //     ({ id }) => id === this.genreId
    // );
    // return new Genre(genre);
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getImg() {
    return this.img;
  }

  setImg(img) {
    this.img = img;
  }

  // genre() {
  //   const genre = genres.find(
  //       ({ id }) => id === this.genreId
  //   );
  //   return new Genre(genre);
  // }
}

