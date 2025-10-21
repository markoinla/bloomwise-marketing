# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mainline is a static marketing website template built with Astro 5, React 19, Tailwind CSS 4, and shadcn/ui components. It outputs a fully static site optimized for deployment.

**Tech Stack:**
- Astro 5 (Static Site Generator)
- React 19 (for interactive components)
- Tailwind CSS 4 (styling)
- shadcn/ui (component library)
- TypeScript
- MDX (content with components)

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint and auto-fix
npm run lint

# Format code
npm run format
```

## Architecture

### Directory Structure

- `src/pages/` - File-based routing (generates static pages)
  - `.astro` files for static pages
  - `.mdx` files for markdown-based pages
  - `blog/[...slug].astro` - Dynamic blog post pages

- `src/components/`
  - `blocks/` - Page sections (hero, navbar, footer, pricing, testimonials, etc.)
  - `ui/` - shadcn/ui base components (buttons, cards, forms, etc.)
  - `.astro` files for Astro components
  - `.tsx` files for React components

- `src/content/` - Content collections
  - `blog/` - Blog posts in Markdown/MDX format
  - Schema defined in `src/content.config.ts`

- `src/layouts/` - Page layout wrappers
  - `DefaultLayout.astro` - Main layout with navbar/footer
  - `BasicLayout.astro` - Minimal layout

- `src/consts.ts` - Global site metadata and constants
- `src/lib/utils.ts` - Utility functions (cn for class merging)

### Key Patterns

**Component Architecture:**
- Astro components (`.astro`) for static page structure
- React components (`.tsx`) for interactive UI (forms, carousels, theme toggle, etc.)
- Mix both using Astro's component islands pattern

**Styling:**
- Tailwind CSS 4 via Vite plugin
- Use `cn()` utility from `src/lib/utils.ts` for conditional class merging
- shadcn/ui components in `src/components/ui/`

**Content Management:**
- Blog posts stored in `src/content/blog/` as `.md` or `.mdx` files
- Content schema validation via Zod in `content.config.ts`
- Use Astro's Content Collections API to query posts

**Theme System:**
- Dark/light mode via `astro-themes` package
- Theme toggle in `src/components/theme-toggle.tsx`
- Compatible with tweakcn theme customization

## Deployment Configuration

**Static Build:**
- Outputs to `dist/` directory
- Configured for static hosting

**Deployment Settings:**
- Requires Node.js 20+ (specified in `nixpacks.toml`)
- Default port: 4321 (for preview server)
- Start command: `npm run start` (runs Astro preview server)
- Vite preview configured to allow all hosts (`vite.config.js`)

**Platform-Specific:**
- Optimized for Vercel (has `@astrojs/vercel` adapter installed but not configured)
- Works with Dokploy/Docker deployments via Nixpacks
- Update `astro.config.mjs` `site` value for production domain

## Important Notes

- The build is fully static (`output: "static"` in config)
- All site metadata is centralized in `src/consts.ts`
- shadcn/ui components are pre-installed in `src/components/ui/`
- Uses DM Sans font family (imported in layouts)
- SEO metadata configured via `BaseHead.astro` component
