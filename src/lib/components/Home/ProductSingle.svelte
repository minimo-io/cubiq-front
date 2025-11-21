<!-- src/lib/components/Home/ProductSingle.svelte -->
<script lang="ts">
	// import type { Brand } from '$lib/types/brands.types';
	import type { ProductData } from '$lib/type/products.types';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import Pill from '../Pill.svelte';
	import { type Icon as IconType } from '@lucide/svelte';

	interface Props {
		// brand: Brand;
		brand: ProductData;
		align: 'start' | 'center' | 'end';
		icon?: typeof IconType;
		minWidth?: string;
		primary?: boolean;
		count?: number;
		hideDetails?: boolean;
		openInNewWindow?: boolean;
	}

	let {
		brand,
		align,
		minWidth = '',
		primary = false,
		icon,
		count = 0,
		hideDetails = false,
		openInNewWindow = false
	}: Props = $props();

	// console.log(icon);
</script>

<a
	href={brand.url}
	target={openInNewWindow ? '_blank' : undefined}
	rel={openInNewWindow ? 'noopener noreferrer' : undefined}
	class={[
		'relative scale-95 rounded-sm transition duration-250 ease-in-out hover:opacity-100 md:scale-90 md:hover:scale-100',
		minWidth ? minWidth : 'min-w-full md:min-w-[250px]'
	]}
>
	<div class="my-2 mb-4 flex flex-col">
		<div
			class={[
				'flex items-center md:border-none md:pt-0 ',
				count == 0 ? 'fw-border-t-none pt-2' : 'pt-5',
				align == 'start' && 'justify-center md:justify-start',
				align == 'end' && 'justify-center md:justify-end',
				align != 'start' && align != 'end' && 'justify-center'
			]}
		>
			{#if count != 0}
				<Hr bottom={false} class="block md:hidden" />
			{/if}

			<div class="flex flex-col">
				<div class="flex items-center justify-center">
					<div class={[!brand.logo && 'mr-2']}>
						{#if brand.logo}
							<div class="flex items-center justify-center">
								<img
									src={brand.logo}
									alt={`${brand.name} logo`}
									class=" w-[75%] max-w-[75%] scale-90 self-center md:scale-100"
								/>
							</div>
						{:else if icon}
							{@const Icon = icon}
							<Icon strokeWidth="3" class="text-base-content mr-1" />
						{/if}
					</div>
					{#if !brand.logo}
						<span
							class="font-pixel text-base-content text-[42px] font-bold tracking-wider opacity-90 md:text-5xl"
						>
							{brand.name}
						</span>
					{/if}
				</div>

				<!-- Details -->

				<div
					class={[
						'flex scale-100 flex-col items-center justify-self-center md:scale-100',
						align == 'start' && 'justify-start',
						align == 'end' && 'justify-end',
						align != 'start' && align != 'end' && 'justify-center'
					]}
				>
					<!-- <Pill
						color={primary ? 'primary' : 'light'}
						text={brand.sloganSimple || brand.slogan || ''}
					/> -->
					{#if hideDetails === false}
						<div
							class="text-primary mt-[10px] text-center text-[18px] tracking-wider uppercase opacity-70"
						>
							{@html brand.details}
						</div>
					{/if}
				</div>
			</div>

			<!-- Prototyping -->
			{#if brand.underDevelopment}
				<div class="absolute top-2 right-2 scale-80 md:-top-5 md:-right-2">
					<Pill color="primary-transparent" text={m.prototyping()} customCss="!px-3" />
				</div>
			{/if}

			<!-- Online -->
			<!-- {#if brand.online}
				<div class="absolute top-5 right-12 scale-80 md:-top-5 md:-right-1">
					<Pill color="accent" text={'Online'} customCss="!px-3" />
				</div>
			{/if} -->
		</div>
	</div>
</a>
