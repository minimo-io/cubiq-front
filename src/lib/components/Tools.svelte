<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { CircleQuestionMark, X } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let showButton = $state(true);
	let scrollY = $state(0);

	let dropdownButton: HTMLDivElement | undefined = $state();
	let dropdownContainer: HTMLDivElement | undefined = $state();
	let isMenuOpen = $state(false);
	let mobileMenu: HTMLUListElement | undefined = $state();

	let servicesOpen = $state(false);
	// Reactive width based on servicesOpen state
	const menuWidth = $state('12rem'); // w-64 : w-52	

	// Show button when user scrolls down 300px
	$effect(() => {
		showButton = scrollY >= 0;
	});

	onMount(() => {
		const updateScrollY = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', updateScrollY);

		// Monitor focus changes to detect dropdown state
		if (dropdownButton) {
			dropdownButton.addEventListener('focus', () => {
				isMenuOpen = true;
			});

			dropdownButton.addEventListener('blur', () => {
				setTimeout(() => {
					if (!dropdownContainer?.contains(document.activeElement)) {
						isMenuOpen = false;
						servicesOpen = false;
					}
				}, 100);
			});
		}		

		// Close when clicking a menu item
		if (dropdownContainer) {
			dropdownContainer.addEventListener('click', (e) => {
				if ((e.target as HTMLElement).tagName === 'A') {
					isMenuOpen = false;
					servicesOpen = false;
					dropdownButton?.blur();
				}
			});
		}

		return () => {
			window.removeEventListener('scroll', updateScrollY);
		};



	});

	function showTools() {
		alert(`${m.soon()}`);
	}
</script>

<svelte:window bind:scrollY />

{#if showButton}

	<!-- Menu -->
	<div bind:this={dropdownContainer} class="dropdown dropdown-left dropdown-top bg-transparent hover:bg-primary-700 active:bg-primary-800 fixed right-(--cubiq-app-margin) bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-none text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:translate-y-0 sm:bottom-4 sm:h-10 sm:w-10 md:right-8 md:bottom-8 md:h-12 md:w-12 ">
		<div bind:this={dropdownButton} tabindex="0" role="button" class="btn btn-circle" >
			{#if isMenuOpen}
				<X class="animate__animated animate__rotateIn animate__faster h-5 w-5" />
			{:else}
				<CircleQuestionMark class="h-5" />
			{/if}
		</div>
		<ul
			bind:this={mobileMenu}
			tabindex="-1"
			style="width: {menuWidth}; transition: width 300ms cubic-bezier(0.33, 1, 0.68, 1);"
			class="w-[100px]! dropdown-content menu-sm menu z-50 mt-3 gap-2 rounded-box font-sans rounded-lg bg-black border border-accent tracking-wider! py-3 shadow-xl"
		>
			<li>
				<a href="mailto:{AppConfig.cubiq.socials.email}">
					Email
				</a>
			</li>
			<li><a href="{ AppConfig.cubiq.socials.telegram }">Telegram</a></li>
			<li><a href="{ AppConfig.cubiq.socials.nostr }">Nostr</a></li>
		</ul>
	</div>	



{/if}
