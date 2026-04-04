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

**Color palette summary:**
- Background: `#0c0513` (deep dark purple-black)
- Surface: `#181a27` / `#1e2235`
- Primary: `#007bff` (blue)
- Accent: `#6c63ff` (purple)
- Text: `#e2e8f0` / muted `#94a3b8`

**Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)

---

## Key Patterns

- **Bootstrap wrappers**: `src/components/bootstrap/` wraps Bootstrap components as typed Vue components. Prefer these over raw Bootstrap HTML.
- **Data-driven content**: Projects, skills, and social links are pure data files in `src/data/`. No hardcoding in templates.
- **Scoped styles**: Component-specific styles use `<style scoped>`. Global/layout styles go in `main.css`.
- **Design tokens**: All colors, font sizes, weights, and spacing use CSS custom properties. Never hardcode values.

---

## Planned Improvements

1. **Colors & Theme** — Refine or replace the color palette, possibly add light/dark mode toggle
2. **Icons** — Audit and upgrade icon usage (FontAwesome → alternatives, or expand usage)
3. **Animations** — Add/improve micro-interactions, scroll animations, transitions
