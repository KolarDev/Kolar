import type { Project } from '../../content/projects'
import { Tag } from '../ui/Tag'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
  detailed?: boolean
  /** Heading level for the project name — adjust to fit the surrounding page hierarchy. */
  headingLevel?: 'h2' | 'h3'
}

export function ProjectCard({ project, detailed = false, headingLevel = 'h3' }: ProjectCardProps) {
  const Name = headingLevel

  return (
    <article id={project.id} className={detailed ? `${styles.card} ${styles.detailed}` : styles.card}>
      <div className={styles.header}>
        <span className={styles.tagLine}>{project.tag}</span>
        <Name className={styles.name}>{project.name}</Name>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      {detailed && (
        <div className={styles.detail}>
          <div>
            <h4 className={styles.detailLabel}>The problem</h4>
            <p className={styles.detailText}>{project.problem}</p>
          </div>
          <div>
            <h4 className={styles.detailLabel}>My role</h4>
            <p className={styles.detailText}>{project.role}</p>
          </div>
          {project.solution.length > 0 && (
            <div>
              <h4 className={styles.detailLabel}>The approach</h4>
              <ul className={styles.list}>
                {project.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {project.decisions.length > 0 && (
            <div>
              <h4 className={styles.detailLabel}>Engineering decisions</h4>
              <ul className={styles.list}>
                {project.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  )
}
