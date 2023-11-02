import { ICell, IGrid } from '@/interfaces/grid.interface'

import { Hex } from '@/helpers/hexagonal.helper'

import {
    generateGrid,
    getNumberOfLivingCells, 
    getNumberOfLivingNeighboringCells,
    getNewGridOnCellClick,
    getNewCellBasedOnRules 
} from '@/helpers/grid/grid.helper'

// Based on an default population factor of 2:
const populationFactor = 2

const virginGridWithARadiusOfOne: IGrid = [             // 7 cells:
    { coordinates: new Hex(-1, 0, 1), alive: false },   // [0]
    { coordinates: new Hex(-1, 1, 0), alive: false },   // [1]
    { coordinates: new Hex(0, -1, 1), alive: false },   // [2]
    { coordinates: new Hex(0, 0, 0), alive: false },    // [3] origin
    { coordinates: new Hex(0, 1, -1), alive: false },   // [4]
    { coordinates: new Hex(1, -1, 0), alive: false },   // [5]
    { coordinates: new Hex(1, 0, -1), alive: false },   // [6]
]

const oneLivingCellGrid: IGrid = [                      // 7 cells:
    { coordinates: new Hex(-1, 0, 1), alive: false },   // [0]
    { coordinates: new Hex(-1, 1, 0), alive: false },   // [1]
    { coordinates: new Hex(0, -1, 1), alive: false },   // [2]
    { coordinates: new Hex(0, 0, 0), alive: false },    // [3] origin
    { coordinates: new Hex(0, 1, -1), alive: false },   // [4]
    { coordinates: new Hex(1, -1, 0), alive: true },    // [5] alive
    { coordinates: new Hex(1, 0, -1), alive: false },   // [6]
]

const multipleLivingCellsGrid: IGrid = [                // 7 cells:
    { coordinates: new Hex(-1, 0, 1), alive: true },    // [0] alive
    { coordinates: new Hex(-1, 1, 0), alive: false },   // [1]
    { coordinates: new Hex(0, -1, 1), alive: false },   // [2]
    { coordinates: new Hex(0, 0, 0), alive: false },    // [3] origin
    { coordinates: new Hex(0, 1, -1), alive: true },    // [4] alive
    { coordinates: new Hex(1, -1, 0), alive: true },    // [5] alive
    { coordinates: new Hex(1, 0, -1), alive: false },   // [6]
]

describe('generateGrid', () => {
    test('A radius of 0 should produce a single dead cell grid', () => {
        const radius: number = 0
        const expected: IGrid = [{ coordinates: new Hex(0, 0, 0), alive: false }]
        const result: IGrid = generateGrid(radius)
        const numberOfLivingCells: number = getNumberOfLivingCells(result)
        expect(result).toStrictEqual(expected)
        expect(numberOfLivingCells).toBe(0)
    })
    test('A radius of 1 should produce a seven dead cells grid', () => {
        const radius: number = 1
        const result: IGrid = generateGrid(radius)
        const numberOfLivingCells: number = getNumberOfLivingCells(result)
        expect(result).toStrictEqual(virginGridWithARadiusOfOne)
        expect(numberOfLivingCells).toBe(0)
    })
})

describe('getNumberOfLivingCells', () => {
    test('A virgin grid without living cell should return "0"', () => {
        const result = getNumberOfLivingCells(virginGridWithARadiusOfOne)
        expect(result).toBe(0)
    })
    test('A grid with one living cell should return "1"', () => {
        const result = getNumberOfLivingCells(oneLivingCellGrid)
        expect(result).toBe(1)
    })
    test('A grid with three living cells should return "3"', () => {
        const result = getNumberOfLivingCells(multipleLivingCellsGrid)
        expect(result).toBe(3)
    })
})

describe('getNewGridOnCellClick', () => {
    test('Clicking on a virgin grid should return a one living cell grid', () => {
        const clickedCell: ICell = virginGridWithARadiusOfOne[5]
        const result: IGrid = getNewGridOnCellClick(virginGridWithARadiusOfOne, clickedCell)
        const numberOfLivingCells: number = getNumberOfLivingCells(result)
        expect(numberOfLivingCells).toBe(1)
        expect(result).toStrictEqual(oneLivingCellGrid)
    })
    test('Clicking on a living cell should return a grid with this same cell dead', () => {
        const livingClickedCell: ICell = oneLivingCellGrid[5]
        const result: IGrid = getNewGridOnCellClick(oneLivingCellGrid, livingClickedCell)
        const numberOfLivingCells: number = getNumberOfLivingCells(result)
        expect(numberOfLivingCells).toBe(0)
        expect(result).toStrictEqual(virginGridWithARadiusOfOne)
    })
})

describe('getNumberOfLivingNeighboringCells', () => {
    test('Targeting the origin on a grid of three living cells should return "3"', () => {
        const targetedCell = multipleLivingCellsGrid[3]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(multipleLivingCellsGrid, coordinates)
        expect(result).toBe(3)
    })
    test('Targeting a cell on the edge surrounded by two living cells should return "2"', () => {
        const targetedCell = multipleLivingCellsGrid[1]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(multipleLivingCellsGrid, coordinates)
        expect(result).toBe(2)
    })
    test('Targeting a cell on the edge not surrounded by living cell should return "0"', () => {
        const targetedCell = multipleLivingCellsGrid[0]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(multipleLivingCellsGrid, coordinates)
        expect(result).toBe(0)
    })
    test('Targeting the origin on a virgin grid should return "0"', () => {
        const targetedCell = virginGridWithARadiusOfOne[3]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(virginGridWithARadiusOfOne, coordinates)
        expect(result).toBe(0)
    })
    test('Targeting a cell on the edge on a virgin grid should return "0"', () => {
        const targetedCell = virginGridWithARadiusOfOne[5]
        const { coordinates } = targetedCell
        const result = getNumberOfLivingNeighboringCells(virginGridWithARadiusOfOne, coordinates)
        expect(result).toBe(0)
    })
})

describe('getNewCellBasedOnRules', () => {
    test('A living cell surrounded by three living cells shoud die by overcrowding', () => {
        const targetedCell = multipleLivingCellsGrid[3]
        const result = getNewCellBasedOnRules(multipleLivingCellsGrid, targetedCell, populationFactor)
        expect(result.alive).toBeFalsy
    })
    test('A living cell surrounded by only one living cell shoud die by lonelyness', () => {
        const targetedCell = multipleLivingCellsGrid[1]
        const result = getNewCellBasedOnRules(multipleLivingCellsGrid, targetedCell, populationFactor)
        expect(result.alive).toBeFalsy
    })
    test('A dead cell surrounded by three living cells shoud be borning', () => {
        const targetedCell = multipleLivingCellsGrid[0]
        const result = getNewCellBasedOnRules(multipleLivingCellsGrid, targetedCell, populationFactor)
        expect(result.alive).toBeTruthy
    })
})