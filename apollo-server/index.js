// const { find, filter } = require('lodash');
const { ApolloServer, gql } = require('apollo-server');
const {books, genres} = require('../api/db');
const {Book, Genre} = require('./Models');

const typeDefs = gql(`
  input BookInput {
    name: String!
    description: String
    genre: String!
    price: String!
    img: String
  }

  type Book {
    id: Int!
    name: String!
    description: String
    genre: Genre!
    price: String!
    img: String
  }
  
  type Genre {
    id: Int!
    name: String
    books: [Book]
  }
  
  type Query {
    books: [Book]
    book(id: Int!): Book
    genres: [Genre]
    genre(id: Int!): Genre 
  }
  
  type Mutation {
    editBook(
      id: Int!
      input: BookInput!
    ): Book
  }

`);

const resolvers = {
  Query: {
    books() {
      return books.map(book => {
        return new Book(book)
      });
    },
    book(parent, { id }) {
      return new Book(books.find(book => book.id === id));
    },
    genres() {
      return genres.map(
          genre => new Genre(genre)
      );
    },
    genre(parent, { id }) {
      const genre = genres.find(
          genre => genre.id === id
      );

      return new Genre(genre);
    },
  },

  Mutation: {
    editBook: (parent, {id, input}) => {
      let book = books.find(book => new Book(book.id === id));

      if (!book) {
        throw new Error(`Couldn't find book with id ${id}`);
      }
      const newBook = {id, name: input.name, description: input.description, genre: book.genre, price: input.price, img: input.img}
      return new Book(newBook);
    }
    // editGenre: (_, {genreId}) => {
    //   const genre = find(genres, {id: genreId});
    //   if (!genre) {
    //     throw new Error(`Couldn't find genre with id ${genreId}`);
    //   }
    //   return genre;
    // }
  },
  //
  // Genre: {
  //   books: genre => filter(books, { genreId: genre.id }),
  // },

};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) =>  {
  console.log(`🚀 Server ready at ${url}`)
});

