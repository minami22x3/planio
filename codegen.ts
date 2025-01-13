import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

import 'dotenv/config';

const config: CodegenConfig = {
  schema: `http://localhost:${process.env.PORT ?? 3000}/api/graphql`,
  documents: 'graphql/**/*.ts',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'graphql/schema.graphql': {
      plugins: ['schema-ast'],
      config: { commentDescriptions: true },
    },
    'graphql/types.ts': {
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
