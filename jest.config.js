/**
 * Configure Jest as the test runner for @testing-library
 *
 * @see https://jestjs.io/docs/en/configuration
 * @see https://testing-library.com/docs/react-testing-library/setup
 */
module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'babel-polyfill'
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
  // https://jestjs.io/docs/en/webpack.html#mocking-css-modules
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy'
  }
};
