<script lang="ts">
	import { fly } from 'svelte/transition';
	import { m } from '$paraglide/messages';
	import { Product } from '$types/products.types';
	import Pill from '../Pill.svelte';
	import type { Feature } from '$types/features.types';
	import { Download } from '@lucide/svelte';

	let {
		noPaddingMobile = false,
		featuresList
	}: { noPaddingMobile?: boolean; featuresList: Feature[] } = $props();

	// Reactive state for carousel
	let currentIndex = $state(0);
	let direction = $state(1); // 1 for next, -1 for prev

	// Computed properties using $derived
	let features = $derived(featuresList);
	let isMobile = $state(false);
	let itemsPerPage = $derived(isMobile ? 3 : 6);
	let totalPages = $derived(Math.ceil(features.length / itemsPerPage));
	let canGoPrev = $derived(currentIndex > 0);
	let canGoNext = $derived(currentIndex < totalPages - 1);

	// Navigation functions
	function goToPrev() {
		if (canGoPrev) {
			direction = -1;
			currentIndex--;
		}
	}

	function goToNext() {
		if (canGoNext) {
			direction = 1;
			currentIndex++;
		}
	}

	// Get current page features
	let currentPageFeatures = $derived(
		features.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
	);

	// Swipe handling
	let touchStartX = $state(0);

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;

		// Minimum swipe distance
		if (Math.abs(diff) > 50) {
			if (diff > 0 && canGoNext) {
				direction = 1;
				goToNext();
			} else if (diff < 0 && canGoPrev) {
				direction = -1;
				goToPrev();
			}
		}
	}

	// Check if device is mobile
	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<div class={['max-w-fw mx-auto !pb-5 md:px-10 md:py-10 md:!pb-10', noPaddingMobile ? '' : 'py-10']}>
	<!-- Carousel container -->
	<div
		class="relative"
		ontouchstart={isMobile ? handleTouchStart : undefined}
		ontouchend={isMobile ? handleTouchEnd : undefined}
	>
		<!-- Features container with animation -->
		<div class="grid grid-cols-1 gap-12 overflow-hidden lg:grid-cols-2">
			{#each currentPageFeatures as feature, i}
				<div class="feature-item" in:fly={{ x: direction * 100, opacity: 0, duration: 150 }}>
					<div class="flex-shrink-0">
						{#if !feature.icon}
							<img src={feature.img} alt={`feature-${i + 1}`} />
						{:else}
							<div
								class="bg-primary/10 border-primary flex h-15 w-15 items-center justify-center rounded-full border md:h-22 md:w-22"
							>
								<feature.icon strokeWidth="1" class="text-primary md:h-8 md:w-8" />
							</div>
						{/if}
					</div>
					<div class="feature-item-desc text-left">
						<h3 class="text-base-content relative leading-tight">
							{#if feature.pill}
								<div class="absolute -top-6 -right-1 scale-80 md:-top-3 md:right-5">
									<Pill
										color={feature.pill.color}
										text={feature.pill.text}
										customCss={feature.pill.customCss}
									/>
								</div>
							{/if}
							{@html feature.title}
						</h3>
						<p class="text-secondary leading-tight font-normal">{@html feature.desc}</p>
						{#if feature.button}
							<a
								href={feature.button.href}
								class="btn bg-primary/10 border-primary text-primary hover:bg-primary relative -left-2 mt-3 rounded-full border hover:text-black"
							>
								<Download class="h-3" />
								{feature.button.text}
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Navigation controls for desktop - hidden on mobile -->
		<!-- {#if !isMobile} -->
		<div class="absolute inset-y-0 -top-10 -left-18 flex items-center">
			<button
				class="btn border-primary text-primary btn-circle btn-outline btn-sm md:btn-md hover:bg-primary hover:text-white hover:opacity-100"
				class:hidden={!canGoPrev}
				onclick={goToPrev}
				aria-label="Previous features"
			>
				{'<'}
			</button>
		</div>

		<div class="absolute inset-y-0 -top-10 -right-18 z-50 flex items-center">
			<button
				class="btn border-primary text-primary btn-circle btn-outline btn-sm md:btn-md hover:bg-primary pt-[1px] pl-[1px] hover:text-white hover:opacity-100"
				class:hidden={!canGoNext}
				onclick={goToNext}
				aria-label="Next features"
			>
				{'>'}
			</button>
		</div>
		<!-- {/if} -->

		<!-- Pagination dots -->
		{#if totalPages > 1}
			<div class="mt-8 flex justify-center space-x-2">
				{#each Array(totalPages) as _, i}
					<button
						class="h-3 w-3 rounded-full transition-all duration-300"
						class:bg-primary={i === currentIndex}
						class:bg-base-300={i !== currentIndex}
						onclick={() => (currentIndex = i)}
						aria-label={`Go to page ${i + 1}`}
					></button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.feature-item {
		@apply flex items-center space-x-6;
	}
	.feature-item-desc {
		@apply flex-1;
	}
	.feature-item-desc h3 {
		@apply mb-1 font-sans text-[18px] font-black md:mb-0 md:text-[22px];
	}
	.feature-item-desc p {
		@apply font-sans text-sm md:text-base;
	}
	.feature-item > div > img {
		@apply aspect-square h-[60px] md:h-[90px];
	}
</style>
