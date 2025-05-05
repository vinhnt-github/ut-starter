import '@testing-library/jest-dom';
import { getServer } from "@/support/msw/node";


beforeAll(() => {
    // Enable API mocking
    getServer().listen();
});

afterEach(() => {
    // Reset handlers between tests
    getServer().resetHandlers();
});

afterAll(() => {
    // Clean up after tests
    getServer().close();
}); 