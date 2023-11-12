module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  importOrder: ['react', 'next', '<THIRD_PARTY_MODULES>', '@/components', './'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
