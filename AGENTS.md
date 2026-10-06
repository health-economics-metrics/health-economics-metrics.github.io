# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this repo is

*Health Economics Metrics*: a book of reference topics (health economics maths for software engineers building for national health services), published in many locales, plus the SvelteKit site that publishes it.

```
README.md                          canonical table of contents (links into en-gb-oxendict)
locales/<locale>/index.md          each locale's home page (mirrors README.md, translated)
locales/<locale>/topics/<slug>/    one directory per topic:
    index.md                       the content
    README.md                      symlink to index.md
    .locale-peer-id                hash, byte-identical across locales for the same topic
health-economics-metrics.github.io/  the static site (SvelteKit + adapter-static, pnpm)
    content/                       vendored copy of the book; refreshed with `pnpm sync:content`
skills/                            Claude skills for using and maintaining the book
spec/                              specs for the site's locales, contents page and search
bin/test                           structure checks (sh)
```

## Read first

`skills/health-economics-metrics-maintainer-skill/SKILL.md` is the authoritative guide to adding and editing topics: the required section structure, link conventions, README index rules, and the validation checklist. Follow it rather than re-deriving conventions.

## Locales

- `en-gb-oxendict` is the canonical locale. `README.md` and all cross-references point at it.
- English variants: `en-us`, `en-gb`, `en-001`, `en-150`. Dialect-spelled slugs differ by locale (for example `...-defense` and `...-defence`); the shared `.locale-peer-id` is what identifies a topic across locales.
- Full-language locales keep the English (`en-gb-oxendict`) slug for every topic; only content is translated. The exception is a few `-001` locales (ar, bn, es, fr, hi, id, pt, ru, ur, zh) that use localized directory names and separate translations.
- For most other languages `xx-001` is an exact copy of `xx-xx` (`rsync -a locales/xx-xx/ locales/xx-001/`). `et-001`, `th-001` and `vi-001` have no `-xx` sibling.
- `spec/locales-for-global-sharing-with-svelte/locales.tsv` lists every locale; adding a locale also means touching `src/lib/i18n.js`, `src/lib/locales.js` and `spec/locales/index.md` in the site, then syncing content.

## Rules

- Cross-links between topics are `../<slug>/` (sibling directory), never `.md` paths or absolute paths.
- Never hand-edit or regenerate `.locale-peer-id`. Copy it verbatim from `en-gb-oxendict` when creating a topic in another locale.
- Date every quoted figure (rates, prices, thresholds) in-line, and cite real sources with URLs in angle brackets. Do not invent citations.
- Keep code fences, formulas and numeric results identical across translations; translate prose, headings and labels. Match each locale's existing numeral and currency formatting.
- Editing English content makes the other locales stale. Say so, or update them; don't leave drift silent.
- Keep `README.md` index entries, `locales/*/index.md` bullets and topic directories in sync.
- Commit messages end with the attribution line your harness specifies. Commits are SSH-signed with a passphrase key; if signing hangs, ask the user to unlock the key rather than bypassing signing.

## Commands

Run from the repo root unless noted.

```sh
sh bin/test                         # locale directories, peer-ids, README symlinks
cd health-economics-metrics.github.io
pnpm install
pnpm dev                            # local dev server
pnpm build                          # prerender site; fails on any broken link
pnpm sync:content                   # vendor ../README.md and ../locales into content/
```

The validation checklist in the maintainer skill (README vs topic directories, broken `../slug/` links, peer-id counts per locale) should be clean before finishing structural changes.

## Site content and the build

`pnpm build` prerenders every page and treats any broken link as an error (`handleHttpError: 'fail'`). Each locale's home page is generated from `content/README.md`, so that file and every locale's vendored `content/locales/*/topics/` must agree. Do not run `pnpm sync:content` while any locale lacks topics that `README.md` lists: the build will fail with one 404 per missing page per locale. Sync only after all locales are complete, then build.

## Translation work

- Work serially; do not delegate translation to subagents unless the user asks.
- Per language: write the translated topic files, add the cross-link sentences to existing topics at the matching section, add home-page bullets after the same neighbours as in `README.md`, copy peer-ids, create `README.md` symlinks, commit `locales/` per language.
- Flag translations that need professional review (Welsh is already flagged).
- Verify: `diff -rq locales/xx-xx locales/xx-001` for copied pairs, and the maintainer skill's checklist.
