export const principlesSection = {
  kicker: '09 — Principles',
  heading: 'How I think about engineering.',
} as const

export type Principle = {
  id: string
  statement: string
  detail: string
}

export const principles: Principle[] = [
  {
    id: 'reliability',
    statement: 'Build for reliability.',
    detail: 'A feature that fails silently under real load is worse than a feature that was never shipped.',
  },
  {
    id: 'dependency',
    statement: 'Every dependency can fail.',
    detail: 'Payment providers time out, servers disappear, networks partition — design for it up front.',
  },
  {
    id: 'simplicity',
    statement: 'Simple systems are easier to operate.',
    detail: 'The system someone can debug at 2am is better than the one that only looks impressive in a diagram.',
  },
  {
    id: 'measure',
    statement: 'Measure before optimizing.',
    detail: "Intuition about what's slow is usually wrong. Profile first, then fix the actual bottleneck.",
  },
  {
    id: 'architecture',
    statement: 'Good architecture makes change easier.',
    detail: 'Requirements shift. The job is to make tomorrow’s change cheap, not to predict it perfectly today.',
  },
]
