const path = require('path');

const jsxLintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{css,scss,sass,json}': 'prettier --write',
  '*.{js,jsx,ts,tsx}': [jsxLintCommand],
};
