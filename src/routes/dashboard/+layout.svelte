<!-- src/routes/dashboard/+layout.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import MenuLeft from '$lib/components/Dashboard/MenuLeft.svelte';
	import HeaderButtonsDashboard from '$lib/components/Header/HeaderButtonsDashboard.svelte';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { pageTitleState } from '$stores/PageTitle.state.svelte.js';
	import { productState } from '$stores/Product.state.svelte';
	import type { Product } from '$types/products.types.js';
	import { getPageTitle } from '$lib/data/dashboards/pageTitle.js';
	import { EllipsisVertical } from '@lucide/svelte';
	import { m } from '$paraglide/messages';
	import { browser } from '$app/environment';

	let { children, data } = $props();
	productState.active = data.selectedProduct as Product;

	const productsPermissionList: string[] = data.permissionList;

	// Reactive title update based on route.id and product
	$effect(() => {
		if (productState.active && page.route.id) {
			const pageTitle = getPageTitle(page.route.id, productState.active);
			if (pageTitle) {
				pageTitleState.title = pageTitle.title;
				pageTitleState.documentTitle = pageTitle.documentTitle || pageTitle.title;
				pageTitleState.breadcrumb = pageTitle.breadcrumb || [];
			} else {
				// Fallback
				pageTitleState.title = `${productState.active} Dashboard`;
				pageTitleState.documentTitle = `${productState.active} Dashboard`;
				pageTitleState.breadcrumb = [{ label: productState.active }];
			}
		}
	});

	function goBack() {
		if (browser) {
			window.history.back();
		}
	}

	function navigateToBreadcrumb(path: string) {
		goto(path);
	}
</script>

<svelte:head>
	<title>{pageTitleState.documentTitle}</title>
</svelte:head>

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
			<!-- Dashboard title with breadcrumb -->
			<div
				class="text-primary flex max-w-full items-center justify-center gap-1 pl-5 text-lg font-black uppercase"
			>
				{#if pageTitleState.breadcrumb && pageTitleState.breadcrumb.length > 1}
					<!-- Mobile dropdown -->
					<details class="dropdown mr-1 rounded-xs border sm:hidden">
						<summary
							class="btn btn-ghost btn-xs btn-circle text-primary flex list-none items-center"
							aria-label="Show full path"
						>
							<EllipsisVertical class="h-4" />
						</summary>
						<ul
							class="dropdown-content menu bg-base-100 rounded-box border-base-content/10 z-[1] w-52 border p-2 text-sm font-bold lowercase italic shadow-lg"
						>
							<li><button onclick={goBack}>{m.back()}</button></li>
							{#each pageTitleState.breadcrumb.slice(0, -1) as crumb}
								<li>
									{#if crumb.path}
										<button
											onclick={() => navigateToBreadcrumb(crumb.path!)}
											class="text-base-content hover:bg-base-200 lowercase"
										>
											{crumb.label}
										</button>
									{:else}
										<span class="text-base-content lowercase">{crumb.label}</span>
									{/if}
								</li>
							{/each}
						</ul>
					</details>

					<!-- Desktop breadcrumb -->
					<div
						class="hidden items-center overflow-hidden whitespace-nowrap opacity-60 sm:inline-flex"
					>
						{#each pageTitleState.breadcrumb.slice(0, -1) as crumb, i}
							{#if crumb.path}
								<button
									onclick={() => navigateToBreadcrumb(crumb.path!)}
									class="lowercase transition-opacity hover:opacity-100"
								>
									{crumb.label}
								</button>
							{:else}
								<span class="lowercase">{crumb.label}</span>
							{/if}
							{#if i < pageTitleState.breadcrumb.length - 2}
								<span class="mx-2">/</span>
							{/if}
						{/each}
						<span class="mx-2">/</span>
					</div>
				{/if}

				<span class="truncate lowercase">{pageTitleState.title}</span>
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
