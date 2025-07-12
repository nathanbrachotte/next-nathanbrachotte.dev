# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm install` - Install dependencies (uses pnpm as package manager)
- `pnpm dev` - Start development server on port 3010
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js personal portfolio website using the App Router pattern. The site serves as a blog, project showcase, and professional portfolio for Nathan Brachotte.

### Key Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX files processed by Contentlayer
- **UI Components**: Radix UI primitives with shadcn/ui
- **Database**: PlanetScale (MySQL) with Kysely query builder
- **Analytics**: Simple Analytics and Vercel Speed Insights
- **Deployment**: Vercel

### Content Management
The site uses Contentlayer to process MDX files in the `content/` directory:
- **Blog posts**: `content/blog/*.mdx` - Technical articles and posts
- **Projects**: `content/projects/*.mdx` - Portfolio project descriptions
- **Tips**: `content/tips/*.mdx` - Development tips and guides
- **Bookmarks**: `content/bookmarks.mdx` - Curated resource links
- **Snippets**: `content/snippets.mdx` - Code snippets and utilities

Each content type has predefined schemas with computed fields for SEO, structured data, and URL generation.

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `app/components/` - Page-specific React components
- `@/components/ui/` - Reusable UI components (shadcn/ui)
- `content/` - MDX content files
- `helpers/` - Utility functions for dates, gradients, URLs
- `icons/` - Custom SVG icon components
- `public/images/` - Static images organized by content type

### Design System
- Uses a dark theme by default with custom OKLCH color palette
- Custom font: Graphik (Regular and Medium weights)
- Gradient color system with predefined brand colors
- Mobile-first responsive design approach

### Code Style (from .cursorrules)
- TypeScript for all code; prefer interfaces over types
- Functional and declarative programming patterns
- Use descriptive variable names with auxiliary verbs
- Minimize 'use client' usage; favor React Server Components
- Use lowercase with dashes for directories
- Structure files: exported component, subcomponents, helpers, static content, types

### Content Features
- Syntax highlighting with rehype-pretty-code (Dracula theme)
- Auto-generated table of contents with anchor links
- Tweet embedding support via StaticTweet components
- Copy button functionality for code blocks
- Automatic SEO metadata and Open Graph generation