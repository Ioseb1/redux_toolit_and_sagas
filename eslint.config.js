import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended, 
            ...tseslint.configs.recommended,
        ],
        files: ['**/*.{ts,tsx,js}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'import': importPlugin,
        },
        ignores: [
            'node_modules',
            '.*',
            '**/*/*.d.ts',
            'dist/',
            'mocks/',
            'coverage/',
            'setupTest/',
            'cypress*',
            '*.config.js'
        ],
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/unbound-method": "off",
            "semi": [2, "always"],
            "indent": ["error", 4],
            "import/order": [
                "error",
                {
                    "groups": [
                        "builtin",    
                        "external",   
                        "internal",   
                        ["parent", "sibling", "index"], 
                        "unknown"    
                    ],
                    "newlines-between": "always", 
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": true
                    },
                    "pathGroups": [
                        {
                            "pattern": "@/**", 
                            "group": "internal",
                            "position": "before"
                        }
                    ],
                    "pathGroupsExcludedImportTypes": ["builtin"]
                }
            ]
        },
        "settings": {
            "import/resolver": {
                "alias": {
                    "map": [
                        ["@src", "./src/"],
                        ["@modules", "./src/modules/"],
                        ["@pages", "./src/pages/"],
                        ["@helpers", "./src/helpers/"],
                        ["@components", "./src/components/"],
                        ["@constants", "./src/constants/"],
                        ["@store", "./src/store/"],
                        ["@assets", "./src/assets/"],
                        ["@types", "./src/types/"],
                        ["@setupTest", "./setupTest/"],
                    ],
                    "extensions": [".js", ".ts", ".tsx"] 
                }
            }
        }
    },
);
