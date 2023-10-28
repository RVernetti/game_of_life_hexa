import { Hex } from '@/helpers/hex/hexagonal.helper'

export interface ICell {
    coordinates: Hex,
    alive: boolean,
}

export interface IGrid extends Array<ICell> {}