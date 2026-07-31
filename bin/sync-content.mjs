#!/usr/bin/env node
// Vendor the book's Markdown into content/ so this site builds standalone.
//
// Source: $BOOK if set, else the sibling checkout ../health-economics-metrics.
// Run after the book changes:  npm run sync:content

import { cp, mkdir, rm, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const book = resolve(process.env.BOOK ?? join(siteRoot, '..', 'health-economics-metrics'));

if (!existsSync(join(book, 'README.md'))) {
	console.error(`No book found at ${book}. Set BOOK=/path/to/health-economics-metrics.`);
	process.exit(1);
}

// Files copied verbatim into content/. Everything here becomes a page or a link target.
// The book is currently README.md + topics/; the optional files are listed so that
// adding them upstream publishes them here without touching this script.
const files = ['README.md', 'GLOSSARY.md', 'INDEX.md', 'STYLE_GUIDE.md', 'CITATION.cff'];
const dirs = ['topics'];

const contentDir = join(siteRoot, 'content');
await rm(contentDir, { recursive: true, force: true });
await mkdir(contentDir, { recursive: true });

let count = 0;

for (const file of files) {
	const from = join(book, file);
	if (!existsSync(from)) {
		console.warn(`skip (missing): ${file}`);
		continue;
	}
	await cp(from, join(contentDir, file));
	count += 1;
}

for (const dir of dirs) {
	const from = join(book, dir);
	if (!existsSync(from)) {
		console.warn(`skip (missing): ${dir}/`);
		continue;
	}
	await mkdir(join(contentDir, dir), { recursive: true });
	for (const entry of await readdir(from)) {
		if (!entry.endsWith('.md')) continue;
		await cp(join(from, entry), join(contentDir, dir, entry));
		count += 1;
	}
}

// The icon doubles as the favicon and the social-card image, when the book has one.
const icons = [
	['assets/images/icon@600x600.png', 'icon-600.png'],
	['assets/images/icon@1200x1200.png', 'icon-1200.png']
];
for (const [from, to] of icons) {
	const src = join(book, from);
	if (!existsSync(src)) {
		console.warn(`skip (missing): ${from}`);
		continue;
	}
	await cp(src, join(siteRoot, 'static', to));
	count += 1;
}

const { size } = await stat(join(contentDir, 'README.md'));
console.log(`Synced ${count} files from ${book} (README.md ${size} bytes).`);
