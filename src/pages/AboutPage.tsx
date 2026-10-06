import { motion, useReducedMotion } from 'framer-motion'
import { Achievements } from '../components/sections/Achievements'
import { Experience } from '../components/sections/Experience'
import { Principles } from '../components/sections/Principles'
import { CloseButton } from '../components/ui/CloseButton'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { aboutPage } from '../content/about'
import { easeEditorial } from '../lib/motion'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={styles.sheet}
      initial={shouldReduceMotion ? undefined : { y: 48, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeEditorial }}
    >
      <div className={styles.closeBar}>
        <CloseButton label="Close" fallback="/" />
      </div>

      <Section>
        <Reveal>
          <SectionHeading level="h1" kicker="About" heading={aboutPage.heading} />
        </Reveal>

        <div className={styles.copy}>
          <Reveal delay={0.05}>
            <div className={styles.block}>
              {aboutPage.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.block}>
              <h2 className={styles.subheading}>{aboutPage.approach.heading}</h2>
              {aboutPage.approach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.block}>
              <h2 className={styles.subheading}>{aboutPage.direction.heading}</h2>
              {aboutPage.direction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Experience />
      <Achievements />
      <Principles />

      <div className={styles.endBar}>
        <CloseButton label="Close and return" fallback="/" />
      </div>
    </motion.div>
  )
}
