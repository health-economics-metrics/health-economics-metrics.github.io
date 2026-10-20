<script>
	import { resolve } from '$app/paths';
	import { SectionList, SectionListItem } from '@lilydesignsystem/svelte-headless';
	import { HERO } from '#lib/hero.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<div class="page page-home">
	<header class="book-hero">
		<h1>{data.title}</h1>
		<p class="book-hero-subheadline">{HERO['en-001'].tagline}</p>
		<p class="book-hero-summary">{data.summary}</p>
		<p class="book-hero-translations">
			{HERO['en-001'].translations}{#each data.translations as locale, i (locale.code)}{i ? ', ' : ''}<a
					href="/{locale.code}/">{locale.label}</a
				>{/each}
		</p>
	</header>

	<section class="locale-picker" aria-labelledby="choose-locale">
		<h2 id="choose-locale">Choose a language</h2>
		<p>The same {data.topicCount} topics, translated. English defaults to Oxford spelling; the other English variants and every other language are AI-translated and have not been reviewed by a fluent speaker.</p>
		<SectionList class="locale-list">
			{#each data.locales as locale (locale.code)}
				<SectionListItem class="locale-item">
					<a
						class="locale-link"
						href={resolve(`${locale.code}/`)}
					>
						{locale.label} 
						{#if locale.isDefault}<span class="locale-default-tag">default</span>{/if}
					</a>
				</SectionListItem>
			{/each}
		</SectionList>
	</section>
</div>

<style>
	.book-hero-subheadline {
		margin: 0 0 1rem;
		font-size: 1.3em;
		font-weight: 600;
	}
	.book-hero-translations {
		margin: 0;
		font-size: 0.9em;
	}
</style>
