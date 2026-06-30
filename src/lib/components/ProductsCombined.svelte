<!-- src/lib/components/Home/ProductsCombined.svelte -->
<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { getLocale } from '$paraglide/runtime';
	import { getApiBrandPairs } from '$lib/data/products.data';
	import { Product } from '$lib/type/products.types';
	import { toggleLoader } from '$lib/stores/Loader.state.svelte';
	import PillFlower from './PillFlower.svelte';
	import Hr from './Hr.svelte';

	let PAIRS = getApiBrandPairs(getLocale());
</script>

<section class="relative mt-7 px-0 pb-5 md:-top-[18px] md:mt-0 md:px-12 lg:px-16">
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
					{#each PAIRS as pair (pair.id)}
						{@const Icon = pair.api.icon}
						<div
							class="card {pair.id === Product.APIS
								? 'group hover:border-primary/30 hover:shadow-primary/5 border-dashed border-gray-800 transition-all duration-200 hover:shadow-2xl'
								: 'group hover:border-primary/30 hover:shadow-primary/5 border-gray-800 transition-all duration-200 hover:shadow-2xl'} flex w-full flex-col border bg-black md:w-65"
						>
							<a
								href={pair.api.url}
								onclick={(e) => {
									if (pair.id === Product.APIS) {
										e.preventDefault();
										toggleLoader();
										window.location.href = pair.api.url;
									}
								}}
								class="card-body relative block flex-1 p-6"
							>
								<div
									class="group-hover:border-primary/30 absolute top-0 left-0 h-[50%] w-full border-b border-gray-800 bg-[url(/dots-2.png)] bg-cover transition-all duration-500"
								></div>

								<div class="mb-4 flex justify-center py-4">
									<Icon
										class="text-primary h-24 w-24 stroke-[0.5] transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								{#if pair.api.unavailable}
									<div
										class="badge badge-sm badge-soft badge-primary bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary absolute top-3 right-3 font-sans text-xs!"
									>
										{m.unavailable()}
									</div>
								{:else if pair.api.underDevelopment}
									<div
										class="badge badge-sm badge-soft badge-primary bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary absolute top-3 right-3 font-sans text-xs!"
									>
										{m.underDevelopment()}
									</div>
								{/if}

								<div class="mt-6 mb-0 flex items-center justify-between">
									<h2
										class="card-title group-hover:text-primary text-2xl font-bold tracking-wider text-white uppercase transition-colors duration-300"
									>
										{pair.api.name}
									</h2>
									<ChevronRight
										class="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
									/>
								</div>

								<p
									class="font-sans text-base leading-tight text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
								>
									{@html pair.api.details}
								</p>
							</a>

							{#if pair.brand}
								<a
									href={pair.brand.url ?? '#'}
									target={pair.brand.newWindow ? '_blank' : undefined}
									rel={pair.brand.newWindow ? 'noopener noreferrer' : undefined}
									class="hover:bg-primary/5 flex items-center justify-between gap-3 border-t border-gray-800 px-6 py-4 transition-colors duration-300"
								>
									<div class="flex flex-col gap-1">
										<span class="font-sans text-[10px] tracking-widest text-gray-500 uppercase">
											{m.poweringLabel()}
										</span>
										{#if pair.brand.logo}
											<img
												src={pair.brand.logo}
												alt={pair.brand.name}
												class="h-5 w-auto object-contain"
											/>
										{:else}
											<span class="text-sm font-bold tracking-wider text-white uppercase">
												{pair.brand.name}
											</span>
										{/if}
									</div>
									<span
										class="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-wider text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
									>
										{m.visitLabel()}
									</span>
								</a>
							{:else}
								<div class="border-t border-gray-800 px-6 py-4">
									<span class="font-sans text-[10px] tracking-widest text-gray-600 uppercase">
										{m.exploreMoreLabel()}
									</span>
								</div>
							{/if}
						</div>
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
