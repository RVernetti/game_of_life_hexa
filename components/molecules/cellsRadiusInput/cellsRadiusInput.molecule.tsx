'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { cellRadiusState } from '@/stores/grid.store'

import { Input, Title } from '@/components/atoms'


const CellsRadiusInput = () => {
  const [cellRadius, setCellRadius] = useRecoilState(cellRadiusState)

  const handleCellRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 20
    return setCellRadius(radius)
  }

  return (
    <Title title="Cell's radius:">
      <Input
        id="cell's-radius-input"
        onChange={handleCellRadiusChange}
        min='10'
        max='99'
        defaultValue={cellRadius}
      />
    </Title>
  )
}

export default CellsRadiusInput