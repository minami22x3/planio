import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ExamplesBarFilters = {
  OR?: InputMaybe<Array<ExamplesBarfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesBarfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesBazFilters = {
  OR?: InputMaybe<Array<ExamplesBazfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesBazfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesCreatedAtFilters = {
  OR?: InputMaybe<Array<ExamplesCreatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesCreatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesFilters = {
  OR?: InputMaybe<Array<ExamplesFiltersOr>>;
  bar?: InputMaybe<ExamplesBarFilters>;
  baz?: InputMaybe<ExamplesBazFilters>;
  createdAt?: InputMaybe<ExamplesCreatedAtFilters>;
  foo?: InputMaybe<ExamplesFooFilters>;
  id?: InputMaybe<ExamplesIdFilters>;
  updatedAt?: InputMaybe<ExamplesUpdatedAtFilters>;
};

export type ExamplesFiltersOr = {
  bar?: InputMaybe<ExamplesBarFilters>;
  baz?: InputMaybe<ExamplesBazFilters>;
  createdAt?: InputMaybe<ExamplesCreatedAtFilters>;
  foo?: InputMaybe<ExamplesFooFilters>;
  id?: InputMaybe<ExamplesIdFilters>;
  updatedAt?: InputMaybe<ExamplesUpdatedAtFilters>;
};

export type ExamplesFooFilters = {
  OR?: InputMaybe<Array<ExamplesFoofiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesFoofiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesIdFilters = {
  OR?: InputMaybe<Array<ExamplesIdfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesIdfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesInsertInput = {
  bar: Scalars['String']['input'];
  baz?: InputMaybe<Scalars['Int']['input']>;
  /** Date */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  foo: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesItem = {
  __typename?: 'ExamplesItem';
  bar: Scalars['String']['output'];
  baz?: Maybe<Scalars['Int']['output']>;
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  foo: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExamplesOrderBy = {
  bar?: InputMaybe<InnerOrder>;
  baz?: InputMaybe<InnerOrder>;
  createdAt?: InputMaybe<InnerOrder>;
  foo?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  updatedAt?: InputMaybe<InnerOrder>;
};

export type ExamplesSelectItem = {
  __typename?: 'ExamplesSelectItem';
  bar: Scalars['String']['output'];
  baz?: Maybe<Scalars['Int']['output']>;
  /** Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  foo: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ExamplesUpdateInput = {
  bar?: InputMaybe<Scalars['String']['input']>;
  baz?: InputMaybe<Scalars['Int']['input']>;
  /** Date */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  foo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesUpdatedAtFilters = {
  OR?: InputMaybe<Array<ExamplesUpdatedAtfiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ExamplesUpdatedAtfiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteFromExamples: Array<ExamplesItem>;
  insertIntoExamples: Array<ExamplesItem>;
  insertIntoExamplesSingle?: Maybe<ExamplesItem>;
  updateExamples: Array<ExamplesItem>;
};

export type MutationDeleteFromExamplesArgs = {
  where?: InputMaybe<ExamplesFilters>;
};

export type MutationInsertIntoExamplesArgs = {
  values: Array<ExamplesInsertInput>;
};

export type MutationInsertIntoExamplesSingleArgs = {
  values: ExamplesInsertInput;
};

export type MutationUpdateExamplesArgs = {
  set: ExamplesUpdateInput;
  where?: InputMaybe<ExamplesFilters>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  example?: Maybe<ExamplesSelectItem>;
  examples: Array<ExamplesSelectItem>;
};

export type QueryExampleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExamplesOrderBy>;
  where?: InputMaybe<ExamplesFilters>;
};

export type QueryExamplesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExamplesOrderBy>;
  where?: InputMaybe<ExamplesFilters>;
};

export type ExampleFragment = {
  __typename: 'ExamplesSelectItem';
  id: string;
  foo: string;
  bar: string;
  createdAt?: string | null;
};

export type ExamplesQueryVariables = Exact<{ [key: string]: never }>;

export type ExamplesQuery = {
  __typename: 'Query';
  examples: Array<{
    __typename: 'ExamplesSelectItem';
    id: string;
    foo: string;
    bar: string;
    createdAt?: string | null;
  }>;
};

export type ExampleQueryVariables = Exact<{
  where?: InputMaybe<ExamplesFilters>;
}>;

export type ExampleQuery = {
  __typename: 'Query';
  example?: {
    __typename: 'ExamplesSelectItem';
    id: string;
    foo: string;
    bar: string;
    createdAt?: string | null;
  } | null;
};

export const ExampleFragmentDoc = gql`
  fragment Example on ExamplesSelectItem {
    __typename
    id
    foo
    bar
    createdAt
  }
`;
export const ExamplesDocument = gql`
  query Examples {
    __typename
    examples {
      __typename
      ...Example
    }
  }
  ${ExampleFragmentDoc}
`;

/**
 * __useExamplesQuery__
 *
 * To run a query within a React component, call `useExamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamplesQuery({
 *   variables: {
 *   },
 * });
 */
export function useExamplesQuery(baseOptions?: Apollo.QueryHookOptions<ExamplesQuery, ExamplesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExamplesQuery, ExamplesQueryVariables>(ExamplesDocument, options);
}
export function useExamplesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamplesQuery, ExamplesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExamplesQuery, ExamplesQueryVariables>(ExamplesDocument, options);
}
export function useExamplesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExamplesQuery, ExamplesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ExamplesQuery, ExamplesQueryVariables>(ExamplesDocument, options);
}
export type ExamplesQueryHookResult = ReturnType<typeof useExamplesQuery>;
export type ExamplesLazyQueryHookResult = ReturnType<typeof useExamplesLazyQuery>;
export type ExamplesSuspenseQueryHookResult = ReturnType<typeof useExamplesSuspenseQuery>;
export type ExamplesQueryResult = Apollo.QueryResult<ExamplesQuery, ExamplesQueryVariables>;
export const ExampleDocument = gql`
  query Example($where: ExamplesFilters) {
    __typename
    example(where: $where) {
      __typename
      ...Example
    }
  }
  ${ExampleFragmentDoc}
`;

/**
 * __useExampleQuery__
 *
 * To run a query within a React component, call `useExampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useExampleQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
}
export function useExampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
}
export function useExampleSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExampleQuery, ExampleQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
}
export type ExampleQueryHookResult = ReturnType<typeof useExampleQuery>;
export type ExampleLazyQueryHookResult = ReturnType<typeof useExampleLazyQuery>;
export type ExampleSuspenseQueryHookResult = ReturnType<typeof useExampleSuspenseQuery>;
export type ExampleQueryResult = Apollo.QueryResult<ExampleQuery, ExampleQueryVariables>;
