<script>
	import { base } from '$app/paths';
	import { SearchInput, SectionList, SectionListItem } from '$lib/lily';

	let { data } = $props();

	let query = $state('');

	// Precomputed haystacks: one lowercased string per topic, so keystrokes do
	// no work beyond an indexOf per record.
	const haystacks = data.topics.map((topic) =>
		[topic.title, topic.part, topic.blurb, topic.summary, topic.sections.join(' ')]
			.join(' ')
			.toLowerCase()
	);

	const terms = $derived(query.toLowerCase().split(/\s+/).filter(Boolean));

	const results = $derived(
		terms.length === 0
			? []
			: data.topics
					.map((topic, i) => ({ topic, haystack: haystacks[i] }))
					.filter(({ haystack }) => terms.every((term) => haystack.includes(term)))
					// A hit in the title beats a hit anywhere else.
					.map(({ topic }) => ({
						topic,
						score: terms.filter((term) => topic.title.toLowerCase().includes(term)).length
					}))
					.sort((a, b) => b.score - a.score || a.topic.title.localeCompare(b.topic.title, 'en'))
					.map(({ topic }) => topic)
	);
</script>

<svelte:head>
	<title>Search — Health Economics Metrics</title>
	<meta name="description" content="Search every topic in Health Economics Metrics." />
</svelte:head>

<div class="page page-search">
	<header class="page-header">
		<h1>Search</h1>
		<p>
			Search all {data.topics.length} topics by title, part, summary, and section heading. Everything
			runs in your browser — nothing you type leaves this page.
		</p>
	</header>

	<form class="search-form" role="search" onsubmit={(event) => event.preventDefault()}>
		<SearchInput
			class="search-input"
			label="Search topics"
			bind:value={query}
			placeholder="QALY, discounting, cost per token…"
			autocomplete="off"
		/>
	</form>

	<div class="search-results" aria-live="polite">
		{#if terms.length === 0}
			<p class="search-hint">Type to search. Try <em>QALY</em>, <em>bed days</em>, or <em>ROI</em>.</p>
		{:else if results.length === 0}
			<p class="search-hint">
				No topics match <strong>{query}</strong>. Try a broader term, or browse the
				<a href="{base}/contents/">contents</a>.
			</p>
		{:else}
			<p class="search-count">
				{results.length}
				{results.length === 1 ? 'topic' : 'topics'}
			</p>
			<SectionList class="search-list">
				{#each results as topic (topic.slug)}
					<SectionListItem class="search-item">
						<a class="search-link" href="{base}{topic.href}">{topic.title}</a>
						<span class="search-part">{topic.part}</span>
						<span class="search-summary">{topic.blurb || topic.summary}</span>
					</SectionListItem>
				{/each}
			</SectionList>
		{/if}
	</div>
</div>
