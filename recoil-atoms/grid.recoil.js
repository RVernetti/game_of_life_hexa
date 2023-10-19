import { atom, selector } from "recoil";

export const radius = atom({
    key: 'radius', // unique ID (with respect to other atoms/selectors)
    default: 6, // default value (aka initial value)
})
  
export const grid = atom({
    key: 'grid',
    default: generateGrid(useRecoilValue(radius))
})