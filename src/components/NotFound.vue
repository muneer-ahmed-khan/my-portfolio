<template>
  <div class="container-fluid not-found-section">
    <Particle />
    <div style="position: relative; z-index: 1">
      <div class="not-found-code">404</div>
      <h2 class="not-found-title">Page Not Found</h2>
      <p class="not-found-desc">
        Looks like this page doesn't exist or has been moved.
      </p>
      <router-link to="/" class="btn btn-cta">
        <font-awesome-icon icon="home" />
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '@/components/Particles.vue'

export default defineComponent({
  name: 'NotFound',
  components: { Particle }
})
</script>
