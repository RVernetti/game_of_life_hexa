'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gameRunningState } from '@/stores/game.store'

import { Button } from '@/components/atoms'

import styles from './panel.module.css'
import { CellsRadiusInput, GameSpeedInput, GridRadiusInput } from '@/components/molecules'

const Panel = () => {
  const [running, setRunning] = useRecoilState(gameRunningState)

  return (
    <div className={styles.panel}>
      <GridRadiusInput />
      <CellsRadiusInput />
      <GameSpeedInput />
      <Button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Play'}
      </Button>
    </div>
  )
}

export default Panel