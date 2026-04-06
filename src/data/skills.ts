import type { Skill, SkillCategory } from '@/types/skill'

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', icon: `${D}/vuejs/vuejs-original.svg` },
      { name: 'Nuxt.js', icon: `${D}/nuxtjs/nuxtjs-original.svg` },
      { name: 'React', icon: `${D}/react/react-original.svg` },
      { name: 'Next.js', icon: `${D}/nextjs/nextjs-original-wordmark.svg`, invert: true },
      { name: 'TypeScript', icon: `${D}/typescript/typescript-original.svg` },
      { name: 'Tailwind CSS', icon: `${D}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Bootstrap', icon: `${D}/bootstrap/bootstrap-original.svg` }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: `${D}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', icon: `${D}/express/express-original.svg`, invert: true },
      { name: 'NestJS', icon: `${D}/nestjs/nestjs-original.svg` },
      { name: 'Go', icon: `${D}/go/go-original.svg` },
      { name: 'Python', icon: `${D}/python/python-original.svg` },
      { name: 'Django', icon: `${D}/django/django-plain.svg` },
      { name: 'FastAPI', icon: `${D}/fastapi/fastapi-original.svg` },
      { name: 'GraphQL', icon: `${D}/graphql/graphql-plain.svg` },
      { name: 'Prisma', icon: `${D}/prisma/prisma-original.svg`, invert: true },
      { name: 'Socket.IO', icon: 'https://cdn.simpleicons.org/socketdotio', invert: true }
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: `${D}/postgresql/postgresql-original.svg` },
      { name: 'MongoDB', icon: `${D}/mongodb/mongodb-original.svg` },
      { name: 'Supabase', icon: `${D}/supabase/supabase-original.svg` },
      { name: 'Redis', icon: `${D}/redis/redis-original.svg` }
    ]
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: `${D}/docker/docker-original.svg` },
      { name: 'AWS', icon: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Azure', icon: `${D}/azure/azure-original.svg` },
      { name: 'GitHub Actions', icon: `${D}/githubactions/githubactions-original.svg` },
      { name: 'Git', icon: `${D}/git/git-original.svg` }
    ]
  }
]

export const tools: Skill[] = [
  { name: 'VS Code', icon: `${D}/vscode/vscode-original.svg` },
  { name: 'GitHub', icon: `${D}/github/github-original.svg`, invert: true },
  { name: 'Figma', icon: `${D}/figma/figma-original.svg` },
  { name: 'Postman', icon: `${D}/postman/postman-original.svg` },
  { name: 'Jira', icon: `${D}/jira/jira-original.svg` },
  { name: 'Linear', icon: 'https://cdn.simpleicons.org/linear' },
  { name: 'ClickUp', icon: 'https://cdn.simpleicons.org/clickup' },
  { name: 'Slack', icon: `${D}/slack/slack-original.svg` }
]
