import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: `http://localhost:${process.env.PORT ?? 3000}/api/graphql`,
  documents: 'gql/**/*.ts',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'gql/schema.graphql': {
      plugins: ['schema-ast'],
      config: { commentDescriptions: true },
    },
    'gql/types.ts': {
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
