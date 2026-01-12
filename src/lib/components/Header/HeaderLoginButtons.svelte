<script lang="ts">
	import { Command, Globe, Menu, Search, X } from '@lucide/svelte';
	import { page } from '$app/state';
	import HeaderMenu from './HeaderMenu.svelte';
	import { onMount } from 'svelte';
	import { openCommandPalette } from '$lib/stores/CommandPallete.state.svelte';
	import { m } from '$paraglide/messages';
	import { toggleDrawer, drawerState } from '$stores/DrawerState.state.svelte';
	import { getLocale, locales, localizeHref } from '$paraglide/runtime';
	import { getLocaleName, redirectLocale } from '$utils';

	let isMac = $state<boolean | null>(null);
	let locale = $state(getLocale());

	onMount(() => {
		isMac = /Mac/i.test(navigator.userAgent);
	});

	function handleHammerClick() {
		openCommandPalette(); // Call the global open function
	}
</script>

<div class="flex items-center gap-10 md:gap-16">
	<!-- <HeaderMenu /> -->
	<div class="flex items-center gap-[10px] md:gap-4">
		<!-- Desktop -->

		<div class="dropdown dropdown-end">
			<button
				class="bg-base-200 hover:bg-base-100 fw-header-fs relative hidden rounded-full px-3 py-3 md:block"
			>
				<img
					src="/flags/{locale}.png"
					alt="flag"
					class="absolute -top-2 -right-1 h-[22px] w-[22px]"
				/>
				<Globe class="h-5" strokeWidth="1" />
			</button>

			<ul class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
				{#each locales as locale, i}
					<li>
						<button class="capitalize" onclick={() => redirectLocale(locale, page.url.href)}>
							<img src="/flags/{locale}.png" alt="flag-{locale}" class="aspect-1 h-[17px]" />
							<span class="self-center font-semibold tracking-wider capitalize"
								>{getLocaleName(locale)}</span
							>
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<!-- Help -->
		<a
			href={localizeHref('/help')}
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:inline-block md:px-6 md:text-[15px]"
		>
			<span class="relative top-[1px] flex items-center"> {m.helpMe()} </span>
		</a>
		<!-- Sign-up -->
		<a
			href={localizeHref('/signup')}
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
		>
			<span class="relative top-[1px] flex items-center"> {m.signUp()} </span>
		</a>

		<!-- Mobile -->
		<button
			onclick={() => {
				// alert('Open drawer...');
				toggleDrawer();
			}}
			class="dropdown dropdown-end bg-base-200 hover:bg-base-100 fw-header-fs relative items-center rounded-full p-3 md:hidden"
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

		<!-- Desktop & Mobile -->
		<!-- <a
			href={localizeHref('/login')}
			class="bg-base-200 hover:bg-base-100 flex items-center rounded-full px-5 py-3 text-[13px] font-light uppercase md:px-6 md:text-[15px]"
		>
			<span class="relative top-[1px] flex items-center">
				<span class="mr-0 md:mr-[5px]">{m.login()}</span>
				<kbd class="kbd kbd-sm relative -top-[2px] hidden md:inline-block">L</kbd>
			</span>
		</a> -->
	</div>
</div>
