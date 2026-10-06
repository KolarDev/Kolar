import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems, site } from '../../content/site'
import { ThemeToggle } from '../theme/ThemeToggle'
import { Container } from '../ui/Container'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.name}>
          {site.name}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={isMenuOpen ? `${styles.bar} ${styles.barOpenTop}` : styles.bar} />
            <span className={isMenuOpen ? `${styles.bar} ${styles.barOpenBottom}` : styles.bar} />
          </button>
        </div>
      </Container>

      <nav
        id="mobile-nav"
        className={isMenuOpen ? `${styles.mobileNav} ${styles.mobileNavOpen}` : styles.mobileNav}
        aria-label="Mobile"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileList}>
          {navItems.map((item, index) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={styles.mobileLink}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className={styles.mobileIndex}>{String(index + 1).padStart(2, '0')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
