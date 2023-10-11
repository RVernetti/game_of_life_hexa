'use client'

import React from 'react'
import styles from './cell.module.css'

interface Cell {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    style?: object
    living?: boolean
}

const Cell = (props: Cell) => {
    const { onClick, children, style, living } = props

    return (
        <button 
            className={living ? styles.living_cell : styles.dead_cell} 
            onClick={onClick} 
            style={style}
        >
            {children}
        </button>
    )
}

export default Cell