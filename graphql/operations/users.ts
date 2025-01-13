import gql from 'graphql-tag';

export const Users = gql`
  query Users {
    usersCollection(first: 10) {
      edges {
        node {
          id
          username
          displayName
          created_at
          updated_at
        }
      }
    }
  }
`;
