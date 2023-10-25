'use client'

import React from 'react'
import styles from './cell.module.css'

import { Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilState } from 'recoil'
import { cellStateFamily } from '@/stores/cell.store'

interface Cell {
    coordinates: Hex
    children?: React.ReactNode
    style?: object
}

const Cell = (props: Cell) => {
    const { coordinates, children, style } = props
    const { q, r, s } = coordinates

    const [alive, setAlive] = useRecoilState(cellStateFamily({ q, r, s }))

    return (
        <button 
            className={alive ? styles.alive : styles.dead} 
            onClick={() => setAlive(!alive)}
            style={style}
        >
            {children}
        </button>
    )
}

export default Cell