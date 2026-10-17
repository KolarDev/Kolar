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
    role: 'Technical Co-founder and Backend Engineer. Designed the backend, tenant architecture, academic data model, authentication, billing and result-processing systems.',
    solution: [
      'Tenant-isolated data model so each school’s students, staff and records stay fully separated on shared infrastructure.',
      'Role-based access control for admins, teachers, students and parents, each seeing only what they should.',
      'A computer-based testing (CBT) engine with offline synchronization, built to hold up when an entire exam hall of students starts at the same moment.',
      'Background job processing for results computation, notifications and billing, so slow work never blocks a user-facing request.',
      'Production deployment and infrastructure for a system run by many independent schools at once.',
    ],
    decisions: [
      'What happens when 10,000 students start an exam at once? — load is spread across queued, rate-limited submission handling instead of writing every answer straight to the primary database.',
      'How do you prevent duplicate requests? — payment and exam submissions carry an idempotency key, so retries from flaky connections are safe by construction.',
      'What happens when a connection drops mid-exam? — exam state is synced incrementally, so a student can resume instead of losing an attempt.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
    featured: true,
  },
  {
    id: 'companyzero',
    name: 'CompanyZero',
    tag: 'AI agent platform',
    summary:
      'Backend for an autonomous-company platform, where AI agents execute structured business operations on their own.',
    problem:
      'Letting AI agents act on real business operations needs more than an LLM call — it needs permission boundaries, memory, and a backend that treats an agent like any other actor that can get things wrong.',
    role: 'AI and Backend Engineer. Built the backend that lets AI agents act safely inside real business workflows.',
    solution: [
      'Structured AI actions with defined permission boundaries, so an agent can only do what it is explicitly allowed to do.',
      'Agent memory and background workflows for tasks that run over time, not just a single request.',
      'Real-time activity updates over WebSockets, so people can watch what an agent is doing as it happens.',
    ],
    decisions: [],
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'FastAPI', 'Zod'],
    featured: false,
  },
  {
    id: 'safe-rehearse',
    name: 'Safe-Rehearse',
    tag: 'AI study platform',
    summary:
      'An AI study platform that combines learning, voice interaction, practice and assessment into one guided flow.',
    problem:
      'Studying alone is different from being taught, practicing, and then tested. Safe-Rehearse needed AI that could play all three roles, and hand off cleanly between them.',
    role: 'AI Engineer. Designed the agent workflow and the AI systems behind it.',
    solution: [
      'A resumable Teacher → Practice Partner → Examiner workflow, with state kept across each stage.',
      'Voice interaction and transcription, so a learner can speak instead of only typing.',
      'Structured outputs and evaluation, so the AI’s feedback is consistent and gradable, not just free text.',
    ],
    decisions: [],
    technologies: ['LLM APIs', 'RAG', 'Voice AI', 'Transcription', 'Python', 'FastAPI'],
    featured: false,
  },
  {
    id: 'tweet-audit',
    name: 'Tweet Audit',
    tag: 'AI content moderation',
    summary:
      'A backend tool that audits an exported X (Twitter) archive against content rules using Google’s Gemini AI, flagging tweets for review and exporting the results to CSV.',
    problem:
      'Reviewing thousands of tweets against content and tone rules doesn’t scale by hand. Doing it with AI means handling rate limits, bad model output and interruptions — without losing progress or starting over.',
    role: 'Backend engineer. Built the processing pipeline and the reliability layer around the AI calls.',
    solution: [
      'Rate-limited requests to Gemini (about one per second), with exponential backoff and jitter on retries.',
      'Checkpointing every few records, so an interrupted run resumes instead of starting over.',
      'Graceful shutdown on interrupt signals, so progress is saved even if the process is stopped mid-run.',
      'Structured, JSON-mode AI output, with provider errors mapped into predictable application-level errors.',
      'Tested at real scale — a full run against an archive of 4,941 tweets, including checkpoint recovery and interrupted-run handling.',
    ],
    decisions: [
      'What happens when the AI service rate-limits or times out? — requests back off exponentially with jitter instead of retrying immediately.',
      'What happens if the process is killed mid-run? — progress is checkpointed, so resuming picks up where it left off instead of re-auditing from zero.',
    ],
    technologies: ['TypeScript', 'Google Gemini API', 'CSV export'],
    featured: false,
  },
  {
    id: 'payment-gateway',
    name: 'Payment Gateway',
    tag: 'Payments backend',
    summary:
      'A payment gateway sitting between an e-commerce order service and a mock bank — handling authorize, capture, void and refund, with strict state transitions.',
    problem:
      'Payment systems can’t tolerate ambiguity. A duplicate request must never double-charge, and a payment must never move into a state it shouldn’t — like capturing something already voided.',
    role: 'Backend engineer. Designed the payment state machine, the bank integration, and the transaction data model.',
    solution: [
      'An explicit state machine (pending → authorized → captured → refunded, or voided) that rejects any transition that isn’t valid for the payment’s current state.',
      'Idempotency keys on every operation, so a retried request from a flaky client can never create a duplicate charge.',
      'A bank client that maps the mock bank’s responses and failures into the gateway’s own payment workflow.',
      'Amounts stored as integer cents, not floating-point currency, to avoid rounding errors in money math.',
    ],
    decisions: [
      'How do you stop a double-charge from a retried request? — every operation carries an idempotency key, checked before it reaches the bank.',
      'How do you stop an invalid state change, like capturing a voided payment? — transitions are only allowed from specific states, enforced by the state machine itself, not by trusting the caller.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    featured: false,
  },
]

export const featuredProject = projects.find((project) => project.featured) ?? projects[0]
export const otherProjects = projects.filter((project) => !project.featured)
