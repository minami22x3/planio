import { createId } from '@paralleldrive/cuid2';
import { varchar } from 'drizzle-orm/pg-core';

/**
 * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
 */
export const primaryKey = (name = 'id') => {
  return varchar(name, { length: 24 })
    .$defaultFn(() => createId())
    .primaryKey();
};
