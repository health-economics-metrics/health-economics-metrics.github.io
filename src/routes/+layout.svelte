<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from '$lib/lily';
	import { TextSizePicker, ThemePicker } from '$lib/lily-helpers';
	import { themes } from '$lib/themes.js';

	let { data, children } = $props();

	// The 404.html fallback is rendered without layout data, so this falls back
	// to something sensible rather than throwing on a page that exists to be
	// shown when something has already gone wrong.
	const bookTitle = $derived(data?.bookTitle ?? 'Health Economics Metrics');

	const topLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/contents/', label: 'Contents' },
		{ href: '/topics/', label: 'Topics A–Z' },
		{ href: '/search/', label: 'Search' },
		{ href: '/about/', label: 'About' }
	];

	const sizes = ['small', 'medium', 'large', 'x-large'];

	const path = $derived(page.url.pathname);

	function current(href) {
		return path === `${base}${href}` || path === href;
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<SkipLink class="skip-link" href="#main" label="Skip to content" />

<Header class="site-header" label="Site">
	<div class="site-header-inner">
		<a class="site-brand" href="{base}/">
			<span class="site-brand-mark" aria-hidden="true">£/QALY</span>
			<span class="site-brand-name">{bookTitle}</span>
		</a>

		<nav class="site-nav" aria-label="Main">
			{#each topLinks as link (link.href)}
				<a href="{base}{link.href}" aria-current={current(link.href) ? 'page' : undefined}>
					{link.label}
				</a>
			{/each}
			<a href="https://github.com/health-economics-metrics/health-economics-metrics">GitHub</a>
		</nav>

		<div class="site-controls">
			<TextSizePicker
				class="site-text-size-picker"
				label="Text size"
				{sizes}
				defaultValue="medium"
				storageKey="health-economics-metrics.text-size"
			/>
			<ThemePicker
				class="site-theme-picker"
				label="Theme"
				themesUrl="{base}/assets/themes/"
				{themes}
				defaultValue="light"
				detectFromSystem
				storageKey="health-economics-metrics.theme"
			/>
		</div>
	</div>
</Header>

<div class="site-body">
	<main id="main" class="site-main">
		{@render children()}
	</main>
</div>

<Footer class="site-footer" label="Site">
	<div class="site-footer-inner">
		<p>
			<strong>{bookTitle}</strong> — health economics math, examples, and reasoning for
			software engineers building for national health services.
		</p>
		<p class="site-footer-note">
			Figures in this book date quickly. Each topic dates its benchmarks in-line; re-verify
			before using any number in a live business case.
		</p>
		<nav class="site-footer-links" aria-label="Footer">
			<a href="{base}/contents/">Contents</a>
			<a href="{base}/topics/">Topics A–Z</a>
			<a href="{base}/search/">Search</a>
			<a href="{base}/about/">About</a>
			<a href="https://github.com/health-economics-metrics/health-economics-metrics">Source</a>
		</nav>
	</div>
</Footer>
