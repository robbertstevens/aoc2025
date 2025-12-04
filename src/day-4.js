import {readFile} from "node:fs/promises";
import {gridChecker} from "./grid-checker.js";

const data = await readFile('./input/day-4.txt', 'utf-8');

const grid = data.split('\n').map(row => row.split(''));

console.log(gridChecker(grid).length);