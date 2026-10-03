import { caseStudies, caseStudiesSection } from '../../content/caseStudies'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './CaseStudies.module.css'

export function CaseStudies() {
  return (
    <Section tone="subtle">
      <Reveal>
        <SectionHeading
          kicker={caseStudiesSection.kicker}
          heading={caseStudiesSection.heading}
          description={caseStudiesSection.description}
        />
      </Reveal>

      <div className={styles.grid}>
        {caseStudies.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06} className={styles.card}>
            <p className={styles.question}>{item.question}</p>
            <p className={styles.answer}>{item.answer}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
