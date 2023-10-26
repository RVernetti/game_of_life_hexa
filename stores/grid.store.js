import { atom } from 'recoil'

// The adjustable grid radius
export const radiusState = atom({
    key: 'radius-state', // unique ID (with respect to other atoms/selectors)
    default: 10, // default value (aka initial value)
})