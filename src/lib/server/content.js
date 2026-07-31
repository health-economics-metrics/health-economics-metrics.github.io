// Access to the vendored book, keyed by content path ("topics/eq-5d.md").
//
// Server-only on purpose: the glob below inlines every Markdown file, and
// $lib/server guarantees none of it can reach a browser bundle. Pages read it
// from a `+page.server.js` load, which runs at build time under prerendering.

const modules = import.meta.glob('/content/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

/** @type {Record<string, string>} Content path -> raw Markdown. */
export const files = Object.fromEntries(
	Object.entries(modules).map(([path, source]) => [path.replace(/^\/content\//, ''), source])
);

/** Raw Markdown for a content path, or undefined. */
export function read(path) {
	return files[path];
}

/** Every topic slug present in content/topics, sorted A-Z. */
export function topicSlugs() {
	return Object.keys(files)
		.filter((path) => path.startsWith('topics/') && path.endsWith('.md'))
		.map((path) => path.slice('topics/'.length, -'.md'.length))
		.sort();
}
