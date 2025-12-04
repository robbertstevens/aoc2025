/**
 * @param {string[][]} grid
 */
export function gridChecker(grid) {
    const points = []
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '.') {
                continue
            }
            const surrounding = [
                grid?.[y - 1]?.[x - 1], // top lef
                grid?.[y - 1]?.[x],     // top
                grid?.[y - 1]?.[x + 1], // top right
                grid?.[y]?.[x + 1],     // right
                grid?.[y + 1]?.[x + 1], // bottom right
                grid?.[y + 1]?.[x],     // bottom
                grid?.[y + 1]?.[x - 1], // bottom left
                grid?.[y]?.[x - 1],     // left
            ]

            if (surrounding.filter((s) => s === '@').length < 4) {
                // grid[y][x] = '.'
                points.push([y, x])
            }
        }
    }

    return points
}

