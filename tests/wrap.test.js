import {expect, test} from 'vitest'
import {findCode, Wrapnum} from "../src/day-1";

test.each([
    [0, -1, 99],
    [0, -2, 98],
    [99, 1, 0],
    [99, 2, 1],
    [99, 0, 99],
    [5, -10, 95],
    [11, 8, 19],
    [0, 420, 20]
])("start %s increments by %s results in %s", (start, value, expected) => {
    const wrapnum = new Wrapnum(start, 0, 99)

    expect(wrapnum.increment(value)).toBe(expected)
})

test("sequence", () => {
    const input = [
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82",
    ]

    expect(findCode(input).filter(i => i === 0).length).toBe(6)
})