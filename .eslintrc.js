module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
      'indent': [
      'error',
      4
    ],
        'vue/html-indent': [
      'error',
      4
    ],
        'semi': [
      'error',
      'always'
    ],
        'vue/html-self-closing': [
      'error',
      {
        'html': {
          'normal': 'never',
          'void': 'never',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
