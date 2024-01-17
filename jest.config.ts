import { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  clearMocks: true,
  restoreMocks: true,
  verbose: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['./jest.setup.ts'],
}

export default config
