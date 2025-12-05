<script lang="ts">
	import { ChevronDown, User } from '@lucide/svelte';
	import { getLocale } from '$paraglide/runtime';
	import type { User as UserType } from '$services/auth.service';
	import { enhance } from '$app/forms';
	import { toggleLoader } from '$stores/Loader.state.svelte';
	import { m } from '$paraglide/messages';
	import { page } from '$app/state';
	import { capitalize } from '$utils';

	let { user }: { user?: UserType } = $props();
	let locale = $state(getLocale());
</script>

<div class="dropdown dropdown-end">
	<button
		class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden items-center rounded-full px-3 py-3 md:flex"
	>
		<User class="h-5" strokeWidth="1" />

		{#if user}
			<span class="px-1 font-sans text-sm tracking-wider">
				{capitalize(user.name)}
			</span>
		{/if}
		<ChevronDown strokeWidth="1" class="h-4" />
	</button>

	<ul
		class="menu menu-base border-accent dropdown-content rounded-box z-1 mt-4 w-fit border bg-black p-2 px-3 font-sans font-normal tracking-widest shadow-md"
	>
		<li><a href="/">{m.configurations()}</a></li>

		<div class="my-1 border-b border-b-gray-700"></div>

		<li><a href="/">{m.invoicing()}</a></li>

		<div class="my-1 border-b border-b-gray-700"></div>

		<li>
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
			>
				<input type="hidden" name="redirect_to" value={page.url.pathname + page.url.search} />
				<button type="submit">{m.logout()}</button>
			</form>
		</li>
	</ul>
</div>
