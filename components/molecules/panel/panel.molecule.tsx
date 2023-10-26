'use client'

import React from 'react'
import styles from './panel.module.css'

import { Button, Input } from '@/components/atoms'

import { useRecoilState } from 'recoil'
import { gameRunningState } from '@/stores/game.store'
import { gridRadiusState } from '@/stores/grid.store'
import { cellRadiusState } from '@/stores/cell.store'

const Panel = () => {
  const [running, setRunning] = useRecoilState(gameRunningState)
  const [gridRadius, setGridRadius] = useRecoilState(gridRadiusState)
  const [cellRadius, setCellRadius] = useRecoilState(cellRadiusState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius = parseInt((e.target as HTMLInputElement).value) || 0
    return setGridRadius(radius)
  }

  const handleCellRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius = parseInt((e.target as HTMLInputElement).value) || 20
    return setCellRadius(radius)
  }

  
  return (
    <div className={styles.panel}>
      <Input
        id='grid-radius-input'
        title='Grid radius:'
        onChange={handleGridRadiusChange}
        min='0'
        max='40'
        defaultValue={gridRadius}
      />
      <Input
        id="cell's-radius-input"
        title="Cell's radius:"
        onChange={handleCellRadiusChange}
        min='10'
        max='99'
        defaultValue={cellRadius}
      />

      <Button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Play'}
      </Button>
    </div>
  )
}

export default Panel