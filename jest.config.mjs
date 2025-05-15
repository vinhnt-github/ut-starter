export default {
    testEnvironment: 'jest-fixed-jsdom',
    // Specifies the test environment. 'jest-fixed-jsdom' is likely a custom environment based on jsdom for browser-like testing.

    setupFilesAfterEnv: ['<rootDir>/src/support/jest/jest.setup.ts'],
    // Runs the specified setup file after the test environment is set up. Useful for configuring global test utilities.

    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    // Tells Jest to ignore certain paths (e.g., `node_modules`) when searching for test files.

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // Maps module paths starting with `@/` to the `src/` directory. This simplifies imports in your code.

    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
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
        // Transforms TypeScript and JavaScript files using `@swc/jest`. This is a fast alternative to Babel for transpiling code.

        '^.+\\.css$': 'jest-transform-stub',
        '^.+\\.png$': 'jest-transform-stub',
        // Stubs CSS and PNG files during tests to avoid processing them as actual modules.
    },
};