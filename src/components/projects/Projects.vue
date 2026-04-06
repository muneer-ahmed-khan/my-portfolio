<template>
  <div class="container-fluid project-section">
    <Particles />
    <div class="container">
      <h1 class="project-heading" v-reveal="{ direction: 'up' }">My Recent <strong class="blue">Works</strong></h1>
      <p class="projects-subtitle" v-reveal="{ direction: 'up', delay: 100 }">
        Here are a few projects I've worked on — real project details coming soon.
      </p>
      <div class="row justify-content-center">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="col-md-4 project-card"
          v-reveal="{ direction: 'up', delay: (index % 3) * 120 }"
        >
          <ProjectCard v-bind="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Particles from '@/components/ui/Particles.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<style scoped>
.projects-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-regular);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: 40px;
}
</style>
