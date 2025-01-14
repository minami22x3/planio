import { sql } from 'drizzle-orm';
import { integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

import { primaryKey } from '@/lib';

export const examples = pgTable('examples', {
  id: primaryKey(),
  foo: varchar('foo', { length: 24 }).unique().notNull(),
  bar: text('bar').unique().notNull(),
  baz: integer('baz'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => sql`(now() AT TIME ZONE 'utc'::text)`),
});
