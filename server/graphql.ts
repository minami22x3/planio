import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'drizzle-graphql';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { db } from '@/server';

const { entities } = buildSchema(db);

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: entities.queries.usersSingle,
      users: entities.queries.users,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: entities.mutations,
  }),
  types: [...Object.values(entities.types), ...Object.values(entities.inputs)],
});

export const server = new ApolloServer({ schema });