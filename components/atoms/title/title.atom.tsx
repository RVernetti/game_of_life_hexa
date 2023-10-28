import React from 'react'

import styles from './title.module.css'

interface Title {
    title: string
    children?: React.ReactNode
}

const Title = (props: Title) => {
    const { title, children } = props

    return (
        <div className={styles.layout}>
            <span className={styles.title}>{title}</span>
            {children}
        </div>
    )
}

export default Title