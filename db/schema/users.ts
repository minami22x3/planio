import { relations, sql } from 'drizzle-orm';
import { pgEnum, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { type z } from 'zod';

import { posts } from '@/db/schema';
import { primaryKey } from '@/lib';

export const genderEnum = pgEnum('gender', ['male', 'female', 'other']);

export const users = pgTable('users', {
  id: primaryKey(),
  username: varchar('username', { length: 24 }).unique().notNull(),
  email: text('email').unique().notNull(),
  phone: varchar('phone', { length: 10 }).unique(),
  avatarUrl: text('avatar_url').notNull(),
  gender: genderEnum('gender').notNull(),
  bio: text('bio'),
  website: text('website'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => sql`(now() AT TIME ZONE 'utc'::text)`),
}).enableRLS();

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const getUsersSchema = createSelectSchema(users);
export const createUserSchema = createInsertSchema(users, {
  username: (schema) => schema.min(4).max(24),
  email: (schema) => schema.email(),
  avatarUrl: (schema) => schema.url(),
}).omit({ id: true });

export type GetUsers = z.infer<typeof getUsersSchema>;
export type CreateNewUser = z.infer<typeof createUserSchema>;
