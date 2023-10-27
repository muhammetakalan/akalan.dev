module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',

    'simple-import-sort/imports': [
      'warn',
      { groups: [['react'], ['next'], ['@/components'], ['./']] }
    ]
  }
}
