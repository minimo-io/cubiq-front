<script lang="ts">
	import { locales } from '$paraglide/runtime';
	import { page } from '$app/state';
	import { redirectLocale, getLocaleName } from '$utils';

	// import { page } from '$app/state';

	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	// import { redirectHref } from '$lib/utils';
	// import { logout } from '$lib/graphql/auth';
	// import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { m } from '$paraglide/messages';

	// let returnUrl = $derived(page.url.href);

	async function handleLogout() {
		console.log('Simulated logout');
		// event.preventDefault();
		// toggleLoader();
		// let logoutResult = logout();
		// redirectHref(returnUrl);
	}
</script>

<div class="flex flex-1 flex-col px-0 text-xs">
	{#each locales as locale, i}
		<button
			type="button"
			onclick={() => redirectLocale(locale, page.url.href)}
			class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex items-center justify-center gap-2 self-center text-left align-middle">
				<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[17px]" />
				<span class="self-center font-semibold capitalize">{getLocaleName(locale)}</span>
			</div>
		</button>
	{/each}

	<!-- Item with submenu -->
	<!-- <button
		onclick={() => openSubmenu('account_loggedin', 'Meus pedidos')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Truck class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Meus pedidos</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button> -->

	<!-- Item with submenu -->
	<!-- <button
		onclick={() => openSubmenu('account_myaddresses', 'Meus endereços')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<House class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Meus dados</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button> -->
	<!-- Item with submenu -->
	<!-- <button
		onclick={() => openSubmenu('account_emailpreferences', 'Preferências de e-mail')}
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Mail class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Preferências de e-mail</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => handleLogout()}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<LogOut class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.exit()}</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button> -->

	<!-- Assinaturas -->
	<!-- <div class="flex flex-col px-0 text-xs">
		<div class="border-grey-lighter flex items-center border-b px-[30px]">
			<h2 class="my-5 text-base font-extrabold uppercase">Benefícios</h2>
		</div>
	</div>
	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Sparkle class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Assinatura ao clube</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button> -->
	<!-- <button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<UsersRound class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Compras coletivas</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button>

	<button
		class="border-grey-lighter font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		onclick={() => alert('Soon')}
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Coins class="mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">Cashback</span>
		</div>
		<div class="text-grey-medium flex flex-row self-center align-middle">
			<ChevronRight class="aspect-1 text-grey-dark w-4" />
		</div>
	</button> -->
</div>
