// Builds build/llms.txt and build/llms.json from content/README.md (the book's
// table of contents) and the locale list, so they always match what the site
// publishes. See https://llmstxt.org/ for the llms.txt format.
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALE_LABELS, DEFAULT_LOCALE } from '../src/lib/locales.js';

const BUILD = process.argv[2] ?? 'build';
const SITE = 'https://health-economics-metrics.github.io';
const REPO = 'https://github.com/health-economics-metrics/health-economics-metrics.github.io';
const RAW = 'https://raw.githubusercontent.com/health-economics-metrics/health-economics-metrics.github.io/main';

const readme = readFileSync('content/README.md', 'utf8').split('\n');
const title = readme[0].replace(/^#\s*/, '').trim();
const summary = readme.find((l, i) => i > 0 && l.trim() && !l.startsWith('#'));

const parts = [];
let part = null;
for (const line of readme.slice(1)) {
	const h = line.match(/^##\s+(.*)/);
	if (h) {
		part = { title: h[1].trim(), topics: [] };
		parts.push(part);
		continue;
	}
	const m = line.match(/^- \[([^\]]+)\]\(locales\/([^/]+)\/topics\/([^/]+)\/\)\s*(?:—\s*(.*))?$/);
	if (m && part) {
		const [, name, locale, slug, blurb] = m;
		part.topics.push({
			title: name,
			slug,
			description: (blurb ?? '').trim(),
			url: `${SITE}/${locale}/topics/${slug}/`,
			source: `${RAW}/locales/${locale}/topics/${slug}/index.md`
		});
	}
}
const bookParts = parts.filter((p) => p.topics.length);

const localeDirs = readdirSync('content/locales').filter((d) => existsSync(join('content/locales', d, 'index.md'))).sort();
const locales = localeDirs.map((code) => ({
	code,
	name: LOCALE_LABELS[code] ?? code,
	url: `${SITE}/${code}/`,
	default: code === DEFAULT_LOCALE
}));

let txt = `# ${title}\n\n> ${summary}\n\n`;
txt += `Each topic is one page: definition, why it matters, the math, a worked example, the software engineering connection, pitfalls, and sources. Pages are in the canonical locale (${DEFAULT_LOCALE}); the same topics are published in ${locales.length - 1} other locales, linked below. Every locale's topic URL has the same path shape: ${SITE}/<locale>/topics/<slug>/.\n\n`;
for (const p of bookParts) {
	txt += `## ${p.title}\n\n`;
	for (const t of p.topics) txt += `- [${t.title}](${t.url})${t.description ? `: ${t.description}` : ''}\n`;
	txt += '\n';
}
txt += `## Locales\n\n`;
for (const l of locales) txt += `- [${l.name} (${l.code})](${l.url})\n`;
txt += `\n## Optional\n\n`;
txt += `- [Site map of topics as JSON](${SITE}/llms.json): machine-readable index with source Markdown URLs\n`;
txt += `- [Sitemap](${SITE}/sitemap.xml): every published page\n`;
txt += `- [Search index](${SITE}/search-index.json): full text of every page\n`;
txt += `- [Source repository](${REPO}): Markdown source, one directory per topic\n`;

const json = {
	name: title,
	description: summary,
	site: SITE,
	repository: REPO,
	defaultLocale: DEFAULT_LOCALE,
	topicUrlPattern: `${SITE}/{locale}/topics/{slug}/`,
	sourceUrlPattern: `${RAW}/locales/{locale}/topics/{slug}/index.md`,
	parts: bookParts.map((p) => ({ title: p.title, topics: p.topics })),
	locales,
	links: { searchIndex: `${SITE}/search-index.json`, llmsTxt: `${SITE}/llms.txt` }
};

writeFileSync(join(BUILD, 'llms.txt'), txt);
writeFileSync(join(BUILD, 'llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`llms: ${bookParts.reduce((n, p) => n + p.topics.length, 0)} topics, ${locales.length} locales`);
