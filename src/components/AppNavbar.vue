<template>
  <nav :class="['portfolio-nav', 'nav-slide-down', navColour ? 'scrolled' : '']">
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
          <font-awesome-icon :icon="link.icon" class="nav-link-icon" aria-hidden="true" />
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
          <font-awesome-icon icon="pen-nib" class="nav-link-icon" aria-hidden="true" />
          <span>Blog</span>
        </a>

        <!-- Contact CTA -->
        <router-link to="/contact" class="nav-link-item nav-link-cta" @click="closeNavbar">
          <font-awesome-icon icon="envelope" class="nav-link-icon" aria-hidden="true" />
          <span>Contact</span>
        </router-link>

        <!-- GitHub fork button -->
        <a
          href="https://github.com/muneer-ahmed-khan/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-fork-btn"
        >
          <font-awesome-icon icon="code-branch" aria-hidden="true" />
          <font-awesome-icon icon="star" style="margin-left: 2px" aria-hidden="true" />
        </a>

        <!-- Theme toggle -->
        <button class="nav-theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" aria-hidden="true" />
        </button>
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
    const isDark = ref(true)

    const navLinks = [
      { to: '/', label: 'Home', icon: 'home', exact: true },
      { to: '/about', label: 'About', icon: 'user', exact: false },
      { to: '/projects', label: 'Projects', icon: 'desktop', exact: false },
      { to: '/services', label: 'Services', icon: 'briefcase', exact: false },
      { to: '/resume', label: 'Resume', icon: 'file-lines', exact: false }
    ]

    const applyTheme = (dark: boolean) => {
      const theme = dark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
      isDark.value = dark
    }

    const toggleTheme = () => {
      applyTheme(!isDark.value)
    }

    const scrollHandler = () => {
      navColour.value = window.scrollY >= 20
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeNavbar = () => {
      menuOpen.value = false
    }

    onMounted(() => {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const dark = saved ? saved === 'dark' : prefersDark
      applyTheme(dark)
      window.addEventListener('scroll', scrollHandler, { passive: true })
    })
    onUnmounted(() => window.removeEventListener('scroll', scrollHandler))

    return { navColour, menuOpen, navLinks, toggleMenu, closeNavbar, isDark, toggleTheme }
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
  background: rgba(4, 13, 16, 0.92);
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
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-normal);
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  position: relative;
}

.nav-link-item:hover {
  color: var(--color-text);
  background: rgba(45, 212, 191, 0.08);
}

/* Active state from Vue Router */
.nav-link-item.router-link-exact-active,
.nav-link-item.router-link-active:not([href="/"]) {
  color: var(--color-text);
  background: rgba(45, 212, 191, 0.1);
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
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

.nav-link-icon {
  font-size: var(--text-xs);
  opacity: 0.8;
}

/* Contact CTA styling */
.nav-link-cta {
  color: var(--color-primary);
}

.nav-link-cta:hover {
  color: var(--color-text);
  background: rgba(45, 212, 191, 0.1);
}

/* ---- Fork/star button ---- */
.nav-fork-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  margin-left: 8px;
  border-radius: 8px;
  background: var(--color-primary);
  color: #fff;
  font-size: var(--text-sm);
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.nav-fork-btn:hover {
  background: var(--color-accent);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px var(--color-glow);
}

/* ---- Theme toggle ---- */
.nav-theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin-left: 6px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.nav-theme-toggle:hover {
  background: rgba(45, 212, 191, 0.1);
  border-color: var(--color-primary);
  color: var(--color-primary);
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
  background: rgba(45, 212, 191, 0.08);
}

.toggler-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
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
    background: rgba(4, 13, 16, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--color-border);
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
    background: rgba(45, 212, 191, 0.12);
    border-left: 3px solid var(--color-primary);
  }

  .nav-fork-btn {
    margin-left: 0;
    margin-top: 8px;
    justify-content: center;
    padding: 10px 14px;
  }
}
</style>
