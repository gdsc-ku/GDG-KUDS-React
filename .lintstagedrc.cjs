const path = require('path');

/**
 * @param {string[]} filenames
 * @returns {string}
 */
const buildLintCommand = (filenames) => {
  const fileOptions = filenames.map((f) => `${path.relative(process.cwd(), f)}`).join(' ');
  return `eslint ./src --fix ${fileOptions}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildLintCommand],
};
