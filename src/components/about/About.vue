<template>
  <div class="container-fluid about-section">
    <Particle />
    <div class="container">
      <!-- Bio section -->
      <div class="row justify-content-center" style="padding: 10px">
        <div class="col-md-7" style="padding-top: 30px; padding-bottom: 50px">
          <h1 style="font-size: 2.1em; padding-bottom: 20px">
            Know Who <strong class="blue">I'M</strong>
          </h1>
          <AboutCard />
        </div>
        <div class="col-md-5 about-img" style="padding-top: 30px; padding-bottom: 50px; text-align: center">
          <img src="@/assets/about.png" alt="Muneer Ahmed" class="img-fluid" style="border-radius: 12px; max-width: 340px" />
        </div>
      </div>

      <!-- Skills -->
      <h1 class="project-heading">
        Professional <strong class="blue">Skillset</strong>
      </h1>
      <TechStack />

      <!-- Tools -->
      <h1 class="project-heading">
        <strong class="blue">Tools</strong> I Use
      </h1>
      <ToolStack />

      <!-- GitHub contributions -->
      <Github />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Particle from '../Particles.vue'
import Github from './Github.vue'
import TechStack from './TechStack.vue'
import AboutCard from './AboutCard.vue'
import ToolStack from './ToolStack.vue'

export default defineComponent({
  name: 'TheAbout',
  components: { Particle, Github, TechStack, AboutCard, ToolStack }
})
</script>

<style scoped>
.blue {
  color: #6c63ff;
}
</style>
