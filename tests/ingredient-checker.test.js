import {expect, test} from 'vitest'
import {process} from "../src/day-5";

test('fresh ingredients checker', () => {
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
    const checker = process()

    expect(checker(input).length).toBe(3)
})