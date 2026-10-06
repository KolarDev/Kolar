import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType } from 'react'

type TypeOnTextProps = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  /** When provided, animation is controlled externally instead of triggering on scroll-into-view. */
  start?: boolean
}

/** Reveals text one character at a time — a "written in" effect that fits a monospace, typed feel. */
export function TypeOnText({ text, as: Tag = 'span', className, delay = 0, start }: TypeOnTextProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const characters = Array.from(text)
  const isControlled = start !== undefined
  const triggerProps = isControlled
    ? { animate: start ? { opacity: 1, y: 0 } : undefined }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' } }

  return (
    <Tag className={className} aria-label={text}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: '0.3em' }}
          {...triggerProps}
          transition={{ duration: 0.22, delay: delay + index * 0.022, ease: 'easeOut' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </Tag>
  )
}
