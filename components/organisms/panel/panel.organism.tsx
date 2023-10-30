import React from 'react'

import styles from './panel.module.css'

import { 
  CellsRadiusInput, 
  GameSpeedInput, 
  GridRadiusInput, 
  PopulationFactorInput, 
} from '@/components/molecules'

import {
  ResetButton, 
  RunningButton,
} from '@/components/isotopes'

const Panel = () => (
  <div className={styles.panel}>
    <PopulationFactorInput />
    <GameSpeedInput />
    <CellsRadiusInput />
    <GridRadiusInput />
    <div className={styles.buttons}>
      <RunningButton />
      <ResetButton />
    </div>
  </div>
)

export default Panel