# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `pnpm dev` - Compiles TypeScript and starts Next.js dev server
- **Build**: `pnpm build` - Compiles TypeScript and builds for production
- **Lint**: `pnpm lint` - Runs Prettier and ESLint with auto-fix (max warnings: 0)
- **Start**: `pnpm start` - Starts production server
- **Clean**: `pnpm clean` - Removes build artifacts
- **Compile**: `pnpm compile` - Runs TypeScript compilation only
- **Sitemap**: `pnpm sitemap` - Generates sitemap using next-sitemap

## Architecture Overview

This is a **Next.js-based personal portfolio/resume website** built with TypeScript, React, and TailwindCSS. The architecture is data-driven with a single configuration approach.

### Key Architecture Patterns

**Data-Driven Design**: All site content is configured through `/src/data/data.tsx` and `/src/data/personalData.json`. This allows easy customization without touching component code.

**Component Structure**:
- `src/components/Sections/` - Main page sections (Hero, About, Portfolio, Resume, Footer)
- `src/components/Layout/` - Layout components (Page, Section wrappers)
- `src/components/Icon/` - Custom icon components for social platforms
- `src/hooks/` - Custom React hooks for UI interactions

**Data Flow**: 
- Type definitions in `src/data/dataDef.ts` define the data structure
- Main data export in `src/data/data.tsx` populates all sections
- Components consume this data to render the UI

**Styling**: Uses TailwindCSS with custom SCSS for global styles (`src/globalStyles.scss`)

### File Organization

The project follows Next.js conventions:
- `src/pages/` - Next.js pages and API routes
- `src/components/` - Reusable React components organized by feature
- `src/data/` - Site content and type definitions
- `src/images/` - Static image assets
- `public/` - Public static files

## Important Notes

- Uses **pnpm** as package manager (not npm/yarn)
- TypeScript compilation happens before Next.js build/dev
- Site is optimized for static generation and deployment to Vercel
- Portfolio images are imported in `data.tsx` and should be placed in `src/images/portfolio/`
- All personal data customization happens in the data files, not components