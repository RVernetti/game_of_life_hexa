import { generateGrid, getNewGridOnCellClick, getNewCellBasedOnRules } from '@/helpers/grid.helper'
import { Hex } from '@/helpers/hexagonal.helper'

describe('generateGrid', () => {
    test("a null radius (0) should produce a single cell grid:", () => {
        const result = generateGrid(0)
        const expected = [{ coordinates: new Hex(0, 0, 0), alive: false }]
        expect(result).toStrictEqual(expected)
    })
})