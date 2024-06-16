module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true, 
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // your rules here
    },
    globals: {
      google: 'readonly',
      process: 'readonly', 
    },
  };
  