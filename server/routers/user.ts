import { createUserSchema, users } from '@/db/schema';
import { db, publicProcedure, router } from '@/server';

export const userRouter = router({
  get: publicProcedure.query(async () => {
    return db.select().from(users);
  }),
  create: publicProcedure.input(createUserSchema).mutation(async (opts) => {
    return db.insert(users).values(opts.input).returning();
  }),
});
