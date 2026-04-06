# my-portfolio — Lessons Learned

> Retrospective on real mistakes made during development. Read before touching themes, backgrounds, or multi-layer CSS.

---

## Mistake #1 — CSS background-image layer order caused SVG to be invisible in light mode

### What happened

During the "Deep Ocean" theme migration, `home-bg.svg` was invisible on the light theme despite correct SVG colors.

### Root cause

`background-image` accepts multiple layers — the **first value renders on top**:

```css
.home-section {
  background-image: var(--image-gradient), url(./home-bg.svg);
  /*                ^^^^^^^^^^^^^^^^^^^^ this sits ON TOP of the SVG */
}
```

The light mode `--image-gradient` was set to `rgba(208,237,232,0.30) → rgba(180,235,228,0.50)` — which is nearly the same color as the page background `#d0ede8` (teal-mint). A 30–50% opacity layer of the same color as the background painted completely over the SVG shapes beneath it.

### Why it was hard to spot

- The dark mode worked fine: dark gradient (`rgba(4,13,16,0.30–0.65)`) over a dark background still lets colored shapes show through.
- In light mode, both the background color and the gradient color were teal-mint, so the effect was invisible camouflage.
- Changing the SVG shape colors (multiple rounds) had zero effect because the shapes were always covered by the gradient — not a contrast problem in the SVG at all.

### Fix applied

Reduced light mode `--image-gradient` to near-zero opacity:

```css
html[data-theme="light"] {
  --image-gradient: linear-gradient(
    to bottom left,
    rgba(208, 237, 232, 0.04),
    rgba(208, 237, 232, 0.06)
  );
}
```

### Rule for the future

> **When `background-image` has multiple layers, the first layer sits on top.**
> Never use a light-mode gradient with the same hue as the background at >10% opacity when an SVG or image sits beneath it — it will be invisible.
> Always verify each layer's effect independently in both themes before chasing SVG color issues.

---

## Mistake #2 — Light teal SVG colors vanish on a light teal background

### What happened

Initial SVG used bright teal colors (`#2dd4bf`, `#5eead4`) which are the dark-mode primary/highlight tones. On the dark `#040d10` background these read fine. On the light `#d0ede8` (teal-mint) background they had zero contrast and disappeared.

### Root cause

The light background is itself a teal tone. Shapes filled with lighter teal have insufficient contrast to be perceived.

### Fix applied

SVG was rewritten using only mid-to-dark saturation colors:
- Teal fills: `#0d9488` (Teal 600), `#0f766e` (Teal 700), `#14b8a6` (Teal 500)
- Amber fills: `#d97706` (Amber 600), `#b45309` (Amber 700)

These darker tones are visible against both `#040d10` (dark) and `#d0ede8` (light).

### Rule for the future

> **SVG decorative backgrounds must use mid-to-dark saturation colors** when the design has a light theme with a tinted (non-white) background.
> Never use the primary highlight color (`--color-primary` in light mode = `#2dd4bf`) as an SVG fill color — it will vanish on a similarly-tinted background.
> When in doubt, use colors one or two stops darker than the background hue.

---

## Mistake #3 — Assuming particle circles came from tsParticles config

### What happened

User reported colored circles visible in the home section background. Investigation went to `Particles.vue` and tsParticles config.

### Root cause

The circles were not particles — they were the old `home-bg.png` bitmap, which contained blue/teal circles in its design. tsParticles was already correctly rendering small white dots at low opacity.

### Rule for the future

> **Before editing a component, confirm which file is actually rendering the visible element.**
> Background images set in CSS (`background-image: url(...)`) are completely separate from Vue component-rendered elements. Check `main.css` background rules before assuming a Vue component is responsible.

---

## Mistake #4 — Scoped component styles silently lose to global `!important` overrides

### What happened

Global `main.css` had `.quote-card-view { color: white !important }`. In light mode, component-level color overrides had no effect because the global `!important` rule won regardless of scoped specificity.

### Fix applied

Changed the global rule to use the design token: `color: var(--color-text)` — which resolves correctly for both themes.

### Rule for the future

> **Never use `!important` with hardcoded color values in global CSS.**
> Always use design tokens (`var(--color-text)`, `var(--color-primary)`, etc.) so both themes inherit the correct value automatically.
> If you must override a scoped style globally, use a token — not a fixed value.

---

## Mistake #5 — Updating SVG/image but not both the `data-theme` and `@media` blocks in main.css

### What happened

Gradient changes applied to `html[data-theme="light"]` block but not to the `@media (prefers-color-scheme: light)` fallback block. Users whose JS hadn't set `data-theme` yet (first load) saw the old values.

### Rule for the future

> **main.css has two light mode definitions — always update both:**
> 1. `html[data-theme="light"] { ... }` — for JS-toggled theme
> 2. `@media (prefers-color-scheme: light) { html:not([data-theme="dark"]) { ... } }` — for system preference fallback
>
> Any token value changed in one block must be mirrored in the other.
