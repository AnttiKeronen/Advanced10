module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/src/__test__/jest.setup.ts"],

  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  }
};
