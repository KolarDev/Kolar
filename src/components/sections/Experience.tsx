import { experience, experienceSection } from '../../content/experience'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section tone="subtle">
      <Reveal>
        <SectionHeading kicker={experienceSection.kicker} heading={experienceSection.heading} />
      </Reveal>

      <ol className={styles.timeline}>
        {experience.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.06} as="li" className={styles.item}>
            <div className={styles.marker}>
              <span className={styles.markerDot} />
              {index < experience.length - 1 ? <span className={styles.markerLine} /> : null}
            </div>
            <div className={styles.content}>
              <div className={styles.row}>
                <h3 className={styles.role}>{entry.role}</h3>
                <span className={styles.period}>{entry.period}</span>
              </div>
              <p className={styles.org}>{entry.org}</p>
              <p className={styles.summary}>{entry.summary}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
