import React from 'react'

import styles from './panel.module.css'

import { 
  CellsRadiusInput, 
  GameSpeedInput, 
  GridRadiusInput, 
  PopulationFactorInput, 
  RunningButton 
} from '@/components/molecules'

const Panel = () => (
  <div className={styles.layout}>
    <div className={styles.panel}>
      <PopulationFactorInput />
      <GameSpeedInput />
      <CellsRadiusInput />
      <GridRadiusInput />
      <RunningButton />
    </div>
  </div>
)

export default Panel