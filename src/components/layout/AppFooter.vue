<template>
  <footer class="footer" v-reveal="{ direction: 'up', threshold: 0.05 }">
    <div class="container-fluid">
      <div class="row text-center py-2">
        <div class="col-md-4 footer-copywright">
          <h3>Designed and Developed by Muneer Ahmed</h3>
        </div>
        <div class="col-md-4 footer-copywright">
          <h3 style="display: flex; align-items: center; justify-content: center; gap: 6px">
            Copyright © {{ year }}
            <img src="/favicon.svg" alt="Muneer Ahmed logo" class="footer-logo" />
          </h3>
        </div>
        <div class="col-md-4 footer-body">
          <ul class="footer-icons list-inline mb-0">
            <li
              v-for="link in socialLinks"
              :key="link.name"
              class="social-icons list-inline-item"
            >
              <a
                :href="link.url"
                :target="link.url.startsWith('http') ? '_blank' : '_self'"
                rel="noreferrer"
                class="footer-social-link"
                :aria-label="link.name"
              >
                <font-awesome-icon :icon="link.icon" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { socialLinks } from '@/data/social-links'

const year = ref(new Date().getFullYear())
</script>

<style scoped>
.footer-logo {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.footer-social-link {
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.footer-social-link:hover {
  color: var(--color-primary);
}
</style>
