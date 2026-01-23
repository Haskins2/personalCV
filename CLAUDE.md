# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 personal CV and portfolio website for Stephen Haskins, showcasing education, work experience, and technical projects. The site features dark mode support, smooth page transitions with Framer Motion, and a photography gallery.

## Development Commands

### Local Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server at http://localhost:3000
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
```

### Deployment
```bash
./deploy.sh             # Deploy to Linode server (builds locally, uploads, and restarts via PM2)
```

The deployment script builds the app locally, packages necessary files, uploads to the server at `172.237.120.179`, and manages the PM2 process remotely.

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for page transitions
- **Theme**: next-themes for dark mode
- **Deployment**: Self-hosted on Linode with PM2 and nginx

### Project Structure
```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage with CV content
│   ├── projects/           # Project showcase pages
│   │   ├── page.tsx        # Projects listing
│   │   └── [project-name]/ # Individual project pages
│   └── photography/        # Photography gallery
├── components/
│   ├── ui/                 # shadcn/ui components (Button, Card, Badge, Avatar)
│   ├── ProjectPageView.tsx # Reusable project detail page layout
│   ├── PageTransition.tsx  # Framer Motion page transitions
│   ├── ThemeToggle.tsx     # Dark mode toggle
│   └── Breadcrumb.tsx      # Navigation breadcrumbs
└── lib/
    ├── utils.ts            # Tailwind class merging utility (cn)
    └── presentationUtils.ts # Keynote slide extraction utilities
```

### Key Patterns

**Page Structure**: Most pages follow a consistent pattern:
1. `PageTransition` wrapper for animations
2. `ThemeToggle` component in top-right
3. `Breadcrumb` navigation
4. Main content area with responsive grid layouts
5. Dark mode support via Tailwind's `dark:` variants

**Component Organization**:
- UI primitives in `components/ui/` are from shadcn/ui (don't edit directly, regenerate via shadcn CLI)
- Custom components handle page-specific logic and layouts
- Shared components like `ProjectPageView` provide consistent styling across project pages

**Styling Approach**:
- Tailwind utility classes for all styling
- Uses custom CSS variables defined in `globals.css` for theme colors
- Responsive design with mobile-first approach (sm/md/lg breakpoints)
- Dark mode classes applied via `dark:` prefix

**Projects System**:
- Project metadata defined in `src/app/projects/page.tsx` as an array
- Each project can have a dedicated route under `/projects/[slug]/`
- `ProjectPageView` component handles common project page layout
- Projects support optional fields: `githubUrl`, `presentationPath`, `technicalDetails`, additional images

**Google Analytics**: Integrated via gtag script in root layout with tracking ID `G-1Z3VW3L07Q`

## Configuration Notes

### Next.js Config
- TypeScript and ESLint errors are ignored during builds (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`)
- Images are unoptimized (`images.unoptimized: true`)
- SWC minification enabled, compression disabled

### Path Aliases
- `@/*` maps to `src/*` for cleaner imports

### Theme Configuration
- Default theme is "light" but respects system preferences
- Theme colors defined as HSL variables in `globals.css`
- Uses "zinc" as base color scheme

## Important Implementation Details

**Dark Mode**: The site uses class-based dark mode. When adding new components, always include dark mode variants using Tailwind's `dark:` prefix.

**Page Transitions**: All pages should be wrapped in `<PageTransition>` to maintain consistent navigation animations.

**Deployment**: The deployment script expects the server to have Node.js and PM2 installed globally. It performs a full production build locally before deploying to avoid server build issues.

**Static Assets**: Images are stored in `/public` directory and referenced with leading slash (e.g., `/headshot.jpeg`).
