<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { ChevronUp } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { scale, fly } from 'svelte/transition';

	let showButton = $state(false);
	let scrollY = $state(0);

	// Show button when user scrolls down 300px
	$effect(() => {
		showButton = scrollY > 300;
	});

	onMount(() => {
		const updateScrollY = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', updateScrollY);

		return () => {
			window.removeEventListener('scroll', updateScrollY);
		};
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		if (page.route.id === '/') {
			const scrollEndListener = () => {
				goto('.');
				window.removeEventListener('scrollend', scrollEndListener);
			};
			window.addEventListener('scrollend', scrollEndListener);
		}
	}
</script>

<svelte:window bind:scrollY />

{#if showButton}
	<button
		onclick={scrollToTop}
		class="bg-primary hover:bg-primary-700 active:bg-primary-800 fixed right-(--cubiq-app-margin) bottom-18 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:translate-y-0 sm:bottom-4 sm:h-10 sm:w-10 md:right-8 md:bottom-22 md:h-12 md:w-12"
		aria-label="Back to top"
		title="Back to top"
		in:fly={{ y: 100, duration: 300 }}
		out:scale={{ duration: 200 }}
	>
		<ChevronUp />
	</button>
{/if}
