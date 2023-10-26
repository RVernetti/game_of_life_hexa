'use client'

import React from 'react'

import styles from './input.module.css'

interface Input {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    id: string
    type?: string
    min?: string
    max?: string
    defaultValue?: number
    title?: string
    style?: object
}

const Input = (props: Input) => {
    const { 
        onChange,
        id,
        type = 'number', 
        min, 
        max, 
        defaultValue, 
        title, 
        style 
    } = props

    return (
        <div className={styles.layout}>
            <span className={styles.title}>{title}</span>
            <input
                id={id}
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