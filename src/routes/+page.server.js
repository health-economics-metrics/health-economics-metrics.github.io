import { render } from '$lib/markdown.js';
import { book } from '$lib/server/book.js';
import { read } from '$lib/server/content.js';

export function load() {
	const source = read('README.md') ?? '';
	const { title, summary } = render(source, 'README.md');
	const { order } = book();

	// The README opens with a summary and a "New here?" sentence, both of which
	// the hero and the Start here list already show. Render from the first part
	// heading onward so the page states each of them once.
	const partsStart = source.indexOf('\n## ');
	const { html } = render(partsStart === -1 ? source : source.slice(partsStart + 1), 'README.md');

	// The book's own "New here? Start with ..." sentence decides the starting
	// points, so the site never disagrees with the book about where to begin.
	const intro = /New here\?[^\n]*/.exec(source)?.[0] ?? '';
	const startHere = [...intro.matchAll(/\[([^\]]+)\]\(topics\/([\w.-]+)\.md\)/g)].map(
		([, label, slug]) => ({
			title: order.find((entry) => entry.slug === slug)?.title ?? label,
			blurb: order.find((entry) => entry.slug === slug)?.blurb ?? '',
			href: `/topics/${slug}/`
		})
	);

	return {
		title,
		summary,
		html,
		startHere
	};
}
