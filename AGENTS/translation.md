# Translation workflow

- Work serially, one language at a time. Do not delegate translation to subagents unless the user asks.
- Per language:
  1. Read that locale's existing conventions: section headings, topic titles, numeral and currency format, decimal separator.
  2. Write each new topic's `index.md` in the locale.
  3. Add the cross-link sentences to existing topics that the English edit added, in the same section.
  4. Add the home-page bullets after the same neighbours as `README.md`.
  5. Copy `.locale-peer-id` from `en-gb-oxendict`; create `README.md` symlinks.
  6. Copy to the `-001` sibling where it is an exact copy; verify with `diff -rq`.
  7. Commit `locales/` for that language only.
- Translate prose, headings and labels. Keep formulas, code, numbers, citations and URLs as in English, adapting only separators and spacing to the locale.
- Flag translations that need professional review (Welsh already is).
- Remaining work and order are tracked by comparing `ls locales/*/topics` with `locales/en-gb-oxendict/topics`.
- Only after every locale is complete, run `pnpm sync:content` (see `AGENTS/site.md`).
