import {expect, test} from 'vitest'
import {freshAccordingToRanges, process} from "../src/day-5";

const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

test('fresh ingredients checker', () => {
    const checker = process()

    expect(checker(input).length).toBe(3)
})

test('calculate all ranges', () => {
   const checker = freshAccordingToRanges()

    expect(checker(input)).toBe(14n)
})