import {readFile} from "node:fs/promises";

/**
 *
 * @param {[BigInt, BigInt][]}ranges
 * @param id
 */
function checkRanges(ranges, id) {
    for (const [start, end] of ranges) {
        if (id > start && id <= end) {
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
    const fn = (input) => {
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


export function freshAccordingToRanges() {
    let count = BigInt(0)
    const ranges = []

    const fn = (input) => {
        const lines = input.split('\n')

        for (const line of lines) {
            if (!line.includes("-")) {
                continue
            }
            const [start, end] = line.split('-')

            ranges.push([BigInt(start), BigInt(end)])
        }

        const RANGE_START = 0
        const RANGE_END = 1

        const max = (a, b) => a > b ? a : b


        const merge = (intervals) => {
            intervals.sort((a, b) => {
                return a[RANGE_START] > b[RANGE_START] ? 1 : -1;
            })

            const merged = [intervals[0]]

            for (const range of intervals) {
                const lm = merged[merged.length - 1]

                if (range[RANGE_START] <= lm[RANGE_END]) {
                    lm[RANGE_END] = max(range[RANGE_END], lm[RANGE_END])
                } else {
                    merged.push(range)
                }
            }

            return merged
        }

        const mergedRanges = merge(ranges)

        for (const [start, end] of mergedRanges) {
            count += (end - start) + 1n
        }

        return count

    }

    return fn
}

const data = await readFile('./input/day-5.txt', 'utf-8')

const checker = process()
const checker2 = freshAccordingToRanges()

console.log(checker(data).length)
console.log(checker2(data))