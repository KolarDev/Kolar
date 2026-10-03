export type Project = {
  id: string
  name: string
  tag: string
  summary: string
  problem: string
  role: string
  solution: string[]
  decisions: string[]
  technologies: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'edusmartix',
    name: 'Edusmartix',
    tag: 'Multi-tenant school platform',
    summary:
      'A multi-tenant school management platform built for Nigerian schools — handling academic records, examinations and payments for many independent schools on one system.',
    problem:
      "Schools needed a single platform to manage students, results and computer-based examinations — without one school's data, traffic or exam schedule ever touching another's, and without assuming reliable power or internet.",
    role: 'Designed and built the backend, multi-tenancy model and core platform end-to-end.',
    solution: [
      'Tenant-isolated data model so each school’s students, staff and records stay fully separated on shared infrastructure.',
      'Role-based access for admins, teachers, students and parents, each seeing only what they should.',
      'A computer-based testing (CBT) engine built to hold up when an entire exam hall of students starts at the same moment.',
      'Background job processing for results computation, notifications and payment reconciliation, so slow work never blocks a user-facing request.',
      'Payment integration for tuition and exam fees, with idempotent handling so a retried request can never charge — or enroll — someone twice.',
    ],
    decisions: [
      'What happens when 10,000 students start an exam at once? — load is spread across queued, rate-limited submission handling instead of writing every answer straight to the primary database.',
      'How do you prevent duplicate requests? — every payment and exam submission carries an idempotency key, so retries from flaky connections are safe by construction.',
      'What happens when a server disappears mid-exam? — exam state is persisted incrementally, so a student can resume instead of losing an attempt.',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Background jobs', 'Multi-tenancy'],
    featured: true,
  },
  {
    id: 'client-platforms',
    name: 'Client platforms & APIs',
    tag: 'Full-stack delivery',
    summary:
      'Full-stack products and APIs built for founders turning an early idea into working software — from data model to deployed interface.',
    problem:
      'Early-stage ideas need someone who can own the whole path from "what should this do" to a product real users can log into.',
    role: 'End-to-end engineering: architecture, backend, frontend and deployment.',
    solution: [
      'Scoped and built product APIs and the interfaces on top of them.',
      'Set up deployment and environment practices so shipping changes stayed boring and safe.',
    ],
    decisions: [],
    technologies: ['TypeScript', 'React', 'REST APIs'],
    featured: false,
  },
]

export const featuredProject = projects.find((project) => project.featured) ?? projects[0]
export const otherProjects = projects.filter((project) => !project.featured)
