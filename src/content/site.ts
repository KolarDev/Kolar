export const site = {
  name: 'Muhyideen Abdulbasit',
  role: 'Backend Engineer · AI Engineer',
  email: 'muhyideenabdulbasit2@gmail.com',
  phone: '+234 811 278 9308',
  availability: 'Open to new projects',
  location: 'Nigeria · Open to remote',
} as const

export const navItems = [
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Lab', path: '/#lab' },
  { label: 'Writing', path: '/#writing' },
  { label: 'Contact', path: '/contact' },
] as const

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/KolarDev', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulbasit-muhyideen-8138a22a1', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/Kolar_Dev', icon: 'x' },
] as const

export const heroContent = {
  headline: 'I build software that works when it matters.',
  description:
    "I design and build backend systems, full-stack products, infrastructure and AI-powered software — with a focus on reliability over novelty.",
  primaryCta: { label: 'Explore my work', to: '/work' },
  secondaryCta: { label: "Let's talk", to: '/contact' },
} as const
