import { atom, atomFamily } from 'recoil'

export const cellSizeState = atom({
    key: 'cell-size-state',
    default: 20,
})

// The cell status (dead or alive)
export const cellStateFamily = atomFamily({
    key: 'cell-state-family', // unique ID (with respect to other atoms/selectors)
    default: false, // alive or dead cell, not alive by default
})