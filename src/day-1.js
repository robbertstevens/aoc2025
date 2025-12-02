import {readFile} from "node:fs/promises";


export class Wrapnum {
    constructor(start, min, max) {
        this.index = start
        this.min = min
        this.max = max
        this.history = []
    }

    /**
     *
     * @param {number}num
     * @returns {number}
     */
    increment(num) {
        for (let i = 0;  i < Math.abs(num);i++  ) {
            this.index += Math.sign(num)

            if (this.index > this.max) {
                this.index = this.min
            }

            if(this.index < this.min) {
                this.index = this.max
            }

            if (this.index === 0) {
                this.history.push(this.index)
            }
        }

        return this.index
    }
}

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


