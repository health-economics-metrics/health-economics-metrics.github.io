<!-- Vendored from Lily Design System: lily-design-system-svelte-headless/components/SectionList/SectionList.svelte
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

<!-- SectionList.svelte -->
<ul
    class={`section-list ${className}`}


    {...restProps}
>
    {@render children?.()}
</ul>
