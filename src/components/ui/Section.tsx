import type { ReactNode } from 'react'
import { Container } from './Container'
import styles from './Section.module.css'

type SectionProps = {
  id?: string
  children: ReactNode
  tone?: 'default' | 'subtle' | 'inverse'
  className?: string
}

export function Section({ id, children, tone = 'default', className }: SectionProps) {
  const toneClass = tone === 'subtle' ? styles.subtle : tone === 'inverse' ? styles.inverse : ''
  return (
    <section id={id} className={[styles.section, toneClass, className].filter(Boolean).join(' ')}>
      <Container>{children}</Container>
    </section>
  )
}
