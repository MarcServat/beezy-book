import gql from 'graphql-tag';

// ::::::::::::::QUERY BOOKS :::::::::::::::::::::::::::::::::::::::::://

export const BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      name
      description
      price
      img
      genre {
        id
        name
      }
    }
  }`;

export const BOOKS = gql`{
  books {
    id
    name
    description
    price
    img
    genre {
      id
      name
    }
  }
 }`;


// ::::::::::::::QUERY GENRES :::::::::::::::::::::::::::::::::::::::::://


export const GENRE = gql`
  query Genre($id: ID!) {
    genre(id: $id) {
      id
      name
    }
}`;

export const GENRES = gql`{
  genres {
    id
    name
  }
}`;

// ::::::::::::::MUTATION BOOKS :::::::::::::::::::::::::::::::::::::::::://

export const CREATE_BOOK = gql`
  mutation CreateBook(
    $book: newBookInput!) {
    createBook(book: $book) {
      name
      description
      price
      genre {
        name
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId)
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $bookId: ID!
    $book: BookInput!) {
    updateBook(
      bookId: $bookId
      book: $book) {
      id
      name
      description
      genre {
        id
        name
      }
      price
      img
    }
  }
`;

// ::::::::::::::MUTATION GENRES :::::::::::::::::::::::::::::::::::::::::://

export const CREATE_GENRE = gql`
  mutation CreateGenre(
    $name: String!) {
    createGenre(name: $name) {
        name
    }
  }
`;

export const DELETE_GENRE = gql`
  mutation DeleteGenre($genreId: ID!) {
    deleteGenre(genreId: $genreId)
  }
`;

export const UPDATE_GENRE = gql`
  mutation UpdateGenre(
    $genreId: ID!
    $name: String!) {
    updateGenre(
      genreId: $genreId
      name: $name) {
        id
        name
    }
  }
`;
