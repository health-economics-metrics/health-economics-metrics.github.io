import { book } from '$lib/server/book.js';
import { DEFAULT_THEMES } from '@lilydesignsystem/svelte-picker-bar';

export function load() {
	const { order, parts } = book();
	return { topicCount: order.length, partCount: parts.length, themeCount: DEFAULT_THEMES.length };
}
