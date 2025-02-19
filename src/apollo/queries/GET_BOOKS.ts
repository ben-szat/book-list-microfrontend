import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query getBooks {
    books {
      _id
      title
      author
      category
      price
    }
  }
`;
