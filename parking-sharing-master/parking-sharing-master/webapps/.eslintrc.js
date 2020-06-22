module.exports = {
  extends: ['@sy/eslint-config-base'],
  globals: {
    'CryptoJS': 'writable',
    'eventBus': 'writable'
  },
  rules: {
    'no-param-reassign': 0,
    "object-shorthand": ["error", "always"]
  }
};
