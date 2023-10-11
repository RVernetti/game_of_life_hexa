'use client'

import React from 'react'
import styles from './panel.module.css'

import { Button } from '@/components/atoms'

const Panel = () => {
  
  return (
    <div className={styles.panel}>
        <Button onClick={() => console.log('Run clicked!')}>Run</Button>
    </div>
  )
}

export default Panel

