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