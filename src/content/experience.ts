export const experienceSection = {
  kicker: '07 — Chronology',
  heading: "Here's where I've been.",
} as const

export type ExperienceEntry = {
  id: string
  period: string
  role: string
  org: string
  summary: string
  placeholder?: boolean
}

/**
 * Placeholder timeline — swap in real roles, companies and dates.
 * Kept obviously editable rather than invented.
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'current',
    period: 'Present',
    role: '[ Your current role ]',
    org: '[ Company / project name ]',
    summary: 'Building Edusmartix and related platform work. Replace with your real title and focus.',
    placeholder: true,
  },
  {
    id: 'previous-1',
    period: '[ 20XX – 20XX ]',
    role: '[ Previous role ]',
    org: '[ Company name ]',
    summary: '[ One or two sentences on scope and impact in this role. ]',
    placeholder: true,
  },
  {
    id: 'previous-2',
    period: '[ 20XX – 20XX ]',
    role: '[ Earlier role ]',
    org: '[ Company name ]',
    summary: '[ One or two sentences on scope and impact in this role. ]',
    placeholder: true,
  },
]
