import { buildPillars, whatIBuildSection } from '../../content/whatIBuild'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './WhatIBuild.module.css'

export function WhatIBuild() {
  return (
    <Section tone="subtle">
      <Reveal>
        <SectionHeading
          kicker={whatIBuildSection.kicker}
          heading={whatIBuildSection.heading}
          description={whatIBuildSection.description}
        />
      </Reveal>
      <div className={styles.grid}>
        {buildPillars.map((pillar, index) => (
          <Reveal key={pillar.id} delay={index * 0.06} className={styles.card}>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{pillar.title}</h3>
            <p className={styles.description}>{pillar.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
