import { atom } from 'recoil'

import { generateGrid } from '@/helpers/grid/grid.helper'

export const gridState = atom({
    key: 'grid-state',
    default: generateGrid(10),
})

export const cellRadiusState = atom({
    key: 'cell-radius-state',
    default: 20,
})

export const gridRadiusState = atom({
    key: 'grid-radius-state',
    default: 10,
})