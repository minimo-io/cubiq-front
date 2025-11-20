<script lang="ts">
	import DashboardImages from '../DashboardImages.svelte';
	import Hr from '../Hr.svelte';
	import { m } from '$paraglide/messages';
	import TransparentButton from '../Buttons/TransparentButton.svelte';
	import { localizeHref } from '$paraglide/runtime';

	let { image, title, description }: { image?: string; title?: string; description?: string } =
		$props();

	const simpleFeatures = [
		m.payPerUseFeatureTransparent(),
		m.payPerUseFeatureCustom(),
		m.payPerUseFeatureVolume(),
		m.payPerUseFeatureOnline()
	];

	const mobileFeatures = [
		m.payPerUseFeatureCustom(),
		m.payPerUseFeatureVolume(),
		m.payPerUseFeatureOnline()
	];

	const advancedFeatures = [
		m.payPerUseFeatureTransparentDashboard(),
		m.payPerUseFeatureRemoteEmergency(),
		m.payPerUseFeatureCostControl()
	];
</script>

<div
	class="border-base-200 relative mx-(--cubiq-app-margin) mt-7 flex flex-1 flex-col items-center justify-center md:mt-0 md:flex-row"
>
	<Hr bottom={false} />

	<div class="relative scale-110 md:scale-90 lg:top-7 2xl:-right-32">
		<DashboardImages {image} />
	</div>

	<div
		class="border-base-200 flex w-full flex-col justify-center text-center
		       after:absolute after:right-[48%] md:after:top-10 md:after:right-[49.4%]
		       md:after:content-['']"
	>
		<div class="max-w-fw mx-auto w-full pb-1 md:pt-10">
			<h2 class="font-sans text-2xl font-bold uppercase md:text-3xl">
				{#if !title}
					{m.payPerUseTitle()}
				{:else}
					{title}
				{/if}
			</h2>
			<p class="text-secondary mx-auto mt-3 w-full font-sans text-base md:w-[70%] md:text-xl">
				{#if !description}
					{@html m.payPerUseDescription()}
				{:else}
					{description}
				{/if}
			</p>
		</div>

		<div
			class="max-w-fw mx-auto mt-5 mb-5 flex flex-col justify-start gap-5
			       md:mb-10 md:flex-row md:justify-around md:gap-20"
		>
			<!-- Container escuro -->
			<div class="max-w-xs flex-1">
				<div
					class="mt-3 mb-5 flex scale-80 items-baseline justify-center space-x-2 md:my-5
					       md:scale-90 md:justify-start"
				>
					<span class="self-start font-sans text-xl font-medium">
						{m.payPerUsePriceCurrency()}
					</span>
					<span class="font-sans text-5xl font-bold md:text-6xl">
						{m.payPerUsePriceAmount()}
					</span>
					<span class="text-secondary self-center font-sans text-3xl font-medium">
						{m.payPerUsePriceUnit()}
					</span>
				</div>
				<ul class="text-base-content mt-9 ml-7 hidden font-sans text-base md:block">
					{#each simpleFeatures as feat}
						<li>{feat}</li>
					{/each}
				</ul>
				<!-- <TransparentButton href={localizeHref('/soon')}>{m.startNow()}</TransparentButton> -->
			</div>

			<!-- Container claro -->
			<div class="border-base-200 flex max-w-xs flex-1 items-center justify-center md:border-t-0">
				<ul class="text-secondary space-y-[10px] text-left font-sans text-lg md:mt-6">
					{#each mobileFeatures as feat}
						<li class="block md:hidden">{feat}</li>
					{/each}

					{#each advancedFeatures as feat}
						<li>{@html feat}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div
			class="border-r-base-200 absolute -bottom-[1px] left-1/2 hidden
			       h-[100px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	li {
		@apply text-lg;
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
