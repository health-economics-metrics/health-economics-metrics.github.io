import { book } from '$lib/server/book.js';

// The book's own title, from its README, shown in the header and the footer.
export function load() {
	return { bookTitle: book().title };
}
