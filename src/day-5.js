import {readFile} from "node:fs/promises";

/**
 *
 * @param {[BigInt, BigInt][]}ranges
 * @param id
 */
function checkRanges(ranges, id) {
    for (const [start, end] of ranges) {
        if (id > start && id < end) {
            return true
        }
    }

    return false
}

export function process() {
    const freshIngredientRanges = []

    /**
     * @param {string} input
     */
    const fn =  (input) => {
        const lines = input.split('\n')
        const freshIngredients = []

        for (const line of lines) {
            if (line === '') {
                continue;
            }

            if (line.includes("-")) {
                const [start, end] = line.split('-')

                freshIngredientRanges.push([BigInt(start), BigInt(end)])

                continue;
            }

            // check available ingredients
            if (checkRanges(freshIngredientRanges, BigInt(line))) {
                freshIngredients.push(line)
            }
        }

        return freshIngredients
    }

    return fn
}

const data = await readFile('./input/day-5.txt', 'utf-8')

const checker = process()

console.log(checker(data).length)