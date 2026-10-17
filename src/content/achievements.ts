export const achievementsSection = {
  kicker: '08 — Milestones',
  heading: 'A few milestones.',
} as const

export type AchievementIcon = 'rocket' | 'mentor' | 'trophy' | 'university'

export type Achievement = {
  id: string
  title: string
  description: string
  icon: AchievementIcon
}

export const achievements: Achievement[] = [
  {
    id: 'edusmartix-cofounder',
    title: 'Co-founded Edusmartix',
    description:
      'Technical co-founder of a multi-tenant school management platform, now used by Nigerian schools to run real examinations and manage academic records.',
    icon: 'rocket',
  },
  {
    id: 'gdgoc-backend-lead',
    title: 'Backend Lead, GDGoC LAUTECH',
    description:
      'Leading backend mentorship at Google Developer Groups on Campus (GDGoC) LAUTECH — code reviews, architecture discussions and technical sessions, 2025/2026.',
    icon: 'mentor',
  },
  {
    id: 'hackathon-wins',
    title: '3-time hackathon winner',
    description: 'Won first place in three hackathons, building working products against the clock.',
    icon: 'trophy',
  },
  {
    id: 'university-of-ibadan-tools',
    title: 'Built internal tools for a major Nigerian university',
    description:
      'Built software and networking tools for the University of Ibadan, one of Nigeria’s largest universities, during a six-month industrial training.',
    icon: 'university',
  },
]
