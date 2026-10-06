# Topics

How to add or edit a topic. The authoritative guide is
`skills/health-economics-metrics-maintainer-skill/SKILL.md`; this is the short version.

## Structure

Each topic is `locales/<locale>/topics/<slug>/` containing:

- `index.md`: the content
- `README.md`: a symlink to `index.md` (`ln -s index.md README.md`)
- `.locale-peer-id`: a hash, byte-identical across locales for the same topic

`index.md` has exactly six `##` sections, in this order: Why it matters, The math, Worked example, Software engineering connection, Pitfalls, Sources. Translations keep the same order and count; tooling addresses sections by position.

## Rules

- Cross-links are `../<slug>/` (sibling directory). Never `.md` paths or absolute paths.
- Never hand-edit or regenerate `.locale-peer-id`. Copy it from `en-gb-oxendict` when creating a topic in another locale.
- Date every quoted figure (rate, price, threshold) in-line. Cite real sources, with URLs in angle brackets. Do not invent citations.
- Keep code fences, formulas and numeric results identical across translations.
- A new topic needs: its `README.md` bullet in the right category (existing order, not alphabetical), a bullet in each `locales/*/index.md`, and reciprocal links from related topics.
- If you change a slug, grep the whole repo for the old slug and old title.
- Editing English content makes other locales stale. Say so, or update them.

## Validation

Run the checklist at the end of the maintainer skill (README vs topic directories, broken `../slug/` links, peer-id counts per locale) and `sh bin/test`.
