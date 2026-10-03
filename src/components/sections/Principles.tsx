import { principles, principlesSection } from '../../content/principles'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Principles.module.css'

export function Principles() {
  return (
    <Section tone="inverse">
      <Reveal>
        <SectionHeading kicker={principlesSection.kicker} heading={principlesSection.heading} />
      </Reveal>

      <div className={styles.list}>
        {principles.map((principle, index) => (
          <Reveal key={principle.id} delay={index * 0.05} className={styles.item}>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className={styles.statement}>{principle.statement}</p>
              <p className={styles.detail}>{principle.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
