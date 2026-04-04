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
          <font-awesome-icon :icon="['fab', 'github']" />
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
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            style="flex-shrink: 0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
              fill="currentColor"
            />
            <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor" />
            <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor" />
            <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 15.4477 5 16Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" />
          </svg>
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
