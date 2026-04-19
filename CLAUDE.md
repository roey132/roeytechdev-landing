# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based landing page for an automation services business specializing in AI chatbot development, CRM integration, and workflow automation.

## Development Commands

- `npm run dev` - Start local development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

**Important:** Do not run `npm run dev` or perform git actions unless explicitly requested.

## Tech Stack & Architecture

- **Framework:** Astro 6.1+ with Vite
- **Styling:** Tailwind CSS 4.2+ with dark mode support
- **Node:** Requires Node.js >=22.12.0
- **Component Pattern:** Island architecture with `.astro` components

## Animation System

The site uses a consistent animation system across all components:

### ScrollReveal Component
- Global scroll-triggered animations using Intersection Observer
- Add `.scroll-reveal` class to any element for automatic fade-in on scroll
- Modifiers: `.delay-100`, `.delay-200`, `.delay-300`, `.from-left`, `.from-right`, `.scale`
- Animation: `scale(0.8) translateY(20px)` → `scale(1) translateY(0)` with cubic-bezier easing

### MessageCard Component
- Chat bubble component with built-in pop animation
- Props: `direction ('left'|'right')`, `color ('blue'|'purple'|'orange'|'red')`, `size ('sm'|'md'|'lg')`, `delay (number)`
- Animation: Bouncy entrance with `scale(0.3)→scale(1.08)→scale(0.95)→scale(1)`
- **Always use MessageCard for chat/message UI elements** - don't recreate animations

## Component Structure

### Layout & Navigation
- `Layout.astro` - Base layout with metadata and global styles
- `Navbar.astro` - Persistent navigation with anchor links
- `ScrollReveal.astro` - Global animation observer (include once per page)

### Page Sections (in order)
1. `Hero.astro` - Main value proposition
2. `PainPoints.astro` - 3-column pain point grid
3. `ConversionCTA.astro` - Mid-page call-to-action
4. `Solutions.astro` - Service feature blocks
5. `About.astro` - Company information
6. `Testimonials.astro` - Social proof with metrics
7. `LeadMagnet.astro` - Lead capture/value offer
8. `CaseStudies.astro` - Business results
9. `Process.astro` - 4-step timeline
10. `CTA.astro` - Final call-to-action
11. `Footer.astro` - Site footer

### Utility Components
- `WhatsAppButton.astro` - Floating sticky WhatsApp button
- `MessageCard.astro` - Animated chat bubble component

## Design Guidelines

- **RTL Support:** Site uses Hebrew (RTL) layout - use `dir="rtl"` when needed
- **Dark Mode:** All components must support dark mode with `dark:` classes
- **Color Palette:** Stone/Zinc neutrals with Blue accents
- **Typography:** Tailwind defaults with right-to-left text direction
- **Spacing:** Generous padding/margins for modern feel

## Critical Rules for Claude Code

1. **ALWAYS use MessageCard component** for any chat/message UI elements - never create custom message bubbles or card styles
2. **NEVER recreate animations** - use existing MessageCard and ScrollReveal animations exactly as they are
3. **Check existing components first** before creating new UI elements - reuse what's already built

## Important Patterns

1. **Always use existing components** (especially MessageCard for chat UI)
2. **Consistent animations:** Use ScrollReveal for scroll effects, never create custom animations
3. **Responsive design:** Mobile-first approach with Tailwind breakpoints
4. **Component cleanup:** Remove unused imports and components promptly
