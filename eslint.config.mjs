import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: { project: true },
    plugins: ['@typescript-eslint', 'unused-imports'],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    ignorePatterns: ['.lintstagedrc.js'],
    rules: {
      'arrow-spacing': 'error',
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-return-await': 'warn',
      'no-self-assign': 'error',
      'no-var': 'error',
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: { attributes: false },
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  }),
];

export default eslintConfig;
