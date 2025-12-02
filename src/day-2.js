import {readFile} from "node:fs/promises";

/**
 * @see https://www.baeldung.com/java-repeated-substring#efficient
 * @param {string} id
 */
export function isValidId(id) {
    return ((id + id).indexOf(id, 1)) === id.length
}

/**
 *
 * @param {number} first
 * @param {number} last
 * @return {number[]}
 */
export function findInvalidIdsInRange(first, last) {
    const history = []

    for (let i = first; i <= last; i++) {
        if (!isValidId(String(i))) {
            history.push(i)
        }
    }

    return history
}

const body = await readFile('./input/day-2.txt', "utf-8")

const ranges = body.split(',')


/**
 *
 * @param {string[]}input
 * @returns {number}
 */
export function findSumOfInvalidIds(input) {
    const r = input.flatMap(range => {
        const [first, last] = range.split('-')

        return findInvalidIdsInRange(Number(first),Number(last))
    })
    return r.reduce((acc, c) => acc + c, 0)
}

console.log(findSumOfInvalidIds(ranges))
