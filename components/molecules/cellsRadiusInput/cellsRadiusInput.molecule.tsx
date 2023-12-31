'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { cellRadiusState } from '@/stores/grid.store'
import { gameRunningState } from '@/stores/game.store'

import { Input, Label } from '@/components/atoms'


const CellsRadiusInput = () => {
  const [cellRadius, setCellRadius] = useRecoilState(cellRadiusState)
  const [running, setRunning] = useRecoilState(gameRunningState)

  const handleCellRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRunning(false)
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 20
    return setCellRadius(radius)
  }

  return (
    <Label text="Cell radius:">
      <Input
        id="cell's-radius-input"
        onChange={handleCellRadiusChange}
        min='5'
        max='99'
        defaultValue={cellRadius}
      />
    </Label>
  )
}

export default CellsRadiusInput