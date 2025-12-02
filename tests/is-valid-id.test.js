import {expect, test} from 'vitest'
import {isValidId} from "../src/day-2";


test.each([
    ["11", false],
    ["22", false],
    ["1010", false],
    ["1188511885", false],
    ["222222", false],
    ["446446", false],
    ["38593859", false],
])('%s is %s', (value, expects) => {
    const result = isValidId(value)

    expect(result).toBe(expects)
})