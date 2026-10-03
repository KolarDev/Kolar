import styles from './AmbientBackground.module.css'

/** Soft, slow-drifting gradient wash — gives glass surfaces something to blur. Decorative only. */
export function AmbientBackground({ variant = 'hero' }: { variant?: 'hero' | 'panel' }) {
  return (
    <div className={variant === 'panel' ? `${styles.ambient} ${styles.panel}` : styles.ambient} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blobAccent}`} />
      <span className={`${styles.blob} ${styles.blobAsh}`} />
      <span className={`${styles.blob} ${styles.blobAccentSoft}`} />
    </div>
  )
}
