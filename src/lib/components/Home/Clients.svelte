<script lang="ts">
	import PillFlower from '../PillFlower.svelte';
	import { m } from '$paraglide/messages';
	import Hr from '../Hr.svelte';
	import { onMount } from 'svelte';

	// Configurable animation speeds (in seconds)
	let desktopSpeed = $state(30);
	let mobileSpeed = $state(20);
	let { addDesktopPadding = false }: { addDesktopPadding?: boolean } = $props();

	let marqueeContainer: HTMLDivElement;

	const clients = [
		{
			href: 'https://media.toxtren.com/redirect.aspx?pid=101348&bid=2036&redirectURL=https://natregs.com',
			src: '/clients/national-logo.svg',
			alt: 'National Casino',
			height: 'h-[53px] pb-1',
			opacity: 'opacity-50'
		},
		{
			href: '#',
			src: '/clients/vientosur-logo.svg',
			alt: 'VientoSur',
			height: 'h-[38px] mt-0',
			opacity: 'opacity-100'
		},
		{
			href: 'https://agentefaz.net',
			src: '/clients/agf-color.png',
			alt: 'AGF',
			height: 'h-[40px]',
			opacity: 'opacity-55'
		},
		{
			href: '#',
			src: '/clients/whitemedia-logo.png',
			alt: 'Whitemedia',
			height: 'h-[25px]',
			opacity: 'opacity-55'
		},
		{
			href: 'https://braaay.com',
			src: '/clients/braaay-logo-new.svg',
			alt: 'Braaay',
			height: 'h-[32px] mt-1',
			opacity: 'opacity-90'
		},

		{
			href: 'https://dribbble.com/shots/19431388-Hops-v2-Craft-Beer-Marketplace',
			src: '/clients/hops-logo.svg',
			alt: 'Hops',
			height: 'h-[32px]',
			opacity: 'opacity-45'
		},
		{
			href: 'https://betizen.org',
			src: '/clients/betizen-logo.svg',
			alt: 'Betizen',
			height: 'h-[45px] pb-1',
			opacity: 'opacity-40'
		},
		{
			href: 'https://www.figma.com/design/3OLTGWFRbMPiQb9Pvv5MgM/Cubiq?node-id=0-1&t=9EVTXyT9tkLx6Rj9-1',
			src: '/clients/viivpay-logo.png',
			alt: 'ViivPay',
			height: 'h-[35px] mt-2',
			opacity: 'opacity-40'
		}
	];

	let duplicateCount = $state(4); // Start with 2 sets

	onMount(() => {
		if (!marqueeContainer) return;

		// Calculate how many duplicate sets we need based on speed and container width
		const containerWidth = marqueeContainer.offsetWidth;
		const isMobile = window.innerWidth < 768;
		const currentSpeed = isMobile ? mobileSpeed : desktopSpeed;

		// For faster speeds, we need more duplicate sets to maintain the infinite illusion
		// The faster the speed, the more sets we need so there's always content entering from the right
		if (currentSpeed <= 10) {
			duplicateCount = 6; // Very fast
		} else if (currentSpeed <= 20) {
			duplicateCount = 4; // Fast
		} else if (currentSpeed <= 30) {
			duplicateCount = 3; // Medium
		} else {
			duplicateCount = 2; // Slow
		}

		// Force reactivity update
		duplicateCount = duplicateCount;
	});
</script>

<section class="relative mt-7 pb-5 md:mt-0 md:px-12 lg:px-16">
	<!-- Decorative dot -->
	<Hr />

	<!-- <div class="-top-3 scale-110 text-center md:scale-90">
		<PillFlower title={m.menuClients()} />
	</div> -->

	<div class="relative mt-8 mb-1 md:mx-auto {addDesktopPadding ? '-top-[5px]' : ''}">
		<!-- Marquee container -->
		<div class="relative scale-90 overflow-hidden md:scale-100" bind:this={marqueeContainer}>
			<div
				class="marquee-container"
				style="--desktop-speed: {desktopSpeed}s; --mobile-speed: {mobileSpeed}s; --duplicate-count: {duplicateCount};"
			>
				{#each Array(duplicateCount) as _, setIndex}
					<div class="marquee-content">
						{#each clients as client}
							<a href={client.href} rel="nofollow noopener" target="_blank" class="marquee-item">
								<div class="flex flex-col justify-center">
									<img
										src={client.src}
										class="{client.height} {client.opacity} grayscale-100 hover:grayscale-0"
										alt={client.alt}
									/>
								</div>
							</a>
						{/each}
					</div>
				{/each}
			</div>

			<!-- Blur overlays -->
			<div class="pointer-events-none absolute inset-0 z-10">
				<div
					class="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent md:w-80"
				></div>
				<div
					class="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent md:w-80"
				></div>
			</div>
		</div>

		<!-- Decorative element -->
		<div class="absolute -top-[50%] right-[10%] hidden scale-40 opacity-70 md:block">
			<img src="/bgs/cross.svg" alt="cross" />
		</div>
	</div>
</section>

<style>
	.marquee-container {
		display: flex;
		width: max-content;
		animation: marquee var(--mobile-speed, 20s) linear infinite;
	}

	.marquee-content {
		display: flex;
		flex-shrink: 0;
	}

	.marquee-item {
		margin: 0 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-100% / var(--duplicate-count, 2)));
		}
	}

	/* Desktop speed */
	@media (min-width: 768px) {
		.marquee-container {
			animation-duration: var(--desktop-speed, 40s);
		}
	}

	/* Pause animation on hover */
	.marquee-container:hover {
		animation-play-state: paused;
	}
</style>
