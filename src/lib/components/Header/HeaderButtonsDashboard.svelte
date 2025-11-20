<script lang="ts">
	import { drawerState, toggleDrawer } from '$stores/DrawerState.state.svelte';
	import { Menu, X } from '@lucide/svelte';
	import ChatLlmButton from '../Buttons/ChatLlmButton.svelte';
	import HelpButton from '../Buttons/HelpButton.svelte';
	import LanguageButton from '../Buttons/LanguageButton.svelte';
	import NotificationsButton from '../Buttons/NotificationsButton.svelte';
	import { getLocale } from '$paraglide/runtime';
	import UserButton from '../Buttons/UserButton.svelte';
	import { page } from '$app/state';

	let user = $state(page.data.user);
	let locale = $state(getLocale());
</script>

<div class="flex items-center gap-10 md:gap-16">
	<div class="flex items-center gap-[10px] md:gap-4">
		<LanguageButton />
		<NotificationsButton />
		<UserButton {user} />
		<!-- <ChatLlmButton /> -->
		<HelpButton />

		<!-- On mobile -->
		<button
			onclick={() => {
				toggleDrawer();
			}}
			class="dropdown dropdown-end bg-base-200 hover:bg-base-100 fw-header-fs fixed right-0 mr-[20px] scale-100 items-center rounded-full p-3 md:hidden"
		>
			<img
				src="/flags/{locale}.png"
				alt="flag-{locale}"
				class="absolute -top-2 -right-1 h-[20px] w-[20px]"
			/>

			{#if drawerState.active}
				<X class="!mr-0 h-[22px]" />
			{:else}
				<Menu class="h-5" />
			{/if}
		</button>
	</div>
</div>
