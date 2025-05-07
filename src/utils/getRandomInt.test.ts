import { randomInt } from "./getRandomInt";

describe("randomInt", () => {
    it("returns a number within the specified range", () => {
        const min = 1;
        const max = 10;
        const result = randomInt(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    it("returns the same number when min and max are equal", () => {
        const min = 5;
        const max = 5;
        const result = randomInt(min, max);
        expect(result).toBe(5);
    });

    it("throws an error when min is greater than max", () => {
        const min = 10;
        const max = 5;
        expect(() => randomInt(min, max)).toThrow("Min value should be less than max value");
    });

    it("produces different results over multiple calls", () => {
        const min = 1;
        const max = 100;
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(randomInt(min, max));
        }
        expect(results.size).toBeGreaterThan(1); // Ensures randomness
    });

    it("returns a mocked value", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.5); // Mock Math.random to control output
        const min = 1;
        const max = 10;
        const result = randomInt(min, max);
        expect(result).toBe(6); // 0.5 * (10 - 1 + 1) + 1 = 6
    });
});
