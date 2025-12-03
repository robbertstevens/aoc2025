import * as fs from "fs";
import * as readline from 'readline'

export function joltage(number, j = [0, 0]) {
    const digits = String(number).split('')
    let nextIndex = -1

    for (let ji = 0; ji < j.length; ji++) {
        const remainingDigits = j.length - ji
        const searchingLastDigit = ji === j.length - 1

        const m = searchingLastDigit ? digits.length : digits.length - (remainingDigits - 1)

        for (let i = nextIndex; i <= m - 1; i++) {
            if (Number(j[ji]) < Number(digits[i])) {
                j[ji] = Number(digits[i])
                nextIndex = i + 1
            }
        }
    }
    return BigInt(Number(j.join('')))
}

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