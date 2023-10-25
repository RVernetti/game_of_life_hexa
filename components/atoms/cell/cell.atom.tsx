'use client'

import React from 'react'

import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilState } from 'recoil'
import { cellStateFamily } from '@/stores/cell.store'

import styles from './cell.module.css'

interface Cell {
    coordinates: Hex
    size?: number
    style?: object
    children?: React.ReactNode
}

const Cell = (props: Cell) => {
    const { 
        coordinates, 
        size = 29,
        style,
        children,
    } = props

    const [alive, setAlive] = useRecoilState(cellStateFamily({ ...coordinates }))
    // TODO: cell's size should be manually adjustable from panel => recoil atom

    const origin = new Point(0, 0)
    const hexSize = new Point(size, size)
    const layout = new Layout(Layout.flat, hexSize, origin)
    const {x, y} = layout.hexToPixel(coordinates)

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={() => setAlive(!alive)}
            style={{
                // TODO: write adjustment formula to recenter cell from its left top corner, regarding to its size
                left: x - 25, // to recenter cell from its corner
                top: y - 25, // to recenter cell from its corner
                ...style,
            }}
        >
            {children}
        </button>
    )
}

export default Cell