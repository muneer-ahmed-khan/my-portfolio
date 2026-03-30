<template>
  <div class="skill-categories">
    <div v-for="category in skillCategories" :key="category.name" class="skill-category">
      <p class="skill-category-title">{{ category.name }}</p>
      <div class="skill-icons-row">
        <div
          v-for="skill in category.skills"
          :key="skill.name"
          class="skill-icon-item"
          :title="skill.name"
        >
          <div class="skill-icon-box">
            <img
              :src="skill.icon"
              :alt="skill.name"
              :class="['skill-icon-img', skill.invert ? 'invert-icon' : '']"
            />
          </div>
          <span class="skill-icon-label">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { skillCategories } from '@/data/skills'

export default defineComponent({
  name: 'TechStack',
  setup() {
    return { skillCategories }
  }
})
</script>

<style scoped>
.skill-icon-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
</style>
