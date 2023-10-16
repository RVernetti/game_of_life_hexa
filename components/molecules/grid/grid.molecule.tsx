'use client'

import React from 'react'

import { ISquareCoordinates } from '@/interfaces/coordinates.interface'
import { ICell } from '@/interfaces/grid.interface'

import { Cell } from '@/components/atoms'

import { generateGrid } from '@/helpers/grid/grid.helper'
import { Point, Layout } from '@/helpers/hex/hexagonal.helper'

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
    const { coordinates, alive } = cell
    const { q, r, s } = coordinates
    const { x, y } = layout.hexToPixel(coordinates)
    return (
      <Cell
        key={`Cell's cubic coordinates: [q: ${q}, r: ${r}, s: ${s}]`}
        onClick={() => console.log('Cell:', cell)}
        style={{
          left: x - 25, // to center cell from its origin
          top: y - 25, // to center cell from its origin
        }}
        alive={alive}
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