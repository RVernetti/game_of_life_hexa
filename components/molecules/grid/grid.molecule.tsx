import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { gridRadiusState } from '@/stores/grid.store'
import { livingCellStateFamily } from '@/stores/cell.store'


import { generateGrid } from '@/helpers/grid/grid.helper'
import { Hex } from '@/helpers/hex/hexagonal.helper'

import { Cell } from '@/components/atoms'

import styles from './grid.module.css'
import { gameRunningState, gameSpeedState } from '@/stores/game.store'
import { ICell, IGrid } from '@/interfaces/grid.interface'

const Grid = () => {
  const radius: number = useRecoilValue(gridRadiusState)
  const grid: IGrid = generateGrid(radius)

  // Cells' display
  const display = grid.map((cell: ICell) => {
    const { coordinates } = cell
    const { q, r, s } = coordinates
    return (
      <Cell
        key={`[q: ${q}, r: ${r}, s: ${s}]`}
        coordinates={coordinates}
        grid={grid}
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