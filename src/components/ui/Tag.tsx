import type { ReactNode } from 'react'
import styles from './Tag.module.css'

export function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return <span className={accent ? `${styles.tag} ${styles.accent}` : styles.tag}>{children}</span>
}
