module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    es6: true,
  },
  "extends": [
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser"
};
