'use client'

import React, { useEffect } from 'react'

import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilValue, useRecoilState } from 'recoil'
import { cellRadiusState, livingCellStateFamily } from '@/stores/cell.store'
import { gameRunningState, gameSpeedState } from '@/stores/game.store'

import styles from './cell.module.css'

interface Cell {
    coordinates: Hex
    grid: Array<Hex>
    style?: object
    children?: React.ReactNode
}

const Cell = (props: Cell) => {
    const { 
        coordinates,
        grid,
        style,
        children,
    } = props

    const [alive, setAlive] = useRecoilState(livingCellStateFamily({ ...coordinates }))

    const running: boolean = useRecoilValue(gameRunningState)
    const gameSpeed: number = useRecoilValue(gameSpeedState)
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

    /**
     * Gives the number of living neighboring cells
     * @param grid - The grid containing all the coordinates of cells
     * @param coordinates - The coordinates of a given cell
     * @returns {number} The number of living neighboring cells
     */
    const getNumberOfLivingNeighboringCells = (grid: Array<Hex>, coordinates: Hex) => {
        let count = 0
        // We check all cells surrounding the given cell, exploring all possible directions
        for (let i = 0; i < 6; ++i) {
            const neighbor = coordinates.neighbor(i)
            const isInTheGrid = grid.some((coordinates: Hex) => JSON.stringify(coordinates) === JSON.stringify(neighbor))
            // If the neighboring cell exists in the grid
            if (isInTheGrid) {
                const neighborIsAlive = useRecoilValue(livingCellStateFamily({ ...neighbor }))
                // And if it is alive, we increment the final count
                if(neighborIsAlive) ++count
            }
        }
        return count
    }

    /**
     * The rules of the game concerning the fate of a cell
     * @param grid - The grid containing all the coordinates of cells
     * @param coordinates - The coordinates of a given cell
     */
    const applyRulesToCell = (grid: Array<Hex>, coordinates: Hex) => {
        // We count the number of living neighboring cells
        const livingNeighborsNumber = getNumberOfLivingNeighboringCells(grid, coordinates)
        // If the cell is alive this turn
        if (alive) {
            // If living neighboring cells are not enough, she dies
            if (livingNeighborsNumber < 2) setAlive(false)
            // If she's dead this turn, and living neighboring cells are enough, she's borning
        } else if (livingNeighborsNumber === 3) setAlive(true)
    }

    // Game loop
    useEffect(() => {
        const delay: number = Math.round(1000 / gameSpeed)
        let gameInterval: ReturnType<typeof setInterval> = setInterval(
        () => applyRulesToCell(grid, coordinates),
        delay
        )
        if (!running) clearInterval(gameInterval)
        // On unmount we clear the interval
        return () => clearInterval(gameInterval)
    }, [running, gameSpeed])

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