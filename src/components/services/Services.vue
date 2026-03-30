<template>
  <div class="container-fluid services-section">
    <Particle />
    <div class="container" style="position: relative; z-index: 1">
      <!-- Header -->
      <h1 class="project-heading services-heading">
        What I <strong class="blue">Offer</strong>
      </h1>
      <p class="services-subheading">
        I work with founders and product teams who need clean architecture, fast delivery, and code
        they won't regret six months from now.
      </p>

      <!-- Service Cards -->
      <div class="row g-4">
        <div v-for="service in services" :key="service.title" class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="service.icon" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-tags">
              <span v-for="tag in service.tags" :key="tag" class="service-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="process-section">
        <h2 class="project-heading" style="font-size: 1.8rem; margin-bottom: 40px">
          How I <strong class="blue">Work</strong>
        </h2>
        <div class="row">
          <div v-for="step in process" :key="step.number" class="col-md-3 process-step">
            <div class="process-number">{{ step.number }}</div>
            <h4 class="process-title">{{ step.title }}</h4>
            <p class="process-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="services-cta">
        <h2>Ready to <span class="blue">Build Together?</span></h2>
        <p>
          I work with a small number of clients at a time so I can give each project real attention.
          Send me a message with a quick overview of your project.
        </p>
        <router-link to="/contact" class="btn btn-cta">
          <font-awesome-icon icon="paper-plane" />
          Start a Conversation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '@/components/Particles.vue'

export default defineComponent({
  name: 'ServicesPage',
  components: { Particle },
  setup() {
    const services = [
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
        icon: 'desktop',
        description:
          'Live dashboards, chat systems, notifications, and event-driven data flows. WebSocket and MQTT-powered features that deliver instant updates at scale.',
        tags: ['Socket.IO', 'WebSockets', 'MQTT', 'Redis', 'Node.js']
      },
      {
        title: 'Cloud Deployment & DevOps',
        icon: 'briefcase',
        description:
          'Infrastructure setup and CI/CD pipelines on AWS or Azure. Docker containerization, automated deployments via GitHub Actions, monitoring, and rollback strategies.',
        tags: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Terraform']
      },
      {
        title: 'LLM & AI Integrations',
        icon: 'star',
        description:
          'AI-powered features integrated into your product — semantic search, document Q&A, automated content pipelines, and custom LLM workflows using OpenAI, Claude, and more.',
        tags: ['OpenAI', 'Claude API', 'FastAPI', 'Python', 'Redis', 'AWS Lambda']
      },
      {
        title: 'MVP & Rapid Prototyping',
        icon: 'file-lines',
        description:
          'Fast, focused MVP builds to validate your idea quickly. I build iteratively so you can give feedback early, keeping scope realistic and delivery date predictable.',
        tags: ['Vue 3', 'React', 'Supabase', 'Tailwind CSS', 'Vercel']
      }
    ]

    const process = [
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

    return { services, process }
  }
})
</script>
