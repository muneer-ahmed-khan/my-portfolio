<template>
  <div class="container-fluid about-section">
    <Particles />
    <div class="container">
      <!-- Bio section -->
      <div class="row justify-content-center" style="padding: 10px">
        <div class="col-md-7" style="padding-top: 30px; padding-bottom: 50px" v-reveal="{ direction: 'left' }">
          <h1 class="about-bio-heading">
            Know Who <strong class="blue">I Am</strong>
          </h1>
          <AboutCard />
        </div>
        <div class="col-md-5 about-img" style="padding-top: 30px; padding-bottom: 50px; text-align: center" v-reveal="{ direction: 'right', delay: 150 }">
          <img src="@/assets/about.svg" alt="Muneer Ahmed" class="img-fluid" style="border-radius: 12px; max-width: 340px" />
        </div>
      </div>

      <!-- Skills -->
      <h1 class="project-heading" v-reveal="{ direction: 'up' }">
        Professional <strong class="blue">Skillset</strong>
      </h1>
      <TechStack />

      <!-- Tools -->
      <h1 class="project-heading" v-reveal="{ direction: 'up' }">
        <strong class="blue">Tools</strong> I Use
      </h1>
      <ToolStack />

      <!-- GitHub contributions -->
      <GithubHeatmap />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AboutPage' })
import Particles from '@/components/ui/Particles.vue'
import GithubHeatmap from './GitHubHeatmap.vue'
import TechStack from './TechStack.vue'
import AboutCard from './AboutCard.vue'
import ToolStack from './ToolStack.vue'
</script>

<style scoped>
.blue {
  color: var(--color-primary);
}

.about-bio-heading {
  font-size: var(--text-4xl);
  padding-bottom: 20px;
}
</style>
