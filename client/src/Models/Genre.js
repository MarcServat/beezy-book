export class Genre {
  constructor({ id, name, books}) {
    this.id = id;
    this.name = name;
    this.booksIds = books;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getBookIds() {
    return this.booksIds;
  }

  setBookId(id) {
  }

  // // async method
  // async books() {
  //   await new Promise(resolve => setTimeout(resolve, 3000));
  //   return books
  //       .filter(({ id }) => this.booksIds.includes(id))
  //       .map(book => new Book(book));
  // }
}

