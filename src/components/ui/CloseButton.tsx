import { useGoBack } from '../../hooks/useGoBack'
import styles from './CloseButton.module.css'

export function CloseButton({ label = 'Close', fallback = '/' }: { label?: string; fallback?: string }) {
  const goBack = useGoBack(fallback)

  return (
    <button type="button" className={styles.close} onClick={goBack}>
      <span>{label}</span>
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
      </svg>
    </button>
  )
}
