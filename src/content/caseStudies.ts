export const caseStudiesSection = {
  kicker: '07 — Case studies',
  heading: "Let's go underneath the interface.",
  description:
    'A few of the questions that shaped how Edusmartix is built, and what answering them actually involved.',
} as const

export type CaseStudy = {
  id: string
  question: string
  answer: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'exam-burst',
    question: 'What happens when 10,000 students start an exam at once?',
    answer:
      'Every submission is queued and rate-limited instead of hitting the primary database directly, so a burst of simultaneous starts degrades gracefully instead of taking the system down.',
  },
  {
    id: 'duplicate-requests',
    question: 'How do you prevent duplicate requests?',
    answer:
      'Payment and exam-submission endpoints require an idempotency key, so a retried request from a flaky connection can never double-charge a parent or double-submit an answer.',
  },
  {
    id: 'server-disappears',
    question: 'What happens when a server disappears mid-exam?',
    answer:
      'Exam progress is persisted incrementally rather than only on final submit, so a dropped connection or restarted process means a resume, not a lost attempt.',
  },
  {
    id: 'worker-redeploy',
    question: 'How should background workers survive redeployment?',
    answer:
      'Jobs are designed to be safely re-run: workers pick up where they left off instead of assuming a job that started will finish on the same process.',
  },
]
