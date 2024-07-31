const eslintConfig = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'function-paren-newline': 'warn',
    'no-plusplus': 'warn',
    'no-promise-executor-return': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-unused-vars': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],

    'prefer-regex-literals': 'warn',

    'prettier/prettier': 'error',

    // Prefer arrow functions
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'expression'],

    // React rules
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',

    // 'react/jsx-curly-newline': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 4,
        },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
  parser: "babel-eslint",
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  overrides: [
    {
      files: ['src/store/**/*.js'], // Adjust the pattern to match your slice files
      rules: { 'no-param-reassign': 'off' },
    },
  ],
};

export default eslintConfig;