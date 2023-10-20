import { atom } from 'recoil'

export const radiusState = atom({
    key: 'radius', // unique ID (with respect to other atoms/selectors)
    default: 6, // default value (aka initial value)
})