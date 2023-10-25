import React from 'react'

import { Cell } from '@/components/atoms'

import { generateGrid } from '@/helpers/grid/grid.helper'
import { Point, Layout, Hex } from '@/helpers/hex/hexagonal.helper'

import { useRecoilValue } from 'recoil'
import { radiusState } from '@/stores/grid.store'

import styles from './grid.module.css'

interface ISquareCoordinates {
  x: number,
  y: number,
}
interface Grid {
  origin?: ISquareCoordinates
  hexSize?: ISquareCoordinates
}

const Grid = (props: Grid) => {
  const {
    origin = new Point(0, 0), 
    hexSize = new Point(29, 29),
  } = props

  const radius = useRecoilValue(radiusState)
  const grid = generateGrid(radius)
  const layout = new Layout(Layout.flat, hexSize, origin)

  const display = grid.map((coordinates: Hex) => {
    const { q, r, s } = coordinates
    const { x, y } = layout.hexToPixel(coordinates)

    return (
      <Cell
        key={`[q: ${q}, r: ${r}, s: ${s}]`}
        coordinates={coordinates}
        style={{
          left: x - 25, // to center cell from its origin
          top: y - 25, // to center cell from its origin
        }}
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