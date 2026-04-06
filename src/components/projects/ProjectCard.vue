<template>
  <div class="project-card-view">
    <div class="card-img-wrapper">
      <img :src="imgPath" :alt="title" class="card-img-top w-100" />
    </div>
    <div class="card-body d-flex flex-column p-3">
      <h5 class="card-title project-card-title">{{ title }}</h5>
      <p class="card-text project-card-text text-justify">
        {{ description }}
      </p>

      <!-- Tech stack tags -->
      <div v-if="techStack && techStack.length" class="tech-tags mb-3">
        <span v-for="tag in techStack" :key="tag" class="tech-tag">{{ tag }}</span>
      </div>

      <!-- Action buttons -->
      <div class="d-flex gap-2 flex-wrap">
        <a
          :href="ghLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
          style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 5px"
        >
          <font-awesome-icon :icon="['fab', 'github']" aria-hidden="true" />
          {{ isBlog ? 'Blog' : 'GitHub' }}
        </a>
        <a
          v-if="!isBlog && demoLink"
          :href="demoLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
          style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 5px"
        >
          <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" aria-hidden="true" />
          Demo
        </a>
        <a
          v-if="isBlog && demoLink"
          :href="demoLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
          style="flex: 1; display: inline-flex; align-items: center; justify-content: center"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    imgPath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ghLink: { type: String, required: true },
    demoLink: { type: String, default: null },
    isBlog: { type: Boolean, default: false },
    techStack: { type: Array as () => string[], default: () => [] }
  }
})
</script>

<style scoped>
.project-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
  margin-bottom: 8px;
}

.project-card-text {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-muted);
  flex: 1;
}
</style>
