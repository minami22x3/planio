const path = require('path');

const jsxLintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '!(*.{js,jsx,ts,tsx})': 'prettier --write',
  '*.{js,jsx,ts,tsx}': [jsxLintCommand],
};
