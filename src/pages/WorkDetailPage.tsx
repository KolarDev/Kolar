import { Navigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/ui/BackLink'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { projects } from '../content/projects'
import styles from './WorkDetailPage.module.css'

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <Section>
      <BackLink label="Back to work" fallback="/work" />

      <Reveal>
        <SectionHeading level="h1" kicker={project.tag} heading={project.name} description={project.summary} />
      </Reveal>

      <Reveal delay={0.05}>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Reveal>

      <div className={styles.detail}>
        <Reveal delay={0.1}>
          <div className={styles.block}>
            <h2 className={styles.blockLabel}>The problem</h2>
            <p className={styles.blockText}>{project.problem}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.block}>
            <h2 className={styles.blockLabel}>My role</h2>
            <p className={styles.blockText}>{project.role}</p>
          </div>
        </Reveal>

        {project.solution.length > 0 && (
          <Reveal delay={0.2}>
            <div className={styles.block}>
              <h2 className={styles.blockLabel}>The approach</h2>
              <ul className={styles.list}>
                {project.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {project.decisions.length > 0 && (
          <Reveal delay={0.25}>
            <div className={styles.block}>
              <h2 className={styles.blockLabel}>Engineering decisions</h2>
              <ul className={styles.list}>
                {project.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
