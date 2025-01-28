module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    env: {
      node: true,
      es6: true
    },
    rules: {
      // Add any custom rules here
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  };
  