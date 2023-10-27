import { Hex } from '../hex/hexagonal.helper'

import { useRecoilState, useRecoilValue } from 'recoil'
import { livingCellStateFamily } from '@/stores/cell.store'

/**
 * Generates a circular grid of hexagonal coordinates from a given radius
 * @param radius - The grid radius from the origin [0,0,0] to the border
 * @returns {array} The circular grid of hexagonal coordinates
 */
const generateGrid = (radius: number) => {
    let grid: Array<Hex> = []
    for(let q = -radius; q <= radius; ++q){
        for(let r = -radius; r <= radius; ++r){
            for(let s = -radius; s <= radius; ++s){
                if (Math.round(q + r + s) === 0){
                    grid.push(new Hex(q, r, s))
                }
            }
        }
    }
    return grid
}

/**
 * Gives the number of living neighboring cells
 * @param grid - The grid containing all the coordinates of cells
 * @param coordinates - The coordinates of a given cell
 * @returns {number} The number of living neighboring cells
 */
const getNumberOfLivingNeighboringCells = (grid: Array<Hex>, coordinates: Hex) => {
    let count = 0
    // We check all cells surrounding the given cell, exploring all possible directions
    for (let i = 0; i < 6; ++i) {
        const neighbor = coordinates.neighbor(i)
        // If the neighboring cell exists in the grid
        if (grid.includes(neighbor)) {
            const neighborIsAlive = useRecoilValue(livingCellStateFamily({ ...neighbor }))
            // And if it is alive, we increment the final count
            if(neighborIsAlive) ++count
        }
    }
    return count
}

/**
 * The rules of the game concerning the fate of a cell
 * @param grid - The grid containing all the coordinates of cells
 * @param coordinates - The coordinates of a given cell
 */
const applyRulesToCell = (grid: Array<Hex>, coordinates: Hex) => {
    const [alive, setAlive] = useRecoilState(livingCellStateFamily({ ...coordinates }))
    // We count the number of living neighboring cells
    const livingNeighborsNumber = getNumberOfLivingNeighboringCells(grid, coordinates)
    // If the cell is alive this turn
    if (alive) {
        // If living neighboring cells are not enough, she dies
        if (livingNeighborsNumber < 2) setAlive(false)
        // If she's dead this turn, and living neighboring cells are enough, she's borning
    } else if (livingNeighborsNumber === 3) setAlive(true)
}

export { generateGrid, getNumberOfLivingNeighboringCells, applyRulesToCell }