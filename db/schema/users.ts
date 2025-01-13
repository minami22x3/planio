import { sql } from 'drizzle-orm';
import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

import { primaryKey } from '@/lib';

export const users = pgTable('users', {
  id: primaryKey(),
  username: varchar('username', { length: 24 }).unique().notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  displayName: text('displayName'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => sql`(now() AT TIME ZONE 'utc'::text)`),
});
