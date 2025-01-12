import { userRouter } from '@/server';
import { router } from '@/server/trpc';

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
