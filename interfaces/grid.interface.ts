import { CubicCoordinates } from './coordinates.interface'

export interface Cell {
    coordinates: CubicCoordinates,
    living?: boolean,
}

export interface Grid extends Array<Cell> {}
