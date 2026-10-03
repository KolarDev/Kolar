import { achievements, achievementsSection } from '../../content/achievements'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Achievements.module.css'

export function Achievements() {
  return (
    <Section>
      <Reveal>
        <SectionHeading kicker={achievementsSection.kicker} heading={achievementsSection.heading} />
      </Reveal>

      <div className={styles.grid}>
        {achievements.map((achievement, index) => (
          <Reveal
            key={achievement.id}
            delay={index * 0.06}
            className={achievement.placeholder ? `${styles.card} ${styles.placeholder}` : styles.card}
          >
            <h3 className={styles.title}>{achievement.title}</h3>
            <p className={styles.description}>{achievement.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
