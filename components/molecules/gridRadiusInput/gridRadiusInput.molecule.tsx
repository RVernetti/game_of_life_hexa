'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gridState } from '@/stores/grid.store'

import { Input, Title } from '@/components/atoms'
import { generateGrid } from '@/helpers/grid/grid.helper'


const GridRadiusInput = () => {
  const [grid, setGrid] = useRecoilState(gridState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 0
    // TODO: function to preserve ancient grid cells statuses instead of renew
    const newGrid = generateGrid(radius)
    return setGrid(newGrid)
  }


  return (
    <Title title='Grid radius:'>
      <Input
        id='grid-radius-input'
        onChange={handleGridRadiusChange}
        min='0'
        max='40'
        defaultValue={10}
      />
    </Title>
  )
}

export default GridRadiusInput