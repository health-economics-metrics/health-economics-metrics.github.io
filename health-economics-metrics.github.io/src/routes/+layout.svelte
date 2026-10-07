<script>
	import SearchGate from '#lib/SearchGate.svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { DEFAULT_LOCALE, localeLabel, matchLocale } from '#lib/locales.js';
	import { ui } from '#lib/i18n.js';

	let { data, children } = $props();

	// page.data is the merged data across the whole layout hierarchy, so on a
	// locale-scoped route this picks up that locale's own bookTitle (set by
	// [locale]/+layout.server.js, overriding this root layout's own
	// canonical-locale one) instead of always showing the English title in
	// the header/footer. The 404.html fallback is rendered without layout
	// data at all, so this falls back to something sensible rather than
	// throwing on a page that exists to be shown when something has already
	// gone wrong.
	const bookTitle = $derived(page.data?.bookTitle ?? data?.bookTitle ?? 'Health Economics Metrics');
	const locales = $derived(data?.locales ?? []);
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale ?? DEFAULT_LOCALE));

	// The header picker offers locales to switch TO, so the one already
	// showing is noise, not a choice — omit it rather than list it
	// alongside an aria-selected marker nothing in this compact dropdown
	// surfaces anyway. Outside a locale (the root picker, /about/) there's
	// no current locale to omit.
	const pickerLocales = $derived(locale ? locales.filter((code) => code !== locale) : locales);

	// Contents/Topics/Search only make sense once a locale is chosen; outside
	// a locale (the root picker, /about/) the nav only offers Home and About.
	const topLinks = $derived(
		locale
			? [
					{ href: `/${locale}/`, label: t.navHome },
					{ href: `/${locale}/contents/`, label: t.navContents },
					{ href: `/${locale}/topics/`, label: t.navTopicsAZ },
					{ href: `/${locale}/search/`, label: t.navSearch },
					{ href: '/about/', label: t.navAbout }
				]
			: [
					{ href: '/', label: t.navHome },
					{ href: '/about/', label: t.navAbout }
				]
	);

	const shareTargets = $derived([
		{
			id: 'email',
			label: t.shareEmailLabel,
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
		},
		{
			id: 'linkedin',
			label: t.shareLinkedinLabel,
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: t.shareRedditLabel,
			href: (url, title) =>
				`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: t.shareBlueskyLabel,
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: t.shareMastodonLabel,
			href: (url, title) =>
				`https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	]);

	const path = $derived(page.url.pathname);

	function current(href) {
		return path === resolve(`${href}`.slice(1)) || path === href;
	}

	// The locale picker only changes `lang`/`dir` and calls this — it never
	// navigates on its own. On a topic page, `localeLinks` (from book.js, via
	// each topic's .locale-peer-id) gives the exact URL for the same topic in
	// the target locale, since slugs can differ by locale. Off a topic page,
	// swapping the `/<code>/` prefix is exact (home/contents/topics/
	// search have no per-locale slug). With no locale in the URL at all
	// (the root picker, /about/), there's nothing to preserve — go to that
	// locale's home.
	let restoredOnce = false;

	// Read before the picker mounts and saves anything: did this browser
	// already choose a locale? If not, the first visit to "/" goes to the
	// locale matching navigator.language (e.g. 'cy_GB' → /cy-gb/) instead of
	// the default one the picker would otherwise restore.
	let hadSavedLocale = true;
	try {
		hadSavedLocale = typeof localStorage === 'undefined' || !!localStorage.getItem('health-economics-metrics.locale');
	} catch {
		hadSavedLocale = false;
	}

	function browserLocale() {
		if (hadSavedLocale || typeof navigator === 'undefined') return null;
		const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
		return matchLocale(tags, locales);
	}

	function navigateToLocale(next) {
		const restoring = !restoredOnce;
		restoredOnce = true;
		const links = page.data?.localeLinks;
		if (links?.[next]) {
			goto(resolve(`${links[next]}`.slice(1)), { refreshAll: true });
			return;
		}
		if (locale) {
			goto(resolve(`${path.replace(/^\/[\w-]+/, `/${next}`)}`.slice(1)), { refreshAll: true });
			return;
		}
		// A search (/?<target>) is on the root page: the picker's automatic
		// restore of the stored locale must not navigate away and drop it.
		if (page.url.pathname === '/' && page.url.search) return;
		// The URL is the source of truth. The picker's first onChange after a
		// full page load is its automatic restore of the saved locale, not a
		// user choice. On the root locale chooser that restore is wanted (it
		// sends a returning visitor to their language), but any other page
		// with no locale in its URL (/about/) must stay where the link took
		// the visitor.
		if (restoring && page.url.pathname !== '/') return;
		const target = restoring && page.url.pathname === '/' ? (browserLocale() ?? next) : next;
		goto(resolve(`${target}/`), { refreshAll: true });
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<SkipLink class="skip-link" href="#main" label={t.skipToContent} />

<Header class="site-header" label="Site">
	<div class="site-header-inner">
		<a class="site-brand" href={resolve('')}>
			<span class="site-brand-mark" aria-hidden="true">⚕</span>
			<span class="site-brand-name">{bookTitle}</span>
		</a>

		<nav class="site-nav" aria-label="Main">
			{#each topLinks as link (link.href)}
				<a
					href={resolve(link.href.slice(1))}
					aria-current={current(link.href) ? 'page' : undefined}
				>{link.label}</a>
			{/each}
			<a href="https://github.com/health-economics-metrics/health-economics-metrics">GitHub</a>
		</nav>

		{#snippet shareIcon()}
			<!-- Outline arrow, matching testingexamples.github.io's share-picker
			     icon: an explicit-size SVG (not an em-scaled text glyph), so it
			     sidesteps the --lily-picker-icon-scale font-size math entirely. -->
			<svg
				class="share-picker-icon"
				viewBox="0 0 16 16"
				width="1.05rem"
				height="1.05rem"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"></path></svg>
		{/snippet}

		<PickerBar
			class="site-controls"
			labels={{
				theme: t.pickerTheme,
				locale: t.pickerLanguage,
				textSize: t.pickerTextSize,
				share: t.pickerShare
			}}
			themesUrl={resolve('assets/themes/')}
			themeProps={{
				defaultValue: 'light',
				detectFromSystem: true,
				storageKey: 'health-economics-metrics.theme'
			}}
			locales={pickerLocales}
			localeProps={{
				value: locale ?? '',
				defaultValue: DEFAULT_LOCALE,
				storageKey: 'health-economics-metrics.locale',
				localeLabels: Object.fromEntries(locales.map((code) => [code, localeLabel(code)])),
				onChange: navigateToLocale
			}}
			textSizeProps={{
				defaultValue: 'normal',
				storageKey: 'health-economics-metrics.text-size'
			}}
			shareTargets={shareTargets}
			shareProps={{
				title: bookTitle,
				copyLabel: t.shareCopyLink,
				copiedLabel: t.shareCopied,
				copyFailedLabel: t.shareCopyFailed,
				children: shareIcon
			}}
		/>
	</div>
</Header>

<div class="site-body">
	<main id="main" class="site-main">
		<SearchGate {children} />
	</main>
</div>

<Footer class="site-footer" label="Site">
	<div class="site-footer-inner">
		<p>
			<strong>{bookTitle}</strong>{t.footerTaglineSuffix}
		</p>
		<p class="site-footer-note">
			{t.footerNote}
		</p>
		<nav class="site-footer-links" aria-label="Footer">
			{#if locale}
				<a href={resolve(`${locale}/contents/`)}>{t.navContents}</a>
				<a href={resolve(`${locale}/topics/`)}>{t.navTopicsAZ}</a>
				<a href={resolve(`${locale}/search/`)}>{t.navSearch}</a>
			{/if}

			<a href={resolve('about/')}>{t.navAbout}</a>

			<a
				href="https://github.com/health-economics-metrics/health-economics-metrics"
			>{t.footerSourceLink}</a>
		</nav>
	</div>
</Footer>
