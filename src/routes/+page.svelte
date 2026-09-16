<script>
	import { base } from '$app/paths';
	import { Badge, Card } from 'lily-design-system-svelte-headless';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-summary">{data.summary}</p>
		<p class="book-hero-meta">
			<Badge type="info">{data.topicCount} topics</Badge>
			<Badge>{data.partCount} parts</Badge>
			<a class="book-hero-action" href="{base}/contents/">Read the contents</a>
		</p>
	</header>

	{#if data.startHere.length}
		<section class="start-here" aria-labelledby="start-here">
			<h2 id="start-here">Start here</h2>
			<p>The three ideas everything else builds on.</p>
			<div class="card-grid">
				{#each data.startHere as item (item.href)}
					<Card class="start-card" heading={item.title} href="{base}{item.href}">
						<p>{item.blurb}</p>
					</Card>
				{/each}
			</div>
		</section>
	{/if}

	<article class="prose">
		{@html data.html}
	</article>
</div>
