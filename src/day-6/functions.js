/**
 * @param {string} input
 */
export function parse(input) {
    const grid = input.split('\n')

    return grid.map((row) => {
        return row.replaceAll(".", ' ').replace(/\s+/g, " ").trim().split(' ').map((i) => ['+', '*'].includes(i) ? i : Number(i))
    })
}

const operation = (i, a, b) => {
    if (i === '*') {
        return a * b
    }

    if (i === "+") {
        return a + b
    }

    console.log(i)

    throw Error("Wrong operation");
}

export function readInputRightToLeft(input, rows = 4) {
    const grid = input.split('\n').join('').split('')
    const out = []
    // [
    //      '1', '2', '3', ' ', '3', '2', '8', ' ', ' ', '5', '1', ' ', '6', '4', ' ',
    //      ' ', '4', '5', ' ', '6', '4', ' ', ' ', '3', '8', '7', ' ', '2', '3', ' ',
    //      ' ', ' ', '6', ' ', '9', '8', ' ', ' ', '2', '1', '5', ' ', '3', '1', '4',
    //      '*', ' ', ' ', ' ', '+', ' ', ' ', ' ', '*', ' ', ' ', ' ', '+', ' ', ' ',
    // ]
    const cols = grid.length / rows

    let problemIndex = 0

    for (let c = cols - 1; c >= 0; c -= 1) {
        let concat = ''
        for (let r = 0; r < rows - 1; r++) {
            if(grid[c + (r * cols)] === '.') {
                continue
            }
            concat = concat.concat(grid[c + (r * cols)]).trim()
        }

        if (concat !== '') {
            if (Array.isArray(out[problemIndex])) {
                out[problemIndex].push(Number(concat))
            } else {
                out[problemIndex] = [Number(concat)]
            }
        }

        if (['+','*'].includes(grid[c+((rows-1)*cols)])) {
            out[problemIndex] = [...out[problemIndex], grid[c+((rows-1)*cols)]]
            problemIndex++
        }

    }


    return out
}


/**
 *
 * @param {(number|string)[][]}input
 */
export function calculateColumnTotals(input) {
    const totals = []

    for (let y = 0; y < input.length - 1; y++) {
        for (let x = 0; x < input[y].length; x++) {
            const o = input[input.length - 1][x]

            if (totals[x] === undefined) {
                totals[x] = input[y][x]
            } else {
                totals[x] = operation(input[input.length - 1][x], totals[x], input[y][x])
            }
        }
    }

    return totals
}

export function calculateTotals2(input) {
    const totals = []
    let totalsIndex = 0
    for (const r of input) {
        const o = r.splice(-1)[0]


        for (let x = 0; x < r.length; x++) {
            if (totals[totalsIndex] === undefined) {
                totals[totalsIndex] = r[x]
            } else {
                totals[totalsIndex] = operation(o, totals[totalsIndex], r[x])
            }
        }

        totalsIndex++
    }
    return totals
}