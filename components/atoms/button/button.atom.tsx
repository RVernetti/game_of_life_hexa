'use client'

import React from 'react'
import styles from './button.module.css'

interface Button {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    disabled?: boolean
    style?: object
}

const Button = (props: Button) => {
    const { onClick, children, disabled, style } = props

    return (
        <button 
            className={styles.button}
            onClick={onClick} 
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button