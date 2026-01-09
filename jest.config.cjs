module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["./src/__test__/jest.setup.ts"],

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
};
