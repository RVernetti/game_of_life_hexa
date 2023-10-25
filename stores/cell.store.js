import { atomFamily } from 'recoil'

// The cell status (dead or alive)
export const cellStateFamily = atomFamily({
    key: 'cell-state-family', // unique ID (with respect to other atoms/selectors)
    default: false, // alive or dead cell, not alive by default
})