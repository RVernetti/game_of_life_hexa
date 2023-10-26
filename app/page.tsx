'use client'

import React from 'react'
import { RecoilRoot } from 'recoil'

import styles from './page.module.css'

import { Grid } from '@/components/molecules'
import { Panel } from '@/components/organisms'

const HomePage = () => (
  <RecoilRoot>
    <div className={styles.layout}>
      <Grid/>
      <Panel/>
    </div>
  </RecoilRoot>
)

export default HomePage

