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
</div>
