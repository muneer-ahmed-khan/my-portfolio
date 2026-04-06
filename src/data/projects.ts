import type { Project } from '@/types/project'
import placeholder from '@/assets/projects/placeholder.png'

export const projects: Project[] = [
  {
    id: 1,
    title: 'TypeSync – SaaS Platform',
    description:
      'Full-stack multi-tenant SaaS platform with real-time collaboration, role-based access control, and team workspaces. Subscription billing, onboarding flows, and clean admin dashboard.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    isBlog: false,
    techStack: ['Vue 3', 'NestJS', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: 2,
    title: 'StreamDash – Live Analytics',
    description:
      'Real-time analytics dashboard with WebSocket-powered data feeds, configurable chart widgets, and event-driven push notifications. Handles thousands of concurrent connections.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    isBlog: false,
    techStack: ['React', 'Node.js', 'Socket.IO', 'Redis', 'Docker']
  },
  {
    id: 3,
    title: 'GoFlow – High-Performance API',
    description:
      'Scalable REST and GraphQL API backend built in Go with PostgreSQL. Designed for high-throughput workloads with connection pooling, intelligent caching, and horizontal scaling on Azure.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    isBlog: false,
    techStack: ['Go', 'GraphQL', 'PostgreSQL', 'Azure', 'Docker']
  },
  {
    id: 4,
    title: 'LLM Pipeline – AI Integration',
    description:
      'Production-grade AI data processing pipeline integrating OpenAI and custom LLMs. Features semantic search, document Q&A, and automated content generation with rate-limiting and caching.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    isBlog: false,
    techStack: ['FastAPI', 'Python', 'OpenAI', 'Redis', 'AWS Lambda']
  },
  {
    id: 5,
    title: 'Nest of Blogs – Blog Platform',
    description:
      'Full-stack blog platform with markdown support, SSR/SSG for SEO, and dynamic content management. Backed by Supabase for real-time data and authentication.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    demoLink: 'https://nest-of-blogs.vercel.app/',
    isBlog: true,
    techStack: ['Nuxt.js', 'Supabase', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 6,
    title: 'CI/CD Pipeline Automation',
    description:
      'DevOps automation toolkit for containerized microservices. GitHub Actions pipelines, Docker orchestration, infrastructure-as-code, monitoring, and automated rollback strategies.',
    imgPath: placeholder,
    ghLink: 'https://github.com/muneer-ahmed-khan',
    isBlog: false,
    techStack: ['Docker', 'GitHub Actions', 'AWS', 'Python', 'Terraform']
  }
]
