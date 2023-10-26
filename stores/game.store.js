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