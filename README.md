<h1 align="center">
  <img src="public/favicon.svg" width="40" alt="Logo" />
  &nbsp;Muneer Ahmed — Developer Portfolio
</h1>

<p align="center">
  A modern, responsive personal portfolio built with <strong>Vue 3</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>.
  Showcasing full-stack engineering work, services, and an interactive contact form.
</p>

<p align="center">
  <a href="https://github.com/muneer-ahmed-khan/my-portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/muneer-ahmed-khan/my-portfolio?style=flat-square&color=007bff" alt="Stars" />
  </a>
  <a href="https://github.com/muneer-ahmed-khan/my-portfolio/network/members">
    <img src="https://img.shields.io/github/forks/muneer-ahmed-khan/my-portfolio?style=flat-square&color=6c63ff" alt="Forks" />
  </a>
  <img src="https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Customisation](#customisation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## Overview

This is the source code for my personal developer portfolio — built from scratch as a production-quality Vue 3 SPA. The goal was to build something that feels fast, looks polished on every screen size, and is genuinely easy to maintain and extend.

Key design decisions:

- **Composition API + TypeScript** throughout — `<script setup lang="ts">` in every component, no Options API
- **Data-driven pages** — projects, skills, services, and social links live in `/src/data/` so content updates never touch component logic
- **Scoped + global CSS split** — component-level styles are scoped; design tokens live in `src/assets/styles/tokens.css`; section layouts are in `src/assets/styles/sections/`
- **No heavy UI framework** — Bootstrap 5 is used only for its responsive grid; all components are hand-crafted

---

## Live Demo

> **[muneer-ahmed.vercel.app](https://muneer-ahmed.vercel.app)** ← Portfolio (live on Vercel)

> **[nest-of-blogs.vercel.app](https://nest-of-blogs.vercel.app/)** ← Blog demo (linked from portfolio)

---

## Features

- Animated particle background (tsParticles) on every page
- Typewriter effect on the home hero section
- Tilt-on-hover avatar card
- Scroll-reveal animations via a custom `v-reveal` IntersectionObserver directive
- Interactive skill & tool icon grid with categories
- Project cards with tech stack tags, GitHub links, and live demo links
- Services page with a six-card offer grid and a four-step process section
- Inline PDF resume viewer with download button (vue3-pdfjs)
- Contact form powered by EmailJS — sends directly to Gmail from the browser with no backend required
- Smooth scroll-to-top on every route transition
- GitHub contribution heatmap (vue3-calendar-heatmap)
- Responsive navbar with animated hamburger toggle and active-route underline indicator
- Dark / light theme toggle with `localStorage` persistence and system-preference fallback
- Preloader screen on initial app load
- Custom scrollbar styling

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Language | TypeScript 5.5 |
| Build tool | Vite 5 |
| Routing | Vue Router 4 |
| State management | Pinia 2 |
| Styling | Bootstrap 5 grid + Custom CSS design tokens |
| Icons | Font Awesome 6 (free-solid + free-brands) |
| Particles | tsParticles / @tsparticles/vue3 |
| PDF viewer | vue3-pdfjs |
| Heatmap | vue3-calendar-heatmap |
| Contact email | @emailjs/browser 4.x |
| Testing | Vitest + @vue/test-utils |
| Linting | ESLint + eslint-plugin-vue |
| Formatting | Prettier |
| Type checking | vue-tsc |

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg               # Brand logo (gradient M mark)
│   └── favicon.ico               # Fallback favicon
├── src/
│   ├── assets/
│   │   ├── main.css              # CSS entry point — import order: tokens → base → global → sections → overrides
│   │   ├── base.css              # CSS reset, font imports, base element styles
│   │   ├── animations.css        # Scroll-reveal system, hero keyframes, micro-interactions
│   │   ├── styles/
│   │   │   ├── tokens.css        # Design tokens — colors, typography, spacing (dark + light mode)
│   │   │   ├── global.css        # Global utilities — buttons, scrollbar, badges, footer
│   │   │   ├── sections/         # Per-page layout styles
│   │   │   │   ├── home.css
│   │   │   │   ├── about.css
│   │   │   │   ├── projects.css
│   │   │   │   ├── services.css
│   │   │   │   ├── contact.css
│   │   │   │   ├── resume.css
│   │   │   │   └── not-found.css
│   │   │   └── overrides/        # Light mode + third-party component overrides
│   │   │       ├── light-mode.css
│   │   │       └── vendors.css
│   │   ├── home-bg.svg           # Home section background graphic
│   │   ├── home-main.svg         # Hero illustration
│   │   ├── avatar.svg            # Intro section avatar
│   │   ├── about.svg             # About page illustration
│   │   ├── preloader.svg         # Preloader animation graphic
│   │   ├── projects/
│   │   │   └── placeholder.png   # Project card placeholder image
│   │   └── Muneer-Ahmed-Resume.pdf
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppNavbar.vue     # Fixed top navigation with theme toggle
│   │   │   ├── AppLogo.vue       # Brand logo component (SVG monogram)
│   │   │   ├── AppFooter.vue     # Site footer with social links
│   │   │   └── AppPreLoader.vue  # Full-screen preloader on initial load
│   │   ├── home/
│   │   │   ├── HomeHero.vue      # Hero section — typewriter, particle bg, illustration
│   │   │   ├── HomeIntro.vue     # Intro section — bio, avatar tilt card, social links
│   │   │   ├── TypeWriter.vue    # Typewriter effect component
│   │   │   └── TiltCard.vue      # Mouse-tracking 3D tilt wrapper
│   │   ├── about/
│   │   │   ├── About.vue         # About page shell
│   │   │   ├── AboutCard.vue     # Bio card with experience, hobbies, quote
│   │   │   ├── TechStack.vue     # Skill icon grid by category
│   │   │   ├── ToolStack.vue     # Tools icon grid
│   │   │   └── GitHubHeatmap.vue # GitHub contribution calendar heatmap
│   │   ├── projects/
│   │   │   ├── Projects.vue      # Projects page
│   │   │   └── ProjectCard.vue   # Individual project card
│   │   ├── services/
│   │   │   └── Services.vue      # Services grid + four-step process + CTA
│   │   ├── resume/
│   │   │   └── Resume.vue        # Inline PDF viewer + download button
│   │   ├── contact/
│   │   │   └── Contact.vue       # Contact info panel + EmailJS form
│   │   ├── ui/
│   │   │   ├── Particles.vue     # tsParticles background wrapper
│   │   │   └── ScrollToTop.vue   # Scroll-to-top on route change
│   │   └── NotFound.vue          # 404 page
│   ├── data/
│   │   ├── projects.ts           # Project definitions — edit here to add projects
│   │   ├── services.ts           # Service cards and process steps
│   │   ├── skills.ts             # Skill categories with icon paths
│   │   └── social-links.ts       # Social and contact link definitions
│   ├── directives/
│   │   └── v-reveal.ts           # Custom scroll-reveal IntersectionObserver directive
│   ├── router/
│   │   └── index.ts              # Vue Router route definitions (lazy-loaded)
│   ├── stores/
│   │   └── theme.ts              # Pinia store for dark/light theme state
│   ├── types/
│   │   ├── directive.ts          # RevealOptions interface
│   │   ├── project.ts            # Project interface
│   │   ├── service.ts            # Service and ProcessStep interfaces
│   │   ├── skill.ts              # Skill and SkillCategory interfaces
│   │   └── social.ts             # SocialLink interface
│   ├── App.vue                   # Root component
│   ├── main.ts                   # App entry point — plugins, directives, FA icons
│   └── shims-vue.d.ts            # Vue module type declaration
├── docs/
│   ├── design-system.md          # Design token reference and palette rationale
│   ├── lessons-learned.md        # Build notes and architectural decisions
│   └── project-context.md        # Project background and goals
├── .env.example                  # Required environment variable template
├── index.html                    # App shell with anti-FOUC theme script and SEO meta
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 20.x
- **npm** >= 9.x (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/muneer-ahmed-khan/my-portfolio.git

# 2. Navigate into the project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Copy the environment variable template and fill in your values
cp .env.example .env

# 5. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production build |
| `npm run build-only` | Production build without type-check |
| `npm run type-check` | Run `vue-tsc` type checking |
| `npm run preview` | Preview the production build locally |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run lint` | Lint and auto-fix with ESLint |
| `npm run format` | Format source files with Prettier |

---

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `HomeHero.vue` + `HomeIntro.vue` | Hero with typewriter effect, intro, and social links |
| `/about` | `About.vue` | Bio card, tech stack grid, tools grid, GitHub heatmap |
| `/projects` | `Projects.vue` | Project cards with tech tags and links |
| `/services` | `Services.vue` | Six service cards + four-step process + CTA |
| `/resume` | `Resume.vue` | Inline PDF viewer + download button |
| `/contact` | `Contact.vue` | Contact info panel + EmailJS contact form |
| `/*` | `NotFound.vue` | 404 fallback |

---

## Customisation

All content is data-driven. You rarely need to touch component files.

### Add or edit projects

Edit `src/data/projects.ts`:

```ts
{
  id: 7,
  title: 'Your Project Name',
  description: 'Short description of what it does.',
  imgPath: yourImageImport,
  ghLink: 'https://github.com/you/repo',
  demoLink: 'https://your-demo.com',   // optional
  isBlog: false,
  techStack: ['Vue 3', 'NestJS', 'PostgreSQL']
}
```

### Add or edit skills

Edit `src/data/skills.ts` — skills are grouped into categories, each with a `name`, `icon` URL, and optional `invert` flag for icons that need colour inversion in dark mode.

### Update social links

Edit `src/data/social-links.ts` — used in both the home intro section and the footer.

### Replace the resume PDF

Drop your PDF into `src/assets/` and update the import in `src/components/resume/Resume.vue`:

```ts
import pdf from '@/assets/Your-Resume.pdf'
```

### Configure EmailJS (contact form)

The contact form uses [EmailJS](https://emailjs.com) to send emails directly from the browser with no backend required.

Copy `.env.example` to `.env` and fill in your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id     # EmailJS > Email Services
VITE_EMAILJS_TEMPLATE_ID=your_template_id   # EmailJS > Email Templates
VITE_EMAILJS_PUBLIC_KEY=your_public_key     # EmailJS > Account > General
```

Your email template should use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{reply_to}}`.

The free EmailJS tier allows 200 emails per month.

### Design tokens

All colours, type scale, and spacing are CSS custom properties defined in `src/assets/styles/tokens.css`. The dark mode palette is set on `:root`; light mode overrides are under `html[data-theme="light"]`.

```css
/* src/assets/styles/tokens.css */
:root {
  --color-primary: #2dd4bf;   /* deep ocean teal */
  --color-accent:  #fbbf24;   /* warm amber */
  --color-bg:      #040d10;   /* near-black ocean */
  /* ... */
}
```

Change these to retheme the entire site instantly.

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel auto-detects Vite and sets the build command to `npm run build` and output directory to `dist`. The included `vercel.json` configures SPA rewrites for client-side routing.

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

Add a `public/_redirects` file for client-side routing:

```
/*  /index.html  200
```

### GitHub Pages

Update `vite.config.ts` to set the base path:

```ts
export default defineConfig({
  base: '/my-portfolio/',
  // ...
})
```

Then build and push the `dist/` folder to the `gh-pages` branch.

---

## Contributing

This is a personal portfolio, but if you spot a bug or have a suggestion:

1. Fork the repository
2. Create a feature branch: `git checkout -b fix/your-fix`
3. Commit your changes: `git commit -m "fix: describe the change"`
4. Push and open a Pull Request

---

## Author

**Muneer Ahmed**
Senior Full-Stack Developer, Karachi, Pakistan

| | |
|---|---|
| GitHub | [github.com/muneer-ahmed-khan](https://github.com/muneer-ahmed-khan) |
| LinkedIn | [linkedin.com/in/muneer-ahmed-a59362140](https://www.linkedin.com/in/muneer-ahmed-a59362140/) |
| Stack Overflow | [stackoverflow.com/users/8422060](https://stackoverflow.com/users/8422060/muneer-khan) |
| Blog | [nest-of-blogs.vercel.app](https://nest-of-blogs.vercel.app/) |
| Email | muneerkhan31886@gmail.com |

---

## License

This project is open-source under the [MIT License](LICENSE).

You are welcome to use this as a reference or starting point for your own portfolio. If you do, a credit or star would be appreciated.
