import { atom, atomFamily } from 'recoil'

export const cellRadiusState = atom({
    key: 'cell-radius-state',
    default: 20,
})

// The cell state (dead or alive)
export const livingCellStateFamily = atomFamily({
    key: 'living-cell-state-family', // unique ID (with respect to other atoms/selectors)
    default: false, // alive or dead cell, not alive by default
})