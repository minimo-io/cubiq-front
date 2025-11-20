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

		<div class="text-accent mx-auto mt-5 max-w-[40%] text-center font-sans text-2xl">
			Plataforma Unificada de Produtos Digitais e APIs para PMEs e Startups focada em LATAM.
		</div>
		<div
			class="relative -top-5 mx-auto mt-5 mb-1 flex flex-col items-center justify-center gap-0 md:top-0 md:-left-4 md:flex-row"
		>
			<div class="flex items-center justify-center bg-black p-8">
				<div class="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{#each primaryProductsForLang as product, i (product.name)}
						{@const Icon = product.icon}
						<a
							href={product.url}
							class="card group w-full cursor-pointer border border-gray-800 bg-black transition-all duration-300 hover:border-red-500 md:w-65"
						>
							<div class="card-body relative p-6">
								<div
									class="absolute top-0 left-0 h-[62%] w-full border-b border-gray-800 bg-[url(/dots-2.png)] bg-cover"
								></div>
								<div class="mb-6 flex justify-center py-6">
									<Icon class="h-32 w-32 stroke-[0.5] text-red-500" />
								</div>

								<div class="mt-8 mb-0 flex items-center justify-between">
									<h2 class="card-title text-2xl font-bold tracking-wider text-white">
										{product.name}
									</h2>
									<ChevronRight
										class="h-5 w-5 text-white transition-transform group-hover:translate-x-1"
									/>
								</div>
								<p class="font-sans text-base leading-tight text-gray-400">
									<!-- {@html product.details} -->
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
