import {readFile} from "node:fs/promises";
import {calculateSplits, quantumTachyon} from "./day-7/tachyon.js";

const data = await readFile('./input/day-7.txt', 'utf-8')

const [counter] = calculateSplits(data)


console.log(counter)
const quantum = quantumTachyon(data)

console.log(quantum)