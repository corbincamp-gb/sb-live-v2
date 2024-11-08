module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    "no-return-assign": ["off", "always"],
    "eol-last": ["error", "never"],
    "space-before-function-paren": 0,
    "semi": [2, "always"],
    "quotes": [2, "double", { "avoidEscape": true }],
    "indent": "off",
    "no-console": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
