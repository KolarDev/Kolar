import { featuredProject, otherProjects } from '../../content/projects'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import styles from './FeaturedWork.module.css'

export function FeaturedWork() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          kicker="03 — Selected work"
          heading="Here's what I build."
          action={
            <Button to="/work" variant="ghost">
              View all work
            </Button>
          }
        />
      </Reveal>

      <div className={styles.stack}>
        <Reveal>
          <ProjectCard project={featuredProject} detailed />
        </Reveal>

        {otherProjects.map((project, index) => (
          <Reveal key={project.id} delay={0.1 + index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
