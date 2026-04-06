import type { Service, ProcessStep } from '@/types/service'

export const services: Service[] = [
  {
    title: 'Custom SaaS Platforms',
    icon: 'rocket',
    description:
      'End-to-end SaaS application development — from multi-tenant architecture and subscription billing to onboarding flows and admin dashboards. Built to scale.',
    tags: ['Vue 3', 'Nuxt.js', 'React', 'Next.js', 'NestJS', 'PostgreSQL']
  },
  {
    title: 'Backend APIs & Microservices',
    icon: 'code',
    description:
      'High-performance REST and GraphQL APIs with clean architecture. Microservices designed for horizontal scaling, resiliency, and long-term maintainability.',
    tags: ['Node.js', 'NestJS', 'Go', 'FastAPI', 'GraphQL', 'Docker']
  },
  {
    title: 'Real-time Systems',
    icon: 'bolt',
    description:
      'Live dashboards, chat systems, notifications, and event-driven data flows. WebSocket and MQTT-powered features that deliver instant updates at scale.',
    tags: ['Socket.IO', 'WebSockets', 'MQTT', 'Redis', 'Node.js']
  },
  {
    title: 'Cloud Deployment & DevOps',
    icon: 'cloud',
    description:
      'Infrastructure setup and CI/CD pipelines on AWS or Azure. Docker containerization, automated deployments via GitHub Actions, monitoring, and rollback strategies.',
    tags: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Terraform']
  },
  {
    title: 'LLM & AI Integrations',
    icon: 'wand-magic-sparkles',
    description:
      'AI-powered features integrated into your product — semantic search, document Q&A, automated content pipelines, and custom LLM workflows using OpenAI, Claude, and more.',
    tags: ['OpenAI', 'Claude API', 'FastAPI', 'Python', 'Redis', 'AWS Lambda']
  },
  {
    title: 'MVP & Rapid Prototyping',
    icon: 'fire',
    description:
      'Fast, focused MVP builds to validate your idea quickly. I build iteratively so you can give feedback early, keeping scope realistic and delivery date predictable.',
    tags: ['Vue 3', 'React', 'Supabase', 'Tailwind CSS', 'Vercel']
  }
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'A short call to understand your actual goal — not just the feature list, but the business problem behind it.'
  },
  {
    number: '02',
    title: 'Scoping',
    description:
      'A realistic scope proposal with milestones so there are no surprises on delivery day.'
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Iterative development with early feedback checkpoints. Clean code that whoever touches it next will thank you for.'
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Deployment, documentation, and ongoing support. I stay available after launch, not just during it.'
  }
]
