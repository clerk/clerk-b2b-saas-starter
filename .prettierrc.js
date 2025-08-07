/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  tailwindFunctions: ['cva', 'cx'],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
