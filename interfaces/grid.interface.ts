import { Hex } from '@/helpers/hexagonal.helper';

export interface ICell {
    coordinates: Hex,
    alive?: boolean,
}

export interface IGrid extends Array<ICell> {}
