<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from 'lily-design-system-svelte-headless';
	import PickerBar from 'lily-design-system-svelte-picker-bar';
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

	// No translated content exists yet, so the locale picker offers just
	// English — it still sets `lang`/`dir` on <html>, and grows to more
	// locales the day translated content lands.
	const locales = ['en'];

	const shareTargets = [
		{
			id: 'email',
			label: 'Email Link',
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
		},
		{
			id: 'linkedin',
			label: 'Share on LinkedIn',
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: 'Share on Reddit',
			href: (url, title) =>
				`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: 'Share on Bluesky',
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: 'Share on Mastodon',
			href: (url, title) =>
				`https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	];

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
			<span class="site-brand-mark" aria-hidden="true">⚕</span>
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

		<PickerBar
			class="site-controls"
			labels={{ theme: 'Theme', locale: 'Language', textSize: 'Text size', share: 'Share' }}
			themesUrl="{base}/assets/themes/"
			{themes}
			themeProps={{ defaultValue: 'light', detectFromSystem: true, storageKey: 'health-economics-metrics.theme' }}
			{locales}
			sizes={sizes}
			textSizeProps={{ defaultValue: 'medium', storageKey: 'health-economics-metrics.text-size' }}
			{shareTargets}
			shareProps={{
				title: bookTitle,
				copyLabel: 'Copy link',
				copiedLabel: 'Copied',
				copyFailedLabel: 'Copy failed'
			}}
		/>
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
