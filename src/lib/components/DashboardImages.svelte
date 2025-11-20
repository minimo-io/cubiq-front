<script lang="ts">
	import { localizeHref } from '$paraglide/runtime';
	import PillFlower from './PillFlower.svelte';

	let { image = '/pulse-dashboard.png' } = $props();
</script>

<!-- Dashboard images -->
<div class="mt-16 mb-5 flex flex-col justify-center md:mt-10 md:mb-20">
	<div class="relative -top-2 z-20 mx-auto scale-80 md:-top-6 md:scale-90">
		<PillFlower title="Dashboards" />
	</div>
	<div class="relative mt-5">
		<div class="absolute bottom-0 left-0">&nbsp;</div>
		<a href={localizeHref('/login')} class="dashboard-link">
			<img
				src={image}
				alt="pulse-dashboard"
				class="dashboard-img relative -top-[40px] z-10 mx-auto w-full scale-105 rounded-4xl border border-[#181818] md:w-[85%] md:scale-110"
			/>
		</a>
	</div>
</div>

<style>
	.dashboard-link {
		display: block;
		perspective: 1000px;
	}

	.dashboard-link .dashboard-img {
		transform: rotateY(15deg);
		transition: transform 0.7s ease-out;
	}

	.dashboard-link:hover .dashboard-img {
		transform: rotateY(0deg) scale(1);
	}

	@media (min-width: 768px) {
		.dashboard-link .dashboard-img {
			transform: rotateY(10deg) scale(1);
		}

		.dashboard-link:hover .dashboard-img {
			transform: rotateY(0deg) scale(1);
		}
	}
</style>
