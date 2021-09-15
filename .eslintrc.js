module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-return-assign': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'comma-dangle': 'off',
    'no-useless-return': 'off',
    'no-return-await': 'off'
  },
};
