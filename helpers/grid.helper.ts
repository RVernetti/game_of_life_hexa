import { Grid } from '@/interfaces/grid.interface'
import { Hex } from './hexagonal.helper'

/**
 * Generates a circular grid of hexagonal coordinates from a given radius
 * @param radius - The grid radius from the origin [0,0,0] to the border
 * @returns {array} The circular grid of hexagonal coordinates
 */
const generateGrid = (radius: number) => {
    let grid: Grid = []
    for(let q = -radius; q <= radius; ++q){
        for(let r = -radius; r <= radius; ++r){
            for(let s = -radius; s <= radius; ++s){
                if (Math.round(q + r + s) === 0){
                    grid.push({ coordinates: new Hex(q,r,s), living: false })
                }                    
            }
        }
    }
    return grid
}

export { generateGrid }
