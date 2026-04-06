<template>
  <div class="container-fluid not-found-section">
    <Particles />
    <div style="position: relative; z-index: 1">
      <div class="not-found-code">404</div>
      <h2 class="not-found-title">Page Not Found</h2>
      <p class="not-found-desc">
        Looks like this page doesn't exist or has been moved.
      </p>
      <router-link to="/" class="btn btn-cta">
        <font-awesome-icon icon="home" aria-hidden="true" />
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Particles from '@/components/ui/Particles.vue'
</script>
