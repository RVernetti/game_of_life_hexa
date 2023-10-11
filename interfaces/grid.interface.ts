import { ICubicCoordinates } from './coordinates.interface'

export interface ICell {
    coordinates: ICubicCoordinates,
    living?: boolean,
}

export interface IGrid extends Array<ICell> {}
