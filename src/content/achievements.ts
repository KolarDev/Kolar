export const achievementsSection = {
  kicker: '08 — Milestones',
  heading: 'A few milestones.',
} as const

export type Achievement = {
  id: string
  title: string
  description: string
}

export const achievements: Achievement[] = [
  {
    id: 'edusmartix-cofounder',
    title: 'Co-founded Edusmartix',
    description:
      'Technical co-founder of a multi-tenant school management platform, now used by Nigerian schools to run real examinations and manage academic records.',
  },
  {
    id: 'gdgoc-backend-lead',
    title: 'Backend Lead, GDGoC LAUTECH',
    description:
      'Mentoring developers through backend projects, code reviews, architecture discussions and technical sessions, 2025/2026.',
  },
  {
    id: 'cgpa',
    title: '4.29 / 5.00 CGPA',
    description: 'Bachelor’s degree in Computer Science, Ladoke Akintola University of Technology (LAUTECH).',
  },
]
