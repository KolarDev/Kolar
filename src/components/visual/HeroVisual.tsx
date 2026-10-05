import { motion, useReducedMotion } from 'framer-motion'
import { easeInOut } from '../../lib/motion'
import styles from './HeroVisual.module.css'

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  const drift = shouldReduceMotion
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: { duration: 9, repeat: Infinity, ease: easeInOut },
      }

  return (
    <div className={styles.frame} role="img" aria-label="Abstract geometric composition of straight lines and simple forms">
      <svg viewBox="0 0 560 480" className={styles.svg} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Straight structural lines — a quiet nod to engineering, not a literal diagram */}
        <line x1="0" y1="120" x2="560" y2="120" stroke="var(--color-border)" strokeWidth="1" />
        <line x1="0" y1="360" x2="560" y2="360" stroke="var(--color-border)" strokeWidth="1" />
        <line x1="190" y1="0" x2="190" y2="480" stroke="var(--color-border)" strokeWidth="1" />

        <motion.rect
          x="70"
          y="90"
          width="130"
          height="130"
          stroke="var(--color-text-strong)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          {...drift}
        />
        <rect x="340" y="260" width="96" height="96" stroke="var(--color-text-strong)" strokeOpacity="0.2" strokeWidth="1.5" />

        {/* The one solid accent mark */}
        <motion.rect x="330" y="90" width="64" height="64" fill="var(--color-accent)" {...drift} />

        <line x1="135" y1="220" x2="135" y2="310" stroke="var(--color-text-strong)" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="135" y1="310" x2="330" y2="310" stroke="var(--color-text-strong)" strokeOpacity="0.25" strokeWidth="1.5" />

        <circle cx="362" cy="122" r="3" fill="var(--color-text-on-accent)" />
      </svg>
    </div>
  )
}
