<template>
  <!-- Particles Component -->
  <vue-particles
    id="tsparticles"
    :options="particlesOptions"
    @particlesLoaded="onParticlesLoaded"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheParticles',
  data() {
    return {
      // Particle configuration options
      particlesOptions: {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          color: {
            value: '#ffffff'
          },
          line_linked: {
            enable: false,
            opacity: 0.03
          },
          move: {
            direction: 'right',
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            value: 0.2,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.04
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
        // background: {
        //   color: {
        //     value: '#0d47a1'
        //   }
        // }
      }
    }
  },
  methods: {
    onParticlesLoaded() {
      // console.log('Particles Loaded:', container)
    }
  }
})
</script>

<style scoped>
/* Ensure the particles component spans the viewport */
#tsparticles {
  width: 100%;
  height: 100vh;
}
</style>
