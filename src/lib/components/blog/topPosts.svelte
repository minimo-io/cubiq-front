<script lang="ts">
	import type { Post } from '$lib/type/blog.types';
	import TopPostsCard from './topPostsCard.svelte';
	import { featuredPosts } from '$lib/data/featuredPosts';
	import { getLocale } from '$paraglide/runtime';

	let articles: Post[] = featuredPosts[getLocale()] ?? [];
</script>

<div class="border-base-200 relative grid grid-cols-1 gap-1 border-b md:grid-cols-3 md:gap-0">
	{#each articles as article, i (i)}
		<TopPostsCard {article} />
	{/each}
</div>
