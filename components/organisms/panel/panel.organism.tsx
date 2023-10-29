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
  <div className={styles.panel}>
    <GridRadiusInput />
    <CellsRadiusInput />
    <PopulationFactorInput />
    <GameSpeedInput />
    <RunningButton />
  </div>
)

export default Panel