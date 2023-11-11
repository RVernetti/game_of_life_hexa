'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gameSpeedState } from '@/stores/game.store'

import { Input, Label } from '@/components/atoms'

const GameSpeedInput = () => {
  const [speed, setSpeed] = useRecoilState(gameSpeedState)

  const handleGameSpeedChange = (e: React.FormEvent<HTMLInputElement>) => {
    const speed: number = parseInt((e.target as HTMLInputElement).value) || 1
    
    return setSpeed(speed)
  }

  return (
    <Label text="Game speed:">
      <Input
        id="game-speed-input"
        onChange={handleGameSpeedChange}
        min='1'
        max='5'
        defaultValue={speed}
      />
    </Label>
  )
}

export default GameSpeedInput