import gql from 'graphql-tag';

export const Users = gql`
  query Users {
    users {
      ...User
    }
  }
`;

export const User = gql`
  query User($where: UsersFilters) {
    user(where: $where) {
      ...User
    }
  }
`;
