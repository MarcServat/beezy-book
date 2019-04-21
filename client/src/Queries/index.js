import gql from 'graphql-tag';

export const BOOKS = gql`{
  books {
    id
    name
    description
    price
    img
    genre {
      name
    }
  }
 }`;

export const BOOK = gql`
  query Book($id: Int!) {
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

export const EDIT_BOOK = gql`
  mutation EditBook(
    $id: Int!
    $input: BookInput!) {
      editBook(
        id: $id
        input: $input) {
          id
          name
          description
          genre {
            name
          }
          price
          img
    }
  }
`;
