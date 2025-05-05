export default {
    testEnvironment: 'jest-fixed-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/support/jest/jest.setup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true
                    },
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
                module: {
                    type: 'commonjs',
                },
            },
        ],
        '^.+\\.css$': 'jest-transform-stub',
        '^.+\\.png$': 'jest-transform-stub',
    },

}