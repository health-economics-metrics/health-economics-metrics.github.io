import { error } from '@sveltejs/kit';
import { topic } from '$lib/server/book.js';
import { topicSlugs } from '$lib/server/content.js';

// Prerendering can only follow links it finds; listing the slugs guarantees
// every topic file gets a page even if the README ever stops linking one.
export function entries() {
	return topicSlugs().map((slug) => ({ slug }));
}

export function load({ params }) {
	const page = topic(params.slug);
	if (!page) error(404, `No topic named ${params.slug}`);
	return page;
}
