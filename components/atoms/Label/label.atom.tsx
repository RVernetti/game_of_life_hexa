import React from 'react'

import styles from './label.module.css'

interface Label {
    text: string
    layoutStyle?: object
    textStyle?: object
    icon?: React.ReactNode
    children?: React.ReactNode
}

const Label = (props: Label) => {
    const { text, layoutStyle, textStyle, icon, children } = props

    return (
        <div className={styles.layout} style={layoutStyle}>
            {icon}
            <span className={styles.label} style={textStyle}>
                {text}
            </span>
            {children}
        </div>
    )
}

export default Label