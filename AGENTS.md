<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Personal landing page for gilbert.io — a single static page with a name, email, and social links.

## Stack

- Next.js 16 (App Router); Turbopack is the default bundler
- React 19, TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config` file; theme tokens live in `app/globals.css` under `@theme inline`)
- ESLint 9 native flat config (`eslint.config.mjs`) using `eslint-config-next` core-web-vitals + typescript, with `eslint-config-prettier` to disable formatting rules
- Prettier with `prettier-plugin-tailwindcss` (sorts Tailwind classes)
- Package manager: **npm** (`package-lock.json` is committed — don't introduce pnpm/yarn/bun lockfiles)

## Layout

```
app/
  layout.tsx    # root layout, Geist fonts, site metadata
  page.tsx      # the whole homepage
  globals.css   # Tailwind import, color/font tokens, dark mode
  favicon.ico
```

Path alias `@/*` maps to the repo root.

## Commands

```sh
npm install           # install deps
npm run dev           # dev server at http://localhost:3000
npm run build         # production build — run before committing to catch type errors
npm run start         # serve the production build
npm run lint          # ESLint
npm run format        # format all files with Prettier
npm run format:check  # check formatting without writing
npx tsc --noEmit      # type-check only
```

There is no test suite. Verify changes with `npm run format:check`, `npm run lint`, and `npm run build`, and check the page in the browser for visual changes (light and dark mode).

## Conventions

- Keep it minimal: server components only, no client-side JS unless needed.
- Style with Tailwind utility classes inline; add shared colors/fonts as CSS variables in `globals.css`.
- Colors come from `--background` / `--foreground`; dark mode is handled by `prefers-color-scheme` in `globals.css`.
- Formatting is owned by Prettier (single quotes, no trailing commas) — run `npm run format` rather than hand-formatting.
- Site title/description are set via the `metadata` export in `app/layout.tsx`.

## Deployment

Source lives at `github.com/rickygi/gilbert.io`; `main` is the default branch. Lockfile changes have broken deploys before — commit `package-lock.json` alongside any dependency change and make sure `npm run build` passes.
