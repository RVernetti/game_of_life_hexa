'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gridRadiusState } from '@/stores/grid.store'

import { Input, Title } from '@/components/atoms'


const GridRadiusInput = () => {
  const [gridRadius, setGridRadius] = useRecoilState(gridRadiusState)

  const handleGridRadiusChange = (e: React.FormEvent<HTMLInputElement>) => {
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 0
    return setGridRadius(radius)
  }


  return (
    <Title title='Grid radius:'>
      <Input
        id='grid-radius-input'
        onChange={handleGridRadiusChange}
        min='0'
        max='40'
        defaultValue={gridRadius}
      />
    </Title>
  )
}

export default GridRadiusInput