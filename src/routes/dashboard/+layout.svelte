<script lang="ts">
	import MenuLeft from '$lib/components/Dashboard/MenuLeft.svelte';
	import HeaderButtonsDashboard from '$lib/components/Header/HeaderButtonsDashboard.svelte';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { productState } from '$stores/Product.state.svelte';
	import type { Product } from '$types/products.types.js';

	let { children, data } = $props();
	productState.active = data.selectedProduct as Product;

	const productsPermissionList: string[] = data.permissionList;
</script>

<div class="mx-auto flex flex-row">
	<!-- Left menu -->
	<MenuLeft products={productsPermissionList} />

	<!-- Dashboard content -->
	<div class="flex min-h-dvh flex-1 flex-col overflow-x-auto">
		<div
			class="border-base-200 flex h-[65px] {dashboardLeftMenuState.collapsed
				? ''
				: 'md:h-25'} items-center justify-between border-b"
		>
			<!-- Dashboard title -->
			<div class="text-primary pl-5 text-lg font-black uppercase">
				{productState.active} DASHBOARD
			</div>
			<!-- Dashboard buttons -->
			<nav class="relative z-20 flex items-center justify-between pr-10">
				<HeaderButtonsDashboard />
			</nav>
		</div>

		<!-- Actual content -->
		<div class="text-base-200 flex min-h-dvh overflow-x-auto text-center">
			{@render children()}
		</div>
	</div>
</div>
