<!-- src/lib/components/Home/Products.svelte -->
<script lang="ts">
	import ProductSingle from '$lib/components/Home/ProductSingle.svelte';
	// import { getLocale } from '$paraglide/runtime';
	import PillFlower from './PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from './Hr.svelte';
	import type { ProductData } from '$types/products.types';
	import { getLocale, localizeHref } from '$paraglide/runtime';
	import { getProductsFromLab } from '$lib/data/products.data';

	// const locale = $state(getLocale());
	const PRODUCTS_FROM_LAB = getProductsFromLab(getLocale());
	let drawerDataForLang = $state(PRODUCTS_FROM_LAB);
	let primaryProductsForLang = $derived.by(() => {
		return drawerDataForLang.filter((prod: ProductData) => prod.isMain);
	});
</script>

<!-- Products Slider Section -->
<section class="relative mt-0 px-0 pb-2 md:-top-8 md:px-12 lg:px-16">
	<Hr halfWidth={true} />

	<div class="md:pb-3">
		<div class="relative -top-6 pt-3 text-center md:-top-4 md:block md:scale-95">
			<PillFlower title={m.menuExperiments()} />
		</div>

		<div
			class="text-secondary mx-5 mt-2 mb-6 max-w-2xl text-center font-sans text-base md:mx-auto md:text-lg md:leading-6"
		>
			{@html m.labProductsSlogan()}
		</div>

		<div
			class="relative -top-5 mx-auto mb-1 flex scale-95 flex-col items-center justify-center gap-2 md:top-0 md:-left-4 md:mt-5 md:flex-row"
		>
			{#each primaryProductsForLang as product, i (product.name)}
				{@const align = i === 0 ? 'start' : i === drawerDataForLang.length - 1 ? 'end' : 'center'}

				<ProductSingle
					count={i}
					brand={product}
					{align}
					icon={product.icon}
					primary={product.primary}
					hideDetails={false}
					openInNewWindow={true}
				/>
			{/each}

			<!-- <div class="absolute -bottom-[40%] left-[55%] scale-80 opacity-20">
				<img src="/bgs/cross.svg" alt="cross" />
			</div> -->
		</div>
	</div>

	<div class="relative mb-8 block md:hidden">
		<Hr />
		<div
			class="absolute bottom-[-7px] left-1/2 h-[15px] w-[15px] -translate-x-1/2 bg-[url('/bgs/square.svg')] bg-contain bg-no-repeat"
		></div>
	</div>
</section>
