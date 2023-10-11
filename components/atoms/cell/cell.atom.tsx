import React from 'react'
import { Button } from '@/interfaces/button.interface'
import styles from './button.module.css'

const Cell = (props: Button) => {
    const { onClick, children, style } = props

    return (
        <button 
            className={styles.cell} 
            onClick={onClick} 
            style={style}
        >
            {children}
        </button>
    )
}

export default Cell