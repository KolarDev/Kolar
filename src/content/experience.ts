export const experienceSection = {
  kicker: '04 — Chronology',
  heading: "Here's where I've been.",
} as const

export type ExperienceEntry = {
  id: string
  period: string
  role: string
  org: string
  summary: string
}

export const experience: ExperienceEntry[] = [
  {
    id: 'smart-nexus',
    period: 'Nov 2025 — Present',
    role: 'Software Engineer',
    org: 'Smart Nexus Technologies',
    summary:
      'Building backend systems for a multi-tenant school management platform with NestJS, PostgreSQL, Prisma, Redis and Docker — APIs, role-based access, academic workflows, result processing and offline exam sync.',
  },
  {
    id: 'university-of-ibadan',
    period: 'Apr 2026 — Oct 2026',
    role: 'IT Intern · Software Developer',
    org: 'University of Ibadan (ITeMS / ITNH)',
    summary:
      'Six-month industrial training. Built the Network Service Registry (Laravel, React) to move internet-service registration online for university staff, and a LibreNMS-integrated interface (FastAPI, React) for network traffic graphs. Also supported network troubleshooting, cabling and server operations across campus.',
  },
  {
    id: 'alkious',
    period: '2025 — 2026',
    role: 'Backend Developer',
    org: 'Alkious Technologies',
    summary:
      'Built multi-tenant property and construction management services with Django and Django REST Framework — tenant isolation, authentication, role-based access and core business workflows.',
  },
  {
    id: 'stanix',
    period: '2024 — 2025',
    role: 'Software Developer',
    org: 'Stanix Consult',
    summary:
      'Built and deployed web applications with Node.js, Python and Next.js. Managed multiple VPS deployments and CI/CD workflows with GitHub Actions.',
  },
]
