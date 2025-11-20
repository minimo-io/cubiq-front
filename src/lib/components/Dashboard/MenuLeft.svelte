<!-- src/lib/components/Dashboard/MenuLeft.svelte -->
<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import HeaderLogo from '../Header/HeaderLogo.svelte';
	import ProductSwitchButton from '../Buttons/ProductSwitchButton.svelte';
	import {
		toggleDashboardLeftMenuCollapse,
		dashboardLeftMenuState
	} from '$stores/DashboardLeftMenu.state.svelte';
	import { productState } from '$stores/Product.state.svelte';
	import { Product } from '$types/products.types';
	import MenuCare from '../../../routes/dashboard/care/components/MenuCare.svelte';
	import MenuNotes from '../../../routes/dashboard/notes/components/MenuNotes.svelte';

	// State to track if menu is collapsed
	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);

	let { products }: { products: string[] } = $props();

	function toggleMenu() {
		toggleDashboardLeftMenuCollapse();
	}
</script>

<div
	class="border-base-200 flex min-h-dvh flex-col border-r transition-all duration-300 ease-in-out {isCollapsed
		? ''
		: 'md:w-60'}"
>
	<!-- Logo -->
	<div
		class="border-base-200 justify-center flex items-center border-b {isCollapsed ? '' : 'md:h-[108px] md:p-5'}"
	>
		<HeaderLogo isDashboard={true} {isCollapsed} />
	</div>
	<!-- Switch button -->
	<div class="border-base-200 relative {isCollapsed ? '' : 'h-[73px]'} hidden border-b md:block">
		<button
			onclick={toggleMenu}
			class="border-base-200 absolute -top-3 -right-3 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-black transition-all duration-200 hover:scale-110 md:flex"
		>
			{#if isCollapsed}
				<ChevronRight class="relative -right-[1px] h-[13px]" strokeWidth="3" />
			{:else}
				<ChevronLeft class="relative -left-[1px] h-[13px]" strokeWidth="3" />
			{/if}
		</button>
		<div class="{isCollapsed ? 'hidden' : 'hidden md:block'} ">
			<ProductSwitchButton productsWithPermission={products} />
		</div>
	</div>

	<!-- Actual menu -->
	<ul class="menu bg-grey-light h-full gap-3 {isCollapsed ? '' : 'md:w-60 md:gap-0'}">
		{#if productState.active == Product.CARE}
			<MenuCare />
		{:else if productState.active == Product.NOTES}
			<MenuNotes />
		{/if}
	</ul>
</div>

<!-- 
<style lang="postcss">
	@reference "tailwindcss";
</style> -->
