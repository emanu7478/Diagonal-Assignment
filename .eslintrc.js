module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:promise/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        root: ['.'],
        alias: require('./aliases.json'),
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-native', 'import'],
  rules: {
    eqeqeq: ['error', 'always'],
    'import/no-unresolved': 2,
    'no-console': 2,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
    'react/prop-types': ['error', { ignore: ['navigation', 'theme'] }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 1,
  },
};
