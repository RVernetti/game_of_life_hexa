import { atom } from 'recoil'

// If the game is running or not
export const runningState = atom({
    key: 'running-state', // unique ID (with respect to other atoms/selectors)
    default: false, // not running by default
})