import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { type NextRequest } from 'next/server';

import { server } from '@/server';

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (request) => ({ req: request }),
});

export const GET = async (request: NextRequest) => handler(request);
export const POST = async (request: NextRequest) => handler(request);
