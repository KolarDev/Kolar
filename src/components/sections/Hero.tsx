import { motion, useReducedMotion } from 'framer-motion'
import { heroContent, site } from '../../content/site'
import { useIntroDone } from '../../hooks/introContext'
import { easeEditorial } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { AmbientBackground } from '../visual/AmbientBackground'
import { HeroVisual } from '../visual/HeroVisual'
import styles from './Hero.module.css'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const introDone = useIntroDone()

  const rise = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: introDone ? { opacity: 1, y: 0 } : undefined,
          transition: { duration: 0.6, delay, ease: easeEditorial },
        }

  return (
    <section className={styles.hero}>
      <AmbientBackground />
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <motion.div className={styles.pill} {...rise(0)}>
            <span className={styles.dot} />
            {site.availability}
          </motion.div>

          <motion.h1 className={styles.headline} {...rise(0.08)}>
            {heroContent.headline}
          </motion.h1>

          <motion.p className={styles.description} {...rise(0.16)}>
            {heroContent.description}
          </motion.p>

          <motion.div className={styles.actions} {...rise(0.24)}>
            <Button to={heroContent.primaryCta.to} variant="primary">
              {heroContent.primaryCta.label}
            </Button>
            <Button to={heroContent.secondaryCta.to} variant="ghost">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div className={styles.visual} {...rise(0.2)}>
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  )
}
