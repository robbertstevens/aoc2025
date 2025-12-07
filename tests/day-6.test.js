import {expect, test} from "vitest";
import {calculateColumnTotals, parse, readInputRightToLeft} from "../src/day-6/functions";

test("parse", () => {
    const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   + `

    expect(parse(input)).toStrictEqual([
        [123, 328, 51, 64],
        [45, 64, 387, 23],
        [6, 98, 215, 314],
        ["*", "+", "*", "+"],
    ])
})

test("calculate totals", () => {
    const input = [
        [123, 328, 51, 64],
        [45, 64, 387, 23],
        [6, 98, 215, 314],
        ["*", "+", "*", "+"],
    ]

    expect(calculateColumnTotals(input)).toStrictEqual([33210, 490, 4243455, 401])
})

test("read input right-to-left", () => {
    const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

    expect(readInputRightToLeft(input, 4)).toStrictEqual([
        [4, 431, 623, '+'],
        [175, 581, 32, '*'],
        [8, 248, 369, '+'],
        [356, 24, 1, '*'],
    ])
})