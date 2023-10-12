'use client'

import React from 'react'
import styles from './cell.module.css'

interface Cell {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    style?: object
    alive?: boolean
}

const Cell = (props: Cell) => {
    const { onClick, children, style, living } = props

    return (
        <button 
            className={living ? styles.living : styles.dead} 
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}

export default Cell