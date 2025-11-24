<script>
	import Hr from '../Hr.svelte';
	import * as m from '$paraglide/messages';
</script>

<div
	class="border-base-200 relative mx-(--cubiq-app-margin) flex flex-1 items-center justify-center border-t"
>
	<div
		class="border-base-200 flex w-full flex-col justify-center text-center after:absolute after:right-[48%] md:after:top-10 md:after:right-[49.4%] md:after:content-['']"
	>
		<div id="more" class="max-w-fw mx-auto w-full pt-10 pb-1">
			<!-- <h2 class="mx-auto w-[90%] font-sans text-2xl font-semibold md:w-1/2 md:text-3xl">
				{m.finxPayMainTitle()}
			</h2>
			<p class="text-secondary mx-auto mt-3 w-full font-sans text-xl md:w-[70%] md:text-2xl">
				{m.finxPayMainSubtitle()}
			</p> -->
			<h2 class="mx-auto w-[90%] font-sans text-2xl font-semibold md:w-2/3 md:text-3xl">
				{m.finxPayMainSubtitle()}
			</h2>
		</div>

		<!-- Divider -->
		<div class="mx-auto w-fit">
			<img src="/bgs/square-divider.svg" alt="divider" class="relative left-5 mt-3 w-[70%]" />
		</div>

		<div class="max-w-fw relative mx-auto w-full pt-5 pb-1">
			<Hr />
			<h2 class="mx-auto w-[90%] font-sans text-2xl font-semibold">
				{m.finxPayExampleTitle()}
			</h2>
			<p class="text-secondary mx-auto mt-2 w-full font-sans text-xl md:w-[70%]">
				{m.finxPayExampleSubtitle()}
			</p>
			<ol class="text-secondary mx-auto my-5 w-[90%] font-sans text-xl md:w-1/2">
				<li>{m.finxPayExampleStep1()}</li>
				<li>{m.finxPayExampleStep2()}</li>
				<li>{m.finxPayExampleStep3()}</li>
			</ol>
		</div>

		<div
			class="fw-promo-li max-w-fw mx-auto mt-5 mb-5 flex flex-col justify-start gap-5 md:mb-10 md:flex-row md:justify-around md:gap-20"
		>
			<Hr />
			<div class="border-base-200 max-w-fw flex flex-1 items-center justify-center md:border-t-0">
				<ul class="text-secondary space-y-[10px] pt-5 text-left font-sans text-lg md:mt-6 md:pt-0">
					<li>{m.finxPayFeature1()}</li>
					<li>{m.finxPayFeature2()}</li>
					<li>{m.finxPayFeature3()}</li>
					<li>{m.finxPayFeature4()}</li>
					<li>{m.finxPayFeature5()}</li>
					<li>{m.finxPayFeature6()}</li>
					<li class="block md:hidden">{m.finxPayFeature7()}</li>
					<li class="block md:hidden">{m.finxPayFeature8()}</li>
				</ul>
			</div>
			<div class="border-base-200 max-w-fw flex-1 items-center justify-center md:flex">
				<ul
					class="text-secondary hidden space-y-[10px] pt-5 text-left font-sans text-lg md:mt-6 md:block md:pt-0"
				>
					<li>{m.finxPayFeature7()}</li>
					<li>{m.finxPayFeature9()}</li>
					<li>{m.finxPayFeature10()}</li>
					<li>{m.finxPayFeature8()}</li>
					<li>{m.finxPayFeature11()}</li>
					<li>{m.finxPayFeature12()}</li>
				</ul>
			</div>
		</div>
		<div
			class="border-r-base-200 absolute -bottom-[1px] left-1/2 hidden h-[130px] w-[1px] -translate-x-1/2 transform border-r md:block"
		></div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.fw-promo-li li {
		@apply relative my-3 pl-6 text-left font-sans text-[#8a8a8a] before:absolute before:left-0 before:text-xl before:text-green-500 before:content-['✓'];
	}
</style>
