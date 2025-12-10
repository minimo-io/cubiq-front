<script lang="ts">
	import { m } from '$paraglide/messages';
	import { ChevronDown } from '@lucide/svelte';
	import { productState } from '$stores/Product.state.svelte';
	import { Product } from '$lib/type/products.types';
	import { goto } from '$app/navigation';
	import { localizeHref } from '$paraglide/runtime';

	function formatProductName(product: Product | undefined): string | undefined {
		if (product) {
			return product.toLowerCase().replace(/^./, (char) => char.toUpperCase());
		}
	}
	let formattedActiveProduct = $derived(formatProductName(productState.active));
	let { productsWithPermission }: { productsWithPermission: string[] } = $props();
	// All products on the system
	const systemProducts = Object.values(Product);

	function setProduct(product: Product) {
		productState.active = product;
		goto(localizeHref(`/dashboard/${productState.active.toLowerCase()}`));
	}
</script>

<div class="flex justify-center">
	<div class="dropdown dropdown-bottom dropdown-center relative my-2">
		<div
			class="badge badge-xs absolute -top-[16px] left-1/2 -translate-x-1/2 transform px-3 font-bold tracking-widest uppercase"
		>
			{m.product()}
		</div>
		<button class="my-2 flex w-full justify-center hover:opacity-100">
			<div class="flex flex-row items-center gap-1 hover:opacity-50">
				<span class="text-primary font-pixel text-[20px] font-bold uppercase">
					{formattedActiveProduct || m.select()}
				</span>
				<ChevronDown class="text-primary h-4 w-4" />
			</div>
		</button>
		<ul
			tabindex="0"
			role="menu"
			class="dropdown-content menu bg-base-100 rounded-box border-base-200 z-[1] mt-2 w-36 border p-2 shadow"
		>
			{#each systemProducts as product}
				{#if product !== productState.active && productsWithPermission.includes(product)}
					<li role="presentation">
						<button
							role="menuitem"
							onclick={() => setProduct(product)}
							class="font-pixel text-[16px] tracking-wide uppercase"
						>
							{formatProductName(product)}
						</button>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
