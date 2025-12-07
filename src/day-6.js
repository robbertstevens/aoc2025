import {readFile} from "node:fs/promises";
import {calculateColumnTotals, calculateTotals2, parse, readInputRightToLeft} from "./day-6/functions.js";

const data = await readFile("./input/day-6.txt", 'utf-8')

const grid = parse(data)

const totals = calculateColumnTotals(grid)

console.log("first problem", totals.reduce((a, c) => a + c, 0))

const problem2 = readInputRightToLeft(data, 5)

const totals2 = calculateTotals2(problem2)
console.log("second problem", totals2.reduce((a, c) => a + c, 0))