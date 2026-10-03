export const labSection = {
  kicker: '05 — Lab',
  heading: 'Architecture Lab.',
  description:
    'A running list of systems concepts I’m exploring outside client work — explanations first, interactive versions later.',
} as const

export type LabExperiment = {
  id: string
  title: string
  status: 'Exploring' | 'Prototype'
  description: string
}

export const labExperiments: LabExperiment[] = [
  {
    id: 'payments',
    title: 'Payment retries & idempotency',
    status: 'Exploring',
    description:
      'Visualizing how idempotency keys stop a retried payment from becoming a duplicate charge.',
  },
  {
    id: 'queues',
    title: 'Queues under pressure',
    status: 'Exploring',
    description:
      'What a queue actually does when producers outpace consumers — backpressure, not magic.',
  },
  {
    id: 'multi-tenancy',
    title: 'Multi-tenancy models',
    status: 'Prototype',
    description:
      'Comparing shared-schema vs. schema-per-tenant isolation, and where each one breaks down.',
  },
  {
    id: 'offline-first',
    title: 'Offline-first sync',
    status: 'Exploring',
    description:
      'How a client keeps working without a connection, and reconciles safely once it’s back.',
  },
]
