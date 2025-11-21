<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import Hr from '../Hr.svelte';
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import type { ProductData } from '$types/products.types';
	import { getLocale } from '$paraglide/runtime';
	import { getProducts } from '$lib/data/products.data';

	let PRODUCTS = getProducts(getLocale());
	let drawerDataForLang = $state(PRODUCTS);

	let primaryProductsForLang = $derived.by(() => {
		return drawerDataForLang.filter((prod: ProductData) => prod.isMain);
	});
</script>

<!-- Products Slider Section -->
<section class=" relative mt-7 px-0 pb-5 md:-top-[18px] md:mt-0 md:px-12 lg:px-16">
	<Hr halfWidth={true} />

	<div class="md:pb-3">
		<div class="relative -top-1 hidden scale-95 text-center md:block">
			<PillFlower title={m.menuProducts()} />
		</div>

		<h2 class="text-center text-[28px] tracking-wide md:hidden">{m.menuProducts()}</h2>
		<div
			class="text-accent mx-auto mt-5 w-full text-center font-sans text-xl md:flex md:max-w-[40%] md:text-2xl"
		>
			{@html m.homeProductsSlogan()}
		</div>
		<div
			class="relative -top-5 mx-auto mt-5 mb-1 flex flex-col items-center justify-center gap-0 md:top-0 md:-left-4 md:flex-row"
		>
			<div class="flex items-center justify-center bg-black px-3 py-8 md:p-3">
				<div class="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each primaryProductsForLang as product, i (product.name)}
						{@const Icon = product.icon}
						<a
							href={product.url}
							class="card group hover:border-primary/30 hover:shadow-primary/5 w-full cursor-pointer border border-gray-800 bg-black transition-all duration-200 hover:shadow-2xl md:w-65"
						>
							<div class="card-body relative p-6">
								<div
									class="group-hover:border-primary/30 absolute top-0 left-0 h-[62%] w-full border-b border-gray-800 bg-[url(/dots-2.png)] bg-cover transition-all duration-500"
								></div>
								<div class="mb-6 flex justify-center py-6">
									<Icon
										class="text-primary h-32 w-32 stroke-[0.5] transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								<div class="mt-8 mb-0 flex items-center justify-between">
									<h2
										class="card-title group-hover:text-primary text-2xl font-bold tracking-wider text-white transition-colors duration-300"
									>
										{product.name}
									</h2>
									<ChevronRight
										class="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
									/>
								</div>
								<p
									class="font-sans text-base leading-tight text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
								>
									{@html product.details}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>

			<div class="absolute -bottom-[40%] left-[55%] scale-80 opacity-20">
				<img src="/bgs/cross.svg" alt="cross" />
			</div>
		</div>
	</div>

	<div class="relative mb-8 block md:hidden">
		<Hr />
		<div
			class="absolute bottom-[-7px] left-1/2 h-[15px] w-[15px] -translate-x-1/2 bg-[url('/bgs/square.svg')] bg-contain bg-no-repeat"
		></div>
	</div>
</section>
