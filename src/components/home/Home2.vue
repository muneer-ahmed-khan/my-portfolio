<template>
  <section class="home-about-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-8 home-about-description">
          <h1 style="font-size: 2.6em">
            LET ME <span class="azure">INTRODUCE</span> MYSELF
          </h1>
          <p class="home-about-body">
            I've been doing full-stack development for <b class="azure">6+</b> years. I've worked
            on web apps, SaaS products and backend systems for clients from different countries,
            from AI chatbot platforms in Germany to styling apps in the UAE and real estate tools
            used across the US and Canada.
            <br /><br />
            On the frontend I mostly use
            <i><b class="azure">Vue 3, Nuxt, React and Next.js</b></i>. On the backend it's usually
            <i><b class="azure">Node.js, NestJS, Django or FastAPI</b></i>, depending on what
            fits. For cloud I've worked with both <b class="azure">AWS and Azure</b>. I also work
            on Go (Golang) when projects need it, handling it myself with Claude Code and AI dev
            tools, with a Go developer on the team as backup.
            <br /><br />
            I also work with <b class="azure">AI tools</b> in actual production projects, things
            like LLM integrations, semantic search and smart features using
            <i><b class="azure">Claude, Cursor and GitHub Copilot</b></i>. It makes a real
            difference in delivery speed and overall quality.
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
            Available for freelance projects,
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
                :target="link.url.startsWith('http') ? '_blank' : '_self'"
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
