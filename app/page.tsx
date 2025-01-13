'use client';

import { type NextPage } from 'next';

import { useUserQuery } from '@/gql';

const Home: NextPage = () => {
  useUserQuery({
    variables: {
      where: {
        id: { eq: 'tz4a98xxat96iws9zmbrgj3a' },
      },
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="font-bold">Plan.io</h1>
    </div>
  );
};

export default Home;
