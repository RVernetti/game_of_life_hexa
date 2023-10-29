import { ICell, IGrid } from '@/interfaces/grid.interface'
import { Hex } from '../hex/hexagonal.helper'

/**
 * Generates a circular grid of hexagonal coordinates from a given radius
 * @param radius - The grid radius from the origin [0,0,0] to the border
 * @returns {array} The circular grid of hexagonal coordinates
 */
const generateGrid = (radius: number) => {
    let grid: IGrid = []
    for(let q = -radius; q <= radius; ++q){
        for(let r = -radius; r <= radius; ++r){
            for(let s = -radius; s <= radius; ++s){
                if (Math.round(q + r + s) === 0){
                    grid.push({ coordinates: new Hex(q, r, s), alive: false })
                }
            }
        }
    }
    return grid
}

const getNewGridOnCellClick = (grid: IGrid, clickedCell: ICell) => {
    const { coordinates, alive } = clickedCell
    const newCell = { ...clickedCell, alive: !alive }
    const index = grid.findIndex((cell) => cell.coordinates === coordinates)
    return [...grid.slice(0, index), newCell, ...grid.slice(index + 1)]
}

    /**
     * Gives the number of living neighboring cells
     * @param grid - The grid containing all the coordinates of cells
     * @param coordinates - The coordinates of a given cell
     * @returns {number} The number of living neighboring cells
     */
    const getNumberOfLivingNeighboringCells = (grid: IGrid, coordinates: Hex) => {
        let count = 0
        // We check all cells surrounding the given cell, exploring all possible directions
        for (let i = 0; i < 6; ++i) {
            const neighborCoordinates = coordinates.neighbor(i)
            const neighbor = grid.find((cell: ICell) => JSON.stringify(cell.coordinates) === JSON.stringify(neighborCoordinates))
            // If the neighboring cell exists in the grid and is alive, we increment the count
            if (neighbor?.alive) ++count
        }
        return count
    }

    /**
     * The rules of the game concerning the fate of a cell
     * @param grid - The grid containing all cells
     * @param cell - The concerned cell
     */
    const getNewCellBasedOnRules = (grid: IGrid, cell: ICell, factor: number = 3) => {
        const { coordinates, alive } = cell
        const newCell = { ...cell, alive: !alive }
        // We count the number of living neighboring cells
        const livingNeighborsNumber = getNumberOfLivingNeighboringCells(grid, coordinates)
        // If the cell is alive this turn
        if (alive) {
            // If living neighboring cells are too far from factor, she dies by lonelyness or overcrowding
            if (livingNeighborsNumber < (factor - 1) || livingNeighborsNumber > factor) return newCell
        // If she was dead this turn and living neighboring cells are equal to the factor, she's borning
        } else if (livingNeighborsNumber === factor) return newCell
        // Else the cell status hasn't change, she remains the same
        return cell
    }

export { generateGrid, getNewGridOnCellClick, getNewCellBasedOnRules }