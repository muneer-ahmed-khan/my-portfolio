# my-portfolio — Design System

> Source of truth for all visual decisions — colors, typography, icons, and animations.
> All tokens live in `src/assets/main.css` under `:root`.

---

## Color Tokens

### Dark Mode (default — `[data-theme="dark"]`)
```css
--color-primary:      #2dd4bf              /* Teal 400 — CTAs, highlights, links */
--color-accent:       #fbbf24              /* Amber 400 — warm accent, hover states */
--color-bg:           #040d10             /* Page background — deep dark teal-black */
--color-surface:      #0a1a20             /* Card/panel background */
--color-surface-2:    #0f2430             /* Elevated surface (nested cards, modals) */
--color-text:         #e2e8f0             /* Primary text */
--color-text-muted:   #94a3b8             /* Secondary/caption text */
--color-border:       rgba(45,212,191,.2)  /* Border — translucent teal */
--color-glow:         rgba(45,212,191,.3)  /* Box-shadow glow */
--color-scrollbar-track: #061318
--color-footer-bg:    #030c0f
```

### Light Mode (`[data-theme="light"]`)
```css
--color-primary:      #0d9488              /* Teal 600 — darker for AA contrast on white */
--color-accent:       #d97706              /* Amber 600 — darker for light mode */
--color-bg:           #d0ede8             /* Teal-mint — visible, professional, not white */
--color-surface:      #ffffff             /* White cards pop cleanly on teal bg */
--color-surface-2:    #e8f7f4
--color-text:         #0f1f22
--color-text-muted:   #4b6a6f
--color-border:       rgba(13,148,136,.18)
--color-glow:         rgba(13,148,136,.12)
--color-scrollbar-track: #b2dfdb
--color-footer-bg:    #061a1e
```

**Gradients:**
```css
/* Dark */
--section-background-color: linear-gradient(to bottom left, rgba(10,26,32,.65), rgba(4,13,16,.95))
--image-gradient:            linear-gradient(to bottom left, rgba(4,13,16,.30), rgba(4,13,16,.65))

/* Light — intentionally near-transparent so SVG background shapes remain visible */
--section-background-color: linear-gradient(to bottom left, rgba(208,237,232,.92), rgba(180,235,228,.88))
--image-gradient:            linear-gradient(to bottom left, rgba(208,237,232,.04), rgba(208,237,232,.06))
```

> **Critical rule:** The light `--image-gradient` MUST stay at ≤ 0.06 opacity.
> It renders on top of `home-bg.svg`. Using the same teal-mint color as `--color-bg` at higher opacity
> paints over the SVG shapes entirely, making the background look blank.

**Theme switching:** Navbar button toggles `data-theme` attribute on `<html>`. Defaults to system preference (`prefers-color-scheme`), persisted to `localStorage`. Anti-FOUC inline script in `index.html`.

---

## Typography Tokens

### Font Families
```css
--font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif
--font-body:    'Inter', system-ui, -apple-system, sans-serif
--font-mono:    'JetBrains Mono', 'Fira Code', 'Courier New', monospace
```

### Type Scale
```css
--text-xs:   0.75rem    /* 12px — labels, tags */
--text-sm:   0.875rem   /* 14px — captions */
--text-base: 1rem        /* 16px — body */
--text-lg:   1.125rem   /* 18px — large body */
--text-xl:   1.25rem    /* 20px — subheadings */
--text-2xl:  1.5rem     /* 24px — section subtitles */
--text-3xl:  clamp(1.75rem, 3vw, 2.25rem)  /* fluid ~28–36px */
--text-4xl:  clamp(2rem, 4vw, 2.75rem)     /* fluid ~32–44px */
--text-5xl:  clamp(2.5rem, 6vw, 4rem)      /* fluid hero headings */
```

### Font Weights
```css
--weight-light:    300
--weight-regular:  400
--weight-medium:   500
--weight-semibold: 600
--weight-bold:     700
```

### Line Heights
```css
--leading-none:    1
--leading-tight:   1.2
--leading-snug:    1.375
--leading-normal:  1.5
--leading-relaxed: 1.7
--leading-loose:   1.85
```

### Letter Spacing
```css
--tracking-tight:   -0.02em
--tracking-normal:   0em
--tracking-wide:     0.05em
--tracking-wider:    0.08em
--tracking-widest:   0.12em
```

---

## Typography Utility Classes

| Class | Usage |
|---|---|
| `.section-intro-heading` | Main section titles — `text-4xl`, bold, tight tracking |
| `.section-subheading` | Sub-section titles — `text-3xl`, semibold |
| `.section-subtitle` | Descriptive text under headings — `text-base`, muted color |
| `.social-section-heading` | Social/label headings — `text-2xl`, uppercase, widest tracking |
| `.heading` | Home hero h1 — `text-4xl` |
| `.heading-name` | Name highlight — `text-5xl` |
| `.main-name` | Applies `--color-primary` to name text |
| `.blue` | Force primary color |
| `.accent` | Force accent color |

---

## Icons

### FontAwesome 6 — UI chrome icons

**Library:** `@fortawesome/vue-fontawesome` · Registered globally as `<font-awesome-icon>` in `src/main.ts`

Packages: `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`

**Rules:**
- All decorative icons **must** have `aria-hidden="true"`. Icons inside links/buttons that already carry an `aria-label` are decorative.
- Never register icons in `library.add()` that aren't used in a template — it bloats the bundle.
- Use the `['fas', 'icon-name']` tuple syntax for solid icons when mixing prefixes; shorthand string `'icon-name'` is fine when the context is unambiguous solid.

**Icon assignments by location:**

| Location | Icon(s) | Rationale |
|---|---|---|
| Navbar — nav links | `home`, `user`, `desktop`, `briefcase`, `file-lines` | Standard navigation metaphors |
| Navbar — Blog | `pen-nib` | Writing |
| Navbar — Contact CTA | `envelope` | Email/contact |
| Navbar — Fork button | `code-branch` + `star` | GitHub fork/star action |
| Navbar — Theme toggle | `sun` / `moon` | Light/dark mode |
| Services — Custom SaaS | `rocket` | Launch / scale |
| Services — Backend APIs | `code` | Development |
| Services — Real-time Systems | `bolt` | Speed / instant updates |
| Services — Cloud & DevOps | `cloud` | Cloud infrastructure |
| Services — LLM & AI | `wand-magic-sparkles` | Magic / AI generation |
| Services — MVP | `fire` | Fast iteration / momentum |
| Services — CTA button | `paper-plane` | Send / start |
| About — Gaming hobby | `gamepad` | Gaming |
| About — Blog writing hobby | `pen-nib` | Writing |
| About — Travel hobby | `plane` | Travel |
| About — AI tools hobby | `microchip` | Technology / AI |
| Contact — Email info | `envelope` | Email |
| Contact — Location info | `location-dot` | Location pin |
| Contact — Submit button | `paper-plane` / `spinner` | Send / loading state |
| Contact — Success state | `circle-check` | Confirmation |
| Projects — GitHub button | `fab github` | GitHub brand |
| Projects — Demo button | `arrow-up-right-from-square` | External link |
| Resume — Download buttons | `arrow-down` | Download |
| Footer — Social links | `fab github/linkedin/stack-overflow/medium-m`, `fas envelope` | Brand / contact |
| 404 — Back to home | `home` | Navigation |

### Devicons — Tech/tool logos

**Source:** CDN `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons` (defined in `src/data/skills.ts`)

Used in `TechStack.vue` and `ToolStack.vue` as `<img>` tags rendered from `src/data/skills.ts` and `tools` arrays.

- `invert: true` flag applies a CSS `filter: invert(1)` for icons that are black-on-transparent (e.g. Next.js, GitHub) — needed for dark background visibility. Use only when no colored variant exists in devicons.
- When adding new tech icons, prefer `-original` or `-plain` variants; use `-wordmark` variants only if the logo without text is unrecognizable.

---

## Animations

### Existing Animations

| Name | Location | Description |
|---|---|---|
| `wave-animation` | `main.css` | Hand-wave emoji rotation loop (2.1s infinite) |
| `tsParticles` | `Particles.vue` | Full-screen floating particle background |
| Preloader fade | `PreLoader.vue` | SVG spinner → fade out on load |
| Typewriter | `home/Type.vue` | Typing effect for role titles |
| 3D Tilt | `home/Tilt.vue` | Mouse-tracking tilt on home avatar image |
| Scroll to top | `ScrollToTop.vue` | Fade-in button after scroll threshold |
| **v-reveal directive** | `src/directives/vReveal.ts` | IntersectionObserver scroll-reveal — `v-reveal="{ direction, delay, threshold }"` |
| **Hero entrance** | `animations.css` `.hero-anim-1/2/3/img` | CSS keyframe sequence for above-fold content |
| **Navbar slide-down** | `animations.css` `.nav-slide-down` | Slides nav in from top on page load |
| **Stagger reveals** | TechStack, ToolStack, Projects, Services | `v-reveal` with `delay: index * N` |

### Animation Tokens (`animations.css`)

```css
--anim-duration-fast:   0.3s
--anim-duration-base:   0.65s
--anim-duration-slow:   0.9s
--anim-easing:          cubic-bezier(0.16, 1, 0.3, 1)   /* snappy spring */
--anim-easing-smooth:   cubic-bezier(0.4, 0, 0.2, 1)    /* material */
```

### v-reveal Directive Usage

```html
<!-- Basic scroll-reveal (defaults: direction='up', delay=0, threshold=0.1) -->
<div v-reveal>...</div>

<!-- With options -->
<div v-reveal="{ direction: 'left', delay: 200 }">...</div>

<!-- Stagger in a list -->
<div v-for="(item, i) in items" v-reveal="{ direction: 'scale', delay: i * 60 }">...</div>
```

**Direction options:** `up` | `down` | `left` | `right` | `fade` | `scale`

### Animation Patterns to Follow
- Use CSS custom properties for durations/easings when adding new animations
- Prefer `transform` and `opacity` for performance (avoid animating `width`, `height`, `top`, `left`)
- Respect `prefers-reduced-motion` — `animations.css` has a blanket `@media (prefers-reduced-motion: reduce)` block that disables everything
- tsParticles config is in `Particles.vue` — edit there for particle behavior changes
- Above-fold content: use `hero-anim-*` CSS classes (keyframe, fires on load)
- Below-fold content: use `v-reveal` directive (IntersectionObserver, fires on scroll)

---

## Component Patterns

### Bootstrap Wrappers (`src/components/bootstrap/`)
Thin typed wrappers around Bootstrap 5 components. Use these instead of raw Bootstrap HTML:
- `<Container>`, `<Row>`, `<Col>` — layout
- `<Button>` — styled button
- `<Nav>`, `<Navbar>` — navigation
- `<Card>`, `<CardBody>`, `<CardTitle>`, `<CardText>`, `<CardImg>`, `<CardFooter>` — card

### Scrollbar
Custom scrollbar defined globally in `main.css`:
- Track: `#191d50`
- Thumb: `--color-primary` → hover `--color-accent`
- Width: 7px, border-radius: 12px

---

## Planned Improvements

- [ ] **Colors & Theme** — Revisit palette, consider theme switching (dark/light), ensure WCAG AA contrast
- [x] **Icons** — Audited and standardized: semantic icons per service, distinct hobby icons in About, inline SVG replaced in ProjectCard, dead brand icons purged from bundle, `aria-hidden` applied consistently, `faSpinner` bug fixed
- [x] **Animations** — `v-reveal` directive + `animations.css` system: scroll-reveal on all sections, stagger on skill/tool/project/service cards, hero entrance keyframes, navbar slide-down, micro-interactions on service cards, tech tags, contact items, footer icons
- [x] **Typography** — Mobile readability: heading padding reduced, `.type-wrapper` class controls Type component spacing at all breakpoints, section top padding reduced from 150px → 90px on mobile
- [x] **Micro-interactions** — Service card hover lift (`translateY(-8px)` + glow), tech tag shimmer, contact info item nudge, footer icon float, nav icon scale on hover
