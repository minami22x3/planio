import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { type NextRequest } from 'next/server';

import { server } from '@/server';

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function GET(req: Request) {
  return handler(req);
}

export async function POST(req: Request) {
  return handler(req);
}
