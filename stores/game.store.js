import { atom } from 'recoil'

// If the game is running or not
export const gameRunningState = atom({
    key: 'game-running-state', // unique ID (with respect to other atoms/selectors)
    default: false, // not running by default
})

export const gameSpeedState = atom({
    key: 'game-speed-state',
    default: 1,
})

export const populationFactorState = atom({
    key: 'population-factor-state',
    default: 2, // the original Game of Life rules population factor is 3
    // but for a hexagonal grid, neighbors are 6 and not 8
})