<template>
  <nav :class="['portfolio-nav', navColour ? 'scrolled' : '']">
    <div class="nav-container">
      <!-- Brand -->
      <router-link to="/" class="nav-brand" @click="closeNavbar">
        <AppLogo />
      </router-link>

      <!-- Mobile toggler -->
      <button
        class="nav-toggler"
        :class="{ open: menuOpen }"
        type="button"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="toggler-line"></span>
        <span class="toggler-line"></span>
        <span class="toggler-line"></span>
      </button>

      <!-- Nav links -->
      <div class="nav-menu" :class="{ 'nav-menu--open': menuOpen }">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link-item"
          @click="closeNavbar"
          :exact="link.exact"
        >
          <font-awesome-icon :icon="link.icon" class="nav-link-icon" />
          <span>{{ link.label }}</span>
        </router-link>

        <!-- External blog link -->
        <a
          href="https://nest-of-blogs.vercel.app/"
          target="_blank"
          rel="noreferrer"
          class="nav-link-item"
          @click="closeNavbar"
        >
          <font-awesome-icon icon="pen-nib" class="nav-link-icon" />
          <span>Blog</span>
        </a>

        <!-- Contact CTA -->
        <router-link to="/contact" class="nav-link-item nav-link-cta" @click="closeNavbar">
          <font-awesome-icon icon="envelope" class="nav-link-icon" />
          <span>Contact</span>
        </router-link>

        <!-- GitHub fork button -->
        <a
          href="https://github.com/muneer-ahmed-khan/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-fork-btn"
        >
          <font-awesome-icon icon="code-branch" />
          <font-awesome-icon icon="star" style="margin-left: 2px" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import AppLogo from '@/components/AppLogo.vue'

export default defineComponent({
  name: 'AppNavBar',
  components: { AppLogo },
  setup() {
    const navColour = ref(false)
    const menuOpen = ref(false)

    const navLinks = [
      { to: '/', label: 'Home', icon: 'home', exact: true },
      { to: '/about', label: 'About', icon: 'user', exact: false },
      { to: '/projects', label: 'Projects', icon: 'desktop', exact: false },
      { to: '/services', label: 'Services', icon: 'briefcase', exact: false },
      { to: '/resume', label: 'Resume', icon: 'file-lines', exact: false }
    ]

    const scrollHandler = () => {
      navColour.value = window.scrollY >= 20
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeNavbar = () => {
      menuOpen.value = false
    }

    onMounted(() => window.addEventListener('scroll', scrollHandler, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', scrollHandler))

    return { navColour, menuOpen, navLinks, toggleMenu, closeNavbar }
  }
})
</script>

<style scoped>
/* ---- Base nav ---- */
.portfolio-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
  padding: 0.6rem 0;
}

.portfolio-nav.scrolled {
  background: rgba(18, 16, 30, 0.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
  padding: 0.35rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* ---- Brand ---- */
.nav-brand {
  text-decoration: none;
  flex-shrink: 0;
}

/* ---- Menu ---- */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex: 1;
  justify-content: flex-end;
}

/* ---- Nav links ---- */
.nav-link-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-normal);
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  position: relative;
}

.nav-link-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.07);
}

/* Active state from Vue Router */
.nav-link-item.router-link-exact-active,
.nav-link-item.router-link-active:not([href="/"]) {
  color: #ffffff;
  background: rgba(0, 123, 255, 0.12);
}

.nav-link-item.router-link-exact-active::after,
.nav-link-item.router-link-active:not([href="/"])::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 2.5px;
  border-radius: 4px;
  background: linear-gradient(90deg, #007bff, #6c63ff);
}

.nav-link-icon {
  font-size: var(--text-xs);
  opacity: 0.8;
}

/* Contact CTA styling */
.nav-link-cta {
  color: #93c5fd;
}

.nav-link-cta:hover {
  color: #007bff;
  background: rgba(0, 123, 255, 0.1);
}

/* ---- Fork/star button ---- */
.nav-fork-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  margin-left: 8px;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-size: var(--text-sm);
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-fork-btn:hover {
  background: #6c63ff;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(0, 123, 255, 0.4);
}

/* ---- Mobile toggler ---- */
.nav-toggler {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 5px;
  padding: 0;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.nav-toggler:hover {
  background: rgba(255, 255, 255, 0.08);
}

.toggler-line {
  display: block;
  width: 22px;
  height: 2px;
  background: #007bff;
  border-radius: 4px;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
}

.nav-toggler.open .toggler-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-toggler.open .toggler-line:nth-child(2) {
  opacity: 0;
  width: 0;
}

.nav-toggler.open .toggler-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .nav-toggler {
    display: flex;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: rgba(14, 12, 28, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    padding: 12px 16px 20px;
    gap: 4px;
  }

  .nav-menu--open {
    display: flex;
  }

  .nav-link-item,
  .nav-link-cta {
    padding: 11px 14px;
    font-size: var(--text-base);
    border-radius: 8px;
  }

  .nav-link-item.router-link-exact-active::after,
  .nav-link-item.router-link-active:not([href="/"])::after {
    display: none;
  }

  .nav-link-item.router-link-exact-active,
  .nav-link-item.router-link-active:not([href="/"]) {
    background: rgba(0, 123, 255, 0.15);
    border-left: 3px solid #007bff;
  }

  .nav-fork-btn {
    margin-left: 0;
    margin-top: 8px;
    justify-content: center;
    padding: 10px 14px;
  }
}
</style>
