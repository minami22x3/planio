import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import { type FunctionComponent, type PropsWithChildren } from 'react';

import '@/app/globals.scss';

import { ApolloProvider } from '@/app/_apollo-provider';

const epilogueSerif = Epilogue({
  variable: '--font-epilogue-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Plan.io',
  description: 'To Do List Productivity',
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${epilogueSerif.variable} antialiased`}>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
