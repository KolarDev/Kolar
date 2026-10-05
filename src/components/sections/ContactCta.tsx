import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import styles from './ContactCta.module.css'

export function ContactCta() {
  return (
    <Section id="contact">
      <Reveal className={styles.panel}>
        <span className={styles.kicker}>10 — Let's talk</span>
        <h2 className={styles.heading}>Ready for another connection?</h2>
        <p className={styles.description}>
          Whether you're scaling a product, hardening a backend, or figuring out what to build next — I'd like to
          hear about it.
        </p>
        <Button to="/contact" variant="accent">
          Get in touch
        </Button>
      </Reveal>
    </Section>
  )
}
