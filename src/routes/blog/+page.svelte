<script lang="ts">
	import RegularPosts from '$lib/components/blog/regularPosts.svelte';
	import TopPosts from '$lib/components/blog/topPosts.svelte';
	import CtaContact from '$lib/components/CtaContact.svelte';
	import HeaderDefined from '$lib/components/Header/HeaderDefined.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { m } from '$paraglide/messages';

	// let { data, form }: PageProps = $props();
	// let { form }: PageProps = $props();
</script>

<Meta title="Blog" description={m.metaLoginDescription()} />
<HeaderDefined headerButtons="institutional" mobileBorderB={true} />

<main>
	<div
		class="max-w-fw border-x-base-200 relative container my-0 text-center md:mx-auto md:border-0 md:border-x"
	>
		<TopPosts />

		<div class="border-base-200 flex items-center justify-between border-b px-6 py-8 md:px-12">
			<div
				class="text-left font-sans text-[25px] leading-tight font-black md:text-[36px] md:leading-normal"
			>
				{m.latestNews()}
			</div>
			<div class="text-right font-sans text-sm md:text-base">
				{m.subscriveVia()} <a href="/#" class="text-primary font-bold">RSS</a>
				{m.or()}
				<a href="/#" class="text-primary font-bold">Email</a>
			</div>
		</div>

		<RegularPosts />

		<CtaContact />

		<!-- Decoration 1 -->
		<div class="absolute -top-[5%] right-[20%] z-10 scale-40 opacity-60 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
		<!-- Decoration 2 -->
		<div class="absolute -top-[5%] -left-[10%] z-10 scale-40 opacity-80 md:bottom-[10%]">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</main>
