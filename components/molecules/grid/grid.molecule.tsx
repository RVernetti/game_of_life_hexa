'use client'

import React from 'react'

import { ISquareCoordinates } from '@/interfaces/coordinates.interface'
import { ICell } from '@/interfaces/grid.interface'

import { Cell } from '@/components/atoms'

import { generateGrid } from '@/helpers/grid.helper'
import { Point, Layout } from '@/helpers/hexagonal.helper'

import styles from './grid.module.css'

interface Grid {
  radius?: number
  origin?: ISquareCoordinates
  hexSize?: ISquareCoordinates
}

const Grid = (props: Grid) => {
  const {
    radius = 6,
    origin = new Point(0, 0), 
    hexSize = new Point(29, 29),
  } = props
  
  const layout = new Layout(Layout.flat, hexSize, origin)

  const display = generateGrid(radius).map((cell: ICell) => {
    const { coordinates, living } = cell
    const { q, r, s } = coordinates
    const { x, y } = layout.hexToPixel(coordinates)
    return (
      <Cell
        key={`Cell's cubic coordinates: [q: ${q}, r: ${r}, s: ${s}]`}
        onClick={() => console.log('Cell:', cell)}
        style={{
          left: x - 12.5, // to center cells from their origin
          top: y - 12.5, // to center cells from their origin
        }}
        living={living}
      />
    )
  })

  return (
    <div className={styles.grid}>
      <div className={styles.layout}>
        {display}
      </div>
    </div>
  )
}

export default Grid