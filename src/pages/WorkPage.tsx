import { ProjectCard } from '../components/sections/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../content/projects'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          level="h1"
          kicker="Work"
          heading="Engineering stories, not a tech-stack list."
          description="Selected projects, framed around the problem they solved and the decisions that made them reliable."
        />
      </Reveal>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} detailed={project.featured} headingLevel="h2" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
