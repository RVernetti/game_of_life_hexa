'use client'

import React from 'react'
import styles from './button.module.css'

interface Button {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    style?: object
}

const Button = (props: Button) => {
    const { onClick, children, style } = props

    return (
        <button 
            className={styles.button} 
            onClick={onClick} 
            style={style}
        >
            {children}
        </button>
    )
}

export default Button