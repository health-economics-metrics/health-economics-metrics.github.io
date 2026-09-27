<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import {
		ContentsList,
		ContentsListItem,
		ContentsNav,
		SectionHeading
	} from '@lilydesignsystem/svelte-headless';
	import { ui } from '$lib/i18n.js';

	let { data } = $props();
	const t = $derived(ui(page.params.locale));

	/** Anchor id for a part, so the sidebar and deep links can target it. */
	function partId(title) {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}
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
		<ContentsList class="contents-parts">
			{#each data.parts as part, partIndex (part.title)}
				<ContentsListItem class="contents-part" id={partId(part.title)}>
					<SectionHeading
						class="contents-part-heading"
						heading="{partIndex + 1} {part.title}"
						subtitle={t.topicsCountSubtitle(part.entries.length)}
					/>
					<ContentsList class="contents-part-list">
						{#each part.entries as entry, entryIndex (entry.slug)}
							<ContentsListItem class="contents-entry">
								<a class="contents-entry-link" href="{base}{entry.href}">{partIndex + 1}.{entryIndex} {entry.title}</a>
								{#if entry.blurb}
									<span class="contents-entry-blurb">{entry.blurb}</span>
								{/if}
							</ContentsListItem>
						{/each}
					</ContentsList>
				</ContentsListItem>
			{/each}
		</ContentsList>
	</ContentsNav>
</div>
