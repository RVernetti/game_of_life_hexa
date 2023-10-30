import React from 'react'

import styles from './title.module.css'

interface Title {
    title: string
    layoutStyle?: object
    titleStyle?: object
    children?: React.ReactNode
}

const Title = (props: Title) => {
    const { title, layoutStyle, titleStyle, children } = props

    return (
        <div className={styles.layout} style={layoutStyle}>
            <span className={styles.title} style={titleStyle}>
                {title}
            </span>
            {children}
        </div>
    )
}

export default Title