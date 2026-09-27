<script>
	import { page } from '$app/state';
	import { ContentsNav } from '@lilydesignsystem/svelte-headless';
	import PartsList from '$lib/PartsList.svelte';
	import { ui } from '$lib/i18n.js';

	let { data } = $props();
	const t = $derived(ui(page.params.locale));
</script>

<svelte:head>
	<title>{t.navContents} — {data.bookTitle}</title>
	<meta name="description" content={t.contentsMetaDescription(data.bookTitle)} />
</svelte:head>

<div class="page page-contents">
	<header class="page-header">
		<h1>{t.navContents}</h1>
		<p>
			{t.contentsIntro(data.topicCount, data.parts.length)}
		</p>
	</header>

	<ContentsNav class="contents" label={t.navContents}>
		<PartsList parts={data.parts} locale={page.params.locale} />
	</ContentsNav>
</div>
