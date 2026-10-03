import { writingSection } from '../../content/writing'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Writing.module.css'

export function Writing() {
  return (
    <Section id="writing" tone="subtle">
      <Reveal>
        <SectionHeading
          kicker={writingSection.kicker}
          heading={writingSection.heading}
          description={writingSection.description}
        />
      </Reveal>
      <Reveal delay={0.08}>
        <p className={styles.empty}>{writingSection.emptyState}</p>
      </Reveal>
    </Section>
  )
}
