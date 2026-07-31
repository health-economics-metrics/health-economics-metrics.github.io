# health-economics-metrics.github.io

The website for **[Health Economics Metrics](https://github.com/health-economics-metrics/health-economics-metrics)** — a comprehensive introduction to health economics math, examples, and reasoning, written for software engineers building for national health service organizations worldwide.

Published at <https://health-economics-metrics.github.io/>.

## How it works

A [SvelteKit](https://svelte.dev/docs/kit) site built with [adapter-static](https://svelte.dev/docs/kit/adapter-static). Every page is prerendered to plain HTML at build time, so GitHub Pages serves files and nothing else — no server, no database, no tracking.

The book's Markdown is **vendored** into `content/` rather than read across repositories, so a fresh clone builds on its own. The site's user interface is built from the [Lily Design System](https://github.com/LilyDesignSystem), also vendored, into `src/lib/lily/` (headless components) and `src/lib/lily-helpers/` (theme and text size pickers).

### The book's README is the table of contents

`content/README.md` defines the structure, and the site derives everything else from it:

- each `## Heading` becomes a **part** of the book
- each `- [Title](topics/slug.md) — blurb` under it becomes a **topic**, in reading order
- that order drives the sidebar, the contents page, and previous/next

Reorder the README upstream, run `npm run sync`, and the site follows. A topic file that the README never links to is still published, under an "Also in this book" part, so nothing becomes unreachable.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build     # -> build/
npm run preview
```

## Sync from upstream

```sh
npm run sync           # both of the below
npm run sync:content   # book Markdown  -> content/
npm run sync:lily      # Lily components + themes -> src/lib, static/assets/themes
```

Both scripts default to sibling checkouts and can be pointed elsewhere:

```sh
BOOK=/path/to/health-economics-metrics npm run sync:content
LILY=/path/to/lily-design-system npm run sync:lily
```

Vendored files carry a "do not edit here" banner. Change them upstream, then re-sync.

## Layout

```
bin/sync-content.mjs   vendor the book's Markdown into content/
bin/vendor-lily.mjs    vendor Lily components, helpers, and themes
content/               the book, verbatim (generated — do not edit)
src/lib/markdown.js    Markdown -> HTML: link rewriting, heading ids
src/lib/paths.js       content path <-> site route mapping
src/lib/server/        content access and book structure (server-only)
src/lib/lily/          vendored Lily headless components (generated)
src/lib/lily-helpers/  vendored Lily theme + text size pickers (generated)
src/routes/            home, contents, topics A-Z, topic pages, search, about
static/assets/style.css  the site's own styling; Lily ships none
static/assets/themes/  vendored Lily themes, swapped by the theme picker
```

Content lives under `$lib/server`, so the book's Markdown can never reach a browser bundle: pages read it from `+page.server.js` loads, which run at build time under prerendering.

## Themes

Twenty Lily themes ship in `static/assets/themes/`, offered by the picker in the header: the neutral reading themes, plus the UK Government Digital Service, NHS England, NHS Scotland, NHS Wales, and US Web Design System palettes. The site's stylesheet is written against Lily's semantic tokens (`--lily-surface`, `--lily-text`, `--lily-space-*`), so every theme works without a per-theme branch. Theme and text size choices persist in the reader's browser.

To change which themes ship, edit the `themes` list in `bin/vendor-lily.mjs` and re-run `npm run sync:lily`; it regenerates `src/lib/themes.js` to match what it actually copied.

## Deploy

`.github/workflows/pages.yml` builds and deploys on every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions**.
