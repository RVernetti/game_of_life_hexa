import { atom } from 'recoil'

// The adjustable grid radius
export const gridRadiusState = atom({
    key: 'grid-radius-state', // unique ID (with respect to other atoms/selectors)
    default: 10, // default value (aka initial value)
})