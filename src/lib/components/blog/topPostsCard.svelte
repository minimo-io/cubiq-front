<script lang="ts">
	import type { Post, PostAuthor } from '$lib/type/blog.types';
	import { localizeHref } from '$paraglide/runtime';
	import { authorsComposeName } from '$utils';

	interface Props {
		article: Post;
		maxExcerptLength?: number; // Optional prop to configure max length
	}

	let { article, maxExcerptLength = 300 }: Props = $props();

	// Create a reactive variable that truncates the excerpt
	const truncatedExcerpt = $derived(() => {
		// Strip HTML tags first to get clean text for length calculation
		const textOnly = article.excerpt.replace(/<[^>]*>/g, '');

		if (textOnly.length <= maxExcerptLength) {
			return article.excerpt;
		}

		// Find the last complete word within the limit
		const truncated = textOnly.substring(0, maxExcerptLength);
		const lastSpaceIndex = truncated.lastIndexOf(' ');
		const finalText = lastSpaceIndex > 0 ? truncated.substring(0, lastSpaceIndex) : truncated;

		// If original had HTML, we need to be more careful
		// For now, return plain text with ellipsis
		return finalText + '...';
	});
</script>

<!-- Blog Card -->
<a
	href={localizeHref(`${article.slug}`)}
	class="group border-base-200 hover:text-secondary relative flex flex-col justify-start border-b p-(--cubiq-app-margin) pb-10 text-white transition-colors hover:bg-white md:border-r md:border-b-0 md:p-12 md:pb-12"
>
	<!-- Header -->
	<div class="mt-2 flex items-center justify-between">
		<div class="text-2xl font-bold group-hover:text-black">
			{#if article.icon}
				{@const Icon = article.icon}
				<Icon
					strokeWidth={article.isMain ? '2' : '1'}
					class={['text-primary', article.isMain ? 'h-12 w-12' : 'h-9 w-9']}
				/>
			{/if}
		</div>

		<div class="text-secondary font-sans text-sm group-hover:text-black">{article.date}</div>
	</div>

	<!-- Title -->
	<h2
		class={[
			'mt-10 text-left font-sans  font-black group-hover:text-black',
			article.isMain
				? 'text-[25px] leading-[31px] md:text-[36px] md:leading-[40px]'
				: 'text-[20px] leading-[23px] md:text-[26px] md:leading-[33px]'
		]}
	>
		{article.title}
	</h2>

	<!-- Content -->
	<div class="relative">
		<!-- Overlay -->
		{#if !article.isMain}
			<div
				class="pointer-events-none absolute top-[50%] right-0 bottom-0 left-0
               z-50 bg-gradient-to-b from-transparent
               to-black opacity-100 group-hover:to-white"
			></div>
		{/if}
		<p
			class={[
				'text-secondary relative z-10 mt-5 overflow-hidden text-left font-sans text-sm group-hover:text-black md:line-clamp-none',
				article.isMain ? '' : 'line-clamp-4'
			]}
		>
			{@html truncatedExcerpt()}
		</p>
	</div>

	<!-- Footer -->
	<div class="mt-6 flex items-center space-x-2">
		{#if article.authors.length > 1}
			<div>
				{#each article.authors.reverse() as author, i (i)}
					<div class={['avatar', i != 0 && '-left-3']}>
						<div class="h-6 w-6 rounded-full">
							<img src={author.avatar} alt="author-{i}" />
						</div>
					</div>
				{/each}
			</div>
			<span class="font-sans text-sm font-bold tracking-wide group-hover:text-black">
				{authorsComposeName(article.authors.reverse())}
			</span>
		{:else}
			<img
				src={article.authors[0].avatar}
				alt="Author"
				class="h-6 w-6 rounded-full group-hover:ring-2 group-hover:ring-black"
			/>
			<span class="font-sans text-sm font-bold tracking-wide group-hover:text-black">
				{article.authors[0].fullName}
			</span>
		{/if}
	</div>
</a>
