import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <span className={styles.kicker}>404</span>
        <h1 className={styles.heading}>This page wandered off.</h1>
        <p className={styles.description}>The page you're looking for doesn't exist — let's get you back on track.</p>
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </div>
    </Section>
  )
}
