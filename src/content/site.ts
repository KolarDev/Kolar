export const site = {
  name: 'Muhyideen Abdulbasit',
  role: 'Software Engineer',
  email: 'muhyideenabdulbasit2@gmail.com',
  availability: 'Open to new projects',
  location: 'Remote · GMT+1',
} as const

export const navItems = [
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Lab', path: '/#lab' },
  { label: 'Writing', path: '/#writing' },
  { label: 'Contact', path: '/contact' },
] as const

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X', href: 'https://x.com/' },
] as const

export const heroContent = {
  headline: 'I build software that works when it matters.',
  description:
    "I design and build backend systems, full-stack products, infrastructure and AI-powered software — with a focus on reliability over novelty.",
  primaryCta: { label: 'Explore my work', to: '/work' },
  secondaryCta: { label: "Let's talk", to: '/contact' },
} as const
