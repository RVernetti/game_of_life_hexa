import React, { useEffect } from 'react'

import { useRecoilValue } from 'recoil'
import { gridRadiusState } from '@/stores/grid.store'

import { generateGrid } from '@/helpers/grid/grid.helper'
import { Hex } from '@/helpers/hex/hexagonal.helper'

import { Cell } from '@/components/atoms'

import styles from './grid.module.css'
import { gameRunningState, gameSpeedState } from '@/stores/game.store'

const Grid = () => {
  const gameSpeed = useRecoilValue(gameSpeedState)
  const running = useRecoilValue(gameRunningState)

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

  useEffect(() => {
    const delay: number = Math.round(1000 / gameSpeed)
    let gameInterval: ReturnType<typeof setInterval> = setInterval(
      () => console.log('Another one!'),
      delay
    )
    if (!running) clearInterval(gameInterval)
    return () => clearInterval(gameInterval)
  }, [running])

  return (
    <div className={styles.grid}>
      <div className={styles.layout}>
        {display}
      </div>
    </div>
  )
}

export default Grid