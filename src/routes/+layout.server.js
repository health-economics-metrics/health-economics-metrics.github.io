import { book } from '$lib/server/book.js';

// The navigation tree is the same on every page, so it loads once in the
// layout. Only titles and hrefs cross the wire — bodies stay on the server.
export function load() {
	const { title, parts } = book();
	return {
		bookTitle: title,
		parts: parts.map((part) => ({
			title: part.title,
			entries: part.entries.map(({ title, slug, href }) => ({ title, slug, href }))
		}))
	};
}
