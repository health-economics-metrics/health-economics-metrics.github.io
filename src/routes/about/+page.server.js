import { book } from '$lib/server/book.js';
import { themes } from '$lib/themes.js';

export function load() {
	const { order, parts } = book();
	return { topicCount: order.length, partCount: parts.length, themeCount: themes.length };
}
