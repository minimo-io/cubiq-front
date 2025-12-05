<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$paraglide/messages';
	import Meta from '$lib/components/Meta.svelte';
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import { authorsComposeName } from '$utils';
	import { localizeHref } from '$paraglide/runtime';
	import { ArrowLeft } from '@lucide/svelte';
	import Hr from '$lib/components/Hr.svelte';
	import Dot from '$lib/components/Dot.svelte';

	let { data }: { data: PageData } = $props();
	// Or destructure directly:
	// let { data: { post } }: { data: PageData } = $props();
</script>

<Meta title={data.post.title} description={data.post.excerpt} />
<HeaderDefined headerButtons="institutional" mobileBorderB={true} />

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<!-- Article -->
		<article class="!z-10 !w-full min-w-full py-8 md:px-38 md:py-16">
			<div class="mb-12 md:mb-18">
				<!-- Back button -->
				<div class="text-secondary relative -left-1 mx-auto mb-5 w-fit text-sm font-medium md:mb-8">
					<a href={localizeHref('/blog')} class="flex items-center">
						<ArrowLeft class="mr-[1px] h-3" />
						<div class="font-sans">Blog</div>
					</a>
				</div>

				<!-- Title -->
				<h1
					class="text-base-content mb-7 px-3 font-sans text-3xl text-[32px] font-black md:mb-10 md:px-22 md:text-[55px] md:leading-15 md:font-bold"
				>
					{data.post.title}
				</h1>

				<!-- Author  -->
				<div class="z-50 mx-auto flex w-fit scale-90 items-center space-x-2 md:scale-100">
					{#if data.post.authors.length > 1}
						<div>
							{#each data.post.authors.reverse() as author, i (i)}
								<div class={['avatar', i != 0 && '-left-3']}>
									<div class="h-6 w-6 rounded-full">
										<img src={author.avatar} alt="author-{i}" />
									</div>
								</div>
							{/each}
						</div>
						<span class="font-sans text-base font-bold tracking-wide group-hover:text-black">
							{authorsComposeName(data.post.authors.reverse())}
						</span>
					{:else}
						<img
							src={data.post.authors[0].avatar}
							alt="Author"
							class="h-6 w-6 rounded-full group-hover:ring-2 group-hover:ring-black"
						/>
						<span class="font-sans text-base font-bold tracking-wide group-hover:text-black">
							{data.post.authors[0].fullName}
						</span>
					{/if}
				</div>
			</div>

			<div class="relative block pb-5">
				<Hr bottom={false} />
				<div class="absolute -top-[0px] left-1/2 -translate-x-1/2 -translate-y-1/2">
					<Dot />
				</div>
			</div>

			<!-- Metadata -->
			<div
				class="text-secondary my-5 flex w-full justify-between font-sans text-sm md:my-10 md:text-base"
			>
				<div>{data.post.date}</div>
				<div>{'6 min read'}</div>
			</div>

			{#if data.post.image}
				<div class="relative flex justify-center pb-5">
					<img src={data.post.image} alt="post" class="img-rotate rounded-3xl" />
				</div>
			{/if}

			<!-- Excerpt -->
			<p
				class="text-secondary my-8 text-left font-sans text-lg leading-tight font-semibold tracking-wide md:my-8 md:text-2xl"
			>
				{data.post.excerpt}
			</p>

			<!-- Content -->
			<!-- <div class="fw-article-content text-left font-sans text-base text-[#ededed] md:text-lg"> -->
			<div
				class="fw-article-content prose min-w-full text-left font-sans text-base text-[#ededed] md:text-lg"
			>
				{@html data.post.content}
			</div>
		</article>

		<!-- Decoration -->
		<div
			class="absolute top-[0%] right-[10%] !z-0 w-fit scale-50 opacity-50 md:top-[5%] md:left-[20%] md:scale-90"
		>
			<img src="/bgs/cross.svg" alt="cross" />
		</div>

		<CtaContact />
	</div>
</main>
