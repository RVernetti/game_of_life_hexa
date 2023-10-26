'use client'

import React from 'react'

import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilValue, useRecoilState } from 'recoil'
import { cellRadiusState, livingCellStateFamily } from '@/stores/cell.store'

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

    const [alive, setAlive] = useRecoilState(livingCellStateFamily({ ...coordinates }))

    const cellRadius = useRecoilValue(cellRadiusState)
    // We calculate the layout of cells according to their radius
    const hexDimentions = new Point(cellRadius, cellRadius)
    const origin = new Point(0, 0)
    const layout = new Layout(Layout.flat, hexDimentions, origin)
    // We calculate the ratio between the size of the cell and its radius 
    // to be able to adjust it manually
    const cellSize = cellRadius * Math.sqrt(3)
    // We convert the cubic coordinates of the cell into square coordinates 
    // to be able to display it on the screen
    const {x, y} = layout.hexToPixel(coordinates)

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={() => setAlive(!alive)}
            style={{
                height: cellSize,
                width: cellSize,           
                left: x - (cellSize / 2), // to center the cell
                top: y - (cellSize / 2), // to center the cell
                ...style,
            }}
        >
            {children}
        </button>
    )
}

export default Cell