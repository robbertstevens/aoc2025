import {readFile} from "node:fs/promises";
import {gridChecker} from "./grid-checker.js";

const data = await readFile('./input/day-4.txt', 'utf-8');

const grid = data.split('\n').map(row => row.split(''));
let n = []
let r = []
let i = 0
do {
    for (const [y, x] of r) {
        grid[y][x] = '.'
    }
    n = gridChecker(grid)
    r.push(...n)
    i++
} while(n.length > 0)

console.log(r.length)