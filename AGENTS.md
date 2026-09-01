# HDEC AI BUILD — Repository Guide

## Project purpose

HDEC AI BUILD is an editorial learning experience for Hyundai Engineering & Construction senior executives. It helps executives turn deep field experience and tacit organizational knowledge into working AI-enabled business tools with 1:1 support from an internal AI ACE.

The experience teaches enough AI and IT concepts for an executive to direct AI clearly and judge the result. It is not intended to turn the participant into a programmer.

Core thesis:

> Executive tacit knowledge × AI implementation capability × ACE support → working business tools

## Current architecture

- Vite + React + TypeScript single-page frontend
- Client-side routing for the Library and Book 01 reading experience
- GitHub Pages deployment uses the repository base path and a static `404.html` route-restoration fallback for direct SPA loads.
- Home uses an editorial introduction followed by a publication-style Library; the Library is the primary navigation metaphor for Books 01–05.
- `src/pages`: route-level experiences
- `src/components`: reusable navigation, editorial, diagram, and media-placeholder components
- `src/content`: editable book and curriculum content/configuration
- `src/styles`: design tokens, global foundations, and page/component styles
- `src/assets`: local static assets when supplied later
- No server-side application or persistent data layer in this baseline

Keep the architecture intentionally small. Prefer semantic React components, CSS, and browser APIs over framework-heavy abstractions.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the local Vite development server
- `npm run build` — type-check and create a production build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Design principles

- Treat the site as an interactive digital field guide and premium publication, not an LMS or dashboard.
- Use strong editorial typography, generous whitespace, structural lines, intentional color fields, and varied section rhythm.
- Let the content become the design; avoid generic card grids and decorative AI imagery.
- Keep Korean typography highly legible and the tone concise, intelligent, and executive-friendly.
- Use restrained, comprehension-led motion and respect `prefers-reduced-motion`.
- Use semantic HTML, keyboard-accessible controls, visible focus states, and accessible contrast.
- Centralize typography, spacing, color, radius, width, border, and motion decisions in design tokens.
- Keep the temporary palette easy to replace when official brand guidance is supplied. Never imply that temporary colors or assets are official HDEC branding.
- Keep screenshot placeholders reusable and content-driven so real images can replace them without page redesign.
- Separate curriculum copy/configuration from presentation where it improves future editing.

## Current scope — Design Baseline V1

- Home / Library
- Complete long-scroll BOOK 01 — UNDERSTAND experience
- Visually complete teaser states for Books 02–05
- Responsive desktop, tablet, and mobile layouts
- Reusable editorial sections, diagrams, prompt examples, and screenshot placeholders
- Subtle reveal/progress interactions
- Project documentation and verified production build

## Non-goals for this baseline

- Full Books 02–05 content
- Backend, authentication, database, API integration, or learning-state persistence
- Real quizzes or self-certification tracking
- Admin/content management system
- Real product screenshots, proprietary assets, or official Hyundai/HDEC brand claims
- Analytics
- Git commit or remote push before Founder review

## Working agreements

- Preserve the editorial reading experience; do not introduce a permanent documentation sidebar.
- Do not hard-code claims that a changing AI tool is universally best. Date tool guidance and describe roles rather than rankings.
- Reference-driven Build means analyzing information architecture and user flow, then reinterpreting them for HDEC work. It never means copying proprietary code, branding, or assets.
- Before handing off changes, run `npm run build`, `npm run lint` when available, and inspect `git status --short`.
- Deploy production from `main` through the GitHub Pages Actions workflow after review.
