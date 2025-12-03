<script>
	// Desktop images
	const topRowImages = [
		{ src: '/products/store/carrousel/agentefaz-desktop.png', alt: 'Brand 1' },
		{ src: '/products/store/carrousel/braaay-store.png', alt: 'Braaay.com' },
		{ src: '/products/store/carrousel/screen-cap.png', alt: 'Brand 4' },
		{ src: '/products/store/carrousel/screen-cap-2.png', alt: 'Brand 5' },
		{ src: '/products/store/carrousel/e-commerce-2.png', alt: 'Minimo' }
	];

	const bottomRowImages = [
		{ src: '/products/store/carrousel/viiv-pay-3.png', alt: 'ViiVPay' },
		{ src: '/products/store/carrousel/love-in-a-box.png', alt: 'LoveInABox' },
		{ src: '/products/store/carrousel/hops.png', alt: 'Hops' },
		{ src: '/products/store/carrousel/betizen.png', alt: 'Betizen' },
		{ src: '/products/store/carrousel/ln-beer-app.png', alt: 'LnBeer' }
	];

	// Mobile images (vertical)
	const topRowImagesMobile = [
		{ src: '/products/store/carrousel/mobile-viivpay.png', alt: 'ViiVPay-Mobile' },
		{ src: '/products/store/carrousel/mobile-ln-beer-app.png', alt: 'Ln-Beer-App' },
		{ src: '/products/store/carrousel/loveinabox-app.png', alt: 'Brand 6 Mobile' },

		{ src: '/products/store/carrousel/mobile-atelier.png', alt: 'Brand 4 Mobile' }
		// { src: 'https://picsum.photos/429/927?random=15', alt: 'Brand 5 Mobile' }
	];

	const bottomRowImagesMobile = [
		{ src: '/products/store/carrousel/mobile-atelier.png', alt: 'Brand 4 Mobile' },
		{ src: '/products/store/carrousel/mobile-hops-app.png', alt: 'Brand 8 Mobile' },
		// { src: '/products/store/carrousel/mobile-agentefaz.png', alt: 'AGenteFaz' },

		{ src: '/products/store/carrousel/mobile-betizen.png', alt: 'Brand 7 Mobile' },

		{ src: '/products/store/carrousel/mobile-agentefaz.png', alt: 'AGenteFaz' }

		// { src: 'https://picsum.photos/429/927?random=19', alt: 'Brand 9 Mobile' }
		// { src: 'https://picsum.photos/429/927?random=20', alt: 'Brand 10 Mobile' }
	];
</script>

<div class="relative w-full overflow-hidden pt-12 pb-16">
	<!-- Title -->
	<h2 class="text-base-content mx-10 mb-10 text-center text-3xl font-bold md:mx-0 md:text-4xl">
		E-Commerce Sob Medida<br class="hidden md:flex" /> É Diferente
	</h2>

	<!-- Top Row - Moving Right -->
	<div class="relative mb-6">
		<!-- Desktop version -->
		<div class="animate-scroll-right hidden gap-6 md:flex">
			{#each [...topRowImages, ...topRowImages] as image}
				<div class="h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl">
					<img src={image.src} alt={image.alt} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
		<!-- Mobile version -->
		<div class="animate-scroll-right flex gap-6 md:hidden">
			{#each [...topRowImagesMobile, ...topRowImagesMobile] as image}
				<div class="h-[324px] w-[150px] flex-shrink-0 overflow-hidden rounded-2xl shadow-xl">
					<img src={image.src} alt={image.alt} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom Row - Moving Left -->
	<div class="relative">
		<!-- Desktop version -->
		<div class="animate-scroll-left hidden gap-6 md:flex">
			{#each [...bottomRowImages, ...bottomRowImages] as image}
				<div class="h-56 w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl">
					<img src={image.src} alt={image.alt} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
		<!-- Mobile version -->
		<div class="animate-scroll-left flex gap-6 md:hidden">
			{#each [...bottomRowImagesMobile, ...bottomRowImagesMobile] as image}
				<div class="h-[324px] w-[150px] flex-shrink-0 overflow-hidden rounded-2xl shadow-xl">
					<img src={image.src} alt={image.alt} class="h-full w-full object-cover" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Overlays nas laterais -->
	<div
		class="from-base-100 pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r to-transparent"
	></div>
	<div
		class="from-base-100 pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l to-transparent"
	></div>
</div>

<style>
	@keyframes scroll-right {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0);
		}
	}

	.animate-scroll-right {
		animation: scroll-right 50s linear infinite;
	}

	.animate-scroll-left {
		animation: scroll-left 50s linear infinite;
	}

	/* Faster animation on mobile */
	@media (max-width: 768px) {
		.animate-scroll-right {
			animation: scroll-right 15s linear infinite;
		}

		.animate-scroll-left {
			animation: scroll-left 15s linear infinite;
		}
	}

	/* Pause animation on hover */
	.animate-scroll-right:hover,
	.animate-scroll-left:hover {
		/* animation-play-state: paused; */
	}
</style>
