<script>
	import { resolve } from '$app/paths';

	// The book's parts and chapters as one nested, numbered list — shared by
	// the Contents page and the home page (spec/contents-for-global-sharing-
	// with-svelte/index.md: "<integer> <title>" per part, "<decimal> <title>"
	// per chapter, no tiles/tables/flexbox/grid). An outer <ContentsList>
	// (<ol>) of parts, each a <ContentsListItem> (<li>) containing a further
	// <ContentsList> of that part's chapters — never independent sections.
	import { ContentsList, ContentsListItem, SectionHeading } from '@lilydesignsystem/svelte-headless';

	let { parts } = $props();

	/** Anchor id for a part, so deep links can target it. */
	function partId(title) {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}
</script>

<ContentsList class="contents-parts">
	{#each parts as part, partIndex (part.title)}
		<ContentsListItem class="contents-part" id={partId(part.title)}>
			<SectionHeading class="contents-part-heading" heading="{partIndex + 1} {part.title}" />
			<ContentsList class="contents-part-list">
				{#each part.entries as entry, entryIndex (entry.slug)}
					<ContentsListItem class="contents-entry">
						<a
							class="contents-entry-link"
							href="{resolve('')}{entry.href}"
						>{partIndex + 1}.{entryIndex} {entry.title}</a>

						{#if entry.blurb}
							<span class="contents-entry-blurb">{entry.blurb}</span>
						{/if}
					</ContentsListItem>
				{/each}
			</ContentsList>
		</ContentsListItem>
	{/each}
</ContentsList>
