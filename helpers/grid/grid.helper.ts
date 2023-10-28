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

    // /**
    //  * Gives the number of living neighboring cells
    //  * @param grid - The grid containing all the coordinates of cells
    //  * @param coordinates - The coordinates of a given cell
    //  * @returns {number} The number of living neighboring cells
    //  */
    // const getNumberOfLivingNeighboringCells = (grid: IGrid, coordinates: Hex) => {
    //     let count = 0
    //     // We check all cells surrounding the given cell, exploring all possible directions
    //     for (let i = 0; i < 6; ++i) {
    //         const neighbor = coordinates.neighbor(i)
    //         const isInTheGrid = grid.some((cell: ICell) => JSON.stringify(cell.coordinates) === JSON.stringify(neighbor))
    //         // If the neighboring cell exists in the grid
    //         if (isInTheGrid) {
    //             const neighborIsAlive = useRecoilValue(livingCellStateFamily({ ...neighbor }))
    //             // And if it is alive, we increment the final count
    //             if(neighborIsAlive) ++count
    //         }
    //     }
    //     return count
    // }

    // /**
    //  * The rules of the game concerning the fate of a cell
    //  * @param grid - The grid containing all the coordinates of cells
    //  * @param coordinates - The coordinates of a given cell
    //  */
    // const applyRulesToCell = (grid: IGrid, coordinates: Hex) => {
    //     // We count the number of living neighboring cells
    //     const livingNeighborsNumber = getNumberOfLivingNeighboringCells(grid, coordinates)
    //     // If the cell is alive this turn
    //     if (alive) {
    //         // If living neighboring cells are not enough, she dies
    //         if (livingNeighborsNumber < 2) setAlive(false)
    //         // If she's dead this turn, and living neighboring cells are enough, she's borning
    //     } else if (livingNeighborsNumber === 3) setAlive(true)
    // }

export { generateGrid, getNewGridOnCellClick }