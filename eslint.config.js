import js from'@eslint/js'
import globals from'globals'
import reactHooks from'eslint-plugin-react-hooks'
import reactRefresh from'eslint-plugin-react-refresh'

export default[
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            indent: ['error', 4],
            'no-trailing-spaces': ['error'],
            'no-irregular-whitespace': ['error'],
            'object-curly-spacing': ['error', 'always'],
            'no-multi-spaces': 'error',
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'no-multiple-empty-lines': ['error',{ max: 1 }],
            'space-before-function-paren': ['error', 'never'],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
]
