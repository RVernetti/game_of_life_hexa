import React from 'react'

import styles from './panel.module.css'

import { 
  CellsRadiusInput, 
  GameSpeedInput, 
  GridRadiusInput, 
  RunningButton 
} from '@/components/molecules'

const Panel = () => (
  <div className={styles.panel}>
    <GridRadiusInput />
    <CellsRadiusInput />
    <GameSpeedInput />
    <RunningButton />
  </div>
)

export default Panel