import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
          'VariableDeclarator': 1,
          'outerIIFEBody': 1,
          'FunctionDeclaration': { 'parameters': 'first' },
          'FunctionExpression': { 'parameters': 'first' },
          'CallExpression': { 'arguments': 'first' },
          'ArrayExpression': 'first',
          'ObjectExpression': 'first',
          'ImportDeclaration': 1,
          'flatTernaryExpressions': false
        }
      ],
      'no-trailing-spaces': 'error',
    }
  }
)
