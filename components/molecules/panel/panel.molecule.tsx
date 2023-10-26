'use client'

import React from 'react'
import styles from './panel.module.css'

import { Button, Input } from '@/components/atoms'

import { useRecoilState } from 'recoil'
import { gameRunningState } from '@/stores/game.store'
import { gridRadiusState } from '@/stores/grid.store'

const Panel = () => {
  const [running, setRunning] = useRecoilState(gameRunningState)
  const [gridRadius, setGridRadius] = useRecoilState(gridRadiusState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius = parseInt((e.target as HTMLInputElement).value) || 0
    return setGridRadius(radius)
  }
  
  return (
    <div className={styles.panel}>
      <Input 
        title='Grid radius:'
        onChange={handleGridRadiusChange}
        max={20}
        defaultValue={gridRadius}
      />
      <Button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Play'}
      </Button>
    </div>
  )
}

export default Panel