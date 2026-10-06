# Site and build

`health-economics-metrics.github.io/` is a SvelteKit site using adapter-static and pnpm.

```sh
cd health-economics-metrics.github.io
pnpm install
pnpm dev
pnpm build              # prerender; any broken link fails the build
pnpm sync:content       # vendor ../README.md and ../locales into content/
```

## Vendored content

`content/` is a vendored copy of the book so the site builds standalone. Each locale's home page is generated from `content/README.md`, so that file and every locale's `content/locales/*/topics/` must agree. `prerender` is configured with `handleHttpError: 'fail'`.

Do not run `pnpm sync:content` while any locale lacks topics that `README.md` lists: you get one 404 per missing page per locale and the build fails. Sync only when all locales are complete, then build.

`pnpm sync:content` also pulls in any other drift between `locales/en-gb-oxendict` and the vendored copy. Check `git status` after syncing.

## Dependencies

Upgrade with `pnpm update --latest`, then run `pnpm build`. Verify the build against known-good content when judging a failure, so content problems aren't blamed on the upgrade.

## llms.txt and llms.json

`pnpm build` runs `scripts/build-llms.mjs` after the search index, writing `build/llms.txt` and `build/llms.json` from `content/README.md` and the locale list. They are generated, not committed; do not hand-edit them. Because they read the vendored `content/`, they only list topics the site actually publishes.

## sitemap.xml

`scripts/build-sitemap.mjs` runs last in `pnpm build` and writes `build/sitemap.xml`, listing every prerendered page (excluding `404.html`). It is generated, not committed. `static/robots.txt` points crawlers at it. A single sitemap file may hold at most 50,000 URLs; split it into a sitemap index if the site grows past that.
