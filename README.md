# siujamo.github.io

Personal site of **siujamo** — full-stack developer, software architect and DevOps engineer. Built with React, TypeScript and Tailwind CSS, fully bilingual (EN ⇄ 中文), and deployed to GitHub Pages on every push to `main`.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in `src/styles/tokens.css` and are bridged to Tailwind utilities via `@theme inline` in `src/styles/global.css`. Colours follow the OS light/dark preference automatically.
- [react-router](https://reactrouter.com) with a `HashRouter` (no server rewrites needed on GitHub Pages).
- Lightweight hand-rolled i18n (no framework) — see `src/i18n/`.
- [Prettier](https://prettier.io) for formatting (`pnpm fmt`), [Oxlint](https://oxc.rs) for linting.

## Getting started

Requires [pnpm](https://pnpm.io) (Node.js 22+).

```shell
pnpm install
pnpm dev        # local dev server at http://localhost:5173
pnpm build      # type-check + production build into dist/
pnpm preview    # serve the production build locally
pnpm fmt        # format everything with Prettier
pnpm lint       # lint with Oxlint
```

## Editing your content

All editable content is centralised in `src/content/` as typed TypeScript data
(every string carries an `en` and a `zh` version):

| File           | What it holds                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `site.ts`      | name, tagline, summary, location, contact (`email`/`linkedin` — currently `null`, ready to fill in), social links |
| `skills.ts`    | grouped skills shown on About and Resume                                                                          |
| `projects.ts`  | the portfolio grid (add a 4th/5th project by copying an object)                                                   |
| `resume.ts`    | CV data — work history and education are empty until you add them                                                 |
| `uses.ts`      | the `/uses` gear list                                                                                             |
| `bookmarks.ts` | reading lists and tooling                                                                                         |
| `essays.ts`    | personal writing; delete the sample post or add your own                                                          |

Fields you still need to fill in are marked `⚠ TODO` in the content files —
search for `TODO` to find them all.

### Resume as PDF

The `/resume` page is print-optimised: click **Download PDF** and choose
"Save as PDF" as the destination in the print dialogue. If you would rather
link a pre-generated file, drop one at `public/resume.pdf` (nothing references
it yet).

## Deployment

A [GitHub Actions workflow](.github/workflows/deploy.yml) builds the site on
every push to `main` and publishes `dist/` to the `gh-pages` branch.

One-time setup (after the first push):

1. Repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to _Deploy from a branch_.
3. Set **Branch** to `gh-pages` / `(root)`, then save.

The site then lives at <https://siujamo.github.io>. Locally there is nothing
to run — everything happens in CI.

## Project structure

```
src/
├─ content/    # all bilingual site content (edit here)
├─ i18n/       # language context + UI string dictionary
├─ components/ # header, footer, layout, shared UI helpers
├─ pages/      # one component per route
├─ lib/        # shared types
└─ styles/     # tokens.css + global.css (Tailwind entry)
```
