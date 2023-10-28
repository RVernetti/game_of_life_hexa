import React, { useEffect } from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { gridState } from '@/stores/grid.store'
import { gameRunningState, gameSpeedState } from '@/stores/game.store'

import { ICell } from '@/interfaces/grid.interface'

import { getNewCellBasedOnRules } from '@/helpers/grid/grid.helper'

import { Cell } from '@/components/atoms'

import styles from './grid.module.css'

const Grid = () => {

  const [grid, setGrid] = useRecoilState(gridState)
  const running: boolean = useRecoilValue(gameRunningState)
  const gameSpeed: number = useRecoilValue(gameSpeedState)

  // Game loop
  useEffect(() => {
    const delay: number = Math.round(1000 / gameSpeed)
    let gameInterval: ReturnType<typeof setInterval> = setInterval(
      () => {
        const newGrid = grid.map((cell: ICell) => getNewCellBasedOnRules(grid, cell))
        setGrid(newGrid)
      },
      delay
    )
    // If we click on 'Stop' button, we clear the interval to stop the game
    if (!running) clearInterval(gameInterval)
    // On unmount we clear the interval
    return () => clearInterval(gameInterval)
  }, [running, gameSpeed])

  // Cells' display
  const display = grid.map((cell: ICell) => {
    const { coordinates: { q, r, s } } = cell
    return (
      <Cell
        key={`[q: ${q}, r: ${r}, s: ${s}]`}
        cell={cell}
      />
    )
  })

  return (
    <div className={styles.grid}>
      <div className={styles.layout}>
        {display}
      </div>
    </div>
  )
}

export default Grid