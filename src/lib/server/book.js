// The book's structure, derived from the book's own README.
//
// README.md is the table of contents: each `## Heading` opens a part, and each
// `- [Title](topics/slug.md) — blurb` under it is a topic in reading order. That
// makes the site's ordering the book's ordering by construction — reorder the
// README upstream and the sidebar, the contents page, and previous/next all follow.

import { read, topicSlugs } from './content.js';
import { firstParagraph, render, splitTitle } from '../markdown.js';

const PART = /^##\s+(.+?)\s*$/;
const ENTRY = /^-\s+\[([^\]]+)\]\(topics\/([\w.-]+)\.md\)\s*(?:[—–-]\s*(.*))?$/;

function build() {
	const source = read('README.md') ?? '';
	const { title, body } = splitTitle(source);
	const parts = [];
	let current = null;
	let inFence = false;

	for (const line of body.split('\n')) {
		if (line.startsWith('```')) inFence = !inFence;
		if (inFence) continue;

		const part = PART.exec(line);
		if (part) {
			current = { title: part[1], id: null, entries: [] };
			parts.push(current);
			continue;
		}

		const entry = ENTRY.exec(line);
		if (entry && current) {
			current.entries.push({
				title: entry[1],
				slug: entry[2],
				blurb: entry[3] ?? '',
				href: `/topics/${entry[2]}/`
			});
		}
	}

	// Parts that carry no topics (the closing note on benchmark freshness, say)
	// belong on the home page as prose, not in the navigation.
	const navParts = parts.filter((part) => part.entries.length > 0);

	// Reading order across the whole book, for previous/next.
	const order = navParts.flatMap((part) =>
		part.entries.map((entry) => ({ ...entry, part: part.title }))
	);

	// Anything in content/topics that the README never links to would otherwise
	// be unreachable. Publish it in an overflow part rather than dropping it.
	const listed = new Set(order.map((entry) => entry.slug));
	const orphans = topicSlugs().filter((slug) => !listed.has(slug));
	if (orphans.length) {
		const entries = orphans.map((slug) => ({
			title: titleOf(slug),
			slug,
			blurb: '',
			href: `/topics/${slug}/`
		}));
		const part = { title: 'Also in this book', id: null, entries };
		navParts.push(part);
		order.push(...entries.map((entry) => ({ ...entry, part: part.title })));
	}

	return { title: title || 'Health Economics Metrics', parts: navParts, order };
}

/** The `# Title` of a topic file, falling back to its slug. */
function titleOf(slug) {
	const source = read(`topics/${slug}.md`);
	if (!source) return slug;
	return splitTitle(source).title || slug;
}

let cached = null;

/** The book: `{ title, parts: [{title, entries}], order: [...] }`. */
export function book() {
	return (cached ??= build());
}

/** Navigation neighbours for a topic, either side possibly null. */
export function neighbours(slug) {
	const { order } = book();
	const at = order.findIndex((entry) => entry.slug === slug);
	if (at === -1) return { index: -1, total: order.length, previous: null, next: null, part: null };
	return {
		index: at,
		total: order.length,
		previous: at > 0 ? order[at - 1] : null,
		next: at < order.length - 1 ? order[at + 1] : null,
		part: order[at].part
	};
}

/** A rendered topic page, or null when the slug has no content file. */
export function topic(slug) {
	const source = read(`topics/${slug}.md`);
	if (!source) return null;
	const rendered = render(source, `topics/${slug}.md`);
	return { slug, ...rendered, ...neighbours(slug) };
}

/** Compact records for listing and searching, without the rendered bodies. */
export function index() {
	return book().order.map((entry) => {
		const source = read(`topics/${entry.slug}.md`) ?? '';
		const { title, body } = splitTitle(source);
		return {
			slug: entry.slug,
			href: entry.href,
			title: title || entry.title,
			part: entry.part,
			blurb: entry.blurb,
			summary: firstParagraph(body),
			// Section headings make the search index cover "what's inside a topic"
			// (the math, the worked example, the pitfalls) without shipping bodies.
			sections: body
				.split('\n')
				.map((line) => /^##\s+(.+?)\s*$/.exec(line)?.[1])
				.filter(Boolean)
		};
	});
}
