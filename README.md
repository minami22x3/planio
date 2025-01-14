# Plan.io

_To Do List Productivity_

## Prerequisites

You'll need to install these tools on your machine:

- [`Node.js`](https://nodejs.org) (v20.18.1 or above)
- [`Yarn`](https://yarnpkg.com) (v1)
- [`Docker`](https://docker.com)

## Development

Copy content of `.env.example` file to `.env` file. Then, start the server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database

In this project, we'll use [`drizzle-orm`](https://orm.drizzle.team) to working with
[`PostgreSQL`](https://postgresql.org) database.

To start the local database, run `docker-compose up -d`, then use any tool to access to the database with below
connection string:

```
postgres://postgres:postgres@localhost:6543/planiox
```

### Migrations

Once you are satisfied with the changes (schema declaration, subsequent schema changes, etc.), run
`yarn drizzle-kit generate --name=<migration_name>` to generate SQL migrations. These migration files are locate in
`db/migrations` directory.

Then run `yarn drizzle-kit migration` to apply generated SQL migration files to your database.

Visit the [documentation](https://orm.drizzle.team/docs/kit-overview) to learn more about migrations with `drizzle-kit`.

### GraphQL Codegen

We also have a `Apollo Server` running on `/api/graphql` route. All schema, queries, mutations you see when
accessing that route are generated from Drizzle schema. You can customize them in `server/graphql.ts` file.

Run `yarn graphql-codegen` to generate graphql schema and utility hooks corresponding to the queries and mutations you
customized above.
