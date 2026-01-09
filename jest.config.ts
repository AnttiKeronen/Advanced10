/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"transpileOnly": true} */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // TS + ESM
  testEnvironment: 'jsdom',             // for React DOM
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/__test__/jest.setup.ts'],
  reporters: ['default', 'jest-junit'],
  roots: ['<rootDir>/src/__test__'],
  testTimeout: 10000,
};

export default config;
