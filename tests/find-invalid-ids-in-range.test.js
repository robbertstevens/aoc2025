import {findInvalidIdsInRange, findSumOfInvalidIds} from "../src/day-2";
import {expect, test} from "vitest";

test.each([
    [11, 22, [11, 22]],
    [95, 115, [99]],
    [998, 1012, [1010]],
    [1188511880, 1188511890, [1188511885]],
    [222220, 222224, [222222]],
    [1698522, 1698528, []],
    [446443, 446449, [446446]],
    [38593856, 38593862, [38593859]],
    [565653, 565659, []],
    [824824821, 824824827, []],
    [2121212118, 2121212124, []],
])("%s", (first, last, expected) => {
    const result = findInvalidIdsInRange(first, last);

    expect(result).toStrictEqual(expected)
})

test('sum range', () => {
    const input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
    const result = findSumOfInvalidIds(input.split(','))

    expect(result).toBe(1227775554)
})