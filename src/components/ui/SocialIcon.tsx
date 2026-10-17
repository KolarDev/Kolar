import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaXTwitter } from 'react-icons/fa6'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  email: FaEnvelope,
  phone: FaPhone,
} as const

export type SocialIconKey = keyof typeof iconMap

export function SocialIcon({ icon }: { icon: SocialIconKey }) {
  const Icon = iconMap[icon]
  return <Icon aria-hidden="true" />
}
