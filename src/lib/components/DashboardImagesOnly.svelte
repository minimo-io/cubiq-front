<!-- src/lib/components/DashboardImagesOnly.svelte -->
<script lang="ts">
	import type { DashboardImageType } from '$types/dashboardImages.types';
	import { fade } from 'svelte/transition';

	let { images, noMargins }: { images: DashboardImageType[]; noMargins?: boolean } = $props();

	let currentIndex = $state(0);
	let intervalId;

	// Touch/swipe state - NOT reactive
	let touchStartX = 0;
	let touchEndX = 0;

	function startAutoScroll() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 4000);
	}

	$effect(() => {
		startAutoScroll();
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function goToImage(index: number) {
		currentIndex = index;
		startAutoScroll();
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		console.log('Touch start:', touchStartX);
		// Pause auto-scroll while touching
		if (intervalId) clearInterval(intervalId);
	}

	function handleTouchMove(e: TouchEvent) {
		touchEndX = e.touches[0].clientX;
	}

	function handleTouchEnd() {
		console.log('Touch end:', touchEndX, 'Start was:', touchStartX);
		const swipeThreshold = 50; // minimum distance for a swipe
		const diff = touchStartX - touchEndX;
		console.log('Diff:', diff, 'Current index:', currentIndex);

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				// Swiped left - go to next image
				console.log('Swiping to next');
				currentIndex = (currentIndex + 1) % images.length;
			} else {
				// Swiped right - go to previous image
				console.log('Swiping to previous');
				currentIndex = (currentIndex - 1 + images.length) % images.length;
			}
		}

		console.log('New index:', currentIndex);

		// Reset for next swipe
		touchStartX = 0;
		touchEndX = 0;

		// Restart auto-scroll after swipe
		startAutoScroll();
	}
</script>

<div
	class={[
		'dark:ring-base-200 ring-base-300 rounded-2xl bg-black p-2 ring-1 ring-inset md:mx-0 dark:bg-black',
		noMargins ? '' : 'mx-3 mt-5'
	]}
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
>
	<div
		class="dark:ring-base-300 ring-base-300 relative isolate rounded-xl bg-black ring-1 dark:bg-slate-950"
	>
		<div
			class="relative grid touch-pan-y overflow-hidden rounded-xl"
			style="-webkit-mask-image: -webkit-radial-gradient(white, black);"
			role="region"
			aria-label="Image carousel"
		>
			{#each images as image, index (index)}
				{#if index === currentIndex}
					<img
						transition:fade={{ duration: 500 }}
						alt={image.alt}
						loading="lazy"
						width="3024"
						height="1628"
						decoding="async"
						src={image.src}
						class={[
							'col-start-1 row-start-1 rounded-2xl!',
							// Ensure max-width is handled to prevent horizontal overflow
							'h-[500px] w-full object-cover md:h-auto md:w-full md:object-contain',
							image.object === 'center' && 'object-center',
							image.object === 'right' && 'object-right',
							image.object === 'left' && 'object-left'
						]}
						style="color: transparent; user-select: none;"
						draggable="false"
					/>
				{/if}
			{/each}
		</div>
	</div>
	<div
		class="absolute inset-x-0 bottom-0 z-10 h-[60%] bg-gradient-to-t from-black via-transparent md:hidden"
		aria-hidden="true"
	></div>
	<div
		class="absolute bottom-3 left-10 z-50 mt-4 flex justify-start gap-2 pb-2 md:bottom-5 md:left-10"
	>
		{#each images as _, index}
			<button
				onclick={() => goToImage(index)}
				class="h-3 w-3 rounded-full transition-all {index === currentIndex
					? 'bg-primary w-8'
					: 'bg-gray-400 hover:bg-gray-300'}"
				aria-label="Go to image {index + 1}"
			></button>
		{/each}
	</div>
</div>
