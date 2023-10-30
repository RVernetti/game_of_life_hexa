import { generateGrid, getNewGridOnCellClick, getNewCellBasedOnRules } from '@/helpers/grid.helper'
import { Hex } from '@/helpers/hexagonal.helper'

describe('generateGrid', () => {
    test('a null radius (0) should produce a single dead cell grid:', () => {
        const result = generateGrid(0)
        const expected = [{ coordinates: new Hex(0, 0, 0), alive: false }]
        expect(result).toStrictEqual(expected)
    })
    test('a radius of 1 should produce a seven dead cells grid:', () => {
        const result = generateGrid(1)
        const expected = [
            { coordinates: new Hex(-1, 0, 1), alive: false },
            { coordinates: new Hex(-1, 1, 0), alive: false },
            { coordinates: new Hex(0, -1, 1), alive: false },
            { coordinates: new Hex(0, 0, 0), alive: false },
            { coordinates: new Hex(0, 1, -1), alive: false },
            { coordinates: new Hex(1, -1, 0), alive: false },
            { coordinates: new Hex(1, 0, -1), alive: false },
        ]
        expect(result).toStrictEqual(expected)
    })
})