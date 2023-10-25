'use client'

import React from 'react'
import styles from './panel.module.css'

import { Button } from '@/components/atoms'

import { useRecoilState } from 'recoil'
import { runningState } from '@/stores/game.store'

const Panel = () => {
  const [running, setRunning] = useRecoilState(runningState)
  
  return (
    <div className={styles.panel}>
        <Button onClick={() => setRunning(!running)}>
          {running ? 'Stop' : 'Play'}
        </Button>
    </div>
  )
}

export default Panel
