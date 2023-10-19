'use client'

import React, { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import styles from './page.module.css'
import { Grid, Panel } from '@/components/molecules'

const HomePage = () => {
  const [radius, setRadius] = useState(6)
  const [isRunning, setRunning] = useState(false)

  return (
    <RecoilRoot>
      <div className={styles.layout}>
        <Grid radius={radius}/>
        <Panel/>
      </div>
    </RecoilRoot>
)}

export default HomePage

