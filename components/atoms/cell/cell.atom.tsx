'use client'

import React from 'react'

import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilValue, useRecoilState } from 'recoil'
import { cellRadiusState, cellStateFamily } from '@/stores/cell.store'

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

    const cellRadius = useRecoilValue(cellRadiusState)
    const hexDimentions = new Point(cellRadius, cellRadius)
    const origin = new Point(0, 0)
    const layout = new Layout(Layout.flat, hexDimentions, origin)
    const cellSize = cellRadius * Math.sqrt(3)
    const {x, y} = layout.hexToPixel(coordinates)

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={() => setAlive(!alive)}
            style={{
                height: cellSize,
                width: cellSize,           
                left: x - (cellSize / 2), // to recenter cell
                top: y - (cellSize / 2), // to recenter cell
                ...style,
            }}
        >
            {children}
        </button>
    )
}

export default Cell