/**
 * @param {string[]} ranges
 // * @return {Set<string>}
 */
function setFromRanges(ranges) {
    const set = new Set();
    for (const range of ranges) {
        const [start, end] = range.split('-')
        for (let i = BigInt(start); i<BigInt(end); i++){}
    }

    return set;
}

/**
 * @param {string[]} freshIngredients an array with ID ranges
 * @param {string} id id of ingredient to check
 * @return {boolean}
 */
export function ingredientChecker(freshIngredients, id) {
    const set = setFromRanges(freshIngredients);
    return set.has(id)
}