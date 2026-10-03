export const achievementsSection = {
  kicker: '08 — Milestones',
  heading: 'A few milestones.',
} as const

export type Achievement = {
  id: string
  title: string
  description: string
  placeholder?: boolean
}

export const achievements: Achievement[] = [
  {
    id: 'edusmartix-shipped',
    title: 'Shipped Edusmartix',
    description:
      'Designed and built a multi-tenant school management platform, now used to run real examinations and manage academic records.',
  },
  {
    id: 'placeholder-1',
    title: '[ Add a hackathon win, leadership role, or technical milestone ]',
    description: '[ One sentence on what it was and why it mattered. ]',
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    title: '[ Add another milestone ]',
    description: '[ One sentence on what it was and why it mattered. ]',
    placeholder: true,
  },
]
