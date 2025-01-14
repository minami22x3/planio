import gql from 'graphql-tag';

export const Examples = gql`
  query Examples {
    examples {
      ...Example
    }
  }
`;

export const Example = gql`
  query Example($where: ExamplesFilters) {
    example(where: $where) {
      ...Example
    }
  }
`;
