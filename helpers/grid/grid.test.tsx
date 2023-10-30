import { IGrid } from '@/interfaces/grid.interface'

import { 
    generateGrid, 
    getNewGridOnCellClick, 
    getNewCellBasedOnRules 
} from '@/helpers/grid/grid.helper'

import { Hex } from '@/helpers/hexagonal.helper'

describe('generateGrid', () => {
    test('a radius of 0 should produce a single dead cell grid:', () => {
        const result: IGrid = generateGrid(0)
        const expected: IGrid = [{ coordinates: new Hex(0, 0, 0), alive: false }]
        expect(result).toStrictEqual(expected)
    })
    test('a radius of 1 should produce a seven dead cells grid:', () => {
        const result: IGrid = generateGrid(1)
        const expected: IGrid = [
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