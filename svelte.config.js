import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// The vendored Lily components are written in TypeScript.
	preprocess: vitePreprocess(),
	kit: {
		// GitHub Pages serves plain files: prerender everything, no fallback SPA.
		adapter: adapter({ pages: 'build', assets: 'build', fallback: null, strict: true }),
		prerender: {
			handleHttpError: 'fail',
			handleMissingId: 'fail'
		}
	}
};
