import gql from 'graphql-tag';

export const Example = gql`
  fragment Example on ExamplesSelectItem {
    id
    foo
    bar
    createdAt
  }
`;
