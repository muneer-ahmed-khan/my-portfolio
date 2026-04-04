# my-portfolio — Project Context

> Developer reference for the my-portfolio project. Keep this up to date as the project evolves.

---

## What This Is

Personal developer portfolio for Muneer Ahmed Khan. A single-page Vue 3 app deployed on Vercel, showcasing projects, skills, services, resume, and contact form.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Language | TypeScript |
| Build tool | Vite 5 |
| Routing | Vue Router 4 (hash-less history mode) |
| State | Pinia |
| CSS | Bootstrap 5 + custom design tokens (`src/assets/main.css`) |
| Icons | FontAwesome 6 (solid + brands) via `@fortawesome/vue-fontawesome` |
| Particles | tsParticles via `@tsparticles/vue3` |
| Contact | EmailJS (`@emailjs/browser`) |
| Testing | Vitest + Vue Test Utils |
| Linting | ESLint + Prettier |
| Deployment | Vercel (`vercel.json` present) |

---

## Project Structure

```
src/
├── assets/
│   ├── main.css          ← Global styles + design tokens (:root CSS vars)
│   ├── base.css          ← CSS reset / base
│   └── projects/         ← Project screenshot images
├── components/
│   ├── about/            ← About, AboutCard, Github heatmap, TechStack, ToolStack
│   ├── bootstrap/        ← Thin wrapper components: Button, Col, Container, Nav, Navbar, Row, Card*
│   ├── contact/          ← Contact form (EmailJS)
│   ├── home/             ← Home, Home2, Tilt, Type (typewriter)
│   ├── projects/         ← Projects list, ProjectCard
│   ├── resume/           ← Resume PDF viewer
│   ├── services/         ← Services section
│   ├── AppLogo.vue
│   ├── AppNavbar.vue
│   ├── Footer.vue
│   ├── NotFound.vue
│   ├── Particles.vue     ← tsParticles background
│   ├── PreLoader.vue     ← Initial loading screen
│   └── ScrollToTop.vue
├── data/
│   ├── projects.ts       ← Project list (id, title, description, imgPath, ghLink, techStack)
│   ├── skills.ts         ← Skill categories + tools (devicons CDN URLs)
│   └── socialLinks.ts    ← Social media links
├── router/index.ts       ← Routes: /, /about, /projects, /services, /contact, /resume, 404
└── types/                ← Shared TypeScript interfaces
```

---

## Pages / Routes

| Route | Component | Purpose |
|---|---|---|
| `/` | `Home.vue` + `Home2.vue` | Hero section + intro |
| `/about` | `About.vue` | Bio, tech stack, GitHub heatmap |
| `/projects` | `Projects.vue` | Project cards grid |
| `/services` | `Services.vue` | Services offered |
| `/contact` | `Contact.vue` | EmailJS contact form |
| `/resume` | `Resume.vue` | Embedded PDF resume |
| `/*` | `NotFound.vue` | 404 fallback |

---

## Design System

Design tokens live in `src/assets/main.css` under `:root`. See `docs/design-system.md` for the full token reference.

**Color palette — "Deep Ocean" (dark/light dual-mode):**
- Dark bg: `#040d10` / surfaces: `#0a1a20`, `#0f2430`
- Light bg: `#d0ede8` (teal-mint) / surfaces: `#ffffff`, `#e8f7f4`
- Primary: `#2dd4bf` (Teal 400 dark) / `#0d9488` (Teal 600 light)
- Accent: `#fbbf24` (Amber 400 dark) / `#d97706` (Amber 600 light)
- Text: `#e2e8f0` dark / `#0f1f22` light; muted `#94a3b8` / `#4b6a6f`
- Theme toggle: navbar button + `data-theme` on `<html>` + `localStorage`

**Home section background:**
- `home-bg.svg` — themed SVG with dark teal (`#0d9488`, `#0f766e`) and amber (`#d97706`, `#b45309`) blobs and ring outlines. Works on both dark and light backgrounds by using mid-to-dark saturation colors only (never light teal like `#2dd4bf` or `#5eead4` which vanish on the light bg).
- `--image-gradient` layers on top of the SVG. In light mode this must be near-transparent (≤ 0.06) — see design-system.md for the critical rule.

**Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)

---

## Key Patterns

- **Bootstrap wrappers**: `src/components/bootstrap/` wraps Bootstrap components as typed Vue components. Prefer these over raw Bootstrap HTML.
- **Data-driven content**: Projects, skills, and social links are pure data files in `src/data/`. No hardcoding in templates.
- **Scoped styles**: Component-specific styles use `<style scoped>`. Global/layout styles go in `main.css`.
- **Design tokens**: All colors, font sizes, weights, and spacing use CSS custom properties. Never hardcode values.

---

## Planned Improvements

1. **Colors & Theme** — ✅ Done — "Deep Ocean" teal/amber palette, dark+light modes, navbar toggle
2. **Icons** — Audit and upgrade icon usage (FontAwesome → alternatives, or expand usage)
3. **Animations** — Add/improve micro-interactions, scroll animations, transitions
