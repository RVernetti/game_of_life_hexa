import { ICell, IGrid } from '@/interfaces/grid.interface'

import { 
    generateGrid, 
    getNewGridOnCellClick, 
    getNewCellBasedOnRules, 
    getNumberOfLivingNeighboringCells
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
    const oneLivingCellGrid: IGrid = [
        { coordinates: new Hex(-1, 0, 1), alive: false },
        { coordinates: new Hex(-1, 1, 0), alive: false },
        { coordinates: new Hex(0, -1, 1), alive: false },
        { coordinates: new Hex(0, 0, 0), alive: false },
        { coordinates: new Hex(0, 1, -1), alive: false },
        { coordinates: new Hex(1, -1, 0), alive: true },
        { coordinates: new Hex(1, 0, -1), alive: false },
    ]
    test('clicking on a virgin grid should return a one living cell grid:', () => {
        const clickedCell: ICell = virginGridWithARadiusOfOne[5]
        const result: IGrid = getNewGridOnCellClick(virginGridWithARadiusOfOne, clickedCell)
        const numberOfLivingCells: number = result.filter((cell) => cell.alive).length
        expect(numberOfLivingCells).toBe(1)
        expect(result).toStrictEqual(oneLivingCellGrid)
    })
    test('clicking on a living cell should return a grid with this cell dead:', () => {
        const livingClickedCell: ICell = oneLivingCellGrid[5]
        const result: IGrid = getNewGridOnCellClick(oneLivingCellGrid, livingClickedCell)
        const numberOfLivingCells: number = result.filter((cell) => cell.alive).length
        expect(numberOfLivingCells).toBe(0)
        expect(result).toStrictEqual(virginGridWithARadiusOfOne)
    })
})

describe('getNumberOfLivingNeighboringCells', () => {
    const multipleLivingCellsGrid: IGrid = [
        { coordinates: new Hex(-1, 0, 1), alive: true },
        { coordinates: new Hex(-1, 1, 0), alive: false },
        { coordinates: new Hex(0, -1, 1), alive: true },
        { coordinates: new Hex(0, 0, 0), alive: false },
        { coordinates: new Hex(0, 1, -1), alive: true },
        { coordinates: new Hex(1, -1, 0), alive: true },
        { coordinates: new Hex(1, 0, -1), alive: true },
    ]
    test('targeting the origin on a virgin grid should return "0":', () => {
        const targetedCell = virginGridWithARadiusOfOne[3]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(virginGridWithARadiusOfOne, coordinates)
        expect(result).toBe(0)
    })
    test('targeting a cell on the edge on a virgin grid should return "0":', () => {
        const targetedCell = multipleLivingCellsGrid[5]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(virginGridWithARadiusOfOne, coordinates)
        expect(result).toBe(0)
    })
    test('targeting the dead origin on a five living cells grid should return "5":', () => {
        const targetedCell = multipleLivingCellsGrid[3]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(multipleLivingCellsGrid, coordinates)
        expect(result).toBe(5)
    })
    test('targeting a dead cell on the edge surrounded by two living cells should return "2":', () => {
        const targetedCell = multipleLivingCellsGrid[5]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(multipleLivingCellsGrid, coordinates)
        expect(result).toBe(2)
    })
})