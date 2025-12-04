import {test, expect} from 'vitest';
import {joltage} from "../src/joltage";

test.each([
    ["987654321111111", 98n],
    ["811111111111119", 89n],
    ["234234234234278", 78n],
    ["818181911112111", 92n],
])('%s', (input, expected) => {
    const result = joltage(input, [0, 0])

    expect(result).toBe(expected)
})

test.each([
    ["987654321111111", 987654321111n],
    ["811111111111119", 811111111119n],
    ["234234234234278", 434234234278n],
    ["818181911112111", 888911112111n],
])('%s', (input, expected) => {
    const result = joltage(input, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    expect(result).toBe(expected)
})