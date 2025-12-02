<script lang="ts">
	import { fly } from 'svelte/transition';
	import { m } from '$paraglide/messages';
	import { Product } from '$types/products.types';
	import Pill from '../Pill.svelte';
	import type { Feature } from '$types/features.types';
	import { Download, ChevronDown, ChevronUp } from '@lucide/svelte';

	let {
		noPaddingMobile = false,
		featuresList
	}: { noPaddingMobile?: boolean; featuresList: Feature[] } = $props();

	// Reactive state for carousel
	let currentIndex = $state(0);
	let direction = $state(1); // 1 for next, -1 for prev

	// Track expanded state for each feature
	let expandedFeatures = $state<Set<number>>(new Set());

	// Track content heights for smooth transitions
	let contentHeights = $state<Map<number, number>>(new Map());

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

	// Toggle expand/collapse for a feature
	function toggleExpand(index: number) {
		const newExpanded = new Set(expandedFeatures);
		if (newExpanded.has(index)) {
			newExpanded.delete(index);
		} else {
			newExpanded.add(index);
		}
		expandedFeatures = newExpanded;
	}

	// Measure content height for transitions
	function measureHeight(node: HTMLElement, index: number) {
		const height = node.scrollHeight;
		const newHeights = new Map(contentHeights);
		newHeights.set(index, height);
		contentHeights = newHeights;

		return {
			destroy() {}
		};
	}

	// Check if text needs truncation (more than ~150 characters or 3 lines worth)
	function needsTruncation(text: string): boolean {
		// Remove HTML tags for length calculation
		const plainText = text.replace(/<[^>]*>/g, '');
		return plainText.length > 150;
	}

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
		<div class="grid grid-cols-1 gap-1 overflow-hidden md:gap-5 lg:grid-cols-2">
			{#each currentPageFeatures as feature, i}
				{@const globalIndex = currentIndex * itemsPerPage + i}
				{@const isExpanded = expandedFeatures.has(globalIndex)}
				{@const showExpandButton = needsTruncation(feature.desc)}

				<div
					class={[
						'feature-item',
						feature.button && 'border-primary/50 mt-5 rounded-xl border px-2 pt-6 pb-3 md:mt-0'
					]}
					in:fly={{ x: direction * 100, opacity: 0, duration: 150 }}
				>
					<div class="flex-shrink-0">
						{#if !feature.icon}
							<img src={feature.img} alt={`feature-${i + 1}`} />
						{:else if !feature.button}
							<div
								class="bg-primary/10 border-primary flex h-13 w-13 items-center justify-center rounded-full border md:h-22 md:w-22"
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
						<div class="relative">
							<div class="relative mb-2">
								<div
									class="expandable-wrapper"
									style:height={isExpanded
										? (contentHeights.get(globalIndex) || 200) + 'px'
										: '4.0rem'}
								>
									<p
										use:measureHeight={globalIndex}
										class="text-secondary leading-tight font-normal"
									>
										{@html feature.desc}
									</p>
								</div>

								{#if showExpandButton && !isExpanded}
									<div
										class="from-base-100 via-base-100/90 pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t to-transparent"
									></div>
								{/if}
							</div>

							{#if showExpandButton}
								<div
									class={[
										'relative flex flex-row items-center gap-3',
										showExpandButton && feature.button ? '-top-4' : '-top-7 md:-top-5 ',
										isExpanded && !feature.button && 'pt-6 md:mt-2',
										feature.button && isExpanded && 'mt-8'
									]}
								>
									<!-- Read more/less buttons -->
									<button
										onclick={() => toggleExpand(globalIndex)}
										class={[
											'text-primary hover:text-primary/80 relative flex items-center gap-1 text-sm font-medium transition-colors'
										]}
									>
										{isExpanded ? m.showLess() : m.readMore()}
										{#if isExpanded}
											<ChevronUp class="h-4 w-4" />
										{:else}
											<ChevronDown class="h-4 w-4" />
										{/if}
									</button>

									<!-- Featured button -->
									{#if feature.button}
										<a
											href={feature.button.href}
											class="btn btn-xs bg-primary/10 border-primary text-primary hover:bg-primary relative mt-0 rounded-full border hover:text-black"
										>
											<Download class="h-3" />
											{feature.button.text}
										</a>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Navigation controls -->
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

	.expandable-wrapper {
		overflow: hidden;
		transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
