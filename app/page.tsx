'use client'

import React from 'react'
import styles from './page.module.css'
import { Button, Cell } from '@/components/atoms'


const HomePage = () => {

  return (
    <div className={styles.layout}>
      <Button onClick={() => console.log('Button clicked')}>
        Run
      </Button>
      <Cell onClick={() => console.log('Cell clicked')} living/>
    </div>
  )
}

export default HomePage

