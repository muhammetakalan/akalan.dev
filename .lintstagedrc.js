module.exports = {
  '**/*': 'prettier -w --ignore-unknown',
  '**/*.{ts,tsx}': ['eslint --max-warnings=0', 'tsc-files --noEmit']
}
