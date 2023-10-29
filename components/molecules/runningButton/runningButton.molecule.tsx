'use client'

import React from 'react'

import { useRecoilState } from 'recoil'
import { gameRunningState } from '@/stores/game.store'

import { Button } from '@/components/atoms'


const RunningButton = () => {
    const [running, setRunning] = useRecoilState(gameRunningState)

    return (
        <Button onClick={() => setRunning(!running)} style={{alignSelf: 'center'}}>
            {running ? 'Stop' : 'Play'}
        </Button>
    )
}

export default RunningButton