'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gridRadiusState, gridState } from '@/stores/grid.store'
import { gameRunningState } from '@/stores/game.store'

import { Input, Label } from '@/components/atoms'
import { generateGrid } from '@/helpers/grid/grid.helper'

const GridRadiusInput = () => {
  const [grid, setGrid] = useRecoilState(gridState)
  const [running, setRunning] = useRecoilState(gameRunningState)
  const [gridRadius, setGridRadius] = useRecoilState(gridRadiusState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRunning(false)
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 1
    setGridRadius(radius)
    const newGrid = generateGrid(radius)
    // TODO: function to preserve ancient grid cells statuses instead of renew
    setGrid(newGrid)
  }


  return (
    <Label text='Grid radius:'>
      <Input
        id='grid-radius-input'
        onChange={handleGridRadiusChange}
        min='1'
        max='15'
        defaultValue={10}
      />
    </Label>
  )
}

export default GridRadiusInput