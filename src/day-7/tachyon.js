/**
 * @param {string}input
 * @return {string[][]}
 */
export function parseManifold(input) {
    const manifold = input.split('\n')


    return manifold.map(row => row.split(''))
}

const START = "S"
const SPLITTER = "^"
const BEAM = "|"
const NOTHING = '.'

/**
 *
 * @param {string}input
 */
export function calculateSplits(input) {
    const manifold = parseManifold(input)

    let splitCounter = 0

    for (let i = 0; i < manifold.length; i++) {
        for (let x = 0; x < manifold[i].length; x++) {
            const r = manifold[i][x]

            if (r === START) {
                manifold[i + 1][x] = BEAM
            }

            if (r === BEAM) {
                const below = manifold?.[i + 1]?.[x]

                if (below === undefined) {
                    continue
                }

                if (below === SPLITTER) {
                    const left = manifold?.[i + 1]?.[x - 1]
                    const right = manifold?.[i + 1]?.[x + 1]

                    splitCounter++

                    if (left === undefined || right === undefined) continue

                    if (left !== BEAM) {
                        manifold[i + 1][x - 1] = BEAM
                    }
                    if (right !== BEAM) {
                        manifold[i + 1][x + 1] = BEAM

                    }


                } else {
                    manifold[i + 1][x] = BEAM
                }
            }

            // if (r === SPLITTER) {
            //     const left = manifold[i + 1][x-1]
            //     const right = manifold[i + 1][x+1]
            // }
        }
    }

    return [splitCounter, (manifold)]
}

/**
 *
 * @param {string}input
 */
export function quantumTachyon(input) {
    const manifold = parseManifold(input)
    const [y,x] = findStart(manifold)
    return calculateRoutes(manifold, [y+1, x])
}

/**
 *
 * @param {string[][]}manifold
 */
function printManifold(manifold) {
    const s = manifold.map((r) => r.join('')).join('\n');
    console.log(s)
    return s
}

/**
 *
 * @param {string[][]} manifold
 * @return {null|*[]}
 */
function findStart(manifold) {
    for (let y = 0; y < manifold.length; y++) {
        for (let x = 0; x < manifold[y].length; x++) {
            const cell = manifold[y][x]

            if (cell === START) {
                return [y,x]
            }
        }
    }

    return null
}

/**
 *
 * @param {string[][]}manifold
 * @param {[number, number]}next
 * @return {number}
 */
function calculateRoutes(manifold, [y, x]) {
    const next = manifold?.[y+1]?.[x]

    if (next === undefined) {
        return 1
    }

    if (next === SPLITTER) {
        return calculateRoutes(manifold, [y+1, x-1]) + calculateRoutes(manifold, [y+1, x+1])
    }


    return calculateRoutes(manifold, [y+1, x])
}