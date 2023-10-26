'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gridRadiusState } from '@/stores/grid.store'
import { cellRadiusState } from '@/stores/cell.store'
import { gameRunningState, gameSpeedState } from '@/stores/game.store'

import { Button, Input } from '@/components/atoms'

import styles from './panel.module.css'

const Panel = () => {
  const [gridRadius, setGridRadius] = useRecoilState(gridRadiusState)
  const [cellRadius, setCellRadius] = useRecoilState(cellRadiusState)
  const [speed, setSpeed] = useRecoilState(gameSpeedState)
  const [running, setRunning] = useRecoilState(gameRunningState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius = parseInt((e.target as HTMLInputElement).value) || 0
    return setGridRadius(radius)
  }

  const handleCellRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius = parseInt((e.target as HTMLInputElement).value) || 20
    return setCellRadius(radius)
  }

  const handleGameSpeedChange = (e: React.FormEvent<HTMLInputElement>) => {
    const speed = parseInt((e.target as HTMLInputElement).value) || 20
    return setSpeed(speed)
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
      <Input
        id="game-speed-input"
        title="Game speed:"
        onChange={handleGameSpeedChange}
        min='1'
        max='10'
        defaultValue={speed}
      />
      <Button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Play'}
      </Button>
    </div>
  )
}

export default Panel