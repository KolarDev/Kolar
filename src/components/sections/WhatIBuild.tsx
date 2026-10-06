import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  SiAndroid,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGo,
  SiJupyter,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiPytorch,
} from 'react-icons/si'
import { buildPillars, whatIBuildSection, type TechIcon } from '../../content/whatIBuild'
import { easeEditorial } from '../../lib/motion'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './WhatIBuild.module.css'

/** Real brand colors (Simple Icons). `mono: true` marks logos that are officially black/white
 *  only — those adapt to the current theme's text color instead of using a fixed hex. */
const iconMap: Record<TechIcon, { Icon: typeof SiReact; label: string; color: string; mono?: boolean }> = {
  node: { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  express: { Icon: SiExpress, label: 'Express', color: '', mono: true },
  django: { Icon: SiDjango, label: 'Django', color: '#092E20' },
  rust: { Icon: SiRust, label: 'Rust', color: '', mono: true },
  go: { Icon: SiGo, label: 'Go', color: '#00ADD8' },
  react: { Icon: SiReact, label: 'React', color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, label: 'Next.js', color: '', mono: true },
  nestjs: { Icon: SiNestjs, label: 'NestJS', color: '#E0234E' },
  typescript: { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  tailwind: { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
  reactnative: { Icon: SiReact, label: 'React Native', color: '#61DAFB' },
  expo: { Icon: SiExpo, label: 'Expo', color: '', mono: true },
  firebase: { Icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
  android: { Icon: SiAndroid, label: 'Android', color: '#3DDC84' },
  docker: { Icon: SiDocker, label: 'Docker', color: '#2496ED' },
  postgresql: { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
  redis: { Icon: SiRedis, label: 'Redis', color: '#DC382D' },
  kubernetes: { Icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
  nginx: { Icon: SiNginx, label: 'Nginx', color: '#009639' },
  python: { Icon: SiPython, label: 'Python', color: '#3776AB' },
  tensorflow: { Icon: SiTensorflow, label: 'TensorFlow', color: '#FF6F00' },
  pytorch: { Icon: SiPytorch, label: 'PyTorch', color: '#EE4C2C' },
  jupyter: { Icon: SiJupyter, label: 'Jupyter', color: '#F37626' },
  pandas: { Icon: SiPandas, label: 'Pandas', color: '#150458' },
}

export function WhatIBuild() {
  const shouldReduceMotion = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = (card?.offsetWidth ?? 280) + 16
    track.scrollBy({ left: amount * direction, behavior: shouldReduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <Section tone="subtle">
      <Reveal>
        <SectionHeading
          kicker={whatIBuildSection.kicker}
          heading={whatIBuildSection.heading}
          description={whatIBuildSection.description}
        />
      </Reveal>

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navPrev}`}
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
        >
          ←
        </button>

        <div className={styles.track} ref={trackRef}>
          {buildPillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              data-card
              className={styles.card}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: 48 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: easeEditorial }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.description}>{pillar.description}</p>
              <div className={styles.icons}>
                {pillar.icons.map((iconKey) => {
                  const { Icon, label, color, mono } = iconMap[iconKey]
                  return (
                    <span
                      key={iconKey}
                      className={styles.icon}
                      title={label}
                      style={mono ? undefined : { color }}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navNext}`}
          onClick={() => scrollByCard(1)}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </Section>
  )
}
