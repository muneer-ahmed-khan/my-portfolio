<template><span></span></template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  }
)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
