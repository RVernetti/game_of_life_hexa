import { Hex } from '../hex/hexagonal.helper'

import { useRecoilValue } from 'recoil'
import { cellStateFamily } from '@/stores/cell.store'

interface IGrid extends Array<Hex> {}

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
                    grid.push(new Hex(q,r,s))
                }                    
            }
        }
    }
    return grid
}

// /**
//  * Gives the number of alive cells surrounding an original cell
//  * @param grid - The grid containing all cells
//  * @param cell - The original cell
//  * @returns {number} The number of alive cells around the original cell
//  */
// const getNeighborsCount = (grid: IGrid, targetCoordinates: Hex) => {
//     let count = 0
//     // We check all cells around original coordinates, exploring 6 directions
//     for (let i = 0; i < 6; ++i) {
//         // We check if the direction is pointing to an existing cell (watching border cells)
//         const neighbor = grid.find((coordinates: Hex) => coordinates === targetCoordinates.neighbor(i))
//         // If the neighbor cell exists in the grid and is alive, we increment the final count
//         const { q, r, s } = targetCoordinates
//         const targetCellStatus = useRecoilValue(cellStateFamily({ q, r, s }))
//         if (neighbor?.alive) ++count
//     }
//     return count
// }

export { generateGrid }
