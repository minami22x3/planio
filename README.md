# Plan.io

_To Do List Productivity_

## Prerequisites

You'll need to install these tools on your machine:

- [`Node.js`](https://nodejs.org) (v20.18.1 or above)
- [`Yarn`](https://yarnpkg.com) (v1)
- [`Docker`](https://docker.com)

## Development

Copy content of `.env.example` file to `.env` file. Then, follow the steps below:

### Supabase Studio

```bash
yarn supabase start
```

Once the studio has started (the initial run may take quite awhile), you will see something similar on your console. Copy these keys and paste them into the
`.env` file to match with the existing environment variables.

```text
Started supabase local development setup.

         API URL: http://127.0.0.1:54321
     GraphQL URL: http://127.0.0.1:54321/graphql/v1
  S3 Storage URL: http://127.0.0.1:54321/storage/v1/s3
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
   S3 Access Key: 625729a08b95bf1b7ff351a663f3a23c
   S3 Secret Key: 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
       S3 Region: local
```

Then open [localhost:54323](http://localhost:54323) to access to your local Supabase Studio.

### Server

```bash
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

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
