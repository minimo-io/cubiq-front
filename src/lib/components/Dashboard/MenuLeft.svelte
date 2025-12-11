<script lang="ts">
	import { ChevronDown, ChevronLeft, ChevronRight } from '@lucide/svelte';
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
	import { m } from '$paraglide/messages';
	import { saveContextToCookie, userContextState } from '$stores/UserContext.state.svelte';
	import type { CompanyContext } from '$types/caresync-machines.types';

	// State to track if menu is collapsed
	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);
	let careActiveUserContext = $derived(userContextState.active);

	let { products }: { products: string[] } = $props();

	function toggleMenu() {
		toggleDashboardLeftMenuCollapse();
	}

	function setUserContext(context: CompanyContext) {
		userContextState.active = context;
		saveContextToCookie(context);

		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	}
</script>

<div
	class="border-base-200 flex min-h-dvh flex-col border-r transition-all duration-300 ease-in-out {isCollapsed
		? ''
		: 'md:w-60'}"
>
	<!-- Logo -->
	<div
		class="border-base-200 flex items-center justify-center border-b {isCollapsed
			? ''
			: 'md:h-[108px] md:p-5'}"
	>
		<HeaderLogo isDashboard={true} {isCollapsed} />
	</div>
	<!-- Switch button -->
	<div
		class="border-base-200 relative {isCollapsed
			? ''
			: productState.active == 'CARE'
				? 'h-[120px]'
				: 'h-[73px]'} hidden border-b md:block"
	>
		<!-- <button
			onclick={toggleMenu}
			class="border-base-200 absolute -top-3 -right-3 hidden h-[23px] w-[23px] items-center justify-center rounded-full border bg-black transition-all duration-200 hover:scale-110 md:flex"
		>
			{#if isCollapsed}
				<ChevronRight class="relative -right-[1px] h-[13px]" strokeWidth="3" />
			{:else}
				<ChevronLeft class="relative -left-[1px] h-[13px]" strokeWidth="3" />
			{/if}
		</button> -->
		<div class="{isCollapsed ? 'hidden' : 'hidden md:block'} ">
			<ProductSwitchButton productsWithPermission={products} />
		</div>

		{#if productState.active == Product.CARE && !isCollapsed}
			<div class="border-base-200 flex justify-center border-t">
				<div class="dropdown dropdown-bottom dropdown-center relative">
					<div
						class="badge badge-xs absolute -top-[9px] left-1/2 -translate-x-1/2 transform px-3 font-bold tracking-widest uppercase"
					>
						{m.organization()}
					</div>
					<button tabindex="0" class="my-2 flex w-full justify-center hover:opacity-100">
						<div class="flex flex-row items-center gap-1 hover:opacity-50">
							<span class="text-primary font-pixel text-[20px] font-bold uppercase">
								{careActiveUserContext?.company_name || m.select()}
							</span>
							<ChevronDown class="text-primary h-4 w-4" />
						</div>
					</button>
					<ul
						tabindex="0"
						role="menu"
						class="dropdown-content menu bg-base-100 border-base-200 rounded-box z-[1] mt-2 w-36 border p-2 shadow"
					>
						{#each userContextState.contexts as context}
							<li role="presentation">
								<button
									role="menuitem"
									onclick={() => setUserContext(context)}
									class="font-pixel text-[16px] tracking-wide uppercase"
								>
									{context.company_name}
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>

	<!-- Actual menu -->
	<ul class="menu bg-grey-light h-full gap-3 px-2 {isCollapsed ? '' : 'md:w-60 md:gap-0'}">
		{#if productState.active == Product.CARE}
			<MenuCare />
		{:else if productState.active == Product.NOTES}
			<MenuNotes />
		{/if}
	</ul>
</div>
