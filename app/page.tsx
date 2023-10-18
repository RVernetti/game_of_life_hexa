'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import { Grid, Panel } from '@/components/molecules'

const HomePage = () => {
  const [radius, setRadius] = useState(6)
  const [isRunning, setRunning] = useState(false)

  return (
  <div className={styles.layout}>
    <Grid radius={radius}/>
    <Panel/>
  </div>
)}

export default HomePage

