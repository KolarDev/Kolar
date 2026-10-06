import { useGoBack } from '../../hooks/useGoBack'
import styles from './BackLink.module.css'

export function BackLink({ label = 'Back', fallback = '/' }: { label?: string; fallback?: string }) {
  const goBack = useGoBack(fallback)

  return (
    <button type="button" className={styles.link} onClick={goBack}>
      <span aria-hidden="true">←</span>
      <span>{label}</span>
    </button>
  )
}
