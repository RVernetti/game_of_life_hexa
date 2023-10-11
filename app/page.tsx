'use client'

import React from 'react'
import styles from './page.module.css'
import { Grid, Panel } from '@/components/molecules'


const HomePage = () => {

  return (
    <div className={styles.layout}>
      <Grid/>
      <Panel/>
    </div>
  )
}

export default HomePage

