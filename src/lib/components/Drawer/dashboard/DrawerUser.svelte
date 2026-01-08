<!-- src/lib/components/Drawer/dashboard/DrawerUser.svelte -->
<script lang="ts">
	import { locales, localizeHref } from '$paraglide/runtime';
	import { page } from '$app/state';
	import { redirectLocale, getLocaleName } from '$utils';
	import { openSubmenu } from '$stores/DrawerState.state.svelte';
	import { m } from '$paraglide/messages';
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { goto } from '$app/navigation';

	async function handleLogout() {
		console.log('Simulated logout');
	}
</script>

<div class="flex flex-1 flex-col px-0 text-xs">
	<!-- Configurations Button -->
	<button
		type="button"
		onclick={() => goto(localizeHref('/soon'))}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex items-center justify-center gap-2 self-center text-left align-middle">
			<span class="self-center font-semibold capitalize">{m.configurations()}</span>
		</div>
	</button>

	<div class="my-1 border-b border-b-gray-700"></div>

	<!-- Invoicing Button -->
	<button
		type="button"
		onclick={() => goto(localizeHref('/soon'))}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex items-center justify-center gap-2 self-center text-left align-middle">
			<span class="self-center font-semibold capitalize">{m.invoicing()}</span>
		</div>
	</button>

	<div class="my-1 border-b border-b-gray-700"></div>

	<!-- Logout Form Button -->
	<form
		method="POST"
		action="/dashboard?/logout"
		use:enhance={() => {
			toggleLoader();
			return async ({ update }) => {
				toggleLoader();
				update();
			};
		}}
		class="w-full"
	>
		<input type="hidden" name="redirect_to" value={page.url.pathname + page.url.search} />
		<button
			type="submit"
			class="border-base-300 font-roboto text-grey-dark shine-effect flex w-full justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex items-center justify-center gap-2 self-center text-left align-middle">
				<span class="self-center font-semibold capitalize">{m.logout()}</span>
			</div>
		</button>
	</form>

	<!-- {#each locales as locale, i}
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
	{/each} -->
</div>
