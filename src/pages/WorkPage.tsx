import { ProjectCard } from '../components/sections/ProjectCard'
import { BackLink } from '../components/ui/BackLink'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../content/projects'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <Section>
      <BackLink label="Back" />
      <Reveal>
        <SectionHeading
          level="h1"
          kicker="Work"
          heading="Engineering stories, not a tech-stack list."
          description="Selected projects. Open any one for the problem it solved, my role, and the decisions behind it."
        />
      </Reveal>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} headingLevel="h2" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
