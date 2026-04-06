<template>
  <section>
    <div class="container-fluid home-section" id="home">
      <Particle />
      <div class="container home-content">
        <div class="row align-items-center">
          <div class="col-md-7 home-header">
            <h1 class="heading" style="padding-bottom: 15px">
              Good day
              <span class="wave" role="img" aria-label="waving hand">👋🏻</span>
            </h1>

            <h1 class="heading-name">
              I'M <strong class="main-name"> Muneer Ahmed</strong>
            </h1>

            <div style="padding: 50px 50px 50px; text-align: left">
              <Type />
            </div>
          </div>

          <div class="col-md-5" style="padding-bottom: 20px; text-align: center">
            <img
              :src="homeLogo"
              alt="Muneer Ahmed – Full-Stack Developer"
              class="img-fluid"
              style="max-height: 450px"
            />
          </div>
        </div>
      </div>
    </div>
    <Home2 />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '../Particles.vue'
import Type from './Type.vue'
import Home2 from './Home2.vue'
import homeLogo from '@/assets/home-main.svg'

export default defineComponent({
  name: 'TheHome',
  components: { Particle, Type, Home2 },
  data() {
    return { homeLogo }
  }
})
</script>

<style scoped>
/* Typography handled globally in main.css via design tokens */
</style>
