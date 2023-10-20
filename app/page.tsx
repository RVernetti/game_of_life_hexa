'use client'

import React from 'react'
import { RecoilRoot } from 'recoil'

import styles from './page.module.css'

import { Grid, Panel } from '@/components/molecules'

const HomePage = () => (
  <RecoilRoot>
    <div className={styles.layout}>
      <Grid/>
      <Panel/>
    </div>
  </RecoilRoot>
)

export default HomePage

