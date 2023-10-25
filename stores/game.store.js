import { atom } from 'recoil'

// If the game is running or not
export const isRunningState = atom({
    key: 'is-running-state', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
})