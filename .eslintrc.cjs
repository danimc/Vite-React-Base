module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
     camelcase: 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
