<template>
  <section class="home-about-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-8 home-about-description">
          <h1 style="font-size: 2.6em">
            LET ME <span class="azure">INTRODUCE</span> MYSELF
          </h1>
          <p class="home-about-body">
            I've spent the past <b class="azure">5+ years</b> building full-stack web applications
            and SaaS products from the ground up — from polished frontends to distributed backend
            systems that hold up under real-world traffic.
            <br /><br />
            I'm fluent across the stack:
            <i><b class="azure">Vue 3, Nuxt, React, Next.js</b></i> on the frontend;
            <i><b class="azure">Node.js, NestJS, Go, FastAPI</b></i> on the backend; and cloud
            infrastructure on <b class="azure">AWS and Azure</b> that scales as you grow.
            <br /><br />
            Lately I've been integrating <b class="azure">AI-powered workflows</b> into production
            apps — LLM pipelines, semantic search, real-time features — using tools like
            <i><b class="azure">Claude, Cursor, and GitHub Copilot</b></i> to ship faster without
            cutting corners on quality.
          </p>
        </div>
        <div class="col-md-4 myAvtar">
          <Tilt>
            <img
              src="@/assets/avatar.png"
              class="img-fluid"
              alt="Muneer Ahmed"
              style="border-radius: 50%; max-width: 240px"
            />
          </Tilt>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Available for freelance projects —
            <span class="azure">let's build something together</span>
          </p>
          <div class="availability-badge" style="margin: 0 auto 20px; width: fit-content">
            <span class="availability-dot"></span>
            Available for new projects
          </div>
          <ul class="home-about-social-links">
            <li v-for="link in socialLinks" :key="link.name" class="social-icons">
              <a
                :href="link.url"
                :target="link.url.startsWith('mailto') ? '_self' : '_blank'"
                rel="noreferrer"
                class="icon-colour home-social-icons"
                :aria-label="link.name"
              >
                <font-awesome-icon :icon="link.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tilt from './Tilt.vue'
import { socialLinks } from '@/data/socialLinks'

export default defineComponent({
  name: 'TheHome2',
  components: { Tilt },
  setup() {
    return { socialLinks }
  }
})
</script>

<style scoped>
.azure {
  color: #007bff;
}
</style>
