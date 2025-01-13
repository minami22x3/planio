import gql from 'graphql-tag';

export const User = gql`
  fragment User on UsersSelectItem {
    id
    username
    displayName
    email
  }
`;
