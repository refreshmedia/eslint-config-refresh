'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  'rules': {
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }
    ],
    'react/prop-types': 0
  }
}
