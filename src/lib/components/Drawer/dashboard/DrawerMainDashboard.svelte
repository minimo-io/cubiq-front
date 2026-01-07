<script lang="ts">
	import {
		ChevronRight,
		Headset,
		Globe,
		FlaskConical,
		Book,
		HeartPlus,
		FileClock,
		PenLine,
		ChevronDown
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	import { localizeHref, getLocale } from '$paraglide/runtime';

	import { getLocaleName } from '$utils';
	import { m, product } from '$paraglide/messages';
	import { AppConfig } from '$lib/configs';
	import { Product, type ProductData } from '$types/products.types';
	import { getProducts } from '$lib/data/products.data';
	import WhatsappButton from '$lib/components/WhatsappButton.svelte';
	import ProductSwitchButton from '$lib/components/Buttons/ProductSwitchButton.svelte';
	import { productState } from '$stores/Product.state.svelte';
	import { saveContextToCookie, userContextState } from '$stores/UserContext.state.svelte';
	import type { CompanyContext } from '$types/care/care.devices.types';

	let { products }: { products: string[] } = $props();

	const locale = $state(getLocale());
	let PRODUCTS = getProducts(locale);
	const drawerProductsForLang = $state(PRODUCTS.filter((prod: ProductData) => prod.isMain));

	let careActiveUserContext = $derived(userContextState.active);
	let userContextCount = $derived(userContextState.contexts.length);

	function setUserContext(context: CompanyContext) {
		userContextState.active = context;
		saveContextToCookie(context);

		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
	}
</script>

<div
	class="border-base-300 flex flex-1 flex-col overflow-x-hidden overflow-y-auto border-t px-0 text-xs"
>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('fw_menu_languages', m.languages())}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Globe class="mr-2 h-4 w-4 self-center" />
			<div class="self-center font-semibold">{m.languages()}</div>
			<div class="text-secondary ml-1 flex items-center gap-1">
				<span>—</span>
				<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[16px]" />
				<span class="capitalize">{getLocaleName(locale)}</span>
			</div>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<!-- Product switcher -->
	<div class="border-base-300 border-b">
		<ProductSwitchButton productsWithPermission={products} />
	</div>

	<!-- User context -->
	{#if productState.active == Product.CARE && userContextCount > 1}
		<div class="border-base-200 flex justify-center border-t border-b">
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

	<!-- Fixed Extra Menu -->
	<h2 class="font-pixel my-4 px-[30px] text-base font-extrabold tracking-wider uppercase">
		{m.resources()}
	</h2>

	<!-- Docs -->
	<a
		href={localizeHref(AppConfig.cubiq.docs)}
		target="_blank"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Book class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.documentation()}</span>
		</div>
	</a>

	<!-- API Status -->
	<a
		href={AppConfig.status}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<HeartPlus class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.apiStatus()}</span>
		</div>
	</a>

	<!-- Changelog -->
	<a
		href={localizeHref('/roadmap')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<FileClock class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Roadmap</span>
		</div>
	</a>

	<!-- Blog -->
	<a
		href={localizeHref('/blog')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<PenLine class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Blog</span>
		</div>
	</a>

	<h2 class="font-pixel my-4 px-[30px] text-base font-extrabold tracking-wider uppercase">
		{m.others()}
	</h2>

	<!-- Item with submenu -->
	<a
		href={localizeHref('/lab')}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<FlaskConical class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.menuLab()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<!-- <ChevronRight class="aspect-1 text-grey-dark w-4" /> -->
		</div>
	</a>

	<!-- Item with submenu -->
	<div
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Headset class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.help()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<WhatsappButton />
		</div>
	</div>
</div>
