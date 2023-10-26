'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gameSpeedState } from '@/stores/game.store'

import { Input, Title } from '@/components/atoms'

const GameSpeedInput = () => {
  const [speed, setSpeed] = useRecoilState(gameSpeedState)

  const handleGameSpeedChange = (e: React.FormEvent<HTMLInputElement>) => {
    const speed = parseInt((e.target as HTMLInputElement).value) || 20
    return setSpeed(speed)
  }

  return (
    <Title title="Game speed:">
      <Input
        id="game-speed-input"
        onChange={handleGameSpeedChange}
        min='1'
        max='10'
        defaultValue={speed}
      />
    </Title>
  )
}

export default GameSpeedInput