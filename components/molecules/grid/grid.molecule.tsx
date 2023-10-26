import React from 'react'

import { useRecoilValue } from 'recoil'
import { gridRadiusState } from '@/stores/grid.store'

import { generateGrid } from '@/helpers/grid/grid.helper'
import { Hex } from '@/helpers/hex/hexagonal.helper'

import { Cell } from '@/components/atoms'

import styles from './grid.module.css'

const Grid = () => {
  const radius = useRecoilValue(gridRadiusState)
  const grid = generateGrid(radius)
  const display = grid.map((coordinates: Hex) => {
    const {q, r, s} = coordinates
    return (
      <Cell
        key={`[q: ${q}, r: ${r}, s: ${s}]`}
        coordinates={coordinates}
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