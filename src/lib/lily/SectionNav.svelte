<!-- Vendored from Lily Design System: lily-design-system-svelte-headless/components/SectionNav/SectionNav.svelte
     Do not edit here. Edit upstream, then: npm run sync:lily -->
<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        class: className = "",
        label = undefined,
        children,
        ...restProps
    }: {
        label?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SectionNav.svelte -->
<nav
    class={`section-nav ${className}`}

    aria-label={label}
    {...restProps}
>
    {@render children?.()}
</nav>
