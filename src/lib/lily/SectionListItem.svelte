<!-- Vendored from Lily Design System: lily-design-system-svelte-headless/components/SectionListItem/SectionListItem.svelte
     Do not edit here. Edit upstream, then: npm run sync:lily -->
<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        class: className = "",
        label = undefined,
        current = false,
        children,
        ...restProps
    }: {
        label?: string;
        current?: boolean;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- SectionListItem.svelte -->
<li
    class={`section-list-item ${className}`}


    aria-current={current ? "page" : undefined}
    {...restProps}
>
    {@render children?.()}
</li>
