import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // { ignores: ['dist'] },
  {
    extends: [
      // js.configs.recommended,
      // ...tseslint.configs.recommended
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parseOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
    },
    ignorePatterns: ['node_modules', 'dist', '*.config.js'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      semi: [2, 'always'],
      indent: ['error', 4],
    },
  }
);
