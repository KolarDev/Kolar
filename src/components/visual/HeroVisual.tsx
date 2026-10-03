import { motion, useReducedMotion } from 'framer-motion'
import { easeInOut } from '../../lib/motion'
import styles from './HeroVisual.module.css'

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  const drift = shouldReduceMotion
    ? {}
    : {
        animate: { y: [0, -14, 0], rotate: [0, 1.2, 0] },
        transition: { duration: 10, repeat: Infinity, ease: easeInOut },
      }

  const breathe = shouldReduceMotion
    ? {}
    : {
        animate: { scale: [1, 1.04, 1] },
        transition: { duration: 7, repeat: Infinity, ease: easeInOut },
      }

  return (
    <div className={styles.frame} role="img" aria-label="Abstract layered composition of arcs and warm geometric forms">
      <motion.svg
        viewBox="0 0 560 480"
        className={styles.svg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="warmGlow" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ridgeLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-text-strong)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-text-strong)" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <motion.circle cx="300" cy="190" r="150" fill="url(#warmGlow)" {...breathe} />

        {/* Layered contour-like arcs — abstract terrain, not a literal map */}
        <motion.path
          d="M -20 340 C 120 280, 220 380, 340 300 S 560 260, 600 320"
          stroke="url(#ridgeLine)"
          strokeWidth="2"
          {...drift}
        />
        <path
          d="M -20 390 C 110 330, 230 420, 350 350 S 540 310, 600 370"
          stroke="var(--color-border-strong)"
          strokeWidth="1.5"
        />
        <path
          d="M -20 440 C 140 400, 240 460, 380 400 S 520 380, 600 420"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />

        {/* Architectural form — a quiet nod to structure without being a diagram */}
        <motion.rect
          x="70"
          y="90"
          width="120"
          height="120"
          rx="14"
          stroke="var(--color-accent-text)"
          strokeWidth="2"
          transform="rotate(-8 130 150)"
          {...drift}
        />
        <rect
          x="340"
          y="70"
          width="76"
          height="76"
          rx="10"
          fill="none"
          stroke="var(--color-text-strong)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />

        <circle cx="430" cy="260" r="6" fill="var(--color-accent)" />
        <circle cx="120" cy="260" r="4" fill="var(--color-text-strong)" fillOpacity="0.4" />
      </motion.svg>
    </div>
  )
}
