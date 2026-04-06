<template>
  <footer class="footer">
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
            <li class="social-icons list-inline-item">
              <a href="https://github.com/muneer-ahmed-khan" target="_blank" rel="noreferrer" style="color: white" aria-label="GitHub">
                <font-awesome-icon :icon="['fab', 'github']" aria-hidden="true" />
              </a>
            </li>
            <li class="social-icons list-inline-item">
              <a href="https://www.linkedin.com/in/muneer-ahmed-a59362140/" target="_blank" rel="noreferrer" style="color: white" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true" />
              </a>
            </li>
            <li class="social-icons list-inline-item">
              <a href="https://stackoverflow.com/users/8422060/muneer-khan" target="_blank" rel="noreferrer" style="color: white" aria-label="Stack Overflow">
                <font-awesome-icon :icon="['fab', 'stack-overflow']" aria-hidden="true" />
              </a>
            </li>
            <li class="social-icons list-inline-item">
              <a href="https://medium.com/@muneerkhan31886" target="_blank" rel="noreferrer" style="color: white" aria-label="Medium">
                <font-awesome-icon :icon="['fab', 'medium-m']" aria-hidden="true" />
              </a>
            </li>
            <li class="social-icons list-inline-item">
              <router-link to="/contact" style="color: white" aria-label="Contact">
                <font-awesome-icon :icon="['fas', 'envelope']" aria-hidden="true" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TheFooter',
  setup() {
    const year = ref(new Date().getFullYear())
    return { year }
  }
})
</script>

<style scoped>
.footer-logo {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}
</style>
