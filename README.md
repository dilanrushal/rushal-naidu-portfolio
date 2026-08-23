# Rushal Naidu — Portfolio

Personal portfolio site. Built from scratch with React 19, TypeScript, and Vite.
No UI framework, no CSS framework — hand-written design system.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build     # type-checks, then builds to dist/
npm run preview   # preview the production build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

Publishes `dist/` to the `gh-pages` branch. The site is served from
`https://dilanrushal.github.io/rushal-naidu-portfolio/` — this is set via `base` in
`vite.config.ts` and `homepage` in `package.json`. Change both if the repo
name or host changes.

## Editing content

All copy lives in `src/data/content.ts` — profile, stack layers, experience,
education, projects, and services. Edit that one file to update the site;
no component changes needed.

## Structure

```
src/
  data/content.ts        all site copy in one place
  styles/global.css      design tokens + component styles
  components/
    Nav.tsx              fixed header, mobile menu
    Hero.tsx             hero + layered stack signature
    Sections.tsx         stack, work, projects, services, contact, footer
    Reveal.tsx           scroll-reveal wrapper (IntersectionObserver)
  App.tsx
  main.tsx
```
