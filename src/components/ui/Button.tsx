import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  icon?: ReactNode
} & (
  | { to: string; href?: never; onClick?: never }
  | { href: string; to?: never; onClick?: never }
  | { to?: never; href?: never; onClick: () => void }
)

export function Button({ children, variant = 'primary', icon, to, href, onClick }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a href={href} className={className} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}
