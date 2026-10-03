import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site, socialLinks } from '../content/site'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const channels = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    ...socialLinks.map((social) => ({ label: social.label, value: social.href.replace('https://', ''), href: social.href })),
  ]

  return (
    <Section>
      <Reveal>
        <SectionHeading
          level="h1"
          kicker="Contact"
          heading="Ready for another connection?"
          description="Whether you're engineering a backend, scaling a product, or exploring an early idea — I'd like to hear about it."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className={styles.grid}>
          {channels.map((channel) => (
            <a key={channel.label} href={channel.href} className={styles.card} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className={styles.label}>{channel.label}</span>
              <span className={styles.value}>{channel.value}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className={styles.meta}>{site.location}</p>
      </Reveal>
    </Section>
  )
}
