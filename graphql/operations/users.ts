import gql from 'graphql-tag';

export const Users = gql`
  query Users {
    users {
      id
      username
      displayName
      createdAt
      updatedAt
    }
  }
`;
