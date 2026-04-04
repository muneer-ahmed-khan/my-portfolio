<template>
  <div class="card-title" :class="titleClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CardTitle',
  props: {
    // You can add any props here, such as classes, styles, or custom variants for title
    bg: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // Computed classes for dynamic class bindings
    const titleClass = computed(() => {
      return {
        [`bg-${props.bg}`]: props.bg,
        [`text-${props.text}`]: props.text,
        [`border-${props.border}`]: props.border
      }
    })

    // Optionally, you can return the computed properties to be used in the template
    return { titleClass }
  }
})
</script>

<style scoped>
.card-title {
  font-size: var(--text-xl);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}
</style>
