import { ICell, IGrid } from '@/interfaces/grid.interface'

import { 
    generateGrid, 
    getNewGridOnCellClick, 
    getNewCellBasedOnRules 
} from '@/helpers/grid/grid.helper'

import { Hex } from '@/helpers/hexagonal.helper'

const virginGridWithARadiusOfOne: IGrid = [
    { coordinates: new Hex(-1, 0, 1), alive: false },
    { coordinates: new Hex(-1, 1, 0), alive: false },
    { coordinates: new Hex(0, -1, 1), alive: false },
    { coordinates: new Hex(0, 0, 0), alive: false },
    { coordinates: new Hex(0, 1, -1), alive: false },
    { coordinates: new Hex(1, -1, 0), alive: false },
    { coordinates: new Hex(1, 0, -1), alive: false },
]

describe('generateGrid', () => {
    test('a radius of 0 should produce a single dead cell grid:', () => {
        const radius: number = 0
        const expected: IGrid = [{ coordinates: new Hex(0, 0, 0), alive: false }]
        const result: IGrid = generateGrid(radius)
        expect(result).toStrictEqual(expected)
    })
    test('a radius of 1 should produce a seven dead cells grid:', () => {
        const radius: number = 1
        const result: IGrid = generateGrid(radius)
        expect(result).toStrictEqual(virginGridWithARadiusOfOne)
    })
})

describe('getNewGridOnCellClick', () => {
    const oneLivingCellGridWithARadiusOfOne: IGrid = [
        { coordinates: new Hex(-1, 0, 1), alive: false },
        { coordinates: new Hex(-1, 1, 0), alive: false },
        { coordinates: new Hex(0, -1, 1), alive: false },
        { coordinates: new Hex(0, 0, 0), alive: false },
        { coordinates: new Hex(0, 1, -1), alive: false },
        { coordinates: new Hex(1, -1, 0), alive: true },
        { coordinates: new Hex(1, 0, -1), alive: false },
    ]
    test('clicking on a virgin grid should return a one living cell grid', () => {
        const clickedCell: ICell = virginGridWithARadiusOfOne[5]
        const result: IGrid = getNewGridOnCellClick(virginGridWithARadiusOfOne, clickedCell)
        const numberOfLivingCells: number = result.filter((cell) => cell.alive).length
        expect(numberOfLivingCells).toBe(1)
        expect(result).toStrictEqual(oneLivingCellGridWithARadiusOfOne)
    })
    test('clicking on a living cell should return a grid with this cell dead', () => {
        const livingClickedCell: ICell = oneLivingCellGridWithARadiusOfOne[5]
        const result: IGrid = getNewGridOnCellClick(oneLivingCellGridWithARadiusOfOne, livingClickedCell)
        expect(result).toStrictEqual(virginGridWithARadiusOfOne)
    })
})