<script>
	import { fade } from 'svelte/transition';

	const images = [
		{
			src: '/products/pay/cubiq-pay.webp',
			alt: 'A screenshot of the Cubiq dashboard',
			object: 'center'
		},
		{
			src: '/products/pay/cubiq-pay-dashboard.webp',
			alt: 'A screenshot of the Cubiq Pay dashboard',
			object: 'left'
		},
		{
			src: '/products/pay/cubiq-pay-dashboard-2.webp',
			alt: 'A screenshot of the Cubiq Pay dashboard',
			object: 'right'
		}
	];

	let currentIndex = $state(0);
	let intervalId;

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

	function goToImage(index) {
		currentIndex = index;
		startAutoScroll();
	}
</script>

<div
	class="dark:ring-base-200 ring-base-300 mx-3 mt-5 rounded-2xl bg-black p-2 ring-1 ring-inset md:mx-0 dark:bg-black"
>
	<div
		class="dark:ring-base-300 ring-base-300 relative isolate rounded-xl bg-black ring-1 dark:bg-slate-950"
	>
		<div
			class="relative grid overflow-hidden rounded-xl"
			style="-webkit-mask-image: -webkit-radial-gradient(white, black);"
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
						style="color: transparent;"
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
