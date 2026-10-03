import { socialLinks } from '../../content/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import styles from './GithubSection.module.css'

export function GithubSection() {
  const github = socialLinks.find((link) => link.label === 'GitHub')

  return (
    <Section>
      <Reveal className={styles.card}>
        <div>
          <span className={styles.kicker}>GitHub</span>
          <p className={styles.text}>
            Most of the interesting work lives in private, client codebases — but selected repositories and
            experiments are on GitHub.
          </p>
        </div>
        {github ? (
          <Button href={github.href} variant="secondary">
            View GitHub profile
          </Button>
        ) : null}
      </Reveal>
    </Section>
  )
}
