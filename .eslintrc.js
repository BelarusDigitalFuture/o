module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    'comma-dangle': 0,
    'react/prop-types': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'no-unexpected-multiline': 'warn',
    'jsx-quotes': [1, 'prefer-double'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
