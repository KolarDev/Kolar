export const whatIBuildSection = {
  kicker: '02 — Range',
  heading: "Here's what I build.",
  description: 'Swipe through. Real tools I use, for real products.',
} as const

export type TechIcon =
  | 'node'
  | 'express'
  | 'django'
  | 'rust'
  | 'go'
  | 'react'
  | 'nextjs'
  | 'nestjs'
  | 'typescript'
  | 'tailwind'
  | 'reactnative'
  | 'expo'
  | 'firebase'
  | 'android'
  | 'docker'
  | 'postgresql'
  | 'redis'
  | 'kubernetes'
  | 'nginx'
  | 'python'
  | 'tensorflow'
  | 'pytorch'
  | 'jupyter'
  | 'pandas'

export const buildPillars = [
  {
    id: 'backend',
    title: 'Backend systems',
    description:
      'I build APIs and backend services that handle real traffic without breaking. Data stays correct, even under heavy load.',
    icons: ['node', 'express', 'django', 'rust', 'go'] satisfies TechIcon[],
  },
  {
    id: 'product',
    title: 'Full-stack products',
    description:
      'I build complete products — the database, the API, and the screen people see. One connected system, built end to end.',
    icons: ['react', 'nextjs', 'nestjs', 'typescript', 'tailwind'] satisfies TechIcon[],
  },
  {
    id: 'mobile',
    title: 'Mobile apps',
    description:
      'I build mobile apps for Android and iOS from one codebase. Fast to build, easy to maintain, works on real phones.',
    icons: ['reactnative', 'expo', 'typescript', 'firebase', 'android'] satisfies TechIcon[],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description:
      'I set up the servers, databases, and pipelines that keep software running. The part users never see, but always depend on.',
    icons: ['docker', 'postgresql', 'redis', 'kubernetes', 'nginx'] satisfies TechIcon[],
  },
  {
    id: 'ai',
    title: 'AI-powered software',
    description:
      'I add AI features to real products — smart search, summaries, recommendations. Practical features, not just a demo.',
    icons: ['python', 'tensorflow', 'pytorch', 'jupyter', 'pandas'] satisfies TechIcon[],
  },
] as const
