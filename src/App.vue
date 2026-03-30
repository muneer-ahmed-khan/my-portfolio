<template>
  <PreLoader :load="load" />
  <div :class="['app', load ? 'no-scroll' : 'scroll']">
    <AppNavbar />
    <ScrollToTop />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PreLoader from './components/PreLoader.vue'
import AppNavbar from './components/AppNavbar.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import TheFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    PreLoader,
    AppNavbar,
    ScrollToTop,
    TheFooter
  },
  setup() {
    const load = ref(true)

    onMounted(() => {
      const timer = setTimeout(() => {
        load.value = false
      }, 1200)

      onUnmounted(() => {
        clearTimeout(timer)
      })
    })

    return { load }
  }
}
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
