const mantineConfig = require('eslint-config-mantine/.prettierrc.js');

module.exports = {
  ...mantineConfig,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  importOrder: [
    '^react(.*)',
    '^next(.*)',
    '^@mantine/(.*)',
    '<THIRD_PARTY_MODULES>',
    '@/(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
