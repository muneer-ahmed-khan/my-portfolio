# Contributing

This is a personal portfolio — I'm not actively looking for feature contributions, but bug fixes and accessibility improvements are very welcome.

## Before you start

- Open an issue first for anything larger than a typo fix, so we can agree on scope before you invest time coding.
- One pull request per concern — don't bundle unrelated changes.

## Setup

```bash
git clone https://github.com/muneer-ahmed-khan/my-portfolio.git
cd my-portfolio
npm install
cp .env.example .env   # EmailJS credentials not required for local dev
npm run dev
```

## Branch naming

```
fix/short-description
feat/short-description
docs/short-description
```

Base your branch off `master`.

## Commit style

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
fix: correct mobile nav z-index
feat: add dark mode transition animation
docs: update README project structure
```

## Before opening a PR

All three must pass:

```bash
npm run lint
npm run type-check
npm run build
```

Test your change in both **dark and light mode**, and on a **narrow viewport** (< 768px).

## Pull request

Use the PR template. Add screenshots for any visual change — before and after makes the review much faster.

All PRs target `master` and require one approval before merging.

## Code style

- `<script setup lang="ts">` only — no Options API
- Keep content in `/src/data/` — don't hardcode strings in component templates
- CSS changes go in the appropriate section file under `src/assets/styles/sections/`
- Design token changes go in `src/assets/styles/tokens.css`
- No new `!important` declarations unless overriding a Bootstrap base style
