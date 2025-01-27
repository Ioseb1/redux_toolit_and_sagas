module.exports = {
    verbose:true,
    setupFilesAfterEnv: ['<rootDir>/setupTest/setupTests.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage/',
    coverageReporters: ['lcov', 'text'],
    coveragePathIgnorePatterns: [
        'node_modules',
        'src/styles/',
        'src/types/',
        '/Connector\\.ts$',
        '/index\\.ts$',
        '/state\\.ts$',
        '/types\\.ts$',
    ],
    collectCoverageFrom: [
        '!src/types/**',
        'src/**/**.(ts|tsx)',
    ],
    coverageThreshold: {
        global: {
            statements: 75,
            branches: 75,
            lines: 75,
            functions: 75,
        },
    },
    testMatch: [
        `<rootDir>/src/**/__tests__/**/**.test.(ts|tsx)`,
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    verbose: true,
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        // eslint-disable-next-line max-len
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/setupTest/__mocks__/fileMock.js',
        '\\.(svg)$': '<rootDir>/setupTest/__mocks__/svgMock.tsx',
        '\\.(css)$': '<rootDir>/setupTest/__mocks__/cssMock.js',
        
        '^@src(.*)': '<rootDir>/src/$1',
        '^@setupTest(.*)': '<rootDir>/setupTest/$1',
        '^@mocks(.*)': '<rootDir>/mocks/$1',
    },
    roots: [
        'src/',
        'setupTest/',
    ],
    testEnvironment: 'jest-environment-jsdom',
    testRunner: 'jest-jasmine2',
    testEnvironmentOptions: {
        url: 'http://localhost/',
    }
};
