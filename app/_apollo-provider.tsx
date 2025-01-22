'use client';

import { HttpLink } from '@apollo/client';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import { type PropsWithChildren } from 'react';

import { getBaseUrl } from '@/lib';

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${getBaseUrl()}/api/graphql`,
    fetchOptions: { cache: 'no-store' },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
