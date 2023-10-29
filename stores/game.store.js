import { atom } from 'recoil'

// If the game is running or not
export const gameRunningState = atom({
    key: 'game-running-state', // unique ID (with respect to other atoms/selectors)
    default: false, // not running by default
})

export const gameSpeedState = atom({
    key: 'game-speed-state',
    default: 10,
})

export const populationFactorState = atom({
    key: 'population-factor-state',
    default: 3, // original Game of Life rules
})