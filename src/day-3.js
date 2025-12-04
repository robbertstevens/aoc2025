import * as fs from "fs";
import * as readline from 'readline'
import {joltage} from "./joltage";

async function processFile(fileName, jol = [0, 0]) {
    const fileStream = fs.createReadStream(fileName);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const joltages = []
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        joltages.push(joltage(line, jol.slice()))
    }


    return joltages.reduce((acc, c) => {
        return acc + c
    }, BigInt(0))
}

const res = await processFile('./input/day-3.txt', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

console.log(res)