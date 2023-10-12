import { ICubicCoordinates } from './coordinates.interface'

export interface ICell {
    coordinates: ICubicCoordinates,
    alive?: boolean,
}

export interface IGrid extends Array<ICell> {}
