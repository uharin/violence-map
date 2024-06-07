module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'function-paren-newline': 'warn',
    'no-plusplus': 'warn',
    'no-promise-executor-return': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'prefer-regex-literals': 'warn',

    'prettier/prettier': 'error',

    // React rules
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',

    // React accessibility rules
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/named': 'off',
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
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
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  overrides: [{ files: ['**/*.js'] }],
};
