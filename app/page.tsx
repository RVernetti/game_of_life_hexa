'use client'

import React from 'react'
import styles from './page.module.css'
import { Button } from '@/components/atoms'


const HomePage = () => {

  return (
    <div className={styles.layout}>
      <Button onClick={() => console.log('Button clicked')}>
        Run
      </Button>
    </div>
  )
}

export default HomePage

