<template>
  <vue-particles
    id="tsparticles"
    :options="particlesOptions"
  />
</template>

<script setup lang="ts">
const particlesOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        area: 1500
      }
    },
    color: {
      value: '#ffffff'
    },
    links: {
      enable: false,
      opacity: 0.03
    },
    move: {
      direction: 'right' as const,
      speed: 0.05
    },
    size: {
      value: 1
    },
    opacity: {
      value: 0.2,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.04
      }
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      }
    },
    modes: {
      push: {
        quantity: 1
      }
    }
  },
  detectRetina: true
}
</script>

<style scoped>
#tsparticles {
  width: 100%;
  height: 100vh;
}
</style>
