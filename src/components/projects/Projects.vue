<template>
  <div class="container-fluid project-section">
    <Particle />
    <div class="container">
      <h1 class="project-heading">My Recent <strong class="blue">Works</strong></h1>
      <p class="projects-subtitle">
        Here are a few projects I've worked on — real project details coming soon.
      </p>
      <div class="row justify-content-center">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-md-4 project-card"
        >
          <ProjectCard v-bind="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import Particle from '@/components/Particles.vue'
import { projects } from '@/data/projects'

export default defineComponent({
  name: 'TheProjects',
  components: { ProjectCard, Particle },
  setup() {
    return { projects }
  }
})
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
