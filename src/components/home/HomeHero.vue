<template>
  <section>
    <div class="container-fluid home-section" id="home">
      <Particles />
      <div class="container home-content">
        <div class="row align-items-center">
          <div class="col-md-7 home-header">
            <h1 class="heading hero-anim-1" style="padding-bottom: 15px">
              Good day
              <span class="wave" role="img" aria-label="waving hand">👋🏻</span>
            </h1>

            <h1 class="heading-name hero-anim-2">
              I'M <strong class="main-name"> Muneer Ahmed</strong>
            </h1>

            <div class="type-wrapper hero-anim-3">
              <TypeWriter />
            </div>
          </div>

          <div class="col-md-5 hero-anim-img" style="padding-bottom: 20px; text-align: center">
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
    <HomeIntro />
  </section>
</template>

<script setup lang="ts">
import Particles from '@/components/ui/Particles.vue'
import TypeWriter from './TypeWriter.vue'
import HomeIntro from './HomeIntro.vue'
import homeLogo from '@/assets/home-main.svg'
</script>

<style scoped>
/* Typography handled globally in main.css via design tokens */
</style>
