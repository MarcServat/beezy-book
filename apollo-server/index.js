// const { find, filter } = require('lodash');
const { ApolloServer, gql } = require('apollo-server');
const { books, genres } = require('../api/db');
const { Book, Genre} = require('./Models');

const bookList = books.map(book => new Book(book));
const genreList = genres.map(genre => new Genre(genre));


const typeDefs = gql(`
  input BookInput {
    id: Int!
    name: String!
    description: String
    genreId: GenreInput!
    price: String!
    img: String
  }
  
  input GenreInput {
    id: Int!
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
      return bookList;
    },
    book(parent, { id }) {
      return bookList.find(book => book.id === id);
    },
    genres() {
      return genreList;
    },
    genre(parent, { id }) {
      const genre = genreList.find(
          genre => genre.id === id
      );

      return new Genre(genre);
    },
  },

  Mutation: {
    editBook: (parent, {id, input}) => {
      const match = bookList.find(book => book.id === id);

      if (!match) {
        throw new Error(`Couldn't find book with id ${id}`);
      }
      console.log(match)

      const book = new Book(match);
      book.setName(input.name);
      book.setDescription(input.description);
      book.setPrice(input.price);
      book.setImg(input.img);
      return book;

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

