<template>
  <p class="card-text" :class="textClass">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CardText',
  props: {
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
    // Dynamically compute classes based on props
    const textClass = computed(() => {
      return {
        [`bg-${props.bg}`]: props.bg,
        [`text-${props.text}`]: props.text,
        [`border-${props.border}`]: props.border
      }
    })

    // Returning the computed property to be used in the template
    return { textClass }
  }
})
</script>

<style scoped>
.card-text {
  font-size: var(--text-base);
  font-family: var(--font-body);
  line-height: var(--leading-relaxed);
  margin-bottom: 1rem;
}
</style>
