<template>
  <div class="tools-row">
    <div
      v-for="(tool, index) in tools"
      :key="tool.name"
      class="skill-icon-item"
      :title="tool.name"
      v-reveal="{ direction: 'scale', delay: index * 55 }"
    >
      <div class="skill-icon-box">
        <img
          :src="tool.icon"
          :alt="tool.name"
          :class="['skill-icon-img', tool.invert ? 'invert-icon' : '']"
        />
      </div>
      <span class="skill-icon-label">{{ tool.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tools } from '@/data/skills'

export default defineComponent({
  name: 'ToolStack',
  setup() {
    return { tools }
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
