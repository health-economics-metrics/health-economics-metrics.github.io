# Locales for major projects with SvelteKit

Translate content into multiple locales.

How this site supports multiple locales end to end: content, web
routing, UI chrome, and bugs.

Read locales via file `locales.tsv`.

## .locale-peer.id file

`.locale-peer-id` file is a byte-identical 32-character hexadecimal lowercase
number then newline, across every locale's version of "the same" topic,
regardless of slug.

`.locale-peer-id` id is how the project resolves "this page, in locale X".

## Guidance

- en-us: consistent American spelling; fix any stray en-gb forms (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: the -ize/-ise family (optimise, realise, organise, prioritise, utilise, etc.), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre for the metaphorical sense), -ense/-ce (defence, licence), doubled-L forms (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, and math→maths.

- en-gb-oxendict: use en-gb then revert just the -ise family back to Oxford -ize spelling (optimize, realise→realize, organise→organize, etc.), while correctly keeping -yse forms (analyse/analysable) unchanged, since Oxford style never uses -yze, and keeping all other British forms (colour, centre, defence, licence, programme, maths, modelled) intact.

## Guard against corruption

Keep proper nouns unconverted. Example: "Hospital Readmissions Reduction Program" (a real United States federal program name).

## Verify

For each locale subdirectory:

- File exists: `index.md`
- Symlink exists: `README.md`
- Locale peer id tracking file exists: `.locale-peer-id`

Then:

- Fix any broken internal links
- Fix any residual wrong-dialect spellings
- Update this file and `locales.tsv` (one row per locale directory; the two must list the same codes)

## Content structure (book side)

All locale directories are named `<language>-<region>` (lowercase), such as
`en-us`, `de-de`, `fr-001`; a region may be a CLDR numeric code (`001` World,
`150` Europe) or carry a variant suffix (`en-gb-oxendict`). Language-only
directories such as `locales/en/` are not allowed, and neither are language-only
site routes: a browser language with no exact locale goes to the language's
`-001` route (en-AU → `/en-001/`).

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Every
  locale gets this file scaffolded (matching the topic-file pattern) even
  before it has a translation; it starts empty.

## Slugs

Slugs are per-locale, not shared. Every full-language locale (everything except
the English dialects) renames its topic directories to a slug derived from that
locale's own H1 title (`bin/localize-slugs`): lowercase, trailing parenthetical
such as an acronym dropped, Unicode letters/numbers/marks kept, words joined by
hyphens. The English dialects (`en-us`, `en-gb`, `en-gb-oxendict`, `en-001`,
`en-150`) keep English slugs, spelled in the dialect.

Example: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nothing in the site assumes slugs match across locales.

## Routing

- Locale routes are `/<locale>/…` (home), `/<locale>/contents/`,
  `/<locale>/topics/`, `/<locale>/topics/<slug>/`, `/<locale>/search/`. There is
  no `/locales/` prefix and no language-only route (`/en/` does not exist);
  `/en-001/` is a real route, not a redirect.
- The URL is the source of truth for the locale. A saved picker choice is
  restored only on `/`, never on another page without a locale (`/about/`).
- On `/`, a first visit (no saved locale, no `?search`) is sent to the locale
  matching the browser's language list (`navigator.languages`, else
  `navigator.language`), normalised (`cy_GB` → `cy-gb`): an exact locale first
  (`cy-gb`); otherwise the language's international `-001` locale
  (`en-AU` → `/en-001/`); otherwise `<language>-<language>`; otherwise any
  `<language>-*` locale; otherwise the default locale (`en-gb-oxendict`).
  `nb`/`nn` map to `no`. Implemented by `matchLocale()` in `locales.js`.
- Sitemap, `llms.txt`/`llms.json` and the search index are generated from the
  built site and cover every locale; the search index holds the default locale
  only.

## Locale picker (labels + ordering)

- Labels live in `locales.js`'s `LOCALE_LABELS`, one entry per code, in that
  language, as `"<language>"` for a `-001` world variant or `"<language> -
  <region>"` otherwise (e.g. `'fr-001': 'Français'`, `'fr-fr': 'Français -
  France'`). See `locales.tsv` for the full endonym/exonym table. Falls back
  to the raw code via `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before `" - "`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label. The bare `-001` label happens to
  be a string prefix of every regional label in its group under the current
  `"<language> - <region>"` format, so plain alphabetical-by-label sort would
  currently put it first anyway — the explicit `-001` check exists so
  grouping keeps working even if a label ever stops following that pattern.

## Bug fixes (regression watch-list)

### Bug: ASCII-only `\w` regexes broke every non-Latin/non-accented slug

Bug: matched topic slugs with `[\w.-]+` (ASCII word chars only). Any locale with
an accented or native-script slug (Spanish, French, Russian, Chinese, Arabic,
Welsh, Hindi, Bengali, Portuguese, Indonesian, Urdu) silently failed peer-id
resolution and cross-topic links.

Fix by widening the slug capture group to `[^/]+`.

### Bug: Every locale's home/contents page showed canonical English content

Bug: code and content always read a single top-level `/README.md` for title,
intro, "New here?" picks, part headings, and blurbs — only topic _links_ were
ever localized.

Fix: populate the previously-empty `locales/<code>/index.md` per locale.

## Bug: Link extraction was hardcoded to literal English phrase

Bug: link silently found nothing once the README was translated.

Fix: extract all links from the whole pre-`##` intro block instead of
regex-matching the English sentence.

### Bug: UI chrome was hardcoded English in the `.svelte` templates

Bug: nav labels, subtitles, page titles, intros, breadcrumbs, topic position,
pagination, picker/share labels.

Fix: add `i18n.js` and threading `ui(locale)` through every locale-scoped route
and `+layout.svelte`.

### Bug: header/footer brand wordmark stayed English

Bug: wordmark came only from the root (locale-agnostic) `+layout.server.js`,
which deliberately never picks a locale.

Fix: have `locales/[locale]/+layout.server.js` supply this locale's own title,
which overrides the root layout's canonical one via SvelteKit's merged
`page.data` on any route under `/locales/<locale>/` — the root picker and
`/about/` (no locale in the URL) correctly keep the canonical English title.
