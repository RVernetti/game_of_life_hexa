import { Hex } from '../hex/hexagonal.helper'

import { useRecoilValue } from 'recoil'
import { cellStateFamily } from '@/stores/cell.store'

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
 * Gives number of living cells surrounding a designated cell
 * @param grid - The grid containing all the coordinates of cells
 * @param coordinates - The coordinates of the designated cell
 * @returns {number} The number of living cells surrounding the designated cell
 */
const getAliveNeighborsCount = (grid: Array<Hex>, coordinates: Hex) => {
    let count = 0
    // We check all cells surrounding the designated cell, exploring all possible directions
    for (let i = 0; i < 6; ++i) {
        const neighbor = coordinates.neighbor(i)
        // If the neighbor cell exists in the grid
        if (grid.includes(neighbor)) {
            const neighborIsAlive = useRecoilValue(cellStateFamily({ ...neighbor }))
            // And if it is alive, we increment the final count
            if(neighborIsAlive) ++count
        }
    }
    return count
}

export { generateGrid, getAliveNeighborsCount }
