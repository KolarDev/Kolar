import { motion, useReducedMotion } from 'framer-motion'
import { FaBuildingColumns, FaChalkboardUser, FaRocket, FaTrophy } from 'react-icons/fa6'
import { achievements, achievementsSection, type AchievementIcon } from '../../content/achievements'
import { easeEditorial } from '../../lib/motion'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Achievements.module.css'

const iconMap: Record<AchievementIcon, typeof FaRocket> = {
  rocket: FaRocket,
  mentor: FaChalkboardUser,
  trophy: FaTrophy,
  university: FaBuildingColumns,
}

export function Achievements() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section>
      <Reveal>
        <SectionHeading kicker={achievementsSection.kicker} heading={achievementsSection.heading} />
      </Reveal>

      <div className={styles.grid}>
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon]
          return (
            <motion.article
              key={achievement.id}
              className={styles.card}
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: easeEditorial }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
            >
              <span className={styles.watermark} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.iconBadge}>
                <Icon aria-hidden="true" />
              </span>
              <h3 className={styles.title}>{achievement.title}</h3>
              <p className={styles.description}>{achievement.description}</p>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
