# my-portfolio — Design System

> Source of truth for all visual decisions — colors, typography, icons, and animations.
> All tokens live in `src/assets/main.css` under `:root`.

---

## Color Tokens

```css
--color-primary:      #007bff              /* Blue — CTAs, highlights, links */
--color-accent:       #6c63ff              /* Purple — secondary highlights, hover states */
--color-bg:           #0c0513             /* Page background — deep dark purple-black */
--color-surface:      #181a27             /* Card/panel background */
--color-surface-2:    #1e2235             /* Elevated surface (nested cards, modals) */
--color-text:         #e2e8f0             /* Primary text */
--color-text-muted:   #94a3b8             /* Secondary/caption text */
--color-border:       rgba(108,99,255,.25) /* Border — translucent accent */
--color-glow:         rgba(0,123,255,.35)  /* Box-shadow glow */
```

**Gradients:**
```css
--section-background-color: linear-gradient(to bottom left, rgba(17,16,16,.582), rgba(12,8,24,.904))
--image-gradient:            linear-gradient(to bottom left, rgba(17,16,16,.678), rgba(12,10,22,.863))
```

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

**Library:** FontAwesome 6 via `@fortawesome/vue-fontawesome`

Packages installed:
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/free-brands-svg-icons`

**Skill icons:** Devicons via CDN (`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons`)
- Used in `src/data/skills.ts` as SVG URLs
- Some icons use `invert: true` flag (e.g. Next.js, GitHub) for dark background visibility

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

### Animation Patterns to Follow
- Use CSS custom properties for durations/easings when adding new animations
- Prefer `transform` and `opacity` for performance (avoid animating `width`, `height`, `top`, `left`)
- Respect `prefers-reduced-motion` — wrap decorative animations in the media query
- tsParticles config is in `Particles.vue` — edit there for particle behavior changes

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
- [ ] **Icons** — Audit FA icon usage across all sections, consider icon animation on hover
- [ ] **Animations** — Scroll-reveal on section entry, stagger effects on skill cards, hero entrance animation
- [ ] **Typography** — Fine-tune fluid scale, improve readability on mobile
- [ ] **Micro-interactions** — Button hover states, card hover lifts, link underline animations
