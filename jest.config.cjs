module.exports = {
  preset: 'ts-jest/presets/js-with-ts', 
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/__test__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__test__/jest.setup.ts'],
  testTimeout: 10000,
  reporters: ['default', 'jest-junit']
};
