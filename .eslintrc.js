module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    'node_modules',
    '.*',
    '**/*/*.d.ts',
    'dist/',
    'mocks/',
    'coverage/',
    'setupTest/',
    'cypress*',
    '*.config.js',
  ],
  rules: {
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unbound-method': 'off',
    semi: [2, 'always'],
    indent: ['error', 4],
  },
  settings: {
    'import/resolver': {
      alias: [['@src', './src/']],
    },
  },
};
