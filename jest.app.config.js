const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    "^@shared(.*)$": "<rootDir>/src/app/shared$1",
  },
};
