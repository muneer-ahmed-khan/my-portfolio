<template>
  <div class="container-fluid services-section">
    <Particles />
    <div class="container" style="position: relative; z-index: 1">
      <!-- Header -->
      <h1 class="project-heading services-heading" v-reveal="{ direction: 'up' }">
        What I <strong class="blue">Offer</strong>
      </h1>
      <p class="services-subheading" v-reveal="{ direction: 'up', delay: 100 }">
        I work with founders and product teams who need clean architecture, fast delivery, and code
        they won't regret six months from now.
      </p>

      <!-- Service Cards -->
      <div class="row g-4">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="col-md-6 col-lg-4"
          v-reveal="{ direction: 'up', delay: (index % 3) * 100 }"
        >
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="service.icon" aria-hidden="true" />
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
        <h2 class="section-subheading" style="margin-bottom: 40px" v-reveal="{ direction: 'up' }">
          How I <strong class="blue">Work</strong>
        </h2>
        <div class="row">
          <div
            v-for="(step, index) in processSteps"
            :key="step.number"
            class="col-6 col-md-3 process-step"
            v-reveal="{ direction: 'up', delay: index * 100 }"
          >
            <div class="process-number">{{ step.number }}</div>
            <h4 class="process-title">{{ step.title }}</h4>
            <p class="process-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="services-cta" v-reveal="{ direction: 'up', delay: 50 }">
        <h2>Ready to <span class="blue">Build Together?</span></h2>
        <p>
          I work with a small number of clients at a time so I can give each project real attention.
          Send me a message with a quick overview of your project.
        </p>
        <router-link to="/contact" class="btn btn-cta">
          <font-awesome-icon icon="paper-plane" aria-hidden="true" />
          Start a Conversation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Particles from '@/components/ui/Particles.vue'
import { services, processSteps } from '@/data/services'
</script>
