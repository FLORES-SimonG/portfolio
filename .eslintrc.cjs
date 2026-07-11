module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // Types
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',

    // Unused
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'import/no-unused-modules': ['error', { unusedExports: true }],

    // Identifier length - require 2+ chars for identifiers (allow _ single char for ignored args)
    'id-length': ['error', { min: 2, exceptions: ['_'] }],

    // Import ordering and style
    'import/order': ['warn', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] }],

    // Misc
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
