# my-portfolio — Project Context

> Developer reference for the my-portfolio project. Keep this up to date as the project evolves.

---

## What This Is

Personal developer portfolio for Muneer Ahmed Khan. A single-page Vue 3 app deployed on Vercel, showcasing projects, skills, services, resume, and contact form.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (`<script setup>` + Composition API — no Options API) |
| Language | TypeScript 5 |
| Build tool | Vite 5 |
| Routing | Vue Router 4 — named routes, lazy-loaded components |
| State | Pinia — theme store (`src/stores/theme.ts`) |
| CSS | Bootstrap 5 (CSS only) + custom design tokens |
| Icons | FontAwesome 6 (solid + brands) via `@fortawesome/vue-fontawesome` |
| Particles | tsParticles v3 via `@tsparticles/vue3` |
| Contact | EmailJS (`@emailjs/browser`) — keys in `.env` |
| Testing | Vitest + Vue Test Utils |
| Linting | ESLint + Prettier |
| Deployment | Vercel (`vercel.json` present) |

---

## Project Structure

```
src/
├── assets/
│   ├── main.css                  ← CSS entry point (import aggregator only)
│   ├── base.css                  ← CSS reset + Google Fonts
│   ├── animations.css            ← v-reveal classes + entrance keyframes
│   └── styles/                   ← Split CSS modules
│       ├── tokens.css            ← Design tokens (:root + light mode overrides)
│       ├── global.css            ← Utilities, scrollbar, buttons, footer, particles
│       ├── sections/
│       │   ├── home.css
│       │   ├── about.css
│       │   ├── projects.css
│       │   ├── services.css
│       │   ├── contact.css
│       │   └── resume.css        ← Also includes 404 styles
│       └── overrides/
│           ├── light-mode.css    ← All html[data-theme="light"] component overrides
│           └── vendors.css       ← GitHub heatmap, Bootstrap overrides
│
├── components/
│   ├── layout/                   ← App-shell components (one instance app-wide)
│   │   ├── AppNavbar.vue
│   │   ├── AppFooter.vue
│   │   ├── AppLogo.vue
│   │   └── AppPreLoader.vue
│   ├── ui/                       ← Reusable generic UI
│   │   ├── Particles.vue
│   │   └── ScrollToTop.vue
│   ├── home/
│   │   ├── HomeHero.vue          ← Hero section (was Home.vue)
│   │   ├── HomeIntro.vue         ← Intro + social links (was Home2.vue)
│   │   ├── TypeWriter.vue        ← Custom typewriter (was Type.vue)
│   │   └── TiltCard.vue          ← 3D tilt wrapper (was Tilt.vue)
│   ├── about/
│   │   ├── About.vue
│   │   ├── AboutCard.vue
│   │   ├── GithubHeatmap.vue     ← GitHub contributions (was Github.vue)
│   │   ├── TechStack.vue
│   │   └── ToolStack.vue
│   ├── projects/
│   │   ├── Projects.vue
│   │   └── ProjectCard.vue
│   ├── services/
│   │   └── Services.vue
│   ├── contact/
│   │   └── Contact.vue
│   ├── resume/
│   │   └── Resume.vue
│   └── NotFound.vue
│
├── data/                         ← All content as pure data (no hardcoding in templates)
│   ├── projects.ts
│   ├── skills.ts
│   ├── socialLinks.ts
│   └── services.ts               ← Service cards + process steps
│
├── stores/
│   └── theme.ts                  ← Pinia theme store (isDark, toggle, init)
│
├── types/                        ← Centralized TypeScript interfaces
│   ├── project.ts
│   ├── skill.ts
│   ├── social.ts
│   ├── service.ts
│   └── directive.ts              ← RevealOptions
│
├── directives/
│   └── vReveal.ts                ← IntersectionObserver scroll-reveal directive
│
├── router/
│   └── index.ts                  ← Named routes (RouteNames const) + lazy loading
│
├── App.vue
└── main.ts
```

---

## Pages / Routes

| Route | Component | RouteNames key |
|---|---|---|
| `/` | `HomeHero.vue` | `RouteNames.Home` |
| `/about` | `About.vue` | `RouteNames.About` |
| `/projects` | `Projects.vue` | `RouteNames.Projects` |
| `/services` | `Services.vue` | `RouteNames.Services` |
| `/contact` | `Contact.vue` | `RouteNames.Contact` |
| `/resume` | `Resume.vue` | `RouteNames.Resume` |
| `/*` | `NotFound.vue` | `RouteNames.NotFound` |

---

## Design System

Design tokens live in `src/assets/styles/tokens.css`. See `docs/design-system.md` for the full token reference.

**Color palette — "Deep Ocean" (dark/light dual-mode):**
- Dark bg: `#040d10` / surfaces: `#0a1a20`, `#0f2430`
- Light bg: `#d0ede8` (teal-mint) / surfaces: `#ffffff`, `#e8f7f4`
- Primary: `#2dd4bf` (Teal 400 dark) / `#0d9488` (Teal 600 light)
- Accent: `#fbbf24` (Amber 400 dark) / `#d97706` (Amber 600 light)
- Text: `#e2e8f0` dark / `#0f1f22` light; muted `#94a3b8` / `#4b6a6f`
- Theme toggle: `useThemeStore()` Pinia store + `data-theme` on `<html>` + `localStorage`

**Home section background:**
- `home-bg.svg` — themed SVG. In dark mode `home-bg.svg` is layered directly. In light mode a `::before` pseudo-element applies `filter: blur(48px)` to soften it.
- `--image-gradient` layers on top of the SVG. In light mode this must be near-transparent (≤ 0.06) — see `docs/lessons-learned.md`.

**Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)

---

## Key Patterns

- **`<script setup lang="ts">` everywhere**: All components use the Composition API `<script setup>` syntax. No `defineComponent()`, no Options API.
- **Data-driven content**: All content lives in `src/data/`. Templates consume arrays — no hardcoding.
- **Pinia for shared state**: Theme (dark/light) is managed in `src/stores/theme.ts`. Use `useThemeStore()` to read `isDark` or call `toggle()`.
- **Named routes**: Use `RouteNames` const from `src/router/index.ts` for all `router-link` and `router.push()` calls.
- **Centralized types**: All TypeScript interfaces live in `src/types/`. Import from there — do not define interfaces inside data files or components.
- **CSS architecture**: Tokens in `styles/tokens.css` → global utilities in `styles/global.css` → per-section files → overrides. Only `main.css` is imported in `main.ts`.
- **Env vars**: EmailJS keys are in `.env` as `VITE_EMAILJS_*`. Add to Vercel env dashboard for deployment.
- **`v-reveal` directive**: Scroll-reveal via `IntersectionObserver`. `RevealOptions` in `src/types/directive.ts`.

---

## Planned Improvements

1. **Colors & Theme** — ✅ Done — "Deep Ocean" teal/amber palette, dark+light modes, navbar toggle
2. **Icons** — ✅ Done — Standardized FA6 icon usage; `faStar` bug fixed
3. **Mobile Responsiveness** — ✅ Done — All section padding, typewriter, resume, GitHub heatmap
4. **Animations** — ✅ Done — `v-reveal` directive, entrance keyframes, stagger, micro-interactions
5. **Refactor** — ✅ Done — `<script setup>` throughout, Pinia theme store, named lazy routes, types centralized, CSS split, folder structure organized
