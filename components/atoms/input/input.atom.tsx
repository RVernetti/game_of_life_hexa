'use client'

import React from 'react'

import styles from './input.module.css'

interface Input {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    min?: number
    max?: number
    defaultValue?: number
    title?: string
    style?: object
}

const Input = (props: Input) => {
    const { 
        onChange, 
        type = 'number', 
        min = 0, 
        max, 
        defaultValue, 
        title, 
        style 
    } = props

    return (
        <div className={styles.layout}>
            <span className={styles.title}>{title}</span>
            <input
                className={styles.input} 
                type={type}
                min={min}
                max={max}
                defaultValue={defaultValue}
                onChange={onChange}
                style={style}
            />
        </div>
    )
}

export default Input