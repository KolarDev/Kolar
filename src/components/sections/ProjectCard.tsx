import type { Project } from '../../content/projects'
import { Button } from '../ui/Button'
import { Tag } from '../ui/Tag'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
  /** Heading level for the project name — adjust to fit the surrounding page hierarchy. */
  headingLevel?: 'h2' | 'h3'
}

export function ProjectCard({ project, headingLevel = 'h3' }: ProjectCardProps) {
  const Name = headingLevel

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.tagLine}>{project.tag}</span>
        <Name className={styles.name}>{project.name}</Name>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <Button to={`/work/${project.id}`} variant="ghost">
        View details
      </Button>
    </article>
  )
}
