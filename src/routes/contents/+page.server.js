import { book } from '$lib/server/book.js';

export function load() {
	const { parts, order } = book();
	return { parts, topicCount: order.length };
}
