import React from 'react'
import styles from './tooltip.module.css'

interface Tooltip {
    children?: React.ReactNode
    style?: object
    textStyle?: object
}

const Tooltip = (props: Tooltip) => {
    const { children, style, textStyle } = props

    return (
        <div
            className={styles.tooltip}
            style={style}
            data-testid='tooltip'
        >
            <span 
                className={styles.tooltiptext}
                style={textStyle}
            >
                {children}
            </span>
        </div>
    )
}

export default Tooltip