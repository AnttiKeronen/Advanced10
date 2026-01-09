module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/jest.setup.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
};
