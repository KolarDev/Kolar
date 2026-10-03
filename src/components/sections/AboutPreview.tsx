import { aboutPreview } from '../../content/about'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './AboutPreview.module.css'

export function AboutPreview() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading kicker={aboutPreview.kicker} heading={aboutPreview.heading} />
      </Reveal>
      <Reveal delay={0.08}>
        <div className={styles.body}>
          {aboutPreview.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Button to="/about" variant="ghost">
            Read the full story
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
