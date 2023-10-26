'use client'

import React from 'react'

import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilValue, useRecoilState } from 'recoil'
import { cellSizeState, cellStateFamily } from '@/stores/cell.store'

import styles from './cell.module.css'

interface Cell {
    coordinates: Hex
    style?: object
    children?: React.ReactNode
}

const Cell = (props: Cell) => {
    const { 
        coordinates, 
        style,
        children,
    } = props

    const [alive, setAlive] = useRecoilState(cellStateFamily({ ...coordinates }))

    const size = useRecoilValue(cellSizeState)
    const hexSize = new Point(size, size)
    const origin = new Point(0, 0)
    const layout = new Layout(Layout.flat, hexSize, origin)
    const cellRadius = size * Math.sqrt(3)
    const {x, y} = layout.hexToPixel(coordinates)

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={() => setAlive(!alive)}
            style={{
                height: cellRadius,
                width: cellRadius,           
                left: x - (cellRadius / 2), // to recenter cell from its corner
                top: y - (cellRadius / 2), // to recenter cell from its corner
                ...style,
            }}
        >
            {children}
        </button>
    )
}

export default Cell