'use client'

import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { gameRunningState } from '@/stores/game.store'

import { Button } from '@/components/atoms'
import { gridRadiusState, gridState } from '@/stores/grid.store'
import { generateGrid } from '@/helpers/grid/grid.helper'


const ResetButton = () => {
    const [running, setRunning] = useRecoilState(gameRunningState)
    const [grid, setGrid] = useRecoilState(gridState)
    const gridRadius = useRecoilValue(gridRadiusState)

    const handleClick = () => {
        setRunning(false)
        setGrid(generateGrid(gridRadius))
    }

    return (
        <Button onClick={handleClick}>
            Reset
        </Button>
    )
}

export default ResetButton