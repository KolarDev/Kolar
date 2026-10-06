import { useTheme } from '../../hooks/themeContext'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="10" cy="10" r="4" />
          <path
            d="M10 1.5v2.25M10 16.25v2.25M3.1 3.1l1.6 1.6M15.3 15.3l1.6 1.6M1.5 10h2.25M16.25 10h2.25M3.1 16.9l1.6-1.6M15.3 4.7l1.6-1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M17 12.3A7.2 7.2 0 0 1 7.7 3a7.2 7.2 0 1 0 9.3 9.3Z" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
