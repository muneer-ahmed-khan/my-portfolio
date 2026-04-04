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

- **Composition API + TypeScript** throughout — no Options API shortcuts
- **Data-driven pages** — projects, skills, and social links live in `/src/data/` so content updates never touch component logic
- **Scoped + global CSS split** — component-level styles are scoped; design tokens and section layouts live in `main.css`
- **No heavy UI framework** — Bootstrap 5 is used only for grid and utility classes; all components are hand-crafted

---

## Live Demo

> **[muneer-ahmed.vercel.app](https://muneer-ahmed.vercel.app)** ← Portfolio (live on Vercel)

> **[nest-of-blogs.vercel.app](https://nest-of-blogs.vercel.app/)** ← Blog demo (linked from portfolio)

---

## Features

- Animated particle background (tsParticles) on every page
- Typewriter effect on the home hero section
- Tilt-on-hover avatar card
- Interactive skill & tool grid with icon categories
- Project cards with tech stack tags, GitHub links, and live demo links
- Services page with a six-card offer grid and a four-step process section
- Inline PDF resume viewer with download button (vue3-pdfjs)
- Contact form powered by EmailJS — sends directly to Gmail from the browser with no backend required
- Smooth scroll-to-top on every route transition
- GitHub contribution heatmap (vue3-calendar-heatmap)
- Responsive navbar with animated hamburger toggle and active-route underline indicator
- Preloader screen on initial app load
- Custom scrollbar styling

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 3 (Composition API) |
| Language | TypeScript 5.5 |
| Build tool | Vite 5 |
| Routing | Vue Router 4 |
| State management | Pinia 2 |
| Styling | Bootstrap 5 + Custom CSS (design tokens) |
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
│   └── favicon.svg               # Personal logo (gradient M)
├── src/
│   ├── assets/
│   │   ├── main.css              # Global styles & design tokens
│   │   ├── base.css              # CSS reset / base
│   │   ├── home-bg.png           # Home section background
│   │   ├── home-main.png         # Hero illustration
│   │   ├── avatar.png            # About page avatar
│   │   ├── about.png             # About section image
│   │   ├── preloader.svg         # Preloader animation
│   │   ├── logo.svg              # Vue logo (dev reference)
│   │   └── Muneer-Ahmed-Resume.pdf
│   ├── components/
│   │   ├── AppNavbar.vue         # Fixed top navigation bar
│   │   ├── AppLogo.vue           # Brand logo component
│   │   ├── Footer.vue            # Site footer
│   │   ├── Particles.vue         # tsParticles background
│   │   ├── PreLoader.vue         # Initial load screen
│   │   ├── ScrollToTop.vue       # Scroll reset on route change
│   │   ├── NotFound.vue          # 404 page
│   │   ├── home/
│   │   │   ├── Home.vue          # Hero section
│   │   │   ├── Home2.vue         # Intro + social links section
│   │   │   ├── Type.vue          # Typewriter component
│   │   │   └── Tilt.vue          # Mouse-tilt wrapper
│   │   ├── about/
│   │   │   ├── About.vue         # About page shell
│   │   │   ├── AboutCard.vue     # Bio card
│   │   │   ├── TechStack.vue     # Skill icon grid
│   │   │   ├── ToolStack.vue     # Tools icon grid
│   │   │   └── Github.vue        # GitHub contribution heatmap
│   │   ├── projects/
│   │   │   ├── Projects.vue      # Projects page
│   │   │   └── ProjectCard.vue   # Individual project card
│   │   ├── services/
│   │   │   └── Services.vue      # Services + process section
│   │   ├── resume/
│   │   │   └── Resume.vue        # PDF viewer page
│   │   ├── contact/
│   │   │   └── Contact.vue       # Contact info + form
│   │   └── bootstrap/            # Thin Bootstrap wrapper components
│   ├── data/
│   │   ├── projects.ts           # Project definitions (edit here to add projects)
│   │   ├── skills.ts             # Skill categories + icon paths
│   │   └── socialLinks.ts        # Social/contact link definitions
│   ├── router/
│   │   └── index.ts              # Vue Router route definitions
│   ├── App.vue                   # Root component
│   └── main.ts                   # App entry point
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

# 4. Start the development server
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
| `/` | `Home.vue` + `Home2.vue` | Hero with typewriter, intro, and social links |
| `/about` | `About.vue` | Bio, tech stack grid, tools grid, GitHub heatmap |
| `/projects` | `Projects.vue` | Project cards with tags and links |
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

Edit `src/data/skills.ts` — skills are grouped into categories, each with a name, icon path, and optional `invert` flag for dark icons.

### Update social links

Edit `src/data/socialLinks.ts` — used in both the home intro section and the contact page.

### Replace the resume PDF

Drop your PDF into `src/assets/` and update the import in `src/components/resume/Resume.vue`:

```ts
import pdf from '@/assets/Your-Resume.pdf'
```

### Configure EmailJS (contact form)

The contact form uses [EmailJS](https://emailjs.com) to send emails directly from the browser. To set it up with your own account, open `src/components/contact/Contact.vue` and replace the three constants near the top of the `<script>` block:

```ts
const EMAILJS_SERVICE_ID  = 'your_service_id'   // EmailJS > Email Services
const EMAILJS_TEMPLATE_ID = 'your_template_id'  // EmailJS > Email Templates
const EMAILJS_PUBLIC_KEY  = 'your_public_key'   // EmailJS > Account > General
```

Your email template should use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{reply_to}}`.

The free EmailJS tier allows 200 emails per month with no backend required.

### Design tokens

All colours, borders, and backgrounds are defined as CSS custom properties at the top of `src/assets/main.css`:

```css
:root {
  --color-primary: #007bff;
  --color-accent:  #6c63ff;
  --color-bg:      #0c0513;
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

Vercel auto-detects Vite and sets the build command to `npm run build` and output directory to `dist`.

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
