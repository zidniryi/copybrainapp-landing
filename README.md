# CopyBrain Landing

Marketing/landing site for CopyBrain, built with Next.js (App Router), Tailwind CSS, and Radix UI primitives.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com) / [shadcn](https://ui.shadcn.com) components
- [Framer Motion](https://www.framer.com/motion/) for animation
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — build for production (Turbopack)
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  app/                Route pages (home, docs, download, privacy, terms, accessibility)
  components/
    sections/         Landing page sections (hero, features, pricing, FAQ, testimonials, etc.)
    ui/               Reusable UI primitives (button, card, tabs, accordion, ...)
    motion/           Motion/animation providers and helpers
    icons/            Icon components
  lib/                Site config, content, and utility helpers
public/                Static assets
```

## License

Private / all rights reserved.
