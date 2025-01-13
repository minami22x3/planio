import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { buildSchema } from 'drizzle-graphql';
import { type NextRequest } from 'next/server';

import { db } from '@/server';

const { schema } = buildSchema(db);
const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function POST(req: Request) {
  return handler(req);
}
