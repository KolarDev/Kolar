import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  kicker?: string
  heading: string
  description?: string
  action?: ReactNode
  /** Use 'h1' for a page's primary heading (one per page); defaults to 'h2' for in-page sections. */
  level?: 'h1' | 'h2'
}

export function SectionHeading({ kicker, heading, description, action, level = 'h2' }: SectionHeadingProps) {
  const Heading = level

  return (
    <div className={styles.wrapper}>
      {kicker ? (
        <div className={styles.kickerRow}>
          <span className={styles.kicker}>{kicker}</span>
          <span className={styles.rule} aria-hidden="true" />
        </div>
      ) : null}
      <div className={styles.headingRow}>
        <Heading className={styles.heading}>{heading}</Heading>
        {action}
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
