import React from 'react'
import { Button } from '@/interfaces/button.interface'
import styles from './button.module.css'

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