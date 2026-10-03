import { labExperiments, labSection } from '../../content/lab'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import styles from './Lab.module.css'

export function Lab() {
  return (
    <Section id="lab">
      <Reveal>
        <SectionHeading kicker={labSection.kicker} heading={labSection.heading} description={labSection.description} />
      </Reveal>

      <div className={styles.grid}>
        {labExperiments.map((experiment, index) => (
          <Reveal key={experiment.id} delay={index * 0.05} className={styles.card}>
            <div className={styles.cardHead}>
              <h3 className={styles.title}>{experiment.title}</h3>
              <Tag accent={experiment.status === 'Prototype'}>{experiment.status}</Tag>
            </div>
            <p className={styles.description}>{experiment.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
