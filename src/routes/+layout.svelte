<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import 'animate.css';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { closeDrawer } from '$lib/stores/DrawerState.state.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';
	import { onMount } from 'svelte';
	import { deLocalizeHref, localizeHref } from '$paraglide/runtime';
	import { browser } from '$app/environment';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { navigating, page } from '$app/state';
	import { loader } from '$stores/Loader.state.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { FwToastState, FwToast } from '$stores/Toast.state.svelte';
	import { m } from '$paraglide/messages';
	import GlobalModal from '$lib/components/Modal/GlobalModal.svelte';
	import DrawerDashboard from '$lib/components/Drawer/dashboard/DrawerDashboard.svelte';

	let { children } = $props();

	let showLoader = $derived.by(() => {
		return navigating.to || loader.active;
	});

	afterNavigate(() => {
		// Close drawer if active
		closeDrawer();
	});

	function globalKeyHandler(event: KeyboardEvent) {
		// Only fire "L" when neither ⌘ (meta) nor Ctrl is held down
		// if ((event.key === 'l' || event.key === 'L') && (event.metaKey || event.ctrlKey)) {
		// 	event.preventDefault();
		// 	goto(localizeHref('/login'));
		// }

		// "B" always goes back one page
		if ((event.key === 'b' || event.key === 'B') && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			if (browser) {
				window.history.back();
			}
		}

		// "H" goes to homepage
		if ((event.key === 'h' || event.key === 'H') && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			if (browser) {
				goto(localizeHref('/'));
			}
		}
	}

	onMount(() => {
		document.addEventListener('keydown', globalKeyHandler);

		return () => {
			document.removeEventListener('keydown', globalKeyHandler);
		};
	});

	// Check for logout parameter on page changes
	$effect(() => {
		if (page.url.searchParams.has('logged_out')) {
			FwToast.launch(m.logoutMessage(), 'success', 'top');

			// Clean up URL to remove the parameter using SvelteKit's goto
			const url = new URL(page.url);
			url.searchParams.delete('logged_out');
			goto(url.pathname + url.search, { replaceState: true, noScroll: true });
		}
	});

	// If it takes x amount of time, then show the overlay
	let overlayActive = $state(false);
	let timer: ReturnType<typeof setTimeout> | null = null;
	$effect(() => {
		if (showLoader) {
			// Start loader
			overlayActive = false;
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				overlayActive = true;
			}, 10);
			document.body.classList.toggle('no-scroll', true);
		} else {
			// Navigation ended
			document.body.classList.toggle('no-scroll', false);
			if (timer) clearTimeout(timer);
			overlayActive = false;
		}
	});
</script>

{@render children()}

{#if showLoader}
	<div class="loader-wrapper">
		<div class="loader active"></div>

		{#if overlayActive}
			<LoaderCircle
				class="animate__animated animate__rotateOut animate__infinite infinite text-primary relative z-[10000] h-[30px] w-[30px] transition-none"
				strokeWidth={2}
			/>
		{/if}
		<div class="loader-overlay"></div>
	</div>
{/if}

<!-- CMD + K -->
<CommandPalette />

<!-- Used as a mobile menu -->
{#if !deLocalizeHref(page.route.id || '').startsWith('/dashboard')}
	<Drawer />
{:else}
	<DrawerDashboard products={page.data.permissionList} />
{/if}

<!-- Global toast -->
<Toast
	bind:show={FwToastState.active}
	message={FwToastState.message}
	type={FwToastState.type}
	position={FwToastState.position}
/>

<!-- Global modal -->
<GlobalModal />

<!-- Footer -->
{#if !deLocalizeHref(page.route.id || '').startsWith('/dashboard')}
	<Footer />
{/if}

<!-- Back To Top -->
<div>
	<BackToTop />
	<Tools />
</div>
