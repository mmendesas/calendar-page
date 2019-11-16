module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // enable prettier errors
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }], // use .js for jsx files
    'import/prefer-default-export': 'off', // disable prefer-default-export when we have one export
  },
};
