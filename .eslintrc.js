module.exports = {
  root: true,
  parser: '',
  plugins: [],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: [],
      parserOptions: {},
      extends: [
        //declaring 'next/core-web-vitals' and 'prettier' again in case
        //the two plugin:... configs above overrode any of their rules
        //Also, 'prettier' needs to be last in any extends array
        'next/core-web-vitals',
        'prettier',
      ],
    },
  ],
};
