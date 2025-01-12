import { createId } from '@paralleldrive/cuid2';
import { varchar } from 'drizzle-orm/pg-core';

export const primaryKey = (name = 'id') => {
  return varchar(name, { length: 24 })
    .$defaultFn(() => createId())
    .primaryKey();
};
