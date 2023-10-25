import { atomFamily } from 'recoil'

export const cellStateFamily = atomFamily({
    key: 'cell-state-family',
    default: false, // alive or dead
})