import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { easeEditorial } from '../../lib/motion'
import styles from './IntroOverlay.module.css'

type Phase = 'enter' | 'hold' | 'exit'

/** A brief, one-time arrival moment — echoes the hero line, then lifts away like a curtain. */
export function IntroOverlay({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<Phase>('enter')

  useEffect(() => {
    if (phase !== 'hold') return
    const timer = setTimeout(() => setPhase('exit'), 420)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <motion.div
      className={styles.overlay}
      aria-hidden="true"
      initial={false}
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.6, ease: easeEditorial }}
      onAnimationComplete={() => {
        if (phase === 'exit') onFinished()
      }}
    >
      <motion.p
        className={styles.line}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: easeEditorial }}
        onAnimationComplete={() => {
          if (phase === 'enter') setPhase('hold')
        }}
      >
        I build software that works when it matters.
      </motion.p>
      <span className={styles.dot} />
    </motion.div>
  )
}
