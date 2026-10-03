import { Link } from 'react-router-dom'
import { navItems, site, socialLinks } from '../../content/site'
import { Container } from '../ui/Container'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.name}>{site.name}</span>
          <span className={styles.role}>{site.role}</span>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
              {social.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className={styles.socialLink}>
            Email
          </a>
        </div>

        <div className={styles.meta}>
          <span>{site.location}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  )
}
