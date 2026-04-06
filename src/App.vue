<template>
  <AppPreLoader :load="load" />
  <div :class="['app', load ? 'no-scroll' : 'scroll']">
    <AppNavbar />
    <ScrollToTop />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppPreLoader from '@/components/layout/AppPreLoader.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import ScrollToTop from '@/components/ui/ScrollToTop.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const load = ref(true)

onMounted(() => {
  const timer = setTimeout(() => {
    load.value = false
  }, 1200)

  onUnmounted(() => {
    clearTimeout(timer)
  })
})
</script>

<style scoped>
.app {
  text-align: left;
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

.scroll {
  overflow: auto;
}
</style>
