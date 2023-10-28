'use client'

import React from 'react'

import { ICell, IGrid } from '@/interfaces/grid.interface'

import { useRecoilValue, useRecoilState } from 'recoil'
import { gridState, cellRadiusState } from '@/stores/grid.store'

import { Point, Layout } from '@/helpers/hex/hexagonal.helper'
import { getNewGridOnCellClick } from '@/helpers/grid/grid.helper'

import styles from './cell.module.css'
import { gameRunningState } from '@/stores/game.store'

interface Cell {
    cell: ICell
    style?: object
    children?: React.ReactNode
}

const Cell = (props: Cell) => {
    const { 
        cell,
        style,
        children,
    } = props

    const { coordinates, alive } = cell

    const [grid, setGrid] = useRecoilState(gridState)
    const [running, setRunning] = useRecoilState(gameRunningState)

    // Cell's dimensions and position:
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
    const { x, y } = layout.hexToPixel(coordinates)

    const handleClick = () => {
        setRunning(false)
        const newGrid: IGrid = getNewGridOnCellClick(grid, cell)
        setGrid(newGrid)
    }

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={handleClick}
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