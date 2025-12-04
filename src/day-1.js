import {readFile} from "node:fs/promises";
import {Wrapnum} from "./wrapnum";

/**
 * @param {string[]} input
 */
export function findCode(input) {
    const wrapnum = new Wrapnum(50, 0, 99);

    const digits = input.map((i) => {
        if (i.startsWith('L')) {
            return Number(-i.slice(1, i.length))
        }

        if (i.startsWith("R")) {
            return Number(i.slice(1, i.length))
        }
    })

    for (const digit of digits) {
        wrapnum.increment(digit)
    }

    return wrapnum.history
}

const body = await readFile('./input/day-1.txt', "utf-8")

// console.log(body.split('\n'))

// console.log(findCode(commands).filter(i => i === 0).length)
console.log(findCode(body.split('\n')).filter(i => i === 0).length)


