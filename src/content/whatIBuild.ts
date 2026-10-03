export const whatIBuildSection = {
  kicker: '02 — Range',
  heading: "Here's what I build.",
  description:
    'Less about the technology list, more about the kind of problems I keep getting pulled toward.',
} as const

export const buildPillars = [
  {
    id: 'backend',
    title: 'Backend systems',
    description:
      'APIs, services and data models designed to stay correct under real, messy production load.',
  },
  {
    id: 'product',
    title: 'Full-stack products',
    description:
      'End-to-end products — from database to interface — built to turn an idea into something people can actually use.',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description:
      'Deployment pipelines, background jobs and the operational plumbing that keeps software running when nobody is watching.',
  },
  {
    id: 'ai',
    title: 'AI-powered software',
    description:
      'Practical AI features wired into real products, with sane fallbacks for when the model gets it wrong.',
  },
] as const
