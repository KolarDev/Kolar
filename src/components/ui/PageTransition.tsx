import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { easeEditorial } from '../../lib/motion'

export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: easeEditorial }}
    >
      {children}
    </motion.div>
  )
}
