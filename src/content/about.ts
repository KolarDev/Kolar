export const aboutPreview = {
  kicker: '01 — Philosophy',
  heading: "Let's start with who I am.",
  paragraphs: [
    "I'm a software engineer who cares more about whether a system survives contact with real users than how clever its code looks.",
    'Most of my work lives across backend systems, full-stack products, infrastructure and — increasingly — AI-powered features, usually for teams who need something that has to work, not just demo well.',
  ],
} as const

export const aboutPage = {
  heading: "Let's start with who I am.",
  intro: [
    "I'm Muhyideen — a software engineer based around backend systems, full-stack products, infrastructure and AI.",
    'I got here the way a lot of engineers do: by building things that broke, figuring out why, and getting stubborn about making sure they wouldn’t break the same way twice. That instinct is still what drives most of my decisions today.',
  ],
  approach: {
    heading: 'How I approach engineering',
    paragraphs: [
      "I try to treat reliability as a feature, not an afterthought. A product that works correctly for one user in a demo and falls over for ten thousand users on exam day hasn't actually shipped — it's just postponed the failure.",
      'That means thinking early about the boring parts: what happens when a request is retried twice, what happens when a payment provider times out, what happens when a background worker gets killed mid-job. Those questions usually matter more than the framework you picked.',
      "I'm also pragmatic about scope. Simple systems are easier to operate, easier to hand over, and easier to reason about at 2am when something is on fire — so I'd rather ship something boring and correct than something impressive and fragile.",
    ],
  },
  direction: {
    heading: 'Current direction',
    paragraphs: [
      "Lately I've been spending more time at the intersection of backend infrastructure and applied AI — building the plumbing that lets AI-powered features behave predictably in production, not just in a notebook.",
    ],
  },
} as const
