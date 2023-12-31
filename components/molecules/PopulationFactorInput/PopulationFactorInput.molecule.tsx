'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { populationFactorState, gameRunningState } from '@/stores/game.store'

import { Input, Label } from '@/components/atoms'


const PopulationFactorInput = () => {
  const [factor, setFactor] = useRecoilState(populationFactorState)
  const [running, setRunning] = useRecoilState(gameRunningState)

  const handleFactorChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRunning(false)
    const radius: number = parseInt((e.target as HTMLInputElement).value) || 3
    return setFactor(radius)
  }

  return (
    <Label text="Population factor:">
      <Input
        id="population-factor-input"
        onChange={handleFactorChange}
        min='1'
        max='5'
        defaultValue={factor}
      />
    </Label>
  )
}

export default PopulationFactorInput