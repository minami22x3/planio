import { relations } from 'drizzle-orm';
import { boolean, json, pgTable, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { primaryKey } from 'lib';

import { users } from '@/db/schema';

export const posts = pgTable(
  'posts',
  {
    id: primaryKey(),
    authorId: varchar('author_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    caption: text('caption').notNull(),
    location: json('location').notNull(),
    hideViewCount: boolean('hide_view_count').default(false),
    turnOffCommenting: boolean('turn_off_commenting').default(false),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (columns) => ({
    authorIdx: uniqueIndex('author_idx').on(columns.authorId),
  })
).enableRLS();

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
