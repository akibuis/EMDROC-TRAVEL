# EMDROC Travel & Tours — Agent Setup

## Project
Angular 21 standalone app with Tailwind CSS 4, Signals, lazy-loaded routes.

## Quick Start
```bash
npm install
ng serve
```

## Key Files
- `src/styles.css` — Tailwind CSS 4 theme with EMDROC brand tokens
- `src/app/core/models/content.model.ts` — all typed content interfaces
- `src/app/app.routes.ts` — lazy-loaded route map
- `src/app/environments/` — environment configs

## Coding Conventions
- Standalone components only, no NgModules
- Strict TypeScript — no `any`
- Signals for local UI state, RxJS for async streams
- Mobile-first Tailwind, `py-16`/`py-24` section spacing, `rounded-2xl`/`rounded-3xl` cards
- All copy in typed constants under `core/models`

## 11. Google Stitch MCP Integration
This project connects to Google Stitch via MCP for design-to-code workflows
(pulling generated component markup/styles from Stitch design sessions).

- MCP server config lives in `.mcp.json` (gitignored) — not in this file.
- Required env var: `STITCH_API_KEY` (see `.env` for the actual key — also gitignored).
- When scaffolding a component that has a corresponding Stitch design
  (e.g. HeroComponent, ServiceCardComponent), the agent should:
  1. Query the Stitch MCP server for the relevant screen/component export
  2. Translate the returned markup/styles into Angular standalone component
     syntax + Tailwind utility classes (per existing design system rules)
  3. Preserve Stitch's spacing, color, and typography choices exactly —
     do not "clean up" or simplify visual details from the design
  4. Flag any Stitch-generated interaction (animations, transitions) that
     needs to be reimplemented using Angular's animation APIs instead of
     raw CSS, since Stitch exports are typically static HTML/CSS

Do not commit API keys, tokens, or `.mcp.json` to version control.
