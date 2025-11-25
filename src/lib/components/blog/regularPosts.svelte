<!-- src/lib/components/blog/regularPosts.svelte -->
<script lang="ts">
	import type { Post } from '$lib/type/blog.types';
	import { posts } from '$lib/data/posts';
	import { getLocale } from '$paraglide/runtime';
	import RegularPostsCard from './regularPostsCard.svelte';

	let articles: Post[] = posts[getLocale()] ?? [];
</script>

<div class="border-base-200 relative grid grid-cols-1 gap-1 border-b md:grid-cols-3 md:gap-0">
	{#each articles as article, i (i)}
		<RegularPostsCard {article} />
	{/each}
</div>
